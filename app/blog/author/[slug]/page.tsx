import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
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
    slug: post.author.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.author.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Author Profile Not Found',
    };
  }

  return {
    title: `${post.author.name} | Near Me Interiors Author`,
    description: `Read professional guides and industry marketing analyses compiled by ${post.author.name}.`,
    alternates: {
      canonical: `/blog/author/${resolvedParams.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.author.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const author = post.author;
  const filteredPosts = blogPosts.filter((p) => p.author.slug === author.slug);

  return (
    <>
      <Header />
      <main className="flex-1 bg-brand-bg pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-muted hover:text-brand-secondary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            BACK TO ALL DISPATCHES
          </Link>

          {/* Author Profile Bio Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-8 mb-12 text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={author.avatar}
              alt={author.name}
              className="h-24 w-24 rounded-full object-cover shadow-md shrink-0"
            />
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase">
                <BookOpen className="h-3.5 w-3.5" />
                CONTRIBUTOR PROFILE
              </span>
              <h1 className="font-heading text-3xl font-extrabold text-brand-primary">
                {author.name}
              </h1>
              <p className="text-brand-muted text-xs sm:text-sm font-semibold">
                {author.role} at Aura &amp; Arch
              </p>
              <p className="text-brand-muted text-sm leading-relaxed max-w-2xl">
                {author.bio}
              </p>
            </div>
          </div>

          <div className="mb-8 text-left">
            <h3 className="font-heading text-xl font-bold text-brand-primary">
              Articles Compiled by {author.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between text-left"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-brand-muted font-semibold">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime}
                      </span>
                      <span>{article.publishedAt}</span>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-brand-primary group-hover:text-brand-secondary transition-colors leading-tight">
                      <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{article.summary}</p>
                  </div>
                </div>
                <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-brand-secondary">
                    {article.category}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-brand-secondary hover:text-brand-secondary/80 font-bold text-xs flex items-center gap-1"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      <ExitIntentPopup />
    </>
  );
}
