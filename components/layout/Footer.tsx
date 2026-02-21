"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* COLUNA 1: LOGO E SOBRE */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <div className="dark:bg-white/90 dark:p-1.5 dark:rounded-xl transition-all">
                <Image 
                  src="/logo_contepol_.svg" 
                  alt="Contepol Logo" 
                  width={140} 
                  height={45} 
                  className="w-auto h-8"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Soluções avançadas em poliuretano para alta performance industrial. Durabilidade e engenharia de precisão.
            </p>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-[#F15A24] transition-colors text-sm">Início</Link></li>
              <li><Link href="/#produtos" className="text-slate-600 dark:text-slate-400 hover:text-[#F15A24] transition-colors text-sm">Produtos</Link></li>
              <li><Link href="/#empresa" className="text-slate-600 dark:text-slate-400 hover:text-[#F15A24] transition-colors text-sm">A Empresa</Link></li>
              <li><Link href="/contato" className="text-slate-600 dark:text-slate-400 hover:text-[#F15A24] transition-colors text-sm">Contato</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="w-4 h-4 text-teal-600" /> (11) 99999-9999
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4 text-teal-600" /> contato@contepol.com.br
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="w-4 h-4 text-teal-600" /> São Paulo, SP
              </li>
            </ul>
          </div>

          {/* COLUNA 4: REDES SOCIAIS */}
          <div className="space-y-6">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-wider text-xs">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-[#F15A24] hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/contepol.oficial" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-[#F15A24] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* RODAPÉ FINAL (COPYRIGHT) */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {currentYear} Contepol Tecnologia em Poliuretano. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Desenvolvido por <span className="font-semibold text-slate-700 dark:text-slate-300">meup4i</span>
          </p>
        </div>
      </div>
    </footer>
  );
};