import React from 'react';
import { Target, Eye, Diamond, CheckCircle2, Building2 } from 'lucide-react';

export default function EmpresaPage() {
  const valores = [
    "Atendimento aos requisitos legais aplicáveis ao negócio;",
    "Comprometimento com os nossos clientes;",
    "Confiabilidade na fabricação dos produtos;",
    "Ética e transparência nas relações comerciais;",
    "Desenvolvimento e capacitação dos nossos colaboradores."
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-32 pb-20 transition-colors duration-300">
      
      {/* HEADER DA PÁGINA */}
      <div className="container mx-auto px-6 max-w-7xl text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A24] to-[#f5835e]">História</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Mais de duas décadas construindo a base para o desenvolvimento do Maranhão e da região Norte e Nordeste.
        </p>
      </div>

      {/* SEÇÃO SOBRE A EMPRESA */}
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
          
          {/* Efeito de luz de fundo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F15A24]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex-1 space-y-6 relative z-10 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
                <Building2 className="w-8 h-8 text-[#F15A24]" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Sobre a Contepol</h2>
            </div>
            
            <p>
              Com mais de duas décadas de tradição e solidez, a Contepol consolidou-se como uma das maiores e mais respeitadas indústrias de pré-moldados de concreto armado do Maranhão. Sediada no polo estratégico do Distrito Industrial de São Luís, nossa trajetória é marcada pelo compromisso inegociável com a excelência técnica e a satisfação dos clientes.
            </p>
            <p>
              O resultado de mais de 23 anos de esforço conjunto nos ajudou a vencer os mais complexos desafios da engenharia moderna. Nossa infraestrutura robusta e equipe capacitada estão prontas para atender às mais altas exigências do mercado – qualidade atestada pela nossa homologação como fornecedora técnica credenciada junto às principais concessionárias de energia do país, como a Equatorial Energia.
            </p>
            <p>
              Hoje, nosso moderno parque fabril produz desde postes para redes elétricas, cruzetas e tubos, até estacas, caixas antifurto, estruturas para linhas de transmissão e galpões em concreto armado, atendendo aos mais diversos ramos de atividade.
            </p>
          </div>
        </div>
      </div>

      {/* MISSÃO, VISÃO E VALORES */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* MISSÃO */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 shadow-sm">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-[#F15A24]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Missão</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Fabricar produtos pré-moldados de concreto armado com máxima qualidade, confiabilidade e segurança, fornecendo soluções de infraestrutura que atendam prontamente as expectativas dos nossos clientes.
            </p>
          </div>

          {/* VISÃO */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 shadow-sm">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-[#F15A24]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Visão</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Ser a indústria líder e a principal referência em tecnologia, solidez e qualidade no segmento de pré-moldados de concreto nas regiões Norte e Nordeste do Brasil até o ano de 2030.
            </p>
          </div>

          {/* VALORES */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 shadow-sm md:col-span-3 lg:col-span-1">
            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6">
              <Diamond className="w-7 h-7 text-[#F15A24]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Valores</h3>
            <ul className="space-y-3">
              {valores.map((valor, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-[#F15A24] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-sm">{valor}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </main>
  );
}