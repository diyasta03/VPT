import React from 'react';
import { cn } from "../../lib/utils";
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

// Icon component for contact details
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// Prop types for the HeroSection component
export interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, 'title'> {
  logo?: {
    url: string;
    alt: string;
    text?: string;
  };
  slogan?: string;
  title: React.ReactNode;
  subtitle: string;
  callToAction: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  quickBadges?: Array<{
    label: string;
    tag?: string;
    onClick?: () => void;
  }>;
  backgroundImage: string;
  contactInfo: {
    website: string;
    phone: string;
    address: string;
  };
  floatingBadge?: React.ReactNode;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ className, logo, slogan, title, subtitle, callToAction, secondaryAction, quickBadges, backgroundImage, contactInfo, floatingBadge, ...props }, ref) => {
    
    // Animation variants for the container to orchestrate children animations
    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.15,
        },
      },
    };

    // Animation variants for individual text/UI elements
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    };
    
    return (
      <motion.section
        ref={ref}
        id="hero-vpt"
        className={cn(
          "relative flex w-full flex-col overflow-hidden bg-background text-foreground md:flex-row min-h-[640px] lg:min-h-[720px]",
          className
        )}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        {...props}
      >
        {/* Left Side: Content */}
        <div className="flex w-full flex-col justify-between p-6 sm:p-10 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 z-10">
            {/* Top Section: Logo & Main Content */}
            <div className="pt-2 sm:pt-4">
                <motion.header className="mb-8 sm:mb-10" variants={itemVariants}>
                    {logo && (
                        <div className="flex items-center">
                            {logo.url ? (
                              <img src={logo.url} alt={logo.alt} className="mr-3 h-9 w-auto object-contain" />
                            ) : null}
                            <div>
                                {logo.text && <p className="text-lg sm:text-xl font-extrabold tracking-tight text-foreground font-sans-corporate">{logo.text}</p>}
                                {slogan && <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{slogan}</p>}
                            </div>
                        </div>
                    )}
                </motion.header>

                <motion.main variants={containerVariants}>
                    <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] text-foreground font-sans-corporate" variants={itemVariants}>
                        {title}
                    </motion.h1>
                    
                    {/* Animated Accent Line */}
                    <motion.div className="my-6 h-1 w-24 bg-primary rounded-full" variants={itemVariants}></motion.div>
                    
                    <motion.p className="mb-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                        {subtitle}
                    </motion.p>

                    {/* Quick Badges / Categories if provided */}
                    {quickBadges && quickBadges.length > 0 && (
                      <motion.div className="flex flex-wrap items-center gap-2 mb-8" variants={itemVariants}>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mr-1">
                          Fast Track:
                        </span>
                        {quickBadges.map((badge, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={badge.onClick}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-border text-deep-blue hover:border-primary hover:text-primary hover:bg-secondary transition-all shadow-2xs cursor-pointer"
                          >
                            <span>{badge.label}</span>
                            {badge.tag && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-background text-gold font-bold border border-border">
                                {badge.tag}
                              </span>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}

                    {/* Actions */}
                    <motion.div className="flex flex-wrap items-center gap-4 mb-8" variants={itemVariants}>
                      {callToAction.onClick ? (
                        <button
                          type="button"
                          onClick={callToAction.onClick}
                          className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-deep-blue hover:bg-primary rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                        >
                          {callToAction.text}
                        </button>
                      ) : (
                        <a
                          href={callToAction.href || "#services"}
                          className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-white bg-deep-blue hover:bg-primary rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                        >
                          {callToAction.text}
                        </a>
                      )}

                      {secondaryAction && (
                        secondaryAction.onClick ? (
                          <button
                            type="button"
                            onClick={secondaryAction.onClick}
                            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-deep-blue hover:text-primary bg-white hover:bg-secondary border border-border hover:border-primary/40 rounded-xl transition-all shadow-2xs cursor-pointer"
                          >
                            {secondaryAction.text}
                          </button>
                        ) : (
                          <a
                            href={secondaryAction.href || "#contact"}
                            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-deep-blue hover:text-primary bg-white hover:bg-secondary border border-border hover:border-primary/40 rounded-xl transition-all shadow-2xs cursor-pointer"
                          >
                            {secondaryAction.text}
                          </a>
                        )
                      )}
                    </motion.div>
                </motion.main>
            </div>

            {/* Bottom Section: Footer Info */}
            <motion.footer className="mt-8 pt-6 border-t border-border w-full" variants={itemVariants}>
                <div className="grid grid-cols-1 gap-4 text-xs text-muted-foreground sm:grid-cols-3">
                    <div className="flex items-center">
                        <InfoIcon type="website" />
                        <span className="font-medium truncate">{contactInfo.website}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="phone" />
                        <span className="font-medium">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center">
                        <InfoIcon type="address" />
                        <span className="font-medium truncate">{contactInfo.address}</span>
                    </div>
                </div>
            </motion.footer>
        </div>

        {/* Right Side: Image with Clip Path Animation */}
        <motion.div 
          className="relative w-full min-h-[360px] md:min-h-full bg-cover bg-center md:w-1/2 lg:w-2/5 overflow-hidden"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          {/* Subtle gradient vignette to blend beautifully */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-deep-blue/10 to-transparent pointer-events-none" />

          {/* Optional floating badge within the angled photo cut */}
          {floatingBadge && (
            <div className="absolute bottom-8 right-6 left-12 sm:left-auto sm:right-8 z-20">
              {floatingBadge}
            </div>
          )}
        </motion.div>
      </motion.section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
