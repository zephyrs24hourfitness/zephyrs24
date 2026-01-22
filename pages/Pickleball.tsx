
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, MapPin, Trophy } from 'lucide-react';

const faqs = [
  {
    question: "How do I access the pickleball court when I arrive?",
    answer: (
      <div className="space-y-4">
        <p>You can use the GymMaster app to check-in and unlock the entrance. You will be able to access the facility 10 minutes prior to your booking and 10 minutes after your book.</p>
        <p>You can download the GymMaster app from the <a href="https://play.google.com/store/apps/details?id=com.treshna.memberportal&pli=1" target="_blank" rel="noreferrer" className="text-brand-red underline hover:text-white transition-colors">Google Play Store</a> and the <a href="https://apps.apple.com/us/app/gymmaster-member/id1297093746" target="_blank" rel="noreferrer" className="text-brand-red underline hover:text-white transition-colors">Apple App Store</a>.</p>
        <p>You can also check out our video tutorials on <a href="https://www.youtube.com/channel/UCi1uqSUpPUsFMWZNvM23pSA" target="_blank" rel="noreferrer" className="text-brand-red underline hover:text-white transition-colors">YouTube</a> for a step by step guide.</p>
      </div>
    )
  },
  {
    question: "Why do I see an error message about validating class booking?",
    answer: (
      <p>This error is shown when your existing Zephyrs account doesn't have access to Pickleball booking. You can use the "Current or Past Member" button (or the link below) to Add Pickleball Booking Access: <br/> <a href="https://zfitness.gymmasteronline.com/portal/membership/f36a08847d28389a7762854be8693e05" target="_blank" rel="noreferrer" className="text-brand-red underline hover:text-white transition-colors">Add Pickleball Booking Access</a></p>
    )
  },
  {
    question: "How do I update the card on file for my Zephyrs account?",
    answer: (
      <p>You can update your card through the <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="text-brand-red underline hover:text-white transition-colors">Zephyrs Fitness Member Portal</a>. After logging into the portal click on Account &gt; Update Billing Info.</p>
    )
  },
  {
    question: "Do you provide equipment such as paddles and balls?",
    answer: (
      <p>No, we do not currently supply any player equipment (paddles, balls, etc). We supply the court and net.</p>
    )
  },
  {
    question: "Can I rent the entire facility for a private event or party?",
    answer: (
      <p>Yes, we do offer event and party rentals. Please contact Zephyrs staff at 866-414-5438 for further details.</p>
    )
  }
];

const Pickleball: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-brand-black min-h-screen">
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-brand-black overflow-hidden">
         {/* Background Image */}
        <div className="absolute inset-0">
           <img 
             src="https://images.squarespace-cdn.com/content/v1/637259c1a02be518e8a5e14c/a97f8b87-96ba-4c75-a35c-7dd230232c94/1000001341.jpg"
             alt="Pickleball Court"
             className="w-full h-full object-cover opacity-40"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold uppercase text-white mb-6"
          >
            Welcome to <span className="text-brand-red">Pickleball Orrville!</span>
          </motion.h1>
          <motion.h3
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-xl md:text-2xl text-gray-300 font-light uppercase tracking-widest mb-12"
          >
             Get in the Game! Reserve Your Pickleball Court Today!
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center"
          >
             <a href="https://zfitness.gymmasteronline.com/portal/membership/f36a08847d28389a7762854be8693e05" target="_blank" rel="noreferrer" className="inline-block bg-brand-red text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-red-700 transition-all duration-300 skew-x-[-10deg] shadow-lg hover:shadow-red-900/30">
                <span className="block skew-x-[10deg]">Signup Now</span>
            </a>
             <a href="https://zfitness.gymmasteronline.com/portal/membership/ff1772865c9cb0ec804a6bae01b02d00" target="_blank" rel="noreferrer" className="inline-block bg-white text-brand-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 skew-x-[-10deg]">
                <span className="block skew-x-[10deg]">Sign Guest Waiver</span>
            </a>
            <a href="https://zfitness.gymmasteronline.com/portal/login" target="_blank" rel="noreferrer" className="inline-block border-2 border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all duration-300 skew-x-[-10deg]">
                <span className="block skew-x-[10deg]">Member Login</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Col - Info & Schedule */}
            <div className="lg:col-span-2 space-y-12">
                {/* FAQ */}
                <div id="faq" className="bg-brand-dark border border-white/5 p-8 rounded-sm">
                    <h3 className="font-display text-3xl font-bold uppercase text-white mb-8 flex items-center gap-3">
                       <Trophy className="text-brand-red" /> FAQ
                    </h3>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                                <button 
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                                >
                                    <span className="text-lg font-medium text-gray-200 group-hover:text-brand-red transition-colors">{faq.question}</span>
                                    {openFaq === index ? (
                                        <Minus className="text-brand-red shrink-0 ml-4" />
                                    ) : (
                                        <Plus className="text-gray-500 group-hover:text-white shrink-0 ml-4 transition-colors" />
                                    )}
                                </button>
                                <motion.div 
                                    initial={false}
                                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-4 text-gray-400 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Calendar Embed */}
                <div className="bg-white p-1 rounded-sm overflow-hidden h-[800px]">
                     <iframe 
                        className="gmiframe" 
                        src="https://zfitness.gymmasteronline.com/portal/classcalendar?logo=0&classid=542614" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allow="camera *"
                        title="Pickleball Calendar"
                    ></iframe>
                </div>
            </div>

            {/* Right Col - Location */}
            <div className="space-y-8">
                <div className="bg-brand-gray p-8 border-t-4 border-brand-red">
                    <h4 className="font-display text-xl font-bold uppercase text-white mb-6 flex items-center gap-2">
                        <MapPin className="text-brand-red" /> Our Location
                    </h4>
                    <p className="text-gray-300 mb-6">
                        1330 N Main St,<br/>
                        Orrville, OH 44667
                    </p>
                    <div className="aspect-square w-full grayscale hover:grayscale-0 transition-all duration-500 rounded-sm overflow-hidden border border-white/10">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.5662927681935!2d-81.76533838458135!3d40.85524287931654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88376e0f60379775%3A0x1e9306083d25f2c2!2s1330%20N%20Main%20St%2C%20Orrville%2C%20OH%2044667!5e0!3m2!1sen!2sus!4v1679600000000!5m2!1sen!2sus" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Pickleball Location"
                        ></iframe>
                    </div>
                </div>
                
                <div className="bg-brand-red/10 p-8 border border-brand-red/30 text-center rounded-sm">
                    <h5 className="text-brand-red font-bold uppercase tracking-widest mb-2">Have Questions?</h5>
                    <p className="text-gray-400 text-sm mb-6">Our team is here to help you get started.</p>
                    <a href="/contact" className="inline-block text-white font-bold uppercase text-xs tracking-[0.2em] border-b border-brand-red pb-1 hover:text-brand-red transition-colors">
                        Contact Us
                    </a>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
};

export default Pickleball;
