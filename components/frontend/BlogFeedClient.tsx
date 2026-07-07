'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/agencyData';

const categories = [
  'All',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Instagram Growth',
  'Lead Generation',
  'Interior Design Marketing',
  'Local SEO',
  'Case Studies',
  'Resources'
];

export default function BlogFeedClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Blog Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-bold mb-4">
          <BookOpen className="h-3.5 w-3.5" />
          Growth Intelligence Hub
        </span>
        <h1 className="font-heading text-4xl font-extrabold text-brand-primary tracking-tight sm:text-5xl">
          Aura &amp; Arch dispatch
        </h1>
        <p className="text-brand-muted text-base sm:text-lg mt-4 leading-relaxed">
          Operational blueprints, case breakdowns, and marketing strategy engineered exclusively for luxury architectural and interior design studios.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="space-y-6 mb-12">
        <div className="max-w-xl mx-auto relative">
          <Search className="absolute left-3 top-3.5 h-5 w-5 text-brand-muted" />
          <input
            type="text"
            placeholder="Search articles, marketing playbooks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-secondary text-brand-primary shadow-sm"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-brand-primary border border-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
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

                  <p className="text-brand-muted text-sm leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div>
                    <span className="block text-brand-primary text-xs font-bold leading-tight">
                      {post.author.name}
                    </span>
                    <span className="block text-[9px] text-brand-muted font-semibold">
                      {post.author.role}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-brand-secondary hover:text-brand-secondary/80 font-bold text-xs flex items-center gap-1"
                >
                  Read spec
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl max-w-xl mx-auto border border-slate-100">
          <span className="text-4xl">🔍</span>
          <h3 className="font-heading font-bold text-brand-primary text-lg mt-4">No Articles Found</h3>
          <p className="text-brand-muted text-sm mt-1">Try expanding your category search criteria.</p>
        </div>
      )}
    </div>
  );
}
