import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Share2, Sparkles } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, FacebookIcon } from '@/components/ui/SocialIcons';
import Header from '@/components/features/Header';
import Footer from '@/components/features/Footer';
import WhatsAppButton from '@/components/features/WhatsAppButton';
import ExitIntentPopup from '@/components/features/ExitIntentPopup';
import { blogPosts } from '@/data/agencyData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | Near Me Interiors`,
    description: post.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'description': post.summary,
    'image': post.image,
    'datePublished': post.publishedAt,
    'author': {
      '@type': 'Person',
      'name': post.author.name,
      'jobTitle': post.author.role
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Near Me Interiors',
      'logo': 'https://auraarch.agency/logo.png'
    }
  };

  // Simple parser to render headers and paragraphs nicely
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith('# ')) {
        return (
          <h1 key={idx} className="font-heading text-3xl sm:text-4xl font-extrabold text-brand-primary mt-8 mb-4">
            {trimmed.substring(2)}
          </h1>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} className="font-heading text-2xl sm:text-3xl font-bold text-brand-primary mt-8 mb-3">
            {trimmed.substring(3)}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="font-heading text-xl sm:text-2xl font-bold text-brand-primary mt-6 mb-2">
            {trimmed.substring(4)}
          </h3>
        );
      }
      if (trimmed.startsWith('- ')) {
        return (
          <li key={idx} className="text-brand-muted text-sm sm:text-base ml-6 list-disc mb-1.5 leading-relaxed">
            {trimmed.substring(2)}
          </li>
        );
      }
      if (/^\d+\.\s/.test(trimmed)) {
        return (
          <li key={idx} className="text-brand-muted text-sm sm:text-base ml-6 list-decimal mb-1.5 leading-relaxed">
            {trimmed.replace(/^\d+\.\s/, '')}
          </li>
        );
      }
      if (trimmed === '') {
        return <div key={idx} className="h-4"></div>;
      }
      return (
        <p key={idx} className="text-brand-muted text-sm sm:text-base leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="flex-1 bg-brand-bg pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-muted hover:text-brand-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            BACK TO ARTICLES
          </Link>

          {/* Article Header */}
          <header className="space-y-6 mb-10 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-primary leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-y border-slate-200/60 py-4">
              {/* Author details */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full object-cover shadow-sm"
                />
                <div>
                  <Link href={`/blog/author/${post.author.slug}`} className="block text-brand-primary text-sm font-bold hover:underline">
                    {post.author.name}
                  </Link>
                  <span className="block text-[10px] text-brand-muted font-semibold">{post.author.role}</span>
                </div>
              </div>

              {/* Publish details */}
              <div className="flex items-center gap-4 text-xs text-brand-muted font-semibold">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-12 shadow-xl border border-white/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Share Panel (Sticky left on desktop) */}
            <div className="lg:col-span-2 lg:sticky lg:top-28 flex lg:flex-col gap-3 justify-center lg:justify-start items-center">
              <span className="text-[10px] uppercase font-bold text-brand-muted tracking-wider lg:mb-2 flex items-center gap-1">
                <Share2 className="h-3.5 w-3.5" />
                Share
              </span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://auraarch.agency/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-brand-secondary hover:text-white rounded-xl border border-slate-200/60 shadow-sm text-brand-primary transition-all cursor-pointer"
                title="Share on LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://auraarch.agency/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-brand-secondary hover:text-white rounded-xl border border-slate-200/60 shadow-sm text-brand-primary transition-all cursor-pointer"
                title="Share on Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://auraarch.agency/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-brand-secondary hover:text-white rounded-xl border border-slate-200/60 shadow-sm text-brand-primary transition-all cursor-pointer"
                title="Share on Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-10 bg-white p-6 sm:p-10 rounded-2xl border border-slate-100 shadow-sm text-left">
              {renderContent(post.content)}

              {/* Tags Section */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-brand-bg rounded-lg text-xs font-semibold text-brand-primary">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
