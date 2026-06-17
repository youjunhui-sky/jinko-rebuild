export const NAV = [
  {
    label: 'Products',
    href: '/products',
    description: 'Standard and custom solar modules',
    children: [
      { label: '450W Double Glass', href: '/products/450w-double-glass-solar-module/' },
      { label: '580W N-Type Bifacial', href: '/products/580w-n-type-solar-module/' },
      { label: '620W N-Type Bifacial', href: '/products/620w-n-type-solar-module/' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    description: 'Grid-tied and off-grid solar systems',
    children: [
      { label: 'Grid-Tied Systems', href: '/solutions#grid-tied' },
      { label: 'Off-Grid Systems', href: '/solutions#off-grid' },
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
