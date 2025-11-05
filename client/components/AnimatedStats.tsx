import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface StatProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
  labelAr: string;
  icon: React.ReactNode;
  delay?: number;
}

function AnimatedStat({ end, duration = 2, suffix = '', prefix = '', label, labelAr, icon, delay = 0 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const { language } = useLanguage();

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(end);
      }, delay * 1000);
    }
  }, [isInView, end, motionValue, delay]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const displayValue = Math.floor(latest);
        ref.current.textContent = `${prefix}${displayValue.toLocaleString()}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0E1525]/60 to-[#0F1522]/40 backdrop-blur-xl p-8 border border-white/10 hover:border-violet/30 transition-all duration-300 group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-violet/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          viewport={{ once: true }}
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet to-cyan flex items-center justify-center mb-4 shadow-lg shadow-violet/50"
        >
          {icon}
        </motion.div>

        {/* Number */}
        <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet via-cyan to-green bg-clip-text text-transparent">
          <span ref={ref}>0</span>
        </div>

        {/* Label */}
        <div className="text-lg text-white/70 font-medium">
          {language === 'ar' ? labelAr : label}
        </div>
      </div>

      {/* Border glow animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(121, 64, 190, 0.5), transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          delay: delay,
        }}
      />
    </motion.div>
  );
}

export default function AnimatedStats() {
  const stats = [
    {
      end: 95,
      suffix: '%',
      label: 'Client Satisfaction',
      labelAr: 'رضا العملاء',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      delay: 0,
    },
    {
      end: 200,
      suffix: '+',
      label: 'Projects Delivered',
      labelAr: 'مشروع منجز',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: 0.1,
    },
    {
      end: 50,
      suffix: '+',
      label: 'Enterprise Clients',
      labelAr: 'عميل مؤسسي',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      delay: 0.2,
    },
    {
      end: 80,
      suffix: '%',
      label: 'Process Efficiency Gain',
      labelAr: 'زيادة كفاءة العمليات',
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      delay: 0.3,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <AnimatedStat key={index} {...stat} />
      ))}
    </div>
  );
}
