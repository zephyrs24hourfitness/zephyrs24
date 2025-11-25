
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-6"
          >
            Contact <span className="text-brand-red">Us</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-white font-display uppercase tracking-widest mb-4"
          >
            Ready to change your life? <span className="text-gray-500">Let’s talk.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }} 
            className="text-brand-red font-mono text-sm uppercase tracking-widest"
          >
            We try to return emails in 24 hours or less.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-brand-dark p-8 md:p-12 border border-white/5 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-1 bg-brand-red"></div>
            <h3 className="font-display text-3xl font-bold uppercase text-white mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-brand-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors rounded-sm placeholder-gray-700"
                    placeholder="ENTER NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-brand-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors rounded-sm placeholder-gray-700"
                    placeholder="ENTER EMAIL"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject *</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-brand-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors rounded-sm placeholder-gray-700"
                  placeholder="HOW CAN WE HELP?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Message *</label>
                <textarea 
                  id="message"
                  rows={6}
                  className="w-full bg-brand-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-brand-red transition-colors rounded-sm placeholder-gray-700 resize-none"
                  placeholder="TELL US ABOUT YOUR GOALS..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-white text-brand-black font-bold uppercase tracking-[0.2em] py-4 hover:bg-brand-red hover:text-white transition-all duration-300 group skew-x-[-3deg]"
              >
                <span className="block skew-x-[3deg] flex items-center justify-center gap-2">
                  Submit Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-12"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-gray p-8 border-l-2 border-brand-red">
                <MapPin className="text-brand-red mb-4 h-8 w-8" />
                <h4 className="font-display text-xl font-bold uppercase text-white mb-2">Location</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  1330 North Main Street<br />
                  Orrville, OH, 44667
                </p>
              </div>
              
              <div className="bg-brand-gray p-8 border-l-2 border-white/20 hover:border-brand-red transition-colors group">
                <Clock className="text-brand-red mb-4 h-8 w-8" />
                <h4 className="font-display text-xl font-bold uppercase text-white mb-2">Staffed Hours</h4>
                <div className="text-gray-400 text-xs leading-relaxed space-y-1">
                  <p className="flex justify-between"><span className="text-white">Mon-Fri:</span> 7 AM - 7 PM</p>
                  <p className="flex justify-between"><span className="text-white">Saturday:</span> 7 AM - 1 PM</p>
                  <p className="flex justify-between"><span className="text-white">Sunday:</span> 12:30 PM - 4:30 PM</p>
                  <p className="text-brand-red pt-2 font-bold uppercase">24/7 Member Access</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-brand-gray p-2 border border-white/5 rounded-sm">
              <div className="aspect-square md:aspect-[16/9] w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.5662927681935!2d-81.76533838458135!3d40.85524287931654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88376e0f60379775%3A0x1e9306083d25f2c2!2s1330%20N%20Main%20St%2C%20Orrville%2C%20OH%2044667!5e0!3m2!1sen!2sus!4v1679600000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zephyrs Fitness Location"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
               <div className="flex-1 bg-brand-dark p-6 border border-white/5 flex items-center gap-4">
                  <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Call Us</p>
                    <p className="text-white font-bold font-display text-xl">(866) 414-5438</p>
                  </div>
               </div>
               <div className="flex-1 bg-brand-dark p-6 border border-white/5 flex items-center gap-4">
                  <div className="bg-brand-red/10 p-3 rounded-full text-brand-red">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Email Us</p>
                    <p className="text-white font-bold font-display text-xl">info@zephyrs24.com</p>
                  </div>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
