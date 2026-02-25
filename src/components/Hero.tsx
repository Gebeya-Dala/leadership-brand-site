import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
            <span className="text-sm font-bold tracking-widest uppercase text-slate-500">
              Elite Leadership Coaching
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Elevate Your <br />
            <span className="text-[#D4AF37]">Visionary</span> Potential
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Collins Munir empowers executives and founders to master their influence, 
            scale their impact, and lead with unparalleled clarity in a complex world.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-center hover:bg-slate-800 transition-all flex items-center justify-center group shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-slate-200 text-slate-900 rounded-full font-bold text-center hover:bg-slate-50 transition-all"
            >
              View Services
            </a>
          </div>
          <div className="mt-12 flex items-center space-x-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 font-medium">
              Trusted by 500+ global leaders
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white">
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1de79085-df8d-48c5-bb20-5902983075bb/hero-success-ituma-e637ccaa-1772026282300.webp"
              alt="Collins Munir"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D4AF37] -z-0 rounded-2xl opacity-20 blur-2xl"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#D4AF37] -z-0 rounded-full opacity-10 blur-3xl"></div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D4AF37]/5 -skew-x-12 transform origin-top-right"></div>
    </section>
  );
};

export default Hero;