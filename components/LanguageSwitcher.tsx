"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/';
  
  // Extract current locale
  const currentLocale = pathname.split('/')[1]; 
  const isArabic = currentLocale === 'ar';
  
  // Map our target toggle
  const toggleLocale = isArabic ? 'en' : 'ar';
  
  let newPathname = pathname;
  if(pathname.startsWith(`/${currentLocale}`)) {
    newPathname = pathname.replace(`/${currentLocale}`, `/${toggleLocale}`);
  } else {
    newPathname = `/${toggleLocale}${pathname}`;
  }

  return (
    <Link 
      href={newPathname} 
      className="flex items-center gap-2 bg-slate-800/50 hover:bg-white/20 border border-white/20 text-white font-bold py-1.5 px-4 rounded-full transition-all text-sm md:ml-4 shadow-sm"
    >
      {isArabic ? "🇺🇸 English" : "عربي 🇧🇭"}
    </Link>
  );
}
