import { Service, PortfolioProject, CaseStudy, Testimonial, FAQItem, BlogPost, LocationData } from '../types';

export const servicesData: Service[] = [
  {
    id: 'seo',
    title: 'SEO for Interior Designers',
    slug: 'seo-for-interior-designers',
    shortDescription: 'Dominating search results for high-intent residential and commercial design keywords.',
    longDescription: 'Our bespoke Search Engine Optimization engine positions your studio at the absolute top of search results when high-net-worth individuals and corporate decision-makers are actively looking for interior architects and designers. We construct search authority that renders your competitors invisible.',
    iconName: 'Search',
    features: [
      'In-Depth Competitor Gap Analysis',
      'High-Intent Keyword Map (e.g., "luxury penthouse designers")',
      'On-Page Optimization & Technical Auditing',
      'High-Quality Editorial Backlink Campaigns',
      'Portfolio & Image Search Optimization'
    ],
    benefits: [
      '10x increase in organic discovery',
      'Higher percentage of inbound inquiries',
      'Zero ongoing ad spend for organic clicks',
      'Long-term digital asset value'
    ],
    stats: { label: 'Avg. Organic Traffic Increase', value: '+340%' },
    schema: 'Service'
  },

  {
    id: 'google-ads',
    title: 'Google Search & Display Ads',
    slug: 'google-ads-for-interior-designers',
    shortDescription: 'Intent-driven advertising targeting active high-budget renovators and builders.',
    longDescription: 'Intercept active searchers precisely at the moment of decision-making. Our hyper-segmented Google Search and Display frameworks isolate ultra-high-net-worth clients searching for modern villa renovations, premium office layouts, or luxury styling services.',
    iconName: 'Percent',
    features: [
      'Negative Keyword Filtering (eliminates budget waste)',
      'Custom Landing Page Design & Copywriting',
      'Demographic targeting for high-net-worth locations',
      'Bid Management & Budget Optimization',
      'A/B Testing of Creative Copy'
    ],
    benefits: [
      'Immediate lead generation (within 72 hours)',
      '100% control over target budget and location',
      'Exclusion of low-budget, DIY searchers',
      'Transparent tracking down to cost-per-lead'
    ],
    stats: { label: 'Average ROAS Achieved', value: '4.8x' },
    schema: 'Service'
  },
  {
    id: 'meta-ads',
    title: 'Meta (Instagram & Facebook) Ads',
    slug: 'meta-ads-for-interior-designers',
    shortDescription: 'Immersive visual campaign architecture showcasing your premium portfolio.',
    longDescription: 'Interior design is visual. We build visual advertising campaigns on Instagram and Facebook that stop the scroll. We turn your finished residential or commercial projects into high-engagement video assets, generating qualified bookings from affluent homeowners.',
    iconName: 'Instagram',
    features: [
      'Visual Asset Optimization & Formatting',
      'Lookalike Targeting based on existing clients',
      'Retargeting funnels for portfolio visitors',
      'Lead Form Integration with pre-qualification filters',
      'High-converting copywriting'
    ],
    benefits: [
      'Builds brand prestige and visual awareness',
      'Converts cold social traffic into design bookings',
      'Leverages high-end videography and photography',
      'Scales predictably with budget increases'
    ],
    stats: { label: 'Average Cost Per Qualified Lead', value: '$22' },
    schema: 'Service'
  },
  {
    id: 'social-media',
    title: 'Instagram & Social Growth',
    slug: 'social-media-marketing-for-interior-designers',
    shortDescription: 'Prestige branding and community engineering on visual social channels.',
    longDescription: 'Establish an aspirational social media presence that acts as a secondary digital portfolio. We manage, grow, and optimize your Instagram, Pinterest, and LinkedIn accounts to construct a cohesive brand image that appeals to high-tier residential and commercial builders.',
    iconName: 'Users',
    features: [
      'Aesthetic Feed Design & Grid Curation',
      'Video Reel Scripting & Editing',
      'Pinterest SEO & Board Strategy',
      'Community Management & Outreach',
      'Influencer/Builder Collaboration Strategy'
    ],
    benefits: [
      'Establishes social proof and prestige',
      'Engages local luxury builders & architects',
      'Maintains consistent publication scheduling',
      'Fosters organic word-of-mouth recommendations'
    ],
    stats: { label: 'Average Monthly Engagement Growth', value: '+180%' },
    schema: 'Service'
  },
  {
    id: 'website-design',
    title: ' Bespoke Luxury Web Design',
    slug: 'website-design-for-interior-designers',
    shortDescription: 'Conversion-engineered digital portfolios with elite typography and layout.',
    longDescription: 'Your website is your digital showroom. We build lightning-fast, visually breathtaking, and conversion-optimized websites that frame your design projects like an art gallery. Every pixel is engineered to inspire trust and compel premium inquiries.',
    iconName: 'Layout',
    features: [
      'Custom Luxury-Grade User Interface (UI)',
      'Optimized Mobile & Tablet Layouts',
      'High-Speed Performance Scoring (Lighthouse >90)',
      'Seamless Calendly & CRM Integration',
      'Pre-Qualification Lead Forms'
    ],
    benefits: [
      'Positions you as an elite industry leader',
      'Reduces lead drop-off by up to 60%',
      'Optimizes asset loading for high-res portfolio images',
      'Provides a seamless experience across all screen sizes'
    ],
    stats: { label: 'Average Conversion Rate Increase', value: '+215%' },
    schema: 'Service'
  },
  {
    id: 'local-seo',
    title: 'Local SEO & Google Maps Pack',
    slug: 'local-seo-for-interior-designers',
    shortDescription: 'Dominating local queries like "best interior designer near me".',
    longDescription: 'Capture high-intent searches in your specific metropolitan area. We optimize your Google Business Profile, structure local citations, and design localized landing pages to ensure your studio dominates the local Map Pack and captures wealthy regional clientele.',
    iconName: 'MapPin',
    features: [
      'Google Business Profile Optimization',
      'Local Citations Auditing & Correction',
      'Localized Review Generation Strategy',
      'Geographic Keyword Targeting',
      'Schema markup implementation'
    ],
    benefits: [
      'Direct calls and directions request increase',
      'Dominance in hyper-local Google searches',
      'Generates local builder and supplier alliances',
      'Higher credibility via verified reviews'
    ],
    stats: { label: 'Local Map Pack Visibility', value: 'Top 3 Focus' },
    schema: 'Service'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Penthouse Design Campaign',
    category: 'ads',
    clientName: 'Studio Velvet & Co.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    metric: '14 Qualified Leads',
    metricLabel: 'within 30 Days'
  },
  {
    id: '2',
    title: 'Residential SEO Engine',
    category: 'seo',
    clientName: 'Aria Architects',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    metric: '#1 for "Luxury Architect"',
    metricLabel: 'in regional searches',
    beforeValue: 'Page 5',
    afterValue: '#1 Spot'
  },
  {
    id: '3',
    title: 'Aspirational Instagram Curation',
    category: 'social',
    clientName: 'Linear Living',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    metric: '52,000+ Followers',
    metricLabel: 'organic growth',
    beforeValue: '4,200',
    afterValue: '52,500'
  },
  {
    id: '4',
    title: 'Luxury Flagship Website Redesign',
    category: 'web',
    clientName: 'Mason & Henge Studio',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    metric: '3.4% Booking Rate',
    metricLabel: 'traffic to consultation',
    beforeValue: '0.8%',
    afterValue: '3.4%'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-1',
    slug: 'studio-milano-scale',
    title: 'Scale to 7-Figure Inbound Leads: The Studio Milano Case Study',
    clientName: 'Studio Milano',
    industry: 'High-End Luxury Residential',
    summary: 'How we positioned a boutique Milanese-inspired interior studio in New York to dominate high-end searches, generating $1.8M in pipeline revenue in 6 months.',
    challenge: 'Studio Milano had a stunning design portfolio but was invisible online, relying purely on unstable word-of-mouth references.',
    solution: 'We deployed a full SEO architecture targeting "luxury penthouse interior designers NYC" and launched a high-aesthetic retargeting system on Instagram.',
    results: {
      revenueIncrease: '+$1.8M',
      leadGrowth: '+320%',
      roi: '6.4x'
    },
    metricsList: [
      { label: 'Pipeline Value Generated', value: '$1,840,000' },
      { label: 'Organic Traffic growth', value: '+410%' },
      { label: 'Consultations booked', value: '47' }
    ],
    timeline: '6 Month Lifecycle',
    testimonial: {
      quote: 'Near Me Interiors completely overhauled our customer acquisition. We went from chasing residential developers to having them request discovery calls directly through our site.',
      author: 'Francesca Milano',
      role: 'Principal Designer & Founder',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 'case-2',
    slug: 'vanguard-spaces-campaign',
    title: 'Generating Enterprise Commercial Design Contracts via Intent Ads',
    clientName: 'Vanguard Spaces',
    industry: 'Commercial & Workplace Architecture',
    summary: 'A data-driven Google Search campaign targeting decision makers looking for premium office and hospitality interior fit-outs.',
    challenge: 'Vanguard needed access to office developers and corporate HR heads, but faced high CPC waste on generic search queries.',
    solution: 'We built a hyper-specific phrase-match keyword portfolio and custom landing page featuring corporate trust assets.',
    results: {
      revenueIncrease: '+$3.2M',
      leadGrowth: '+185%',
      roi: '8.1x'
    },
    metricsList: [
      { label: 'Corporate Leads Won', value: '9 Enterprise Contracts' },
      { label: 'Cost Per Lead Decrease', value: '-55%' },
      { label: 'Marketing ROI achieved', value: '810%' }
    ],
    timeline: '4 Month Campaign',
    testimonial: {
      quote: 'The search campaign they crafted captured office managers searching for high-end workspace redesigns. Our pipeline is booked for the next 18 months.',
      author: 'Marcus Vance',
      role: 'Operations Director',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    quote: 'The design aesthetic of their work is matched by their technical skill. Our organic inquiries represent our highest-budget projects now.',
    author: 'Sanjay Kapoor',
    role: 'Principal Architect',
    company: 'Kapoor & Associates',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-2',
    quote: 'Before working with Near Me Interiors, we wasted thousands on generic agencies who did not understand the difference between basic renovations and luxury design.',
    author: 'Neha Sen',
    role: 'Creative Director',
    company: 'Monolith Interior Studio',
    location: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't-3',
    quote: 'We booked 4 luxury villa design projects in the first 60 days of launching our Meta campaign. Absolute game changer.',
    author: 'Ananya Rao',
    role: 'Co-Founder',
    company: 'Dwell & Aura',
    location: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Business & Website Audit',
    description:
      'We analyze your business, website, Google Business Profile, SEO performance, and competitors to find what is stopping you from getting more enquiries.',
  },
  {
    step: '02',
    title: 'Create a Growth Plan',
    description:
      'We create a clear marketing strategy and roadmap. Once you approve the plan, we prepare everything needed to start generating more leads.',
  },
  {
    step: '03',
    title: 'Build & Improve Your Online Presence',
    description:
      'If needed, we build or improve your website, optimize your Google Business Profile, and work on SEO and advertising to help people find your business.',
  },
  {
    step: '04',
    title: 'Generate Leads & Scale',
    description:
      'As rankings improve and campaigns start working, you receive more enquiries. We continuously optimize everything to increase lead quality and grow your business.',
  },
];

export const pricingPackages = [
  {
    name: 'Starter Accelerator',
    price: '$1,950',
    frequency: '/month',
    description: 'For boutique design studios looking to establish systematic local discovery and lead generation.',
    features: [
      'Local SEO & GBP Optimization',
      'Google Ads Setup & Management',
      'High-converting landing page',
      'Standard custom dashboard tracking',
      'Monthly performance report'
    ],
    cta: 'Book Accelerator Call',
    popular: false
  },
  {
    name: 'Growth Engine',
    price: '$3,800',
    frequency: '/month',
    description: 'Our flagship package designed to scale premium client acquisition across search and social channels.',
    features: [
      'Everything in Starter',
      'Meta (Instagram) Video Ad Curation',
      'Ongoing technical SEO & link-building',
      'A/B creative variations testing',
      'Dedicated Slack communication channel',
      'Bi-weekly strategy optimization checkups'
    ],
    cta: 'Book Growth Call',
    popular: true
  },
  {
    name: 'Elite Studio scaling',
    price: '$6,500',
    frequency: '/month',
    description: 'Enterprise-grade omnichannel positioning for market-leading design firms and architectural groups.',
    features: [
      'Full SEO + Paid Search + Paid Social suite',
      'Complete Luxury Web Redesign & curation',
      'Pinterest visual optimization campaigns',
      'Custom lead-scoring and CRM sync setup',
      'Monthly custom videography formatting',
      'Direct partner level consulting'
    ],
    cta: 'Apply for Elite Package',
    popular: false
  }
];

export const comparisonTable = {
  features: [
    { name: 'Understands Luxury Design Nuances', us: true, others: false },
    { name: 'Exclusive focus on Interior Designers & Architects', us: true, others: false },
    { name: 'Custom Landing Pages & High-Resolution Curation', us: true, others: false },
    { name: 'Guaranteed Lead Pre-qualification (Zero DIY Leads)', us: true, others: false },
    { name: 'Direct integration with design CRMs & Calendly', us: true, others: false },
    { name: 'Lighthouse Website Speed Score >90', us: true, others: false }
  ]
};

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do you ensure the leads generated have high luxury budgets?',
    answer: 'We filter out low-end search terms (like "cheap home styling" or "DIY decor ideas") and target specific high-value demographics, exclusive neighborhoods, and high-net-worth parameters in our paid media structures. Additionally, we integrate strict pre-qualification fields into our contact forms.'
  },
  {
    id: 'faq-2',
    question: 'How long does it take to see tangible results from SEO vs. Ads?',
    answer: 'Google and Meta Ads generate initial leads within 3-7 days of activation. Search Engine Optimization (SEO) campaigns are long-term assets that typically require 3 to 6 months to start dominating localized keywords, but result in a compound stream of free inbound leads.'
  },
  {
    id: 'faq-3',
    question: 'Do we need high-end photography for our portfolio before we start?',
    answer: 'Yes, high-resolution photography is the backbone of high-converting campaigns. If you do not have professional files, we can help guide your team on content capture or structure your advertising with strategic, aesthetic luxury render assets.'
  },
  {
    id: 'faq-4',
    question: 'What CRM tools do you support?',
    answer: 'We support direct integrations with Hubspot, Salesforce, Dubsado, HoneyBook, Monday.com, and standard email delivery via secure custom webhooks.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'seo-guide-interior-designers',
    title: 'The Ultimate SEO Guide for Luxury Interior Designers: How to Rank #1',
    category: 'SEO',
    summary: 'A comprehensive operational guide detailing exactly how luxury architecture and interior studios can optimize their portfolios, Google profiles, and write articles that sign 7-figure projects.',
    publishedAt: 'May 14, 2026',
    author: {
      name: 'Devan Sharma',
      role: 'Head of SEO strategy',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
      bio: 'Devan has over 12 years of SEO experience working exclusively with design, architecture, and luxury brands.',
      slug: 'devan-sharma'
    },
    readingTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    tags: ['SEO', 'Growth', 'Client Acquisition'],
    content: `
# The Ultimate SEO Guide for Luxury Interior Designers: How to Rank #1

In the high-ticket world of interior architecture and luxury residential design, clients do not click on banner ads. They search Google, read design publications, and inspect digital portfolios. 

If your studio is not ranking on page one of Google for high-intent search queries in your region, you are leaving millions of dollars in potential design fees on the table.

## Why SEO is Crucial for High-End Designers

Word-of-mouth is powerful, but it is unstable. Search engine optimization provides a predictable flow of inbound consultations. When an affluent homeowner searches *"luxury penthouse interior designer Mumbai"* or *"best kitchen renovation architects Delhi"*, they are ready to hire.

## Pillar 1: High-Intent Keyword Strategy

Stop optimizing for vanity keywords like "interior decor ideas" or "beautiful living rooms". Instead, target high-intent transactional search terms:
1. **Location + Studio Type:** *"Modern interior design studio Bangalore"*
2. **Project Class + Service:** *"High-end villa renovation designer Pune"*
3. **Niche Specialties:** *"Eco-friendly luxury interior architecture"*

## Pillar 2: Image SEO & Alt Curation

Interior design portfolios are heavy with high-resolution images. Google cannot read images visually—it reads metadata:
- **File Names:** Rename \`IMG_4892.jpg\` to \`luxury-penthouse-living-room-design-mumbai.jpg\`.
- **Alt Text:** Add descriptive alt tags: \`"Double-height ceiling living room design in navy and brass accent styling by Near Me Interiors."\`

## Pillar 3: Schema Markup Integration

Schema markup tells search engines what your data represents. By implementing **LocalBusiness** and **Service** schema, you ensure Google understands your office hours, locations, client reviews, and direct services, which increases search rich-snippet click rates.
    `
  },
  {
    id: 'blog-2',
    slug: 'instagram-marketing-secret',
    title: 'Instagram Marketing Secrets of Multi-Million Dollar Studios',
    category: 'Instagram Growth',
    summary: 'Analyze how high-performing design firms structure their Instagram grids, reels, and captions to build prestige and generate direct-message consultations.',
    publishedAt: 'June 2, 2026',
    author: {
      name: 'Aisha Varma',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      bio: 'Aisha specializes in luxury social architecture and has managed social accounts for some of the world\'s leading design names.',
      slug: 'aisha-varma'
    },
    readingTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    tags: ['Instagram', 'Social Media', 'Branding'],
    content: `
# Instagram Marketing Secrets of Multi-Million Dollar Studios

Social media is the digital showroom of the modern interior designer. For many studios, Instagram functions as their primary brand verification source. 

Here is how elite design firms convert followers into high-paying residential projects.

## 1. Editorial Curation Over Daily Dumping

Luxury brands do not post daily behind-the-scenes clutter. They treat their Instagram grid like a printed issue of *Architectural Digest*. 
- Maintain a consistent tone curve (high light, low contrast, or rich dark shadows).
- Group posts into groups of 3 or 9 to show a unified aesthetic theme.

## 2. High-Aesthetic Reels & Video Flow

Reels are the primary organic reach driver. Show the transformation:
- **Hook:** Start with a gorgeous close-up of a completed space (first 2 seconds).
- **Process:** Transition to quick, smooth panning shots of raw structural work.
- **Finished result:** End on a dramatic wide-angle shot of the completed project.

## 3. Clear Call to Action in Bio

Do not write generic bios. State exactly what you do and how to start:
- *"Bespoke residential interiors for modern penthouses and coastal estates. Book a design inquiry below."*
- Direct links should point to a beautiful pre-qualification form.
    `
  }
];

