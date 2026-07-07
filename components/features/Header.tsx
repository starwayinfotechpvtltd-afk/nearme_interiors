// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Sparkles,
//   Phone,
//   ArrowRight,
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import LeadDialog from './LeadDialog';
// import { servicesData, locationsData } from '@/data/agencyData';
// import Image from 'next/image';
// import CityServicesExplorer from './CityServicesExplorer';
// import ServicesDropdown from './ServicesDropdown';

// function useScrollY() {
//   const [y, setY] = useState(0);
//   useEffect(() => {
//     const fn = () => setY(window.scrollY);
//     window.addEventListener('scroll', fn, { passive: true });
//     return () => window.removeEventListener('scroll', fn);
//   }, []);
//   return y;
// }

// export default function Header() {
//   const scrollY  = useScrollY();
//   const scrolled = scrollY > 40;
//   const shrink   = scrollY > 80;

//   const [mobileOpen,     setMobileOpen]     = useState(false);
//   const [isLeadOpen,     setIsLeadOpen]     = useState(false);
//   const [servicesOpen,   setServicesOpen]   = useState(false);
//   const [locationsOpen,  setLocationsOpen]  = useState(false);

//   const navRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const handler = (e: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         setServicesOpen(false);
//         setLocationsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handler);
//     return () => document.removeEventListener('mousedown', handler);
//   }, []);

//   return (
//     <>
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none"
//       >
//         {/* ── Outer pill wrapper ── */}
//         <div
//           ref={navRef}
//           className="pointer-events-auto w-full max-w-[72%] relative"
//           style={{ height: shrink ? 52 : 64, transition: 'height 0.5s cubic-bezier(0.22,1,0.36,1)' }}
//         >
//           {/* ── White bg: logo pill at rest, expands RIGHT to full navbar on scroll ── */}
//           <motion.div
//             animate={{
//               clipPath: scrolled
//                 ? 'inset(0% 0% 0% 0% round 16px)'      // full navbar
//                 : 'inset(0% 79% 0% 0% round 16px)',    // logo-only pill (left ~24%)
//             }}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//             className="absolute inset-0 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/60 shadow-[0_8px_40px_rgba(15,23,64,0.13),0_1px_0_rgba(255,255,255,0.9)_inset]"
//           />

//           {/* ── Top shimmer edge (only when covered) ── */}
//           {scrolled && (
//             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent rounded-full pointer-events-none z-10" />
//           )}

//           {/* ── Content row ── */}
//           <div className="relative z-10 h-full flex items-center justify-between gap-4 px-4 sm:px-6">

//             {/* LOGO */}
//             <Link href="/" className="shrink-0 group">
//               <motion.div
//                 animate={{ scale: shrink ? 0.88 : 1 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 className="origin-left"
//               >
//                 <Image
//                   src="/Images/logo.png"
//                   alt="Aura & Arch"
//                   width={150}
//                   height={50}
//                   priority
//                   className="h-8 w-auto object-contain"
//                 />
//               </motion.div>
//             </Link>

//             {/* DESKTOP NAV */}
//             <nav className="hidden md:flex items-center gap-1">

//               <NavLink href="/" scrolled={scrolled} shrink={shrink}>Home</NavLink>

//               {/* Services dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => { setServicesOpen(true); setLocationsOpen(false); }}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >
//                 <DropdownTrigger open={servicesOpen} scrolled={scrolled} shrink={shrink}>
//                   Services
//                 </DropdownTrigger>
//                 <AnimatePresence>
//                   {servicesOpen && (
//                     <ServicesDropdown
//                       services={servicesData}
//                       onClose={() => setServicesOpen(false)}
//                     />
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* Locations mega-dropdown */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => { setLocationsOpen(true); setServicesOpen(false); }}
//               >
//                 <DropdownTrigger open={locationsOpen} scrolled={scrolled} shrink={shrink}>
//                   Locations
//                 </DropdownTrigger>
//                 <AnimatePresence>
//                   {locationsOpen && (
//                     <CityServicesExplorer
//                       cities={locationsData}
//                       services={servicesData}
//                       basePath="/location"
//                       onBookAudit={() => setIsLeadOpen(true)}
//                       heading="Services by City"
//                       subheading="Hover a city to explore our location-specific solutions."
//                       onClose={() => setLocationsOpen(false)}
//                     />
//                   )}
//                 </AnimatePresence>
//               </div>

