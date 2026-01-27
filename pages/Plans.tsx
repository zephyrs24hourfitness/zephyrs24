
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Trophy, ArrowRight, Calendar } from 'lucide-react';

type BillingCycle = 'monthly' | 'quarterly' | 'yearly';

interface PlanPrice {
  monthly: string;
  quarterly: string;
  yearly: string;
}

interface PricingPlan {
  id: string;
  name: string;
  prices: PlanPrice;
  description: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
  marriedOption?: {
    monthly: string;
    quarterly: string;
    yearly: string;
  };
  urls: PlanPrice;
  marriedUrls?: PlanPrice;
}

const plans: PricingPlan[] = [
  {
    id: 'bronze',
    name: 'Zephyrs Bronze',
    prices: {
      monthly: '$45.80',
      quarterly: '$122.48',
      yearly: '$346.12'
    },
    urls: {
      monthly: 'https://zfitness.gymmasteronline.com/portal/signup/details/fdd3f8e7b7b665f88fb3722d81785a37',
      quarterly: 'https://zfitness.gymmasteronline.com/portal/signup/details/abf458fb4405c6713c878ff0800776a6',
      yearly: 'https://zfitness.gymmasteronline.com/portal/signup/details/3184baa5a0ccf53a8b1021ea9fb66c71'
    },
    description: 'Standard 24/7 gym access for the independent fitness enthusiast.',
    features: [
      { text: '24/7 access to Zephyrs Fitness', included: true },
      { text: 'Discounted Pickleball ($13.31/hr)', included: true },
      { text: 'Unlimited CrossFit Open Gym', included: false },
      { text: 'Coach-led CrossFit classes', included: false },
      { text: 'Recovery Room access', included: false },
    ],
    isPopular: false
  },
  {
    id: 'silver',
    name: 'Zephyrs Silver',
    prices: {
      monthly: '$131.53',
      quarterly: '$333.88',
      yearly: '$1,092.69'
    },
    urls: {
      monthly: 'https://zfitness.gymmasteronline.com/portal/signup/details/8426ca46d0fcd50a36def1bdd49ca1e2',
      quarterly: 'https://zfitness.gymmasteronline.com/portal/signup/details/5846131a7778b85ed9ad8fd38bde2c05',
      yearly: 'https://zfitness.gymmasteronline.com/portal/signup/details/ea79b0b203d2ba9764735c604c050e9a'
    },
    marriedOption: {
        monthly: '$197.29',
        quarterly: '$500.82',
        yearly: '$1,639.04'
    },
    marriedUrls: {
      monthly: 'https://zfitness.gymmasteronline.com/portal/signup/details/4de52c3f4d733f39fd9c17b0cf682354',
      quarterly: 'https://zfitness.gymmasteronline.com/portal/signup/details/144d5b90aef43acca5fbcc3720d02853',
      yearly: 'https://zfitness.gymmasteronline.com/portal/signup/details/c20babc70ada2dd154f3febee0082ac0'
    },
    description: 'The perfect balance of class training and open gym freedom.',
    features: [
      { text: '5 CrossFit classes per month', included: true },
      { text: 'Unlimited CrossFit Open Gym', included: true },
      { text: '24/7 access to Zephyrs Fitness', included: true },
      { text: 'Unlimited Recovery Room access', included: true },
      { text: 'Discounted Pickleball ($13.31/hr)', included: true },
    ],
    isPopular: false
  },
  {
    id: 'gold',
    name: 'Zephyrs Gold',
    prices: {
      monthly: '$151.76',
      quarterly: '$424.94',
      yearly: '$1,456.92'
    },
    urls: {
      monthly: 'https://zfitness.gymmasteronline.com/portal/signup/details/45a5568562ec9a69418a9061473f77c4',
      quarterly: 'https://zfitness.gymmasteronline.com/portal/signup/details/c335d4bc7fe91f112d6f94f534406cc2',
      yearly: 'https://zfitness.gymmasteronline.com/portal/signup/details/1d1f00fd74e7aeba336d860af22def73'
    },
    marriedOption: {
        monthly: '$227.64',
        quarterly: '$637.40',
        yearly: '$2,185.38'
    },
    marriedUrls: {
      monthly: 'https://zfitness.gymmasteronline.com/portal/signup/details/1316caff197b2a2116d4bfb676085c78',
      quarterly: 'https://zfitness.gymmasteronline.com/portal/signup/details/a70a1067666a95c217f72c96649319ab',
      yearly: 'https://zfitness.gymmasteronline.com/portal/signup/details/ae25f096a042dd85b82b851b4669d3ff'
    },
    description: 'The ultimate all-inclusive experience. No limits.',
    features: [
      { text: 'Unlimited CrossFit classes', included: true },
      { text: 'Unlimited CrossFit Open Gym', included: true },
      { text: '24/7 access to Zephyrs Fitness', included: true },
      { text: 'Unlimited Recovery Room access', included: true },
      { text: 'Discounted Pickleball ($13.31/hr)', included: true },
    ],
    isPopular: true
  },
  {
    id: 'youth',
    name: 'Youth (18 & Under)',
    prices: {
      monthly: '$31.95',
      quarterly: '$79.88',
      yearly: '$255.60'
    },
    urls: {
      monthly: 'https://zfitness.gymmasteronline.com/portal/signup/details/d18c8c50e1abd980c5fe2482b0627fab',
      quarterly: 'https://zfitness.gymmasteronline.com/portal/signup/details/a790703560d0d9b8fc774a44a8adfc4f',
      yearly: 'https://zfitness.gymmasteronline.com/portal/signup/details/552166d15eabfab67a31caa25d0d94a9'
    },
    description: 'Building healthy habits early. 24/7 access for ages 18 & under.',
    features: [
      { text: '24/7 access to Zephyrs Fitness', included: true },
      { text: 'Discounted Pickleball ($13.31/hr)', included: true },
      { text: 'Unlimited CrossFit Open Gym', included: false },
      { text: 'Coach-led CrossFit classes', included: false },
      { text: 'Recovery Room access', included: false },
    ],
    isPopular: false
  }
];

