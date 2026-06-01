export const NAV = [
  {
    label: 'Products',
    href: '/products',
    description: 'Standard and custom solar modules',
    children: [
      { label: 'Standard Modules', href: '/products#standard-modules', image: '/placeholders/solar-panel.svg' },
      { label: 'Custom Modules', href: '/products#custom-modules', image: '/placeholders/solar-panel.svg' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    description: 'Grid-tied and off-grid solar systems',
    children: [
      { label: 'Grid-Tied Systems', href: '/solutions#grid-tied', image: '/placeholders/battery-system.svg' },
      { label: 'Off-Grid Systems', href: '/solutions#off-grid', image: '/placeholders/battery-system.svg' },
    ],
  },
  { label: 'Applications', href: '/applications', description: 'Residential, C&I and remote power scenarios' },
  {
    label: 'Resources',
    href: '/resources',
    description: 'Downloads, blog, FAQ and guides',
    children: [
      { label: 'Technical Blog', href: '/resources/blog' },
      { label: 'Downloads', href: '/resources/downloads' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Videos', href: '/resources/videos' },
    ],
  },
  { label: 'News & Cases', href: '/cases', description: 'Project references and company updates' },
  { label: 'Support', href: '/support', description: 'Warranty, logistics, after-sales and channel policy' },
  { label: 'About', href: '/about', description: 'About Callsun' },
] as const;