//               <NavLink href="/blog" scrolled={scrolled} shrink={shrink}>Blog</NavLink>
//             </nav>

//             {/* RIGHT: Phone + CTA */}
//             <div className="hidden md:flex items-center gap-3 shrink-0">
//               <a
//                 href="tel:+912269827800"
//                 className={`flex items-center gap-1.5 font-semibold text-[12px] transition-colors px-2 py-1.5 rounded-lg
//                   ${scrolled
//                     ? 'text-brand-muted hover:text-brand-primary hover:bg-brand-primary/5'
//                     : 'text-white/70 hover:text-white hover:bg-white/10'
//                   }`}
//               >
//                 <Phone className="h-3.5 w-3.5 text-brand-secondary" />
//                 +91 22 6982 7800
//               </a>

//               <div className={`h-5 w-px ${scrolled ? 'bg-slate-200' : 'bg-white/15'}`} />

//               <motion.button
//                 onClick={() => setIsLeadOpen(true)}
//                 animate={{
//                   paddingLeft:   shrink ? '14px' : '20px',
//                   paddingRight:  shrink ? '14px' : '20px',
//                   paddingTop:    shrink ? '7px'  : '10px',
//                   paddingBottom: shrink ? '7px'  : '10px',
//                 }}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-[12.5px] rounded-xl flex items-center gap-1.5 shadow-md shadow-brand-primary/25 hover:shadow-lg hover:shadow-brand-primary/35 transition-shadow duration-200 cursor-pointer whitespace-nowrap"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />
//                 Book Strategy Call
//                 <Sparkles className="h-3.5 w-3.5" />
//               </motion.button>
//             </div>

//             {/* HAMBURGER */}
//             <motion.button
//               onClick={() => setMobileOpen((v) => !v)}
//               whileTap={{ scale: 0.92 }}
//               className={`md:hidden p-2 rounded-xl transition-colors cursor-pointer ${scrolled ? 'text-brand-primary hover:bg-brand-primary/6' : 'text-white hover:bg-white/10'}`}
//             >
//               <AnimatePresence mode="wait" initial={false}>
//                 {mobileOpen ? (
//                   <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
//                     <X className="h-5 w-5" />
//                   </motion.span>
//                 ) : (
//                   <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }} className="block">
//                     <Menu className="h-5 w-5" />
//                   </motion.span>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </div>

//         {/* MOBILE MENU */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10, scale: 0.97 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -10, scale: 0.97 }}
//               transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//               className="pointer-events-auto absolute top-[76px] left-0 right-0 mx-4 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-2xl shadow-2xl shadow-slate-900/12 overflow-hidden"
//             >
//               <div className="p-5 space-y-1">
//                 <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
//                 <MobileSectionLabel>Services</MobileSectionLabel>
//                 <div className="grid grid-cols-1 gap-0.5 pl-2">
//                   {servicesData.map((s) => (
//                     <MobileLink key={s.id} href={`/${s.slug}`} onClick={() => setMobileOpen(false)} sub>{s.title}</MobileLink>
//                   ))}
//                 </div>
//                 <MobileSectionLabel>Locations</MobileSectionLabel>
//                 <div className="grid grid-cols-2 gap-0.5 pl-2">
//                   {locationsData.map((loc) => (
//                     <MobileLink key={loc.slug} href={`/location/${loc.slug}`} onClick={() => setMobileOpen(false)} sub>{loc.city}</MobileLink>
//                   ))}
//                 </div>
//                 <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
//                 <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
//                   <a href="tel:+912269827800" className="flex items-center gap-2 text-brand-primary font-semibold text-sm py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors">
//                     <Phone className="h-4 w-4 text-brand-secondary" />
//                     +91 22 6982 7800
//                   </a>
//                   <button
//                     onClick={() => { setMobileOpen(false); setIsLeadOpen(true); }}
//                     className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-primary/20"
//                   >
//                     Book Free Strategy Call
//                     <ArrowRight className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.header>

//       {/* Mobile sticky bottom bar */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-xl border-t border-slate-200/60 flex items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.07)]">
//         <a href="tel:+912269827800" className="flex-1 bg-slate-100 hover:bg-slate-200 text-brand-primary font-bold text-center py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
//           <Phone className="h-4 w-4 text-brand-secondary" />
//           Call Agency
//         </a>
//         <button
//           onClick={() => setIsLeadOpen(true)}
//           className="flex-[1.5] bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-brand-primary/20 cursor-pointer"
//         >
//           Book Strategy Call
//           <Sparkles className="h-4 w-4" />
//         </button>
//       </div>

