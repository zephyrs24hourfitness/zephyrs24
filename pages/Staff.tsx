
import React from 'react';
import { motion } from 'framer-motion';
import { StaffMember } from '../types';

const owners = [
  {
    name: "Mike Jarrett",
    role: ["Owner"],
    image: "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/2461c42b-601a-4512-b2f2-fc62c8f4456b/Mike+Jarrett.jpg?format=1000w",
  },
  {
    name: "Diane Jarrett",
    role: ["Owner"],
    image: "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/fa19ba83-cf21-403e-a1f8-a31a66fd2e72/Diane+Jarrett.jpg?format=1000w",
  }
];

const staff: StaffMember[] = [
  {
    name: "George Treadwell",
    role: ["CrossFit Manager", "CrossFit L-2 Trainer", "Certified Personal Trainer", "Certified Nutrition Coach"],
    image: "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/f394cea6-fb30-4b87-88c2-3705f1886417/DSC_1363+2.jpg?format=1000w"
  },
  {
    name: "Maddie Fuller",
    role: ["Attorney by day", "CrossFit L-2 Trainer"],
    image: "https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/20f1d6cf-73fd-457f-9c88-f18bff9e3ed6/DSC_1375.jpg?format=1000w"
  },
  {
    name: "Micah",
    role: ["Facilities Leader", "Attendant"],
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" // Placeholder image
  }
];

const Staff: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">
      
      {/* Hero Section */}
      <div className="relative pt-16 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 bg-brand-black overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl sm:text-5xl md:text-7xl font-bold uppercase text-white mb-4 md:mb-6"
          >
            Meet The <span className="text-brand-red">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide"
          >
            THE PEOPLE WHO MAKE IT HAPPEN
          </motion.p>
        </div>
      </div>

      {/* Owners Section */}
      <section className="py-12 md:py-16 bg-brand-dark relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
                {owners.map((owner, index) => (
                    <motion.div 
                        key={owner.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative group"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-sm border-2 border-white/10 group-hover:border-brand-red transition-colors duration-500">
                            <img 
                                src={owner.image} 
                                alt={owner.name} 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="mt-3 md:mt-4 text-center">
                            <h3 className="font-display text-lg md:text-2xl font-bold uppercase text-white">{owner.name}</h3>
                            <p className="text-brand-red text-xs md:text-sm font-bold uppercase tracking-widest">Owner</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bio Text */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4 md:space-y-6"
            >
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white mb-3 md:mb-4">
                    Our <span className="text-brand-red">Story</span>
                </h2>
                <div className="h-1 w-16 md:w-24 bg-brand-red mb-6 md:mb-8"></div>
                <div className="text-gray-300 leading-relaxed space-y-4 md:space-y-6 font-light text-base md:text-lg">
                    <p>
                        Zephyrs Barbell Gym was started in 1975 by Tom Galehouse. Located in Smithville, OH the gym was home to many men and women in Wayne County who sought to better themselves, not just physically but mentally and emotionally as well.
                    </p>
                    <p>
                        Mike and Diane purchased Zephyrs from Tom in 2006. In 2012, they continued the Zephyrs legacy and moved Zephyrs Fitness from Smithville to Orrville. In 2013, CrossFit Orrville was born and is located next door.
                    </p>
                    <p className="font-medium text-white">
                        These gyms are home to many community members, area locals and the corporate wellness facility for Jarrett employees!
                    </p>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-12 md:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {staff.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-brand-gray group relative overflow-hidden rounded-sm border border-white/5 hover:border-brand-red/50 transition-all duration-500"
                    >
                        <div className="aspect-[3/4] overflow-hidden relative">
                            <div className="absolute inset-0 bg-brand-red/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5 md:p-8 text-center relative z-20 bg-brand-gray">
                            <h3 className="font-display text-lg md:text-2xl font-bold uppercase text-white mb-3 md:mb-4">{member.name}</h3>
                            <div className="space-y-1">
                                {member.role.map((r, i) => (
                                    <p key={i} className="text-gray-400 text-xs md:text-sm uppercase tracking-wider font-medium">{r}</p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    </div>
  );
};

export default Staff;
