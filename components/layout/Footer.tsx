import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Marca e Sobre */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-wider">
              CONTE<span className="text-primary">POL</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Especialistas em engenharia de poliuretano. Desenvolvemos peças técnicas, revestimentos e soluções customizadas de alta durabilidade para a indústria.
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-primary text-sm transition-colors">Início</Link>
              </li>
              <li>
                <Link href="#produtos" className="text-slate-400 hover:text-primary text-sm transition-colors">Mostruário de Produtos</Link>
              </li>
              <li>
                <Link href="#empresa" className="text-slate-400 hover:text-primary text-sm transition-colors">A Empresa</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold tracking-wide">Fale Conosco</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Rua Exemplo Industrial, 123<br />Bairro Industrial - SP</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contato@contepol.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {anoAtual} Contepol - Tecnologia em Poliuretano. Todos os direitos reservados.
          </p>
          <p className="text-slate-600 text-xs">
            Desenvolvido com tecnologia de alta performance.
          </p>
        </div>
      </div>
    </footer>
  );
};