export const locationsData: LocationData[] = [
  {
    city: 'Mumbai',
    slug: 'mumbai',
    headline: 'Premium Digital Marketing Agency for Luxury Interior Designers in Mumbai',
    intro: 'Attract elite residential developers and high-net-worth individuals in South Mumbai, Bandra, and Juhu. We build specialized search campaigns designed for Mumbai\'s top-tier design landscape.',
    marketContext: 'Mumbai is home to the country\'s most competitive luxury real estate market. With sky-high property valuations in areas like Worli, Malabar Hill, and Colaba, Mumbai design studios need marketing that matches their target client\'s high-end lifestyle.',
    localSEOStats: [
      { label: 'Avg. Lead Conversion Value', value: '₹15L - ₹1Cr+' },
      { label: 'Local Search Share Achieved', value: '#1 Ranking Focus' },
      { label: 'Avg. Google Maps Call Growth', value: '+280%' }
    ],
    testimonials: [
      {
        id: 'tm-1',
        quote: 'Working with Near Me Interiors helped our Worli penthouse showcase rank first in Google Search. We signed two sea-facing apartment renovations within 90 days.',
        author: 'Rohan Malhotra',
        role: 'Design Principal',
        company: 'Malhotra Associates',
        location: 'Mumbai',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'Level 5, Maker Maxity, Bandra Kurla Complex, Mumbai, MH 400051',
      phone: '+91 22 6982 7800',
      email: 'mumbai@auraarch.agency'
    }
  },
  {
    city: 'Delhi',
    slug: 'delhi',
    headline: 'Bespoke Search & Ads Optimization for Elite Design Studios in Delhi NCR',
    intro: 'Establish digital dominance across Lutyens\' Delhi, Vasant Vihar, and premium sectors of Gurgaon and Noida. High-intent client acquisition designed for elite North Indian architecture.',
    marketContext: 'The Delhi NCR market is driven by grand-scale residential estates, sprawling luxury farmhouses, and ultra-premium commercial fit-outs. Our localized marketing targets wealthy landowners and corporate developers looking for top-tier design firms.',
    localSEOStats: [
      { label: 'Delhi NCR Map Visibility', value: 'Top 3 Dominance' },
      { label: 'Paid Ads ROI (NCR)', value: '7.8x' },
      { label: 'Local Citation Accuracy', value: '100%' }
    ],
    testimonials: [
      {
        id: 'td-1',
        quote: 'They built a custom search strategy that positioned our farmhouse architecture firm to rank for high-budget searches. Outstanding result.',
        author: 'Vikram Singh',
        role: 'Founder & Principal',
        company: 'Vanguard Space Design',
        location: 'Delhi',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'The Executive Centre, DLF Cyber City, Phase 3, Gurugram, HR 122002',
      phone: '+91 124 7120 900',
      email: 'delhi@auraarch.agency'
    }
  },
  {
    city: 'Bangalore',
    slug: 'bangalore',
    headline: 'Advanced Lead Generation for Tech-Savvy Design & Fit-out Studios in Bangalore',
    intro: 'Dominate searches in Indiranagar, Koramangala, Whitefield, and Sadashivanagar. Scale your tech-enabled commercial fit-outs and premium residential design inquiries.',
    marketContext: 'Bangalore\'s market demand blends tech-founder villas with corporate tech-park commercial contracts. We configure campaigns targeting successful founders and corporate workspace developers who appreciate data-driven execution.',
    localSEOStats: [
      { label: 'Organic Inquiries Growth', value: '+310%' },
      { label: 'Tech Founder Lead Value', value: '₹25L+' },
      { label: 'Map Pack Click CTR', value: '14.2%' }
    ],
    testimonials: [
      {
        id: 'tb-1',
        quote: 'As a commercial fit-out firm, their Google Search campaigns connected us directly with tech leaders looking for office redesigns.',
        author: 'Preeti Hegde',
        role: 'Managing Partner',
        company: 'Hegde Workspace Solutions',
        location: 'Bangalore',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'Prestige Trade Tower, Palace Road, High Grounds, Bangalore, KA 560001',
      phone: '+91 80 4910 1200',
      email: 'blr@auraarch.agency'
    }
  },
  {
    city: 'Pune',
    slug: 'pune',
    headline: 'Tailored Marketing & SEO Services for Premium Designers in Pune',
    intro: 'Connect with luxury residential clients and estate owners in Koregaon Park, Kalyani Nagar, and Kothrud. Drive predictable inquiries from Pune\'s business elite.',
    marketContext: 'Pune is a fast-evolving premium design market. The growth of IT hubs and industrial families in Pune has surged demand for high-end residential upgrades, requiring visual campaigns that reflect sophistication.',
    localSEOStats: [
      { label: 'Pune Search Growth', value: '+220%' },
      { label: 'Cost Per Inquiry', value: '₹1,200' },
      { label: 'Google Citation Count', value: '85+' }
    ],
    testimonials: [
      {
        id: 'tp-1',
        quote: 'Near Me Interiors understood our aesthetic instantly. Our Instagram ads are now generating actual high-end bookings in Koregaon Park.',
        author: 'Meera Deshpande',
        role: 'Lead Architect',
        company: 'Deshpande & Co.',
        location: 'Pune',
        avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'Level 2, ICC Trade Tower, Senapati Bapat Road, Pune, MH 411016',
      phone: '+91 20 6702 4300',
      email: 'pune@auraarch.agency'
    }
  },
  {
    city: 'Hyderabad',
    slug: 'hyderabad',
    headline: 'Bespoke Lead Generation for Luxury Architects & Designers in Hyderabad',
    intro: 'Scale your design studio\'s portfolio presence across Jubilee Hills, Banjara Hills, and Gachibowli. Attract high-net-worth real estate owners.',
    marketContext: 'Hyderabad\'s high-end property landscape is dominated by massive custom villas and sprawling luxury apartments. Our campaign funnels specifically target the city\'s high-profile business families and tech executives.',
    localSEOStats: [
      { label: 'Jubilee Hills Lead Share', value: 'Dominant' },
      { label: 'Ads ROI achieved (Hyd)', value: '6.8x' },
      { label: 'Map Impressions Growth', value: '+190%' }
    ],
    testimonials: [
      {
        id: 'th-1',
        quote: 'The leads coming from our Jubilee Hills target campaigns are exactly the scale of custom villa projects we love to design.',
        author: 'Karthik Rao',
        role: 'Principal Designer',
        company: 'Rao Design Studio',
        location: 'Hyderabad',
        avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'L&T Phx Towers, Hitec City, Hyderabad, TS 500081',
      phone: '+91 40 4893 2300',
      email: 'hyd@auraarch.agency'
    }
  },
  {
    city: 'Kolkata',
    slug: 'kolkata',
    headline: 'Creative Marketing & Local SEO for Premium Designers in Kolkata',
    intro: 'Position your design studio as Kolkata\'s leading authority for heritage and modern luxury homes in Alipore, Ballygunge, and Salt Lake.',
    marketContext: 'Kolkata combines classic heritage aesthetics with modern luxury demands. Our content frameworks focus on building cultural resonance and prestige, targeting the city\'s historical estate owners and modern apartment buyers.',
    localSEOStats: [
      { label: 'Alipore Visibility Rank', value: '#1 Spot' },
      { label: 'Organic Site Visits', value: '+160%' },
      { label: 'Local Review Score', value: '5.0 Star' }
    ],
    testimonials: [
      {
        id: 'tk-1',
        quote: 'They captured the heritage luxury of our design style perfectly in our new website, boosting conversions by over 150%.',
        author: 'Swarup Banerjee',
        role: 'Creative Director',
        company: 'Banerjee Heritage Architects',
        location: 'Kolkata',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'Bengal Intelligent Park, Sector V, Salt Lake, Kolkata, WB 700091',
      phone: '+91 33 6610 8900',
      email: 'kolkata@auraarch.agency'
    }
  },
  {
    city: 'Chennai',
    slug: 'chennai',
    headline: 'High-Performance Marketing for Premium Interior Designers in Chennai',
    intro: 'Attract high-ticket residential renovation and commercial project inquiries in ECR, Adyar, and Anna Nagar. High-intent local search dominance.',
    marketContext: 'Chennai\'s coastal villas and luxury apartments require bespoke design representation. We build specific campaigns highlight structural expertise and modern design sensibilities, targeting affluent families and NRI investors.',
    localSEOStats: [
      { label: 'ECR Search Impressions', value: '+330%' },
      { label: 'Cost Per Call', value: '₹950' },
      { label: 'Citation Quality Score', value: '98%' }
    ],
    testimonials: [
      {
        id: 'tc-1',
        quote: 'Our brand visibility on ECR searches skyrocketed. We are getting high-quality design briefs directly from Google Business search.',
        author: 'Priya Rajan',
        role: 'Founder & Principal',
        company: 'Rajan Studio',
        location: 'Chennai',
        avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'Prestige Palladium Bayan, Greams Road, Chennai, TN 600006',
      phone: '+91 44 6812 7900',
      email: 'chennai@auraarch.agency'
    }
  },
  {
    city: 'Ahmedabad',
    slug: 'ahmedabad',
    headline: 'Premium Digital Marketing Solutions for Elite Designers in Ahmedabad',
    intro: 'Connect with wealthy industrialists and estate owners in Bodakdev, Satellite, and Science City. Custom campaigns designed to scale local studio brand value.',
    marketContext: 'Ahmedabad has a booming luxury residential and commercial sector driven by industrial growth. We target high-net-worth business owners looking for premium office fit-outs and expansive custom residential estates.',
    localSEOStats: [
      { label: 'Industrialist Lead Reach', value: 'High' },
      { label: 'Local Map CTR', value: '11.8%' },
      { label: 'Monthly Lead Growth', value: '+140%' }
    ],
    testimonials: [
      {
        id: 'ta-1',
        quote: 'They built a premium lead generation model that fits our exact niche. We no longer waste time on low-budget inquiries.',
        author: 'Amit Patel',
        role: 'Managing Director',
        company: 'Patel Design Associates',
        location: 'Ahmedabad',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
      }
    ],
    localOffice: {
      address: 'Shivalik Shilp, Iscon Cross Road, S.G. Highway, Ahmedabad, GJ 380015',
      phone: '+91 79 6912 3400',
      email: 'ahmedabad@auraarch.agency'
    }
  }
];
