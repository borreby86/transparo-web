// Package data structure for consistent use across components
export interface Package {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  duration: string;
  popular?: boolean;
  color: 'navy' | 'gold' | 'warmgray';
  highlights: string[];
  features: {
    category: string;
    items: {
      name: string;
      included: boolean | string;
      description?: string;
    }[];
  }[];
  addOns?: {
    name: string;
    price: string;
    description: string;
  }[];
}

export const packages: Package[] = [
  {
    id: 'essentials',
    slug: 'essentials',
    name: 'Essentials',
    tagline: 'Perfekt til startups og små virksomheder',
    price: 8995,
    priceFormatted: '8.995',
    duration: '10-14 dage',
    color: 'warmgray',
    highlights: [
      '5 professionelle sider',
      'Mobil-optimeret design',
      'Basis SEO-opsætning',
      'Kontaktformular',
    ],
    features: [
      {
        category: 'Design & Udvikling',
        items: [
          { name: 'Antal sider', included: '5 sider' },
          { name: 'Responsivt design', included: true },
          { name: 'Custom design', included: true },
          { name: 'Animations & interaktioner', included: 'Basis' },
        ],
      },
      {
        category: 'Funktionalitet',
        items: [
          { name: 'CMS (Payload)', included: true },
          { name: 'Kontaktformular', included: true },
          { name: 'Google Maps integration', included: false },
          { name: 'Nyhedsbrev signup', included: false },
        ],
      },
      {
        category: 'SEO & Performance',
        items: [
          { name: 'Basis SEO', included: true },
          { name: 'Google Analytics', included: true },
          { name: 'Sitemap', included: true },
          { name: 'Schema markup', included: false },
        ],
      },
      {
        category: 'Service & Support',
        items: [
          { name: 'Leveringstid', included: '10-14 dage' },
          { name: 'Revisions', included: '2 runder' },
          { name: 'Oplæring i CMS', included: '30 min' },
          { name: 'Support efter lancering', included: '30 dage' },
        ],
      },
    ],
  },
  {
    id: 'professional',
    slug: 'professional',
    name: 'Professional',
    tagline: 'Den komplette løsning for voksende virksomheder',
    price: 16995,
    priceFormatted: '16.995',
    duration: '14-21 dage',
    popular: true,
    color: 'gold',
    highlights: [
      '10 sider inkluderet',
      'Avancerede animationer',
      'Blog & portfolio',
      'Fuld SEO-pakke',
    ],
    features: [
      {
        category: 'Design & Udvikling',
        items: [
          { name: 'Antal sider', included: '10 sider' },
          { name: 'Responsivt design', included: true },
          { name: 'Custom design', included: true },
          { name: 'Animations & interaktioner', included: 'Avanceret' },
        ],
      },
      {
        category: 'Funktionalitet',
        items: [
          { name: 'CMS (Payload)', included: true },
          { name: 'Blog system', included: true },
          { name: 'Portfolio/galleri', included: true },
          { name: 'Kontaktformular', included: true },
          { name: 'Google Maps integration', included: true },
          { name: 'Nyhedsbrev signup', included: true },
        ],
      },
      {
        category: 'SEO & Performance',
        items: [
          { name: 'Fuld SEO-pakke', included: true },
          { name: 'Google Analytics', included: true },
          { name: 'Search Console', included: true },
          { name: 'Sitemap', included: true },
          { name: 'Schema markup', included: true },
          { name: 'Performance optimering', included: true },
        ],
      },
      {
        category: 'Service & Support',
        items: [
          { name: 'Leveringstid', included: '14-21 dage' },
          { name: 'Revisions', included: '3 runder' },
          { name: 'Oplæring i CMS', included: '45 min' },
          { name: 'Support efter lancering', included: '60 dage' },
        ],
      },
    ],
  },
  {
    id: 'business',
    slug: 'business',
    name: 'Business',
    tagline: 'Enterprise-niveau løsning med fuld kontrol',
    price: 27995,
    priceFormatted: '27.995',
    duration: '21-28 dage',
    color: 'navy',
    highlights: [
      '20+ sider',
      'Multi-language support',
      'E-commerce ready',
      'Premium animationer',
    ],
    features: [
      {
        category: 'Design & Udvikling',
        items: [
          { name: 'Antal sider', included: '20+ sider' },
          { name: 'Responsivt design', included: true },
          { name: 'Custom design', included: true },
          { name: 'Animations & interaktioner', included: 'Premium' },
          { name: 'Custom komponenter', included: true },
        ],
      },
      {
        category: 'Funktionalitet',
        items: [
          { name: 'CMS (Payload)', included: true },
          { name: 'Multi-language', included: true },
          { name: 'Blog system', included: true },
          { name: 'Portfolio/galleri', included: true },
          { name: 'Team sektion', included: true },
          { name: 'Testimonials', included: true },
          { name: 'Booking system', included: true },
          { name: 'Advanced forms', included: true },
        ],
      },
      {
        category: 'SEO & Performance',
        items: [
          { name: 'Enterprise SEO', included: true },
          { name: 'Google Analytics 4', included: true },
          { name: 'Search Console', included: true },
          { name: 'Tag Manager', included: true },
          { name: 'Schema markup', included: true },
          { name: 'Core Web Vitals', included: true },
          { name: 'CDN setup', included: true },
        ],
      },
      {
        category: 'Service & Support',
        items: [
          { name: 'Leveringstid', included: '21-28 dage' },
          { name: 'Revisions', included: '5 runder' },
          { name: 'Oplæring i CMS', included: '60 min + dokumentation' },
          { name: 'Support efter lancering', included: '90 dage' },
          { name: 'Prioriteret support', included: true },
        ],
      },
    ],
  },
];

// Add-ons available for all packages
export const commonAddOns = [
  {
    name: 'Ekstra sider',
    price: '1.495 kr/side',
    description: 'Udvid din hjemmeside med flere sider',
  },
  {
    name: 'E-mail opsætning',
    price: '2.995 kr',
    description: 'Professionel e-mail med dit domæne',
  },
  {
    name: 'Copywriting',
    price: 'Fra 3.995 kr',
    description: 'Professionel tekstforfatning',
  },
  {
    name: 'Fotografi',
    price: 'Fra 4.995 kr',
    description: 'Professionel fotografering',
  },
];