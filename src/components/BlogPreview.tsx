import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "The Art of Radical Clarity",
    excerpt: "How top executives maintain focus in an increasingly noisy world through purposeful stillness.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1de79085-df8d-48c5-bb20-5902983075bb/blog-post-1-8e611160-1772026281717.webp",
    date: "Jan 12, 2024",
    tag: "Leadership"
  },
  {
    title: "Building High-Trust Remote Teams",
    excerpt: "The fundamental shifts required to foster deep trust and accountability across distributed organizations.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1de79085-df8d-48c5-bb20-5902983075bb/blog-post-2-f50f074d-1772026287695.webp",
    date: "Dec 20, 2023",
    tag: "Culture"
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Insights</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">Thought Leadership</h2>
          </div>
          <a href="#" className="flex items-center font-bold text-slate-900 hover:text-[#D4AF37] transition-colors group">
            Explore All Insights
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 uppercase tracking-widest">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="flex items-center text-slate-400 text-sm mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-[#D4AF37] transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="h-px w-full bg-slate-100 group-hover:bg-[#D4AF37]/30 transition-colors"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;