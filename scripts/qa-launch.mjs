#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
let failures = 0;
let warnings = 0;

function log(message = '') { console.log(message); }
function pass(message) { console.log(`✅ ${message}`); }
function warn(message) { warnings += 1; console.warn(`⚠️  ${message}`); }
function fail(message) { failures += 1; console.error(`❌ ${message}`); }
function section(title) { log(`\n## ${title}`); }
function read(path) { return readFileSync(join(root, path), 'utf8'); }
function exists(path) { return existsSync(join(root, path)); }
function walk(dir, acc = []) {
  const abs = join(root, dir);
  if (!existsSync(abs)) return acc;
  for (const name of readdirSync(abs)) {
    const full = join(abs, name);
    const rel = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(rel, acc);
    else acc.push(rel);
  }
  return acc;
}
function assertExists(path, label = path) {
  if (exists(path)) pass(`${label} exists`);
  else fail(`${label} missing: ${path}`);
}
function assertContains(path, needle, label) {
  if (!exists(path)) return fail(`${label} missing file: ${path}`);
  const text = read(path);
  if (text.includes(needle)) pass(label);
  else fail(`${label} missing '${needle}' in ${path}`);
}
function grepFiles(paths, regex) {
  const out = [];
  for (const path of paths) {
    if (!exists(path)) continue;
    const text = read(path);
    const lines = text.split(/\r?\n/);
    lines.forEach((line, i) => { if (regex.test(line)) out.push(`${path}:${i + 1}:${line}`); });
  }
  return out;
}
function collectTextFiles(dir, exts) {
  return walk(dir).filter(p => exts.some(ext => p.endsWith(ext)));
}
function run(command, args, label) {
  try {
    execFileSync(command, args, { cwd: root, stdio: 'inherit' });
    pass(label);
    return true;
  } catch (error) {
    fail(label);
    return false;
  }
}

section('Build');
run('npm', ['run', 'build'], 'npm run build passed');

section('Critical generated pages');
const pages = [
  'dist/index.html',
  'dist/products/index.html',
  'dist/products/580w-n-type-solar-module/index.html',
  'dist/solutions/index.html',
  'dist/solutions/12kw-grid-tied-solar-storage-system/index.html',
  'dist/applications/index.html',
  'dist/resources/index.html',
  'dist/resources/blog/index.html',
  'dist/resources/downloads/index.html',
  'dist/resources/faq/index.html',
  'dist/resources/videos/index.html',
  'dist/cases/index.html',
  'dist/support/index.html',
  'dist/about/index.html',
  'dist/contact/index.html',
  'dist/landing/solar-distributor/index.html',
  'dist/pages/oem-solar-panels/index.html',
  'dist/search/index.html',
  'dist/robots.txt',
  'dist/sitemap-index.xml',
];
pages.forEach(p => assertExists(p));

section('Legacy brand cleanup');
const publicDistFiles = collectTextFiles('dist', ['.html', '.xml', '.txt']).filter(p => !p.includes('pagefind/'));
const legacyRoutePrefixes = ['dist/eagle-modules/', 'dist/eagle-storage/', 'dist/homeowners/', 'dist/installer-finder/', 'dist/jacksonville/', 'dist/tiger-neo/', 'dist/warranty/', 'dist/case-studies/', 'dist/news/', 'dist/es/', 'dist/zh/'];
const customerFacingDistFiles = publicDistFiles.filter(p => !legacyRoutePrefixes.some(prefix => p.startsWith(prefix)) && p !== 'dist/robots.txt');
const hardLegacyRegex = /\b(Jinkosolar|EAGLE|Tiger|NYSE|Jacksonville)\b/i;
const hardLegacyHits = grepFiles(customerFacingDistFiles, hardLegacyRegex);
if (hardLegacyHits.length) {
  fail(`hard legacy brand terms found in public dist (${hardLegacyHits.length})`);
  console.log(hardLegacyHits.slice(0, 30).join('\n'));
} else pass('no hard legacy brand terms found in public dist');
const jinkoSurfaceHits = grepFiles(customerFacingDistFiles, /\bJinko\b/);
const meaningfulJinkoHits = jinkoSurfaceHits.filter(line => !line.includes('jinko-rebuild') && !line.includes('jinko-') && !line.includes('data-gtm-id'));
if (meaningfulJinkoHits.length) {
  fail(`possible visible Jinko terms found (${meaningfulJinkoHits.length})`);
  console.log(meaningfulJinkoHits.slice(0, 30).join('\n'));
} else pass('no visible standalone Jinko brand term found');
section('Sitemap legacy URL exclusion');
const sitemapFiles = walk('dist').filter(p => /^dist\/sitemap.*\.xml$/.test(p));
const sitemapText = sitemapFiles.map(p => read(p)).join('\n');
if (sitemapText.includes('jinko-rebuild.youjh120608.workers.dev')) warn('sitemap still uses staging workers.dev host; replace site URL when production domain is confirmed');
const legacyPaths = ['/eagle-modules/', '/eagle-storage/', '/homeowners/', '/installer-finder/', '/jacksonville/', '/tiger-neo/', '/warranty/', '/case-studies/', '/news/', '/es/', '/zh/'];
const foundLegacyPaths = legacyPaths.filter(p => sitemapText.includes(p));
if (foundLegacyPaths.length) fail(`legacy paths found in sitemap: ${foundLegacyPaths.join(', ')}`);
else pass('legacy paths absent from sitemap');