const Plans: React.FC = () => {
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  return (
    <div className="bg-brand-black min-h-screen pt-24 pb-20">
      
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 pt-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-4"
        >
          Plans & <span className="text-brand-red">Rates</span>
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 font-display uppercase tracking-widest mb-8"
        >
          Choose the plan that fits your goals
        </motion.h2>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
            <div className="bg-brand-dark border border-white/10 p-1 rounded-full flex items-center relative">
                <button 
                    onClick={() => setBilling('monthly')}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative z-10 ${billing === 'monthly' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Monthly
                </button>
                <button 
                    onClick={() => setBilling('quarterly')}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative z-10 ${billing === 'quarterly' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Quarterly
                </button>
                <button 
                    onClick={() => setBilling('yearly')}
                    className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 relative z-10 ${billing === 'yearly' ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    Yearly
                </button>
                
                {/* Sliding Background */}
                <div className={`absolute top-1 bottom-1 bg-brand-red rounded-full transition-all duration-300 shadow-lg`}
                    style={{
                        left: billing === 'monthly' ? '4px' : billing === 'quarterly' ? '33.33%' : '66.66%',
                        width: billing === 'monthly' ? 'calc(33.33% - 4px)' : billing === 'quarterly' ? '33.33%' : 'calc(33.33% - 4px)',
                        transform: billing === 'yearly' ? 'translateX(-4px)' : billing === 'quarterly' ? 'translateX(0)' : 'translateX(0)'
                    }}
                ></div>
            </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-6 border transition-all duration-300 group rounded-sm ${
                plan.isPopular 
                  ? 'bg-brand-gray border-brand-red transform md:-translate-y-4 shadow-[0_0_30px_rgba(185,28,28,0.1)] z-20' 
                  : 'bg-brand-dark border-white/5 hover:border-white/20 hover:bg-brand-gray/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-[10px] font-bold uppercase px-4 py-1 tracking-widest rounded-sm shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-6 text-center">
                <h3 className={`font-display text-2xl font-bold uppercase mb-2 ${plan.isPopular ? 'text-brand-red' : 'text-white'}`}>
                    {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">
                    {billing === 'monthly' ? plan.prices.monthly : billing === 'quarterly' ? plan.prices.quarterly : plan.prices.yearly}
                  </span>
                  <span className="text-gray-400 ml-1 font-medium text-xs uppercase tracking-wider">
                      /{billing === 'monthly' ? 'mo' : billing === 'quarterly' ? 'qtr' : 'yr'}
                  </span>
                </div>
                {plan.marriedOption && billing !== 'monthly' && (
                    <p className="text-brand-red text-xs mt-2 font-bold uppercase tracking-wide">
                        Married: {billing === 'quarterly' ? plan.marriedOption.quarterly : plan.marriedOption.yearly}
                    </p>
                )}
                 {plan.marriedOption && billing === 'monthly' && (
                    <p className="text-brand-red text-xs mt-2 font-bold uppercase tracking-wide">
                        Married: {plan.marriedOption.monthly}/mo
                    </p>
                )}
                <p className="text-gray-400 mt-4 text-xs min-h-[32px] leading-relaxed">{plan.description}</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-4 w-4 text-brand-red mr-3 shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-4 w-4 text-gray-700 mr-3 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-xs leading-snug ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through decoration-gray-700'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                {plan.marriedOption ? (
                  <div className="space-y-2">
                    <a 
                      href={plan.urls[billing]} 
                      target="_blank"
                      rel="noreferrer"
                      className={`block w-full py-2 font-bold uppercase tracking-widest text-center text-xs transition-all duration-300 rounded-sm skew-x-[-6deg] ${
                          plan.isPopular
                          ? 'bg-brand-red text-white hover:bg-red-700 shadow-lg hover:shadow-red-900/20'
                          : 'bg-white text-brand-black hover:bg-gray-200'
                      }`}
                    >
                      <span className="block skew-x-[6deg]">Select Single</span>
                    </a>
                    <a 
                      href={plan.marriedUrls![billing]} 
                      target="_blank"
                      rel="noreferrer"
                      className={`block w-full py-2 font-bold uppercase tracking-widest text-center text-xs transition-all duration-300 rounded-sm skew-x-[-6deg] ${
                          plan.isPopular
                          ? 'bg-brand-red text-white hover:bg-red-700 shadow-lg hover:shadow-red-900/20'
                          : 'bg-white text-brand-black hover:bg-gray-200'
                      }`}
                    >
                      <span className="block skew-x-[6deg]">Select Married</span>
                    </a>
                  </div>
                ) : (
                  <a 
                    href={plan.urls[billing]} 
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full py-3 font-bold uppercase tracking-widest text-center text-xs transition-all duration-300 rounded-sm skew-x-[-6deg] ${
                        plan.isPopular
                        ? 'bg-brand-red text-white hover:bg-red-700 shadow-lg hover:shadow-red-900/20'
                        : 'bg-white text-brand-black hover:bg-gray-200'
                    }`}
                  >
                    <span className="block skew-x-[6deg]">Select Plan</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Pricing Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Drop In */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-dark border border-white/10 p-10 relative overflow-hidden rounded-sm group hover:border-brand-red/30 transition-colors duration-500"
            >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-colors duration-500"></div>
                <h3 className="font-display text-4xl font-bold uppercase text-white mb-8 flex items-center">
                  Drop In Rates <span className="ml-4 h-px flex-1 bg-white/10 group-hover:bg-brand-red/30 transition-colors"></span>
                </h3>
                <ul className="space-y-6">
                    <li className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors gap-4">
                        <div className="flex-1">
                            <span className="text-white font-bold text-lg block">Bronze Day Pass</span>
                            <span className="text-gray-500 text-xs uppercase tracking-wider">Gym Access Only</span>
                        </div>
                        <span className="text-brand-red font-display font-bold text-2xl shrink-0">$15.00</span>
                        <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm skew-x-[-6deg] shrink-0">
                          <span className="block skew-x-[6deg]">Select</span>
                        </a>
                    </li>
                    <li className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors gap-4">
                        <div className="flex-1">
                            <span className="text-white font-bold text-lg block">Gold Day Pass</span>
                            <span className="text-gray-500 text-xs uppercase tracking-wider">Gym + CrossFit Class</span>
                        </div>
                        <span className="text-brand-red font-display font-bold text-2xl shrink-0">$25.00</span>
                        <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm skew-x-[-6deg] shrink-0">
                          <span className="block skew-x-[6deg]">Select</span>
                        </a>
                    </li>
                    <div className="w-full h-px bg-white/5 my-2"></div>
                    <li className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors gap-4">
                        <div className="flex-1">
                            <span className="text-white font-bold text-lg block">Bronze Week Pass</span>
                            <span className="text-gray-500 text-xs uppercase tracking-wider">7 Days Gym Access</span>
                        </div>
                        <span className="text-brand-red font-display font-bold text-2xl shrink-0">$35.00</span>
                        <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm skew-x-[-6deg] shrink-0">
                          <span className="block skew-x-[6deg]">Select</span>
                        </a>
                    </li>
                    <li className="flex justify-between items-center group/item hover:bg-white/5 p-2 rounded transition-colors gap-4">
                        <div className="flex-1">
                            <span className="text-white font-bold text-lg block">Gold Week Pass</span>
                            <span className="text-gray-500 text-xs uppercase tracking-wider">7 Days Gym + Classes</span>
                        </div>
                        <span className="text-brand-red font-display font-bold text-2xl shrink-0">$80.00</span>
                        <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-black px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm skew-x-[-6deg] shrink-0">
                          <span className="block skew-x-[6deg]">Select</span>
                        </a>
                    </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-white/10">
                   <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="text-white font-bold uppercase tracking-widest text-sm hover:text-brand-red transition-colors flex items-center gap-2">
                      Purchase Pass <ArrowRight size={16} />
                   </a>
                </div>
            </motion.div>

            {/* Pickleball Only */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-dark border border-white/10 p-10 relative overflow-hidden rounded-sm group hover:border-brand-red/30 transition-colors duration-500"
            >
                <div className="absolute top-0 left-0 -mt-4 -ml-4 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl group-hover:bg-brand-red/10 transition-colors duration-500"></div>
                <h3 className="font-display text-4xl font-bold uppercase text-white mb-2">Pickleball Only</h3>
                <p className="text-gray-400 italic mb-8">No gym membership? No problem.</p>
                
                <div className="bg-black/40 p-8 border border-white/5 mb-8 rounded-sm relative overflow-hidden group-hover:border-brand-red/20 transition-colors">
                    <div className="absolute right-0 top-0 p-2 opacity-10">
                       <Trophy size={64} />
                    </div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-end mb-2">
                          <span className="text-xl font-bold text-white uppercase tracking-wide">Court Rental</span>
                          <span className="text-5xl font-display font-bold text-brand-red">$25.56</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">Per hour • Non-member rate</p>
                      <p className="text-gray-500 text-xs">Split the cost with up to 3 friends</p>
                    </div>
                </div>
                 <div className="bg-brand-red/10 p-6 border border-brand-red/20 mb-8 rounded-sm">
                    <p className="text-brand-red text-sm font-bold uppercase tracking-wider mb-1">Member Benefit</p>
                    <p className="text-gray-300 text-sm">Members pay only <span className="text-white font-bold">$13.31</span> per hour. Non-members: $25.56/hr</p>
                 </div>

                <div className="text-center md:text-left">
                    <a href="https://zfitness.gymmasteronline.com/portal/signup" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-red hover:text-white transition-all duration-300 rounded-sm skew-x-[-6deg]">
                        <span className="block skew-x-[6deg]">Book A Court</span>
                    </a>
                </div>
            </motion.div>

        </div>
      </div>

      {/* FAQ/Link Section */}
      <div className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <div className="bg-brand-gray p-10 border-l-4 border-brand-red rounded-r-sm shadow-xl">
            <h4 className="font-display text-3xl font-bold uppercase text-white mb-4">CrossFit Group Training</h4>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Looking for detailed class times, programming philosophy, and specific workout details?</p>
            <a href="https://crossfitorrville.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest hover:text-white transition-colors group">
                Visit CrossFitOrrville.com <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </a>
        </div>
      </div>

    </div>
  );
};

export default Plans;
