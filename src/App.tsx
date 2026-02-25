import React from 'react';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Speaking from './components/Speaking';
import Testimonials from './components/Testimonials';
import BlogPreview from './components/BlogPreview';
import BookingCTA from './components/BookingCTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#D4AF37]/30 selection:text-slate-900">
      <Toaster position="top-right" expand={false} richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Speaking />
        <Testimonials />
        <BlogPreview />
        <BookingCTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;