//       <LeadDialog isOpen={isLeadOpen} onClose={() => setIsLeadOpen(false)} ctaSource="Header Navbar" />
//     </>
//   );
// }

// /* ── Sub-components ── */

// function NavLink({
//   href, children, scrolled, shrink,
// }: {
//   href: string; children: React.ReactNode; scrolled: boolean; shrink: boolean;
// }) {
//   return (
//     <Link
//       href={href}
//       className={`relative px-3.5 py-2 rounded-xl font-semibold transition-all duration-150 group
//         ${scrolled
//           ? 'text-brand-primary/80 hover:text-brand-primary hover:bg-brand-primary/5'
//           : 'text-white/80 hover:text-white hover:bg-white/10'
//         }`}
//       style={{ fontSize: shrink ? '12px' : '13px', transition: 'font-size 0.5s cubic-bezier(0.22,1,0.36,1)' }}
//     >
//       {children}
//       <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 rounded-full transition-all duration-200 ${scrolled ? 'bg-brand-secondary/50' : 'bg-blue-400/60'}`} />
//     </Link>
//   );
// }

// function DropdownTrigger({
//   open, children, scrolled, shrink,
// }: {
//   open: boolean; children: React.ReactNode; scrolled: boolean; shrink: boolean;
// }) {
//   return (
//     <button
//       className={`relative flex items-center gap-1 px-3.5 py-2 rounded-xl font-semibold transition-all duration-150 cursor-pointer group
//         ${scrolled
//           ? 'text-brand-primary/80 hover:text-brand-primary hover:bg-brand-primary/5'
//           : 'text-white/80 hover:text-white hover:bg-white/10'
//         }`}
//       style={{ fontSize: shrink ? '12px' : '13px', transition: 'font-size 0.5s cubic-bezier(0.22,1,0.36,1)' }}
//     >
//       {children}
//       <ChevronDown
//         className={`h-3.5 w-3.5 transition-transform duration-200 ${scrolled ? 'text-brand-muted' : 'text-white/40'}`}
//         style={{ transform: open ? 'rotate(180deg)' : 'none' }}
//       />
//       <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 rounded-full transition-all duration-200 ${scrolled ? 'bg-brand-secondary/50' : 'bg-blue-400/60'}`} />
//     </button>
//   );
// }

// function MobileLink({ href, onClick, sub, children }: { href: string; onClick: () => void; sub?: boolean; children: React.ReactNode }) {
//   return (
//     <Link href={href} onClick={onClick} className={`block rounded-xl font-semibold text-brand-primary hover:text-brand-secondary hover:bg-brand-secondary/5 transition-colors py-2.5 px-3 ${sub ? 'text-[13px] text-brand-muted/70' : 'text-[14px]'}`}>
//       {children}
//     </Link>
//   );
// }

// function MobileSectionLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <p className="px-3 pt-3 pb-1 text-[9px] font-black uppercase tracking-widest text-brand-muted/40">
//       {children}
//     </p>
//   );
// }





//=================



'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadDialog from './LeadDialog';
import { servicesData, locationsData } from '@/data/agencyData';
import Image from 'next/image';
import CityServicesExplorer from './CityServicesExplorer';
import ServicesDropdown from './ServicesDropdown';

// ── Custom Hooks ──

