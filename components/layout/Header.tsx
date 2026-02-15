"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) setIsVisible(true);
      else if (currentScrollY > lastScrollY) setIsVisible(false);
      else setIsVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/#produtos" },
    { name: "Empresa", href: "/#empresa" },
    { name: "Contato", href: "/contato" },
  ];

  const numeroWhatsApp = "5511999999999"; 
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de um orçamento.`;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-[100] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20 md:h-24">
            
            {/* LOGO */}
            <div className="flex justify-start">
              <Link href="/" className="dark:bg-white/90 dark:p-2 dark:rounded-xl">
                <Image src="/logo_contepol_.svg" alt="Contepol" width={180} height={60} className="w-auto h-12 md:h-16" />
              </Link>
            </div>

            {/* MENU DESKTOP CENTRALIZADO */}
            <nav className="hidden md:flex justify-center items-center space-x-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-base font-bold text-slate-700 dark:text-slate-200 hover:text-[#F15A24] transition-colors">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* BOTÕES DIREITA */}
            <div className="flex justify-end items-center gap-4">
              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-slate-500">
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <a href={linkWhatsApp} target="_blank" className="hidden md:flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E]">
                <MessageCircle className="w-4 h-4" /> Solicitar Orçamento
              </a>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-900 dark:text-white p-2">
                {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* MENU MOBILE CORRIGIDO (FULL VISIBILITY) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-[110] bg-white dark:bg-slate-950 flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
               <Image src="/logo_contepol_.svg" alt="Logo" width={120} height={40} className="dark:bg-white/90 dark:p-1 dark:rounded-lg" />
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 dark:text-white">
                 <X className="h-10 w-10" />
               </button>
            </div>

            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black text-slate-800 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <a href={linkWhatsApp} className="flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold text-xl mt-4">
                <MessageCircle className="w-6 h-6" /> WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <AnimatePresence>
        {!isVisible && !isMobileMenuOpen && (
          <motion.a
            initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            href={linkWhatsApp} target="_blank"
            className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl border-4 border-white dark:border-slate-900"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};