import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, HeartPulse, Zap, Trophy, ShowerHead, CupSoda, Clock, ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/76d2f848-6433-4b39-9724-d3a28b6d93b0/1A1A2233.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/83babead-acd4-480d-97b9-48bb246bbbb3/1A1A2398.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/9da04d26-30c3-4166-bc06-45e632573607/1A1A2499.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/013e4dda-5742-4ae3-a61c-ae01454eeb5f/1A1A2549.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/46431f1a-5898-4489-a897-24521dfe0108/1A1A2555.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/64d0e6fa-39b6-482c-b5e5-727b081d533b/1A1A2586.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/9c5737b9-de53-4b07-aecc-fd5fabaf5c44/1A1A2597.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/0ff514be-b504-448b-9713-2f0a4d381ae4/1A1A2616.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/d1cb7f0c-df81-4e64-8d8c-9dab48e1a64a/1A1A2642.jpg?format=1500w",
];

const features = [
  {
    title: "Strength Training",
    description: "Massive selection of free weights, power racks, and plate-loaded machines for serious lifters.",
    icon: <Dumbbell className="w-8 h-8 text-brand-red" />
  },
  {
    title: "Cardio Zone",
    description: "State-of-the-art treadmills, rowers, bikes, and ellipticals to keep your heart rate up.",
    icon: <HeartPulse className="w-8 h-8 text-brand-red" />
  },
  {
    title: "Functional Fitness",
    description: "Dedicated turf area, sleds, kettlebells, and rigs for functional movement and CrossFit.",
    icon: <Zap className="w-8 h-8 text-brand-red" />
  },
  {
    title: "Pickleball Courts",
    description: "Indoor professional-grade courts available for booking and league play.",
    icon: <Trophy className="w-8 h-8 text-brand-red" />
  },
  {
    title: "Recovery Room",
    description: "Sauna, cold plunge, and mobility tools to help you recover faster and train harder.",
    icon: <ShowerHead className="w-8 h-8 text-brand-red" />
  },
  {
    title: "Power Bar",
    description: "Protein smoothies, recovery drinks, and supplements available at our in-house Power Bar.",
    icon: <CupSoda className="w-8 h-8 text-brand-red" />
  },
  {
    title: "24/7 + Essentials",
    description: "24-hour access, clean lockers and showers, plus free Wi-Fi for members.",
    icon: <Clock className="w-8 h-8 text-brand-red" />
  }
];

const Amenities: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="bg-brand-black min-h-screen">
      
      {/* Hero Section */}
      <div className="relative pt-16 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase text-white mb-4 md:mb-6"
          >
            Our <span className="text-brand-red">Facility</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            <span className="font-bold text-brand-red">30,000 square feet</span> tailored for your fitness needs. 
            From elite powerlifting equipment to comprehensive cardio decks, we provide the environment you need to succeed.
          </motion.p>
        </div>
      </div>

      {/* Feature Grid */}
      <section className="py-12 md:py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-gray/50 border border-white/5 p-6 md:p-8 rounded-sm hover:border-brand-red/30 hover:bg-brand-gray transition-all group"
              >
                <div className="mb-4 md:mb-6 bg-brand-black inline-block p-3 md:p-4 rounded-full border border-white/10 group-hover:border-brand-red transition-colors">
                  <Dumbbell className="w-6 md:w-8 h-6 md:h-8 text-brand-red" />
                </div>
                <h3 className="font-display text-lg md:text-2xl font-bold uppercase text-white mb-2 md:mb-3 group-hover:text-brand-red transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white mb-3 md:mb-4">Gallery</h2>
            <div className="h-1 w-16 md:w-24 bg-brand-red mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group overflow-hidden aspect-[4/3] bg-brand-gray cursor-pointer rounded-sm tap-highlight-transparent"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={src} 
                  alt={`Zephyrs Fitness Facility ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-bold uppercase tracking-widest text-xs md:text-sm flex items-center gap-2">
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4 touch-none"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={images[selectedImageIndex]}
                alt={`Gallery image ${selectedImageIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-sm"
              />

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/10 hover:bg-white/20 transition-colors rounded-full p-2 md:p-3 backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close gallery"
              >
                <X className="w-5 md:w-6 h-5 md:h-6 text-white" />
              </motion.button>

              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-brand-red hover:bg-brand-red/80 transition-colors rounded-full p-2 md:p-3 backdrop-blur-sm z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 md:w-8 h-5 md:h-8 text-white" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-brand-red hover:bg-brand-red/80 transition-colors rounded-full p-2 md:p-3 backdrop-blur-sm z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 md:w-8 h-5 md:h-8 text-white" />
              </motion.button>

              {/* Image Counter */}
              <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/20">
                <p className="text-white font-semibold text-center text-sm md:text-base">
                  {selectedImageIndex + 1} / {images.length}
                </p>
              </div>

              {/* Keyboard Hint */}
              <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 text-white/50 text-xs md:text-sm text-center px-2">
                <p>← Arrow Keys → | ESC to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-brand-red text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-4xl md:text-6xl font-bold uppercase mb-6 md:mb-8">Experience It Yourself</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-12">Stop by for a tour or grab a day pass to see what makes Zephyrs unique.</p>
          <a 
            href="https://zfitness.gymmasteronline.com/portal/login" 
            target="_blank"
            rel="noreferrer" 
            className="inline-block bg-white text-brand-red px-6 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300 skew-x-[-10deg] min-h-[44px] flex items-center"
          >
            <span className="block skew-x-[10deg]">Get A Day Pass</span>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Amenities;