function useScrollY() {
  const [y, setY] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const fn = () => {
      // Use requestAnimationFrame for smoother updates
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        setY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', fn, { passive: true });
    return () => {
      window.removeEventListener('scroll', fn);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);
  
  return y;
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

function useBreakpoints() {
  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 481px) and (max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1025px)');
  
  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}

// ── Main Component ──

export default function Header() {
  const scrollY = useScrollY();
  const { isMobile, isTablet, isDesktop, isLargeDesktop } = useBreakpoints();
  
  // Use useMemo for scroll states to prevent recalculation
  const scrolled = useMemo(() => scrollY > 40, [scrollY]);
  const shrink = useMemo(() => scrollY > 80, [scrollY]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setLocationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ── Responsive helpers with useMemo for performance ──
  const pillWidth = useMemo(() => {
    if (isMobile) return '95%';
    if (isTablet) return '92%';
    if (isDesktop) return '85%';
    return '75%';
  }, [isMobile, isTablet, isDesktop]);

  const logoSize = useMemo(() => {
    if (isMobile) return { width: 100, height: 33 };
    if (isTablet) return { width: 120, height: 40 };
    return { width: 150, height: 50 };
  }, [isMobile, isTablet]);

  // Memoize clipPath to prevent recalculation on every render
  const clipPath = useMemo(() => {
    if (scrolled) return 'inset(0% 0% 0% 0% round 16px)';
    if (isMobile) return 'inset(0% 35% 0% 0% round 16px)';
    if (isTablet) return 'inset(0% 55% 0% 0% round 16px)';
    if (isDesktop) return 'inset(0% 70% 0% 0% round 16px)';
    return 'inset(0% 79% 0% 0% round 16px)';
  }, [scrolled, isMobile, isTablet, isDesktop]);

  const buttonText = useMemo(() => {
    if (isMobile) return 'Call Now';
    if (isTablet) return 'Book Call';
    return 'Book Strategy Call';
  }, [isMobile, isTablet]);

  const phoneDisplay = useMemo(() => {
    if (isMobile) return '+91';
    if (isTablet) return '+91 22';
    return '+91 22 6982 7800';
  }, [isMobile, isTablet]);

  const headerHeight = useMemo(() => {
    if (shrink) {
      return isMobile ? 44 : 52;
    }
    return isMobile ? 56 : 64;
  }, [shrink, isMobile]);

  // Optimize button padding with useMemo
  const buttonPadding = useMemo(() => {
    const base = {
      paddingLeft: shrink ? (isDesktop ? '12px' : '14px') : (isDesktop ? '16px' : '20px'),
      paddingRight: shrink ? (isDesktop ? '12px' : '14px') : (isDesktop ? '16px' : '20px'),
      paddingTop: shrink ? (isDesktop ? '6px' : '7px') : (isDesktop ? '8px' : '10px'),
      paddingBottom: shrink ? (isDesktop ? '6px' : '7px') : (isDesktop ? '8px' : '10px'),
    };
    return base;
  }, [shrink, isDesktop]);

  // ── Handlers with useCallback ──
  const handleMobileToggle = useCallback(() => {
    setMobileOpen((v) => !v);
  }, []);

  const handleLeadOpen = useCallback(() => {
    setIsLeadOpen(true);
  }, []);

  const handleLeadClose = useCallback(() => {
    setIsLeadOpen(false);
  }, []);

  const handleMobileClose = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const handleServicesOpen = useCallback(() => {
    setServicesOpen(true);
    setLocationsOpen(false);
  }, []);

  const handleServicesClose = useCallback(() => {
    setServicesOpen(false);
  }, []);

  const handleLocationsOpen = useCallback(() => {
    setLocationsOpen(true);
    setServicesOpen(false);
  }, []);

  const handleLocationsClose = useCallback(() => {
    setLocationsOpen(false);
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pt-2 sm:pt-4 pointer-events-none"
        style={{ willChange: 'transform' }} // Hint for browser optimization
      >
        {/* ── Outer pill wrapper ── */}
        <div
          ref={navRef}
          className="pointer-events-auto w-full relative mx-auto"
          style={{
            height: headerHeight,
            transition: 'height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            maxWidth: pillWidth,
            willChange: 'height', // Optimize for height changes
          }}
        >
          {/* ── White bg with optimized clipPath ── */}
          <motion.div
            animate={{
              clipPath: clipPath,
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1],
              // Reduce update frequency
              damping: 20,
            }}
            className="absolute inset-0 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/60 shadow-[0_8px_40px_rgba(15,23,64,0.13),0_1px_0_rgba(255,255,255,0.9)_inset]"
            style={{ 
              willChange: 'clip-path',
              // Use transform for better performance
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* ── Top shimmer edge ── */}
          {scrolled && (
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent rounded-full pointer-events-none z-10" />
          )}

          {/* ── Content row ── */}
          <div className="relative z-10 h-full flex items-center justify-between gap-1 sm:gap-2 md:gap-4 px-2 sm:px-3 md:px-4 lg:px-6">
            {/* LOGO */}
            <Link href="/" className="shrink-0 group">
              <motion.div
                animate={{
                  scale: shrink ? (isMobile ? 0.82 : 0.88) : 1,
                }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="origin-left"
                style={{ willChange: 'transform' }}
              >
                <Image
                  src="/Images/logo.png"
                  alt="Aura & Arch"
                  width={logoSize.width}
                  height={logoSize.height}
                  priority
                  className={`h-auto w-auto object-contain ${
                    isMobile ? 'max-h-6' : isTablet ? 'max-h-7' : 'max-h-8'
                  }`}
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
              <NavLink href="/" scrolled={scrolled} shrink={shrink} isMobile={isMobile}>
                Home
              </NavLink>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesOpen}
                onMouseLeave={handleServicesClose}
              >
                <DropdownTrigger
                  open={servicesOpen}
                  scrolled={scrolled}
                  shrink={shrink}
                  isMobile={isMobile}
                >
                  Services
                </DropdownTrigger>
                <AnimatePresence>
                  {servicesOpen && (
                    <ServicesDropdown
                      services={servicesData}
                      onClose={handleServicesClose}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Locations mega-dropdown */}
              <div
                className="relative"
                onMouseEnter={handleLocationsOpen}
                onMouseLeave={handleLocationsClose}
              >
                <DropdownTrigger
                  open={locationsOpen}
                  scrolled={scrolled}
                  shrink={shrink}
                  isMobile={isMobile}
                >
                  Locations
                </DropdownTrigger>
                <AnimatePresence>
                  {locationsOpen && (
                    <CityServicesExplorer
                      cities={locationsData}
                      services={servicesData}
                      basePath="/location"
                      onBookAudit={handleLeadOpen}
                      heading="Services by City"
                      subheading="Hover a city to explore our location-specific solutions."
                      onClose={handleLocationsClose}
                    />
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/blog" scrolled={scrolled} shrink={shrink} isMobile={isMobile}>
                Blog
              </NavLink>
            </nav>

            {/* RIGHT: Phone + CTA */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3 shrink-0">
              <a
                href="tel:+912269827800"
                className={`flex items-center gap-0.5 lg:gap-1.5 font-semibold text-[10px] lg:text-[11px] xl:text-[12px] transition-colors px-1.5 lg:px-2 py-1.5 rounded-xl whitespace-nowrap
                  ${
                    scrolled
                      ? 'text-brand-muted hover:text-brand-primary hover:bg-brand-primary/5'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <Phone className="h-2.5 w-2.5 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5 text-brand-secondary" />
                <span>{phoneDisplay}</span>
              </a>

              <div
                className={`h-4 lg:h-5 w-px ${
                  scrolled ? 'bg-slate-200' : 'bg-white/15'
                } hidden xl:block`}
              />

              <motion.button
                onClick={handleLeadOpen}
                animate={buttonPadding}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-[10px] lg:text-[11px] xl:text-[12.5px] rounded-xl flex items-center gap-1 lg:gap-1.5 shadow-md shadow-brand-primary/25 hover:shadow-lg hover:shadow-brand-primary/35 transition-shadow duration-200 cursor-pointer whitespace-nowrap"
                style={{ willChange: 'transform, padding' }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                {buttonText}
                <Sparkles className="h-2.5 w-2.5 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5" />
              </motion.button>
            </div>

            {/* HAMBURGER */}
            <motion.button
              onClick={handleMobileToggle}
              whileTap={{ scale: 0.92 }}
              className={`md:hidden p-1.5 sm:p-2 rounded-xl transition-colors cursor-pointer ${
                scrolled
                  ? 'text-brand-primary hover:bg-brand-primary/6'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="block"
                  >
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto absolute top-[68px] sm:top-[76px] left-2 right-2 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-2xl border border-slate-100 rounded-2xl shadow-2xl shadow-slate-900/12 overflow-hidden max-h-[80vh] overflow-y-auto"
            >
              <div className="p-3 sm:p-5 space-y-0.5 sm:space-y-1">
                <MobileLink href="/" onClick={handleMobileClose}>
                  Home
                </MobileLink>
                <MobileSectionLabel>Services</MobileSectionLabel>
                <div className="grid grid-cols-1 gap-0.5 pl-2">
                  {servicesData.map((s) => (
                    <MobileLink
                      key={s.id}
                      href={`/${s.slug}`}
                      onClick={handleMobileClose}
                      sub
                    >
                      {s.title}
                    </MobileLink>
                  ))}
                </div>
                <MobileSectionLabel>Locations</MobileSectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 pl-2">
                  {locationsData.map((loc) => (
                    <MobileLink
                      key={loc.slug}
                      href={`/location/${loc.slug}`}
                      onClick={handleMobileClose}
                      sub
                    >
                      {loc.city}
                    </MobileLink>
                  ))}
                </div>
                <MobileLink href="/blog" onClick={handleMobileClose}>
                  Blog
                </MobileLink>
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex flex-col gap-2 sm:gap-2.5">
                  <a
                    href="tel:+912269827800"
                    className="flex items-center gap-2 text-brand-primary font-semibold text-xs sm:text-sm py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
                    +91 22 6982 7800
                  </a>
                  <button
                    onClick={() => {
                      handleMobileClose();
                      handleLeadOpen();
                    }}
                    className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-primary/20"
                  >
                    Book Free Strategy Call
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 bg-white/95 backdrop-blur-xl border-t border-slate-200/60 flex items-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.07)]">
        <a
          href="tel:+912269827800"
          className="flex-1 bg-slate-100 hover:bg-slate-200 text-brand-primary font-bold text-center py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-colors"
        >
          <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-brand-secondary" />
          <span className="hidden xs:inline">Call Agency</span>
          <span className="xs:hidden">Call</span>
        </a>
        <button
          onClick={handleLeadOpen}
          className="flex-[1.5] bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 sm:gap-2 shadow-lg shadow-brand-primary/20 cursor-pointer"
        >
          <span className="hidden xs:inline">Book Strategy Call</span>
          <span className="xs:hidden">Strategy Call</span>
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
      </div>

      <LeadDialog
        isOpen={isLeadOpen}
        onClose={handleLeadClose}
        ctaSource="Header Navbar"
      />
    </>
  );
}

/* ── Sub-components ── */

function NavLink({
  href,
  children,
  scrolled,
  shrink,
  isMobile,
}: {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
  shrink: boolean;
  isMobile?: boolean;
}) {
  // Memoize styles for performance
  const fontSize = React.useMemo(() => {
    if (shrink) {
      return isMobile ? '10px' : '11px';
    }
    return isMobile ? '11px' : '12px';
  }, [shrink, isMobile]);

  return (
    <Link
      href={href}
      className={`relative px-2 lg:px-3 xl:px-3.5 py-1.5 lg:py-2 rounded-xl font-semibold transition-all duration-150 group whitespace-nowrap
        ${
          scrolled
            ? 'text-brand-primary/80 hover:text-brand-primary hover:bg-brand-primary/5'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }
      `}
      style={{
        fontSize,
        transition: 'font-size 0.4s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {children}
      <span
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 rounded-full transition-all duration-200 ${
          scrolled ? 'bg-brand-secondary/50' : 'bg-blue-400/60'
        }`}
      />
    </Link>
  );
}

function DropdownTrigger({
  open,
  children,
  scrolled,
  shrink,
  isMobile,
}: {
  open: boolean;
  children: React.ReactNode;
  scrolled: boolean;
  shrink: boolean;
  isMobile?: boolean;
}) {
  const fontSize = React.useMemo(() => {
    if (shrink) {
      return isMobile ? '10px' : '11px';
    }
    return isMobile ? '11px' : '12px';
  }, [shrink, isMobile]);

  return (
    <button
      className={`relative flex items-center gap-0.5 lg:gap-1 px-2 lg:px-3 xl:px-3.5 py-1.5 lg:py-2 rounded-xl font-semibold transition-all duration-150 cursor-pointer group whitespace-nowrap
        ${
          scrolled
            ? 'text-brand-primary/80 hover:text-brand-primary hover:bg-brand-primary/5'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }
      `}
      style={{
        fontSize,
        transition: 'font-size 0.4s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {children}
      <ChevronDown
        className={`h-2.5 w-2.5 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5 transition-transform duration-200 ${
          scrolled ? 'text-brand-muted' : 'text-white/40'
        }`}
        style={{ transform: open ? 'rotate(180deg)' : 'none' }}
      />
      <span
        className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 rounded-full transition-all duration-200 ${
          scrolled ? 'bg-brand-secondary/50' : 'bg-blue-400/60'
        }`}
      />
    </button>
  );
}

function MobileLink({
  href,
  onClick,
  sub,
  children,
}: {
  href: string;
  onClick: () => void;
  sub?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block rounded-xl font-semibold text-brand-primary hover:text-brand-secondary hover:bg-brand-secondary/5 transition-colors py-2 px-2.5 sm:px-3 ${
        sub
          ? 'text-xs sm:text-[13px] text-brand-muted/70'
          : 'text-sm sm:text-[14px]'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="px-2.5 sm:px-3 pt-2 sm:pt-3 pb-0.5 sm:pb-1 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-brand-muted/40">
      {children}
    </p>
  );
}