import React from 'react';
import { ArrowRight } from 'lucide-react';

const BookingCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#FAF9F6] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 max-w-3xl mx-auto leading-tight">
              Ready to redefine your <span className="text-[#D4AF37]">leadership legacy</span>?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the clarity and impact that comes from expert coaching. 
              Schedule your introductory consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#contact"
                className="w-full sm:w-auto px-10 py-5 bg-[#D4AF37] text-white rounded-full font-bold text-lg hover:bg-[#B8962F] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-slate-500 font-medium">Limited spots available for Q4</p>
            </div>
          </div>
          
          {/* Background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;