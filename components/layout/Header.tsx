"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // <-- Importamos o componente de Imagem
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "#produtos" },
    { name: "Empresa", href: "#empresa" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO OFICIAL EM SVG */}
          <Link href="/" className="flex items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              // No modo escuro, adicionamos um fundo branco suave caso a letra da logo seja preta
              className="dark:bg-white/90 dark:p-1.5 dark:rounded-xl transition-all"
            >
              <Image 
                src="/logo_contepol_.svg" 
                alt="Contepol Logo Oficial" 
                width={160} // Largura da logo (ajuste se precisar)
                height={50} // Altura da logo
                priority // Carrega a logo instantaneamente
                className="w-auto h-10 md:h-12" // Fica com 40px no celular e 48px no PC
              />
            </motion.div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-[#F15A24] dark:text-slate-300 dark:hover:text-[#F15A24] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {/* Botão Mágico de Alternar Tema */}
            {mounted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                aria-label="Alternar tema"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            )}
          </nav>

          {/* Botões de Ação Mobile/Desktop */}
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <Link
                href="#orcamento"
                className="px-5 py-2.5 text-sm font-medium text-white bg-[#F15A24] rounded-full hover:bg-orange-600 transition-all duration-300 shadow-sm"
              >
                Solicitar Orçamento
              </Link>
            </motion.div>

            {/* Botão de Tema Mobile */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="md:hidden p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            {/* Menu Hamburger Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-900 dark:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="px-6 pt-2 pb-6 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-[#F15A24] dark:hover:text-[#F15A24] hover:bg-slate-50 dark:hover:bg-slate-900 rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <Link
                href="#orcamento"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center px-3 py-3 mt-4 text-base font-medium text-white bg-[#F15A24] rounded-xl hover:bg-orange-600 transition-colors"
              >
                Solicitar Orçamento
              </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};