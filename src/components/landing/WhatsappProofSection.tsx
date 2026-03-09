import { Check } from 'lucide-react';

export function WhatsappProofSection() {
  return (
    <section id="social-proof" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-10">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
                Resultados Reais, Conversas Reais
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Veja o que uma de nossas alunas disse logo após aplicar o método.
            </p>
        </div>
        <div className="w-full max-w-md mx-auto rounded-lg shadow-2xl bg-[#0a181c] p-4 font-sans text-white overflow-hidden">
          {/* Date */}
          <div className="flex justify-center mb-4">
            <span className="bg-[#182229] text-gray-400 text-xs rounded-md px-2 py-1">
              5 de março de 2025
            </span>
          </div>

          {/* Message Bubble (Camila) */}
          <div className="mb-4">
            <div className="relative max-w-[90%] sm:max-w-[80%] inline-block bg-[#202c33] rounded-lg p-2.5">
              <p className="text-sm text-gray-200">
                Eu nunca tinha feito ovos de Páscoa para vender, só para minha família. Segui o passo a passo do guia e consegui fazer meus primeiros ovos de colher sem errar. Já vendi 18 unidades na primeira semana! O melhor é que agora eu sei exatamente quanto cobrar para ter lucro.
              </p>
              <div className="text-right text-xs text-gray-400 mt-1">11:50</div>
            </div>
          </div>

          {/* Message Bubbles (Owner) */}
          <div className="flex flex-col items-end gap-2">
              <div className="relative max-w-[90%] sm:max-w-[80%] inline-block bg-[#005c4b] rounded-lg p-2.5 text-left">
                <p className="text-sm text-gray-200">
                  Nossa Camila, que legal
                </p>
                <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                  <span>11:55</span>
                  <span className="relative inline-block w-4 h-4 ml-1">
                    <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                    <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                  </span>
                </div>
              </div>
              <div className="relative max-w-[90%] sm:max-w-[80%] inline-block bg-[#005c4b] rounded-lg p-2.5 text-left">
                <p className="text-sm text-gray-200">
                  Fico feliz por consegui usar o guia e fazer seu dinheirinho em casa 🏠
                </p>
                <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                   <span>11:55</span>
                   <span className="relative inline-block w-4 h-4 ml-1">
                    <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                    <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                  </span>
                </div>
              </div>
               <div className="relative max-w-[90%] sm:max-w-[80%] inline-block bg-[#005c4b] rounded-lg p-2.5 text-left">
                <p className="text-sm text-gray-200">
                  Boa vendas, qualquer coisa me manda mensagem aqui 😉
                </p>
                <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                   <span>11:56</span>
                   <span className="relative inline-block w-4 h-4 ml-1">
                    <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                    <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                  </span>
                </div>
              </div>
          </div>

           {/* Message Bubble (Camila) */}
           <div className="mt-4">
            <div className="relative max-w-[90%] sm:max-w-[80%] inline-block bg-[#202c33] rounded-lg p-2.5">
              <p className="text-sm text-gray-200">
                Pode deixa, mando sim obrigada
              </p>
              <div className="text-right text-xs text-gray-400 mt-1">11:57</div>
            </div>
          </div>

           {/* Message Bubble (Owner) */}
          <div className="mt-2 text-right">
            <div className="relative max-w-[90%] sm:max-w-[80%] inline-block bg-[#005c4b] rounded-lg p-2.5 text-left">
              <p className="text-sm text-gray-200">
                Por nada 😊
              </p>
              <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                 <span>11:57</span>
                 <span className="relative inline-block w-4 h-4 ml-1">
                    <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                    <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                  </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
