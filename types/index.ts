export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  features: string[];
  benefits: string[];
  stats: { label: string; value: string };
  schema: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'seo' | 'ads' | 'social' | 'web';
  clientName: string;
  image: string;
  metric: string;
  metricLabel: string;
  beforeValue?: string;
  afterValue?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: {
    revenueIncrease: string;
    leadGrowth: string;
    roi: string;
  };
  metricsList: { label: string; value: string }[];
  timeline: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  videoUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'SEO' | 'Google Ads' | 'Meta Ads' | 'Instagram Growth' | 'Lead Generation' | 'Interior Design Marketing' | 'Local SEO' | 'Case Studies' | 'Resources';
  summary: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    slug: string;
  };
  readingTime: string;
  image: string;
  tags: string[];
  relatedSlugs?: string[];
}

export interface LocationData {
  city: string;
  slug: string;
  headline: string;
  intro: string;
  marketContext: string;
  localSEOStats: { label: string; value: string }[];
  testimonials: Testimonial[];
  localOffice: {
    address: string;
    phone: string;
    email: string;
    mapEmbedUrl?: string;
  };
}
