#!/usr/bin/env bash
# gen-image.sh — 用火山方舟 Doubao-Seedream-5.0-lite 给 jinko-rebuild 站点出图
#
# 用法：
#   ./scripts/gen-image.sh <output-path> "<prompt>" [size]
#
# 示例：
#   ./scripts/gen-image.sh public/products/eagle-g7.jpg "ultra realistic photo of a single Jinko EAGLE solar module on white studio background, product photography, soft lighting" 2048x2048
#   ./scripts/gen-image.sh public/news/topcon-explainer.jpg "diagram-style illustration of TOPCon solar cell technology, blue and yellow, clean, technical"
#
# 必须环境变量：
#   ARK_IMAGE_KEY    火山方舟图像 API key（默认从 ~/.openclaw/.ark-image-key 读取）
#
# 限制：
#   - 图片尺寸至少 1920x1920（≥3,686,400 像素）
#   - 输出 jpeg
#   - 默认 2048x2048

set -euo pipefail

# ===== 配置 =====
ARK_ENDPOINT="https://ark.cn-beijing.volces.com/api/v3/images/generations"
MODEL="doubao-seedream-5-0-260128"
DEFAULT_SIZE="2048x2048"
KEY_FILE="${HOME}/.openclaw/.ark-image-key"

# ===== 读 key =====
if [[ -z "${ARK_IMAGE_KEY:-}" ]]; then
  if [[ -f "$KEY_FILE" ]]; then
    ARK_IMAGE_KEY=$(tr -d '\n\r ' < "$KEY_FILE")
  else
    echo "❌ 未找到 ARK_IMAGE_KEY 环境变量，也未找到 $KEY_FILE" >&2
    echo "   请运行：echo 'ark-xxxxx' > $KEY_FILE && chmod 600 $KEY_FILE" >&2
    exit 1
  fi
fi

# ===== 参数 =====
if [[ $# -lt 2 ]]; then
  echo "用法: $0 <output-path> \"<prompt>\" [size]" >&2
  echo "示例: $0 public/products/eagle-g7.jpg \"a solar panel\" 2048x2048" >&2
  exit 1
fi

OUT_PATH="$1"
PROMPT="$2"
SIZE="${3:-$DEFAULT_SIZE}"

# 确认像素够大
WIDTH=$(echo "$SIZE" | cut -dx -f1)
HEIGHT=$(echo "$SIZE" | cut -dx -f2)
PIXELS=$((WIDTH * HEIGHT))
if [[ $PIXELS -lt 3686400 ]]; then
  echo "❌ size 太小（$SIZE = $PIXELS 像素），Seedream 5.0 要求至少 3,686,400 像素（≥1920x1920）" >&2
  exit 1
fi

# ===== 调 API =====
echo "🎨 生成中... model=$MODEL size=$SIZE" >&2
echo "   prompt: $PROMPT" >&2

REQ_JSON=$(jq -nc \
  --arg model "$MODEL" \
  --arg prompt "$PROMPT" \
  --arg size "$SIZE" \
  '{model: $model, prompt: $prompt, size: $size, n: 1, response_format: "url"}')

RESP=$(curl -s --max-time 120 "$ARK_ENDPOINT" \
  -H "Authorization: Bearer $ARK_IMAGE_KEY" \
  -H "Content-Type: application/json" \
  -d "$REQ_JSON")

# 检查错误
if echo "$RESP" | jq -e '.error' >/dev/null 2>&1; then
  echo "❌ API 错误：" >&2
  echo "$RESP" | jq '.error' >&2
  exit 1
fi

IMAGE_URL=$(echo "$RESP" | jq -r '.data[0].url')
if [[ -z "$IMAGE_URL" || "$IMAGE_URL" == "null" ]]; then
  echo "❌ 未返回图像 URL：" >&2
  echo "$RESP" >&2
  exit 1
fi

# ===== 下载 =====
mkdir -p "$(dirname "$OUT_PATH")"
echo "⬇️  下载到 $OUT_PATH" >&2
curl -s -o "$OUT_PATH" "$IMAGE_URL"

if [[ ! -s "$OUT_PATH" ]]; then
  echo "❌ 下载失败" >&2
  exit 1
fi

SIZE_KB=$(du -k "$OUT_PATH" | cut -f1)
echo "✅ 完成：$OUT_PATH (${SIZE_KB}KB)" >&2
echo "$OUT_PATH"
