"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-16 border-t border-slate-200 dark:border-slate-800 relative z-40 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
          
          {/* COLUNA 1: LOGO E SOBRE */}
          <div className="space-y-6">
            {/* Logo box */}
            <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center p-2 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
              <img src="/logo_contepol_.svg" alt="Contepol Logo" className="w-full h-full object-contain" />
            </div>
            <p className="leading-relaxed max-w-xs">
              Soluções avançadas em poliuretano para alta performance industrial. Durabilidade e engenharia de precisão.
            </p>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-[#F15A24] dark:hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/produtos" className="hover:text-[#F15A24] dark:hover:text-white transition-colors">Produtos</Link></li>
              <li><Link href="#empresa" className="hover:text-[#F15A24] dark:hover:text-white transition-colors">A Empresa</Link></li>
              <li><Link href="/contato" className="hover:text-[#F15A24] dark:hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-600 dark:text-teal-500" />
                <span>(98) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-600 dark:text-teal-500" />
                <span>contato@contepol.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-500" />
                <span>São Luís, MA</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: REDES SOCIAIS */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">Redes Sociais</h4>
            <div className="flex gap-4">
              
              {/* Botão LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/contepol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-50 p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#F15A24] hover:border-[#F15A24] dark:hover:bg-[#F15A24] hover:text-white dark:hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Botão Instagram */}
              <a 
                href="https://www.instagram.com/contepol.oficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-50 p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-[#F15A24] hover:border-[#F15A24] dark:hover:bg-[#F15A24] hover:text-white dark:hover:text-white transition-all shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

        </div>

        {/* RODAPÉ FINAL (COPYRIGHT) */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Contepol Tecnologia em Poliuretano. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por <span className="font-semibold text-slate-900 dark:text-white">meup4i</span>
          </p>
        </div>
      </div>
    </footer>
  );
};