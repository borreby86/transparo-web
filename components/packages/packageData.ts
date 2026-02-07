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
  pages: string;
  highlights: string[];
  features: {
    category: string;
    items: {
      name: string;
      included: boolean | string;
      description?: string;
    }[];
  }[];
}

export const packages: Package[] = [
  {
    id: 'starter',
    slug: 'starter',
    name: 'Starter',
    tagline: 'Perfekt landingpage til din virksomhed',
    price: 8995,
    priceFormatted: '8.995',
    duration: '5-7 hverdage',
    color: 'warmgray',
    pages: '1 side',
    highlights: [
      '1 professionel landingpage',
      'Bygget i Next.js – lynhurtigt',
      'Fremtidssikret teknologi',
    ],
    features: [
      {
        category: 'Det du får',
        items: [
          { name: 'Bygget i Next.js', included: 'Moderne & lynhurtig' },
          { name: 'Responsivt design', included: 'Alle enheder' },
          { name: 'Kontaktformular', included: 'Med validering' },
          { name: 'Hastigheds-optimeret', included: '90+ Lighthouse' },
          { name: 'SEO-grundopsætning', included: true },
        ],
      },
      {
        category: 'Service',
        items: [
          { name: 'Leveringstid', included: '5-7 hverdage' },
          { name: 'Feedback-runder', included: '2 runder' },
          { name: 'Support efter lancering', included: '14 dage' },
        ],
      },
    ],
  },
  {
    id: 'professional',
    slug: 'professional',
    name: 'Professional',
    tagline: 'Komplet website til voksende virksomheder',
    price: 14995,
    priceFormatted: '14.995',
    duration: '10-14 hverdage',
    popular: true,
    color: 'gold',
    pages: '5 sider',
    highlights: [
      'Op til 5 sider inkluderet',
      'Bygget i Next.js – lynhurtigt',
      'Fremtidssikret teknologi',
    ],
    features: [
      {
        category: 'Det du får',
        items: [
          { name: 'Bygget i Next.js', included: 'Moderne & lynhurtig' },
          { name: 'Responsivt design', included: 'Alle enheder' },
          { name: 'Kontaktformular', included: 'Med validering' },
          { name: 'Hastigheds-optimeret', included: '90+ Lighthouse' },
          { name: 'SEO-grundopsætning', included: true },
        ],
      },
      {
        category: 'Service',
        items: [
          { name: 'Leveringstid', included: '10-14 hverdage' },
          { name: 'Feedback-runder', included: '3 runder' },
          { name: 'Support efter lancering', included: '30 dage' },
        ],
      },
    ],
  },
  {
    id: 'business',
    slug: 'business',
    name: 'Business',
    tagline: 'Udvidet website til etablerede virksomheder',
    price: 24995,
    priceFormatted: '24.995',
    duration: '14-21 hverdage',
    color: 'navy',
    pages: '10 sider',
    highlights: [
      'Op til 10 sider inkluderet',
      'Bygget i Next.js – lynhurtigt',
      'Fremtidssikret teknologi',
    ],
    features: [
      {
        category: 'Det du får',
        items: [
          { name: 'Bygget i Next.js', included: 'Moderne & lynhurtig' },
          { name: 'Responsivt design', included: 'Alle enheder' },
          { name: 'Kontaktformular', included: 'Med validering' },
          { name: 'Hastigheds-optimeret', included: '90+ Lighthouse' },
          { name: 'SEO-grundopsætning', included: true },
        ],
      },
      {
        category: 'Service',
        items: [
          { name: 'Leveringstid', included: '14-21 hverdage' },
          { name: 'Feedback-runder', included: '4 runder' },
          { name: 'Support efter lancering', included: '60 dage' },
        ],
      },
    ],
  },
];

// Add-ons available for all packages (alle priser ex. moms)
export const commonAddOns = [
  {
    name: 'Ekstra side',
    price: '+1.500 DKK',
    description: 'Én ekstra side til dit website',
  },
  {
    name: 'SEO-optimering',
    price: '+2.000 DKK',
    description: 'Teknisk SEO, meta tags og struktureret data',
  },
  {
    name: 'Blog / Nyheder',
    price: '+2.500 DKK',
    description: 'Blogsektion med kategorier og arkiv',
  },
  {
    name: 'CMS (selv-redigering)',
    price: '+3.000 DKK',
    description: 'Payload CMS så du selv kan opdatere indhold',
  },
  {
    name: 'Booking-system',
    price: '+2.500 DKK',
    description: 'Online tidsbestilling integreret i sitet',
  },
  {
    name: 'Flersproget (DK/EN)',
    price: '+3.000 DKK',
    description: 'Fuld oversættelse med sprogskifter',
  },
  {
    name: 'Nyhedsbrev-integration',
    price: '+1.500 DKK',
    description: 'Mailchimp, Brevo eller lignende integration',
  },
  {
    name: 'Google Analytics',
    price: '+1.000 DKK',
    description: 'Opsætning og konfiguration af tracking',
  },
  {
    name: 'Copywriting',
    price: 'Fra 3.000 DKK',
    description: 'Professionel tekstforfatning til dit website',
  },
  {
    name: 'Hosting inkl. SSL',
    price: '99 DKK/md',
    description: 'Hurtig hosting på Vercel, betales årligt',
  },
  {
    name: 'Ændringer efter lancering',
    price: '750 DKK/time',
    description: 'Løbende ændringer og opdateringer',
  },
];

// Note: Alle priser er ex. moms
export const pricingNote = 'Alle priser er ex. moms';
