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

  // Lógica para esconder/mostrar o header ao rolar
  useEffect(() => {
    setMounted(true);
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        setIsVisible(false); // Esconde ao rolar para baixo
      } else {
        setIsVisible(true); // Mostra ao rolar para cima
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
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
      {/* HEADER PRINCIPAL */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <div className="dark:bg-white/90 dark:p-1.5 dark:rounded-xl">
                <Image src="/logo_contepol_.svg" alt="Contepol" width={140} height={45} className="w-auto h-10" />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-[#F15A24] transition-colors">
                  {link.name}
                </Link>
              ))}
              {mounted && (
                <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2">
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              {/* Botão WhatsApp no Menu */}
              <a href={linkWhatsApp} target="_blank" className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all">
                <MessageCircle className="w-4 h-4" /> Solicitar Orçamento
              </a>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* BOTÃO WHATSAPP FLUTUANTE (Aparece quando o header some) */}
      <AnimatePresence>
        {!isVisible && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            href={linkWhatsApp}
            target="_blank"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-900"
          >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-lg border border-slate-200 dark:border-slate-700">
              Orçamento via WhatsApp
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[55] bg-white dark:bg-slate-950 pt-24 px-6 md:hidden">
             <div className="space-y-6">
               {navLinks.map((link) => (
                 <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-bold">
                   {link.name}
                 </Link>
               ))}
               <a href={linkWhatsApp} className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold">
                 <MessageCircle className="w-6 h-6" /> WhatsApp
               </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};