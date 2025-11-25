
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Activity, Users, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-brand-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed"></div>
        
        {/* Animated Particles/Grid Effect */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-brand-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-block mb-6 border border-brand-red/50 bg-black/60 backdrop-blur-md px-6 py-2 rounded-sm">
                <p className="text-brand-red font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                Est. 1975 • Orrville, OH
                </p>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-display text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-[0.9] mb-8 text-white drop-shadow-2xl tracking-tighter">
              Come As <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">You Are</span>
            </motion.h1>
            
            <motion.h3 variants={fadeInUp} className="font-display text-xl md:text-3xl font-bold uppercase text-brand-red mb-12 tracking-[0.15em]">
              Leave better than you came
            </motion.h3>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <NavLink to="/plans-and-rates" className="group relative px-10 py-4 bg-brand-red text-white font-bold uppercase tracking-wider overflow-hidden skew-x-[-10deg] hover:bg-red-700 transition-all shadow-lg hover:shadow-red-900/40 min-w-[200px]">
                <span className="relative z-10 block skew-x-[10deg]">Start Now</span>
              </NavLink>
              <NavLink to="/amenities" className="px-10 py-4 border-2 border-white/20 bg-black/30 backdrop-blur-sm text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 skew-x-[-10deg] min-w-[200px]">
                <span className="block skew-x-[10deg]">Amenities</span>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section (Content from Original HTML) */}
      <section className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
        {/* Decorative BG Element */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="relative group">
                  <div className="absolute -inset-4 border-2 border-brand-red/20 transform -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  <img 
                    src="https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/fd54a208-f79d-466c-8253-73535bab06a4/Murph+Family+Pic.JPG?format=2500w" 
                    alt="Zephyrs Community" 
                    className="relative z-10 w-full h-auto object-cover shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
                  />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                 <div className="h-px w-12 bg-brand-red"></div>
                 <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Our History</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold uppercase mb-8 leading-none text-white">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-900">Us</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  Zephyrs Fitness, formally known as Zephyrs Barbell Gym, was founded in 1975 by Tom Galehouse. 
                  Zephyrs became a beacon of hope and strength for countless young men and women who sought to better themselves, 
                  not just physically but mentally and emotionally as well.
                </p>
                <p>
                  In 2007, Mike and Diane Jarrett purchased Zephyrs and in 2012, Mike and Diane moved Zephyrs from where it 
                  originated to a 30,000 square foot facility in Orrville, OH.
                </p>
                <div className="bg-white/5 p-8 border-l-2 border-brand-red mt-8">
                  <p className="font-display font-bold text-white text-2xl uppercase tracking-wide italic">
                    "Do ordinary life, better."
                  </p>
                  <p className="text-brand-red text-xs mt-4 uppercase tracking-[0.2em] font-bold">- CrossFit Orrville Mission</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-4">Our Offerings</h2>
                <div className="h-1 w-32 bg-brand-red mx-auto"></div>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
                {/* Feature 1 */}
                <motion.div variants={fadeInUp} className="bg-brand-dark p-10 border border-white/5 hover:border-brand-red/50 transition-all group relative overflow-hidden rounded-sm hover:bg-brand-gray">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <Activity className="w-40 h-40" />
                    </div>
                    <Activity className="w-12 h-12 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-3xl font-bold uppercase mb-4 text-white">CrossFit Orrville</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                        Constantly varied, high-intensity functional movement. Our flagship program designed to forge broad, general, and inclusive fitness for everyone.
                    </p>
                    <NavLink to="/crossfit" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-red transition-colors">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </NavLink>
                </motion.div>

                {/* Feature 2 */}
                <motion.div variants={fadeInUp} className="bg-brand-dark p-10 border border-white/5 hover:border-brand-red/50 transition-all group relative overflow-hidden rounded-sm hover:bg-brand-gray">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <Users className="w-40 h-40" />
                    </div>
                    <Users className="w-12 h-12 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-3xl font-bold uppercase mb-4 text-white">Pickleball</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                        The fastest growing sport in America. Join our leagues, open play, or book a court. Fun, social, and a great workout for all ages.
                    </p>
                     <NavLink to="/pickleball" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-red transition-colors">
                        Book Court <ArrowRight className="ml-2 w-4 h-4" />
                    </NavLink>
                </motion.div>

                {/* Feature 3 */}
                <motion.div variants={fadeInUp} className="bg-brand-dark p-10 border border-white/5 hover:border-brand-red/50 transition-all group relative overflow-hidden rounded-sm hover:bg-brand-gray">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <Zap className="w-40 h-40" />
                    </div>
                    <Zap className="w-12 h-12 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-display text-3xl font-bold uppercase mb-4 text-white">Open Gym</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                        30,000 sq ft of free weights, machines, cardio equipment, and recovery tools. Access 24/7 with specific membership plans.
                    </p>
                     <NavLink to="/amenities" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-brand-red transition-colors">
                        Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </NavLink>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Stats / Proof */}
      <section className="py-24 bg-brand-red text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                <div className="p-4">
                    <div className="font-display text-6xl md:text-7xl font-bold mb-2">30k</div>
                    <div className="font-sans font-bold uppercase tracking-widest text-xs opacity-80">Square Feet</div>
                </div>
                <div className="p-4">
                    <div className="font-display text-6xl md:text-7xl font-bold mb-2">1975</div>
                    <div className="font-sans font-bold uppercase tracking-widest text-xs opacity-80">Established</div>
                </div>
                <div className="p-4">
                    <div className="font-display text-6xl md:text-7xl font-bold mb-2">24/7</div>
                    <div className="font-sans font-bold uppercase tracking-widest text-xs opacity-80">Access</div>
                </div>
                <div className="p-4">
                    <div className="font-display text-6xl md:text-7xl font-bold mb-2">100%</div>
                    <div className="font-sans font-bold uppercase tracking-widest text-xs opacity-80">Community</div>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-brand-dark flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-display text-5xl md:text-8xl font-bold uppercase mb-8 text-white leading-[0.9] drop-shadow-2xl">
                Ready to <span className="text-brand-red">Transform?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light">
                Join the community that pushes you to be your best self. Inclusive fitness for every stage of life.
            </p>
            <a href="https://zfitness.gymmasteronline.com/portal/signup" target="_blank" rel="noreferrer" className="inline-block bg-brand-red text-white font-display text-2xl font-bold uppercase py-5 px-12 transform skew-x-[-10deg] hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-900/50">
                <span className="block skew-x-[10deg]">I'm Ready To Join</span>
            </a>
         </div>
      </section>
    </div>
  );
};

export default Home;
