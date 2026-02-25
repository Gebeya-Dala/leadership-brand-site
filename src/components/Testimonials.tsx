import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Success Ituma was a turning point in my career. His ability to cut through the noise and focus on what truly matters is unparalleled.",
    author: "Sarah Jenkins",
    role: "CEO, InnovateTech",
    image: "https://i.pravatar.cc/100?img=32"
  },
  {
    quote: "The leadership retreat led by Success was transformative for our executive team. We've never been more aligned or more effective.",
    author: "David Chen",
    role: "Managing Director, Global Finance",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    quote: "If you're looking for someone who will challenge you and support you in equal measure, Success is the coach for you.",
    author: "Marcus Thorne",
    role: "Founder, GreenScale",
    image: "https://i.pravatar.cc/100?img=53"
  }
];

const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 bg-[#111827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Quote className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Voices</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Hear from the visionary leaders who have partnered with Success Ituma.</p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <div className="bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl h-full flex flex-col justify-between border border-slate-700/50">
                  <p className="text-lg italic text-slate-300 leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-12 h-12 rounded-full mr-4 border-2 border-[#D4AF37]"
                    />
                    <div>
                      <h4 className="font-bold text-white">{t.author}</h4>
                      <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
                <div key={i} className={`h-1 rounded-full transition-all ${i === 0 ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-slate-700'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;