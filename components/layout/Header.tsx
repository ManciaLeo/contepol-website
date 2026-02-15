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
      
      // Se estiver no topo (menos de 50px de rolagem), o menu SEMPRE fica visível
      if (currentScrollY < 50) {
        setIsVisible(true);
      } 
      // Se o usuário rolar para baixo, esconde o menu
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } 
      // Se o usuário rolar para cima, mostra o menu imediatamente
      else {
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

  // Troque o número abaixo pelo da empresa
  const numeroWhatsApp = "5511999999999"; 
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=Olá! Gostaria de um orçamento.`;

  return (
    <>
      {/* BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <div className="dark:bg-white/90 dark:p-1.5 dark:rounded-xl">
                <Image 
                  src="/logo_contepol_.svg" 
                  alt="Contepol" 
                  width={140} 
                  height={45} 
                  className="w-auto h-10" 
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#F15A24] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {mounted && (
                <button 
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                  className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              )}
              <a 
                href={linkWhatsApp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] shadow-sm transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" /> Solicitar Orçamento
              </a>
            </nav>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="md:hidden text-slate-900 dark:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* BOTÃO WHATSAPP FLUTUANTE (Aparece apenas quando o Header some) */}
      <AnimatePresence>
        {!isVisible && (
          <motion.a
            initial={{ scale: 0, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 50 }}
            whileHover={{ scale: 1.1 }}
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white dark:border-slate-900"
          >
            <MessageCircle className="w-8 h-8" />
            <div className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 dark:border-slate-700 whitespace-nowrap hidden sm:block">
              Falar com Engenharia
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};