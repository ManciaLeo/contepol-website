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
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
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
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Grid de 3 colunas para centralizar o menu perfeitamente */}
          <div className="grid grid-cols-2 md:grid-cols-3 items-center h-20 md:h-24 transition-all">
            
            {/* LADO ESQUERDO: LOGO (Aumentada) */}
            <div className="flex justify-start">
              <Link href="/" className="flex items-center">
                <div className="dark:bg-white/90 dark:p-2 dark:rounded-xl">
                  <Image 
                    src="/logo_contepol_.svg" 
                    alt="Contepol" 
                    width={180} // Aumentado
                    height={60} 
                    className="w-auto h-12 md:h-16" // Altura aumentada de h-10 para h-16
                  />
                </div>
              </Link>
            </div>

            {/* CENTRO: MENU (Apenas Desktop) */}
            <nav className="hidden md:flex justify-center items-center space-x-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-[#F15A24] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F15A24] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* LADO DIREITO: BOTÕES (WhatsApp e Tema) */}
            <div className="flex justify-end items-center gap-4">
              {mounted && (
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                  className="hidden md:flex p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              
              <a 
                href={linkWhatsApp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] shadow-sm transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" /> Solicitar Orçamento
              </a>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center gap-3">
                 {mounted && (
                    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2">
                      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  )}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                  className="text-slate-900 dark:text-white"
                >
                  {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* BOTÃO WHATSAPP FLUTUANTE (Sem alterações) */}
      <AnimatePresence>
        {!isVisible && (
          <motion.a
            initial={{ scale: 0, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 50 }}
            whileHover={{ scale: 1.1 }}
            href={linkWhatsApp}
            target="_blank"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-900"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};