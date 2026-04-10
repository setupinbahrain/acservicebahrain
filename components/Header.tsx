"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { translationMatrix } from '../data/dictionary';

export default function Header({ locale }: { locale: 'en' | 'ar' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<'services' | 'areas' | null>(null);

  const dictionary = translationMatrix[locale] || translationMatrix['en'];
  const isArabic = locale === 'ar';

  const toggleMenu = () => setIsOpen(!isOpen);

  // Auto-close menu when clicking a link
  const cl = () => {
    setIsOpen(false);
    setDropdownOpen(null);
  };

  const MobileDropdown = ({ 
    title, 
    type, 
    children 
  }: { 
    title: string, 
    type: 'services' | 'areas', 
    children: React.ReactNode 
  }) => (
    <div className="border-t border-slate-700">
      <button 
        onClick={() => setDropdownOpen(dropdownOpen === type ? null : type)}
        className={`flex justify-between w-full p-4 font-bold ${isArabic ? 'flex-row-reverse' : ''}`}
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${dropdownOpen === type ? 'rotate-180' : ''}`} />
      </button>
      {dropdownOpen === type && (
        <div className={`bg-slate-800 ${isArabic ? 'text-right' : ''}`}>
          {children}
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-secondary text-white sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href={`/${locale}/`} onClick={cl} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="relative w-12 h-12">
             <Image src="/images/logo.webp" alt="AC Service Bahrain Logo" fill style={{ objectFit: 'contain' }} />
          </div>
          <div className={`text-xl md:text-2xl font-extrabold tracking-tight ${isArabic ? 'text-right' : ''}`}>
             {isArabic ? (
                <>صيانة التكييف <span className="text-primary font-medium">البحرين</span></>
             ) : (
                <>AC Service <span className="text-primary font-medium">Bahrain</span></>
             )}
          </div>
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex font-medium items-center ${isArabic ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
          <Link href={`/${locale}/`} className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">{dictionary.home}</Link>
          
          {/* Dropdown 1: Core Services */}
          <div className="relative group px-1 py-4">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white">
              {dictionary.services}
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className={`absolute top-14 ${isArabic ? 'right-0' : 'left-0'} w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden z-50`}>
               <div className="p-2 space-y-1">
                  <Link href={`/${locale}/services/air-conditioning-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'تصليح مكيفات سبليت' : 'Split AC Repair'}</Link>
                  <Link href={`/${locale}/services/fridge-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'تصليح ثلاجات وفريزرات' : 'Fridge & Freezers'}</Link>
                  <Link href={`/${locale}/services/washing-machine-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'تصليح غسالات' : 'Washing Machines'}</Link>
                  <Link href={`/${locale}/services/hvac-repair`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'صيانة تكييف تجاري' : 'Commercial HVAC'}</Link>
                  <Link href={`/${locale}/services/ducted-ac`} className={`block px-4 py-3 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors font-medium ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'مكيفات مركزية ووحدات دكت' : 'Central & Ducted AC'}</Link>
               </div>
               <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
                 <Link href={`/${locale}/#services-grid`} className="text-primary font-bold text-sm hover:underline">{isArabic ? 'عرض جميع خدمات الصيانة الـ 28' : 'View All 28 Services'} &rarr;</Link>
               </div>
            </div>
          </div>

          {/* Dropdown 2: Coverage Areas */}
          <div className="relative group px-1 py-4">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-white">
              {dictionary.locations}
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div className={`absolute top-14 ${isArabic ? '-right-32' : '-left-32'} w-[600px] bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 overflow-hidden z-50 p-6`}>
               <h4 className={`text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ${isArabic ? 'text-right' : ''}`}>{isArabic ? 'اختر منطقتك لعرض الخدمات الهندسية المتوفرة' : 'Select A District To See Local Services'}</h4>
               <div className="grid grid-cols-3 gap-2">
                  {[ 
                    {en: "Manama", ar: "المنامة"}, {en: "Riffa", ar: "الرفاع"}, {en: "Muharraq", ar: "المحرق"}, 
                    {en: "Seef", ar: "السيف"}, {en: "Juffair", ar: "الجفير"}, {en: "Saar", ar: "سار"}, 
                    {en: "Amwaj Islands", ar: "جزر أمواج"}, {en: "Hamad Town", ar: "مدينة حمد"}, {en: "Isa Town", ar: "مدينة عيسى"} 
                  ].map(city => (
                    <Link key={city.en} href={`/${locale}/areas/${city.en.toLowerCase().replace(/ /g, '-')}`} className={`block px-3 py-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium text-sm ${isArabic ? 'text-right' : ''}`}>
                      {isArabic ? city.ar : city.en}
                    </Link>
                  ))}
               </div>
               <div className="mt-6 text-center">
                 <Link href={`/${locale}/#areas-grid`} className="text-primary font-bold text-sm bg-slate-50 py-2 px-6 rounded-full hover:bg-primary hover:text-white transition-colors">{isArabic ? 'تصفح تغطيتنا لجميع مناطق البحرين الـ 64' : 'See all 64 Areas coverage'}</Link>
               </div>
            </div>
          </div>

          <Link href={`/${locale}/guides`} className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors">{dictionary.guides}</Link>
          <Link href={`/${locale}/cost`} className={`px-6 py-2 bg-primary/20 text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors border border-primary/50 ${isArabic ? 'mr-2' : 'ml-2'}`}>{dictionary.pricing}</Link>
          
          <div onClick={cl}><LanguageSwitcher /></div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-secondary border-t border-white/10 shadow-2xl transition-all duration-300 ${isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'} overflow-y-auto`}>
        <div className="flex flex-col p-4 pb-32">
           <Link href={`/${locale}/`} onClick={cl} className={`p-4 font-bold border-b border-slate-700 ${isArabic ? 'text-right' : ''}`}>{dictionary.home}</Link>
           
           <MobileDropdown title={dictionary.services} type="services">
              <Link href={`/${locale}/services/air-conditioning-repair`} onClick={cl} className="block p-4 pl-8 border-b border-slate-700/50">{isArabic ? 'تصليح مكيفات سبليت' : 'Split AC Repair'}</Link>
              <Link href={`/${locale}/services/fridge-repair`} onClick={cl} className="block p-4 pl-8 border-b border-slate-700/50">{isArabic ? 'تصليح ثلاجات وفريزرات' : 'Fridge & Freezers'}</Link>
              <Link href={`/${locale}/services/washing-machine-repair`} onClick={cl} className="block p-4 pl-8 border-b border-slate-700/50">{isArabic ? 'تصليح غسالات' : 'Washing Machines'}</Link>
              <Link href={`/${locale}/services/hvac-repair`} onClick={cl} className="block p-4 pl-8 border-b border-slate-700/50">{isArabic ? 'صيانة تكييف تجاري' : 'Commercial HVAC'}</Link>
              <Link href={`/${locale}/#services-grid`} onClick={cl} className="block p-4 pl-8 text-primary font-bold">{isArabic ? 'عرض جميع الخدمات' : 'View All Services'} &rarr;</Link>
           </MobileDropdown>

           <MobileDropdown title={dictionary.locations} type="areas">
              {[ 
                {en: "Manama", ar: "المنامة"}, {en: "Riffa", ar: "الرفاع"}, 
                {en: "Muharraq", ar: "المحرق"}, {en: "Seef", ar: "السيف"} 
              ].map(city => (
                <Link key={city.en} href={`/${locale}/areas/${city.en.toLowerCase().replace(/ /g, '-')}`} onClick={cl} className="block p-4 pl-8 border-b border-slate-700/50">
                  {isArabic ? city.ar : city.en}
                </Link>
              ))}
              <Link href={`/${locale}/#areas-grid`} onClick={cl} className="block p-4 pl-8 text-primary font-bold">{isArabic ? 'جميع المناطق الـ 64' : 'All 64 Areas'} &rarr;</Link>
           </MobileDropdown>

           <Link href={`/${locale}/guides`} onClick={cl} className={`p-4 font-bold border-b border-slate-700 ${isArabic ? 'text-right' : ''}`}>{dictionary.guides}</Link>
           <Link href={`/${locale}/cost`} onClick={cl} className={`p-4 font-bold border-b border-slate-700 text-primary ${isArabic ? 'text-right' : ''}`}>{dictionary.pricing}</Link>
           
           <div className="mt-8 flex justify-center w-full" onClick={cl}>
              <LanguageSwitcher />
           </div>
        </div>
      </div>
    </header>
  );
}
