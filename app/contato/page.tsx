"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contato() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-x-hidden font-sans transition-colors duration-300 pt-32 pb-24">
      <div className="w-full max-w-7xl px-6">
        
        {/* CABEÇALHO */}
        <Reveal>
          <div className="text-center mb-16 mt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Fale com a <span className="text-[#F15A24]">Contepol</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Nossa engenharia está pronta para entender a sua demanda e desenvolver a melhor solução em poliuretano.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LADO ESQUERDO: INFORMAÇÕES E MAPA REAL */}
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-full text-teal-600">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefone / WhatsApp</p>
                      <p>(11) 99999-9999</p>
                    </div>
                  </div>
            </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-full text-teal-600">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">E-mail Corporativo</p>
                      <p>contato@contepol.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-50 dark:bg-teal-900/30 p-3 rounded-full text-teal-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold">Nossa Fábrica</p>
                      <p>Rua Exemplo, 123 - Distrito Industrial, SP</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAPA REAL DA CONTEPOL */}
<div className="w-full h-80 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm relative group">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5123456789!2d-46.1234567!3d-23.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQ29udGVwb2wgLSBUZWNub2xvZ2lhIGVtIFBvbGl1cmV0YW5v!5e0!3m2!1spt-BR!2sbr!4v1712345678901!5m2!1spt-BR!2sbr"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
  ></iframe>
</div>
          </Reveal>

          {/* LADO DIREITO: FORMULÁRIO */}
          <Reveal delay={0.4}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-8">Envie sua Solicitação</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nome Completo</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#F15A24] transition-all" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Empresa</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#F15A24] transition-all" placeholder="Sua empresa" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">E-mail</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#F15A24] transition-all" placeholder="contato@empresa.com.br" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mensagem</label>
                  <textarea rows={5} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#F15A24] transition-all resize-none" placeholder="Descreva sua necessidade..."></textarea>
                </div>
                
                <button type="button" className="w-full mt-8 py-4 bg-[#F15A24] text-white font-bold text-lg rounded-2xl hover:bg-orange-600 transition-all shadow-md">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </main>
  );
}