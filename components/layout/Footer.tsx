"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 transition-colors duration-300 relative z-40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* --- COLUNA 1: LOGO E SOBRE --- */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
              Contepol<span className="text-[#F15A24]">.</span>
            </h3>
            <p className="max-w-md leading-relaxed mb-8 text-slate-400 font-medium">
              Engenharia em pré-moldados e soluções industriais de alta performance. Qualidade e solidez que constroem o futuro do Maranhão e do Brasil.
            </p>
            
            {/* REDES SOCIAIS (COM OS LINKS BLINDADOS) */}
            <div className="flex gap-4">
              
              {/* Botão LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/contepol" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-50 p-3 rounded-full bg-slate-900 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="Acessar LinkedIn da Contepol"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Botão Instagram (CORRIGIDO PARA contepol.oficial E FUNCIONANDO) */}
              <a 
                href="https://www.instagram.com/contepol.oficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-50 p-3 rounded-full bg-slate-900 text-slate-400 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                aria-label="Acessar Instagram da Contepol"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* --- COLUNA 2: NAVEGAÇÃO RÁPIDA --- */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Menu</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-[#F15A24] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#F15A24] transition-colors"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-[#F15A24] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#F15A24] transition-colors"></span>
                  Mostruário
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#F15A24] transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-[#F15A24] transition-colors"></span>
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* --- COLUNA 3: CONTATO E ENDEREÇO --- */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-slate-600 group-hover:text-[#F15A24] shrink-0 mt-0.5 transition-colors" />
                <span className="leading-relaxed">São Luís - MA<br/>Distrito Industrial</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-slate-600 group-hover:text-[#F15A24] shrink-0 transition-colors" />
                <span className="font-mono mt-1">(98) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-slate-600 group-hover:text-[#F15A24] shrink-0 transition-colors" />
                <span>contato@contepol.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- RODAPÉ INFERIOR (COPYRIGHT) --- */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
          <p>© {new Date().getFullYear()} Contepol. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Projetado com <span className="text-[#F15A24]">solidez</span> e tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
}