section('CMS collections and content files');
const config = read('src/content/config.ts');
const cms = read('public/admin/config.yml');
const requiredCollections = [
  'homepage', 'about', 'contact', 'applicationIndex', 'productIndex', 'solutionIndex', 'products', 'solutions', 'applications', 'news', 'faqPage', 'videoPage', 'resourceIndex', 'downloads', 'caseIndex', 'cases', 'supportIndex', 'supportPages', 'navigation', 'customPages', 'landingPages'
];
for (const name of requiredCollections) {
  if (config.includes(`${name}`)) pass(`content collection present: ${name}`);
  else fail(`content collection missing: ${name}`);
}
const requiredCmsNames = ['homepage', 'about', 'contact', 'applicationIndex', 'productIndex', 'solutionIndex', 'products', 'solutions', 'applications', 'news', 'faqPage', 'videoPage', 'resourceIndex', 'downloads', 'caseIndex', 'cases', 'supportIndex', 'supportPages', 'navigation', 'customPages', 'landingPages'];
for (const name of requiredCmsNames) {
  if (cms.includes(`name: "${name}"`)) pass(`CMS collection present: ${name}`);
  else fail(`CMS collection missing: ${name}`);
}
[
  'src/content/homepage/home.json',
  'src/content/about/about.json',
  'src/content/contact/contact.json',
  'src/content/applicationIndex/index.json',
  'src/content/productIndex/index.json',
  'src/content/solutionIndex/index.json',
  'src/content/resourceIndex/index.json',
  'src/content/faqPage/index.json',
  'src/content/videoPage/index.json',
  'src/content/caseIndex/index.json',
  'src/content/supportIndex/index.json',
].forEach(p => assertExists(p));

section('SEO field coverage in CMS config');
for (const field of ['seoTitle', 'metaDescription', 'h1', 'keywords', 'canonical', 'ogImage', 'noindex']) {
  const count = [...cms.matchAll(new RegExp(`name: "${field}"`, 'g'))].length;
  if (count >= 10) pass(`CMS SEO field appears broadly: ${field} (${count})`);
  else warn(`CMS SEO field appears only ${count} times: ${field}`);
}

section('Forms and inquiry fields');
const contactHtml = exists('dist/contact/index.html') ? read('dist/contact/index.html') : '';
const worker = exists('src/worker.js') ? read('src/worker.js') : '';
for (const field of ['name', 'company', 'email', 'inquiry_type', 'application', 'buyer_role', 'timeline', 'market', 'size', 'document_needs', 'message', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'form_source', 'referrer', 'landing_page', '_gotcha']) {
  if (contactHtml.includes(`name="${field}"`)) pass(`contact form field present: ${field}`);
  else fail(`contact form field missing: ${field}`);
}
for (const field of ['application', 'buyer_role', 'timeline', 'document_needs', 'utm_source', 'referrer', 'landing_page']) {
  if (worker.includes(`${field}: clean`) || worker.includes(`${field}: raw`) || worker.includes(field)) pass(`worker handles field: ${field}`);
  else fail(`worker missing field handling: ${field}`);
}

section('Schema markers');
const schemaChecks = [
  ['dist/resources/faq/index.html', 'FAQPage', 'FAQ page schema'],
  ['dist/resources/index.html', 'FAQPage', 'Resources FAQ schema'],
  ['dist/applications/home-energy-storage/index.html', 'FAQPage', 'Application FAQ schema'],
  ['dist/cases/800kw-premium-automotive-retail-center/index.html', 'Article', 'Case Article schema'],
  ['dist/about/index.html', 'AboutPage', 'AboutPage schema'],
];
schemaChecks.forEach(([path, needle, label]) => assertContains(path, needle, label));

section('Documents and audit files');
[
  'docs/audits/image-alt-audit.md',
  'docs/audits/cms-editing-guide.md',
  'docs/audits/launch-qa-checklist.md',
].forEach(p => assertExists(p));

section('Placeholder inventory');
const contentFiles = collectTextFiles('src/content', ['.json', '.md']);
const placeholderHits = grepFiles(contentFiles, /\/placeholders\//);
if (placeholderHits.length) {
  warn(`placeholder assets still present in content: ${placeholderHits.length}`);
  const summary = placeholderHits.slice(0, 40).join('\n');
  console.log(summary);
  if (placeholderHits.length > 40) console.log(`... ${placeholderHits.length - 40} more placeholder hits`);
} else pass('no placeholder assets found in content');

section('Summary');
if (failures) {
  console.error(`\nLaunch QA failed: ${failures} failure(s), ${warnings} warning(s).`);
  process.exit(1);
}
if (warnings) {
  console.warn(`\nLaunch QA passed with ${warnings} warning(s).`);
  process.exit(0);
}
console.log('\nLaunch QA passed with no warnings.');
