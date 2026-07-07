import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import { blogPosts } from '@/data/agencyData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const slugToCategory: Record<string, string> = {
  'seo': 'SEO',
  'google-ads': 'Google Ads',
  'meta-ads': 'Meta Ads',
  'instagram-growth': 'Instagram Growth',
  'lead-generation': 'Lead Generation',
  'interior-design-marketing': 'Interior Design Marketing',
  'local-seo': 'Local SEO',
  'case-studies': 'Case Studies',
  'resources': 'Resources'
};

export async function generateStaticParams() {
  return Object.keys(slugToCategory).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryName = slugToCategory[resolvedParams.slug];

  if (!categoryName) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${categoryName} Marketing Articles | Near Me Interiors`,
    description: `Browse all articles, guides, and updates under our ${categoryName} category.`,
    alternates: {
      canonical: `/blog/category/${resolvedParams.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryName = slugToCategory[resolvedParams.slug];

  if (!categoryName) {
    notFound();
  }

  const filteredPosts = blogPosts.filter((post) => post.category === categoryName);

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-bg pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-muted hover:text-brand-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            BACK TO ALL DISPATCHES
          </Link>

          <div className="mb-12 text-left">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary">
              Category: <span className="text-brand-secondary">{categoryName}</span>
            </h1>
            <p className="text-brand-muted text-sm mt-2">
              Unlocking digital growth models and campaigns specifically focused on {categoryName.toLowerCase()}.
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="aspect-[16/9] w-full overflow-hidden relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-brand-muted font-semibold">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readingTime}
                        </span>
                        <span>{post.publishedAt}</span>
                      </div>
                      <h3 className="font-heading font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{post.summary}</p>
                    </div>
                  </div>
                  <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-brand-primary text-xs font-semibold">{post.author.name}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-brand-secondary hover:text-brand-secondary/80 font-bold text-xs flex items-center gap-1"
                    >
                      Read article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl max-w-xl mx-auto border border-slate-100">
              <span className="text-4xl">📚</span>
              <h3 className="font-heading font-bold text-brand-primary text-lg mt-4">No Articles Yet</h3>
              <p className="text-brand-muted text-xs mt-1">We are compiling resources for this category. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
