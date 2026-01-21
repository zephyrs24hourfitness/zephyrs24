
import React from 'react';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
                 <img 
                  src="https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/76744405-b887-44b5-a205-2d18aade22c7/cross_logo_transparent.png?format=1500w" 
                  alt="Zephyrs Fitness Logo" 
                  className="h-12 w-auto"
                />
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Founded in 1975. We believe that no matter what stage of life or health, anyone will benefit from our programming and expert staff guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/zephyrsfitness/" target="_blank" rel="noreferrer" className="text-white hover:text-brand-red transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/Zephyrsfitness/" target="_blank" rel="noreferrer" className="text-white hover:text-brand-red transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white uppercase tracking-widest border-l-4 border-brand-red pl-3">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3 group">
                <MapPin className="text-brand-red shrink-0 group-hover:text-white transition-colors" size={20} />
                <span>1330 North Main Street<br />Orrville, OH, 44667</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="text-brand-red shrink-0 group-hover:text-white transition-colors" size={20} />
                <span>(866) 414-5438</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="text-brand-red shrink-0 group-hover:text-white transition-colors" size={20} />
                <span>frontdesk@zephyrs24.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-white uppercase tracking-widest border-l-4 border-brand-red pl-3">Staffed Hours</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">7:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white font-medium">7:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white font-medium">12:30 PM - 4:30 PM</span>
              </li>
              <li className="mt-4 text-brand-red font-bold uppercase text-xs tracking-wider">
                24/7 Access for Members
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zephyrs Fitness. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
