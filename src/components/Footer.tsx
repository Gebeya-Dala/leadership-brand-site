import React from 'react';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <span className="text-3xl font-bold tracking-tighter mb-6 block">
              SUCCESS<span className="text-[#D4AF37]">ITUMA</span>
            </span>
            <p className="text-slate-400 text-lg mb-8 max-w-sm leading-relaxed">
              Empowering global leaders to master their influence and lead with clarity in a complex world.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#D4AF37] transition-all group">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#speaking" className="hover:text-white transition-colors">Speaking</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm">Get exclusive leadership insights delivered to your inbox.</p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="your@email.com" 
                 className="bg-slate-800 border-none rounded-xl px-5 py-3 text-white focus:ring-1 focus:ring-[#D4AF37]"
               />
               <button className="bg-[#D4AF37] text-white py-3 rounded-xl font-bold hover:bg-[#B8962F] transition-all">
                 Subscribe
               </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 Success Ituma. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;