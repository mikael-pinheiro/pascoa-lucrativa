import { Check } from 'lucide-react';

export function WhatsappProofSection() {
  return (
    <section id="social-proof" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
                Resultados Reais, Conversas Reais
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Veja o que nossas alunas estão dizendo após aplicar o método.
            </p>
        </div>

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Testimonial 1 - Camila R SP */}
          <div className="w-full rounded-lg shadow-2xl bg-[#0a181c] p-4 font-sans text-white overflow-hidden flex flex-col">
            <div className="flex justify-center mb-4">
              <span className="bg-[#182229] text-gray-400 text-xs rounded-md px-2 py-1">
                5 de março de 2025
              </span>
            </div>
            <div className="flex-grow space-y-4">
                <div className="flex justify-start">
                    <div className="relative max-w-[90%] bg-[#202c33] rounded-lg p-2.5">
                        <p className="text-sm font-bold text-blue-400">Camila R SP</p>
                        <p className="text-sm text-gray-200 mt-1">
                            Eu nunca tinha feito ovos de Páscoa para vender, só para minha família. Segui o passo a passo do guia e consegui fazer meus primeiros ovos de colher sem errar. Já vendi 18 unidades na primeira semana! O melhor é que agora eu sei exatamente quanto cobrar para ter lucro.
                        </p>
                        <div className="text-right text-xs text-gray-400 mt-1">11:50</div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
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
                </div>

                 <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
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
                </div>

                <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
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

                 <div className="flex justify-start">
                    <div className="relative max-w-[90%] bg-[#202c33] rounded-lg p-2.5">
                        <p className="text-sm text-gray-200 mt-1">
                          Pode deixa, mando sim obrigada
                        </p>
                        <div className="text-right text-xs text-gray-400 mt-1">11:57</div>
                    </div>
                </div>

                 <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
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


          {/* Testimonial 2 */}
          <div className="w-full rounded-lg shadow-2xl bg-[#0a181c] p-4 font-sans text-white overflow-hidden flex flex-col">
            <div className="flex justify-center mb-4">
              <span className="bg-[#182229] text-gray-400 text-xs rounded-md px-2 py-1">
                Hoje
              </span>
            </div>
            <div className="flex-grow space-y-4">
                <div className="flex justify-start">
                    <div className="relative max-w-[90%] bg-[#202c33] rounded-lg p-2.5">
                    <p className="text-sm font-bold text-pink-400">Patrícia S.</p>
                    <p className="text-sm text-gray-200 mt-1">
                        o que mais me ajudou foi a parte de calculo de custos. Eu sempre vendia sem saber se tava lucrando de vdd. agr eu sei exatamente meu custo e minha margem. mudou tudo.
                    </p>
                    <div className="text-right text-xs text-gray-400 mt-1">12:04</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
                        <p className="text-sm text-gray-200">
                        Nossa Patricia, que legal. Fico feliz por consegui usar o guia e fazer seu dinheirinho em casa. Boa vendas! 😉
                        </p>
                        <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                            <span>12:05</span>
                            <span className="relative inline-block w-4 h-4 ml-1">
                                <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                                <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Testimonial 3 - Ana L S */}
          <div className="w-full rounded-lg shadow-2xl bg-[#0a181c] p-4 font-sans text-white overflow-hidden flex flex-col">
            <div className="flex justify-center mb-4">
              <span className="bg-[#182229] text-gray-400 text-xs rounded-md px-2 py-1">
                Hoje
              </span>
            </div>
            <div className="flex-grow space-y-4">
                <div className="flex justify-start">
                    <div className="relative max-w-[90%] bg-[#202c33] rounded-lg p-2.5">
                        <p className="text-sm font-bold text-green-400">Ana L S</p>
                        <p className="text-sm text-gray-200 mt-1">
                            Eu tinha medo de investir e não conseguir vender. Mas com as estratégias simples de divulgação consegui meus primeiros pedidos pelo Instagram em poucos dias. Valeu muito a pena
                        </p>
                        <div className="text-right text-xs text-gray-400 mt-1">12:08</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
                        <p className="text-sm text-gray-200">
                            Nossa Ana, que legal. Fico feliz por consegui usar o guia e fazer seu dinheirinho em casa 🏠
                        </p>
                        <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                        <span>12:10</span>
                        <span className="relative inline-block w-4 h-4 ml-1">
                            <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                            <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                        </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="relative max-w-[90%] bg-[#202c33] rounded-lg p-2.5">
                        <p className="text-sm text-gray-200 mt-1">
                            Estou conseguindo montar o preço certinho, já tenho encomendas !!! Isso me animou em hora vender ovos, quer comprar kkkkk !!!?
                        </p>
                        <div className="text-right text-xs text-gray-400 mt-1">12:12</div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="relative max-w-[90%] bg-[#005c4b] rounded-lg p-2.5 text-left">
                        <p className="text-sm text-gray-200">
                            Aí que felicidade em ver sua empolgação, se não morassem tão longe eu já encomendaram com você!!!
                        </p>
                        <div className="flex justify-end items-center text-xs text-gray-400 mt-1">
                        <span>12:12</span>
                        <span className="relative inline-block w-4 h-4 ml-1">
                            <Check className="h-4 w-4 absolute left-0 text-blue-400" />
                            <Check className="h-4 w-4 absolute left-1 text-blue-400" />
                        </span>
                        </div>
                    </div>
                </div>
                 <div className="flex justify-start">
                    <div className="relative max-w-[90%] bg-[#202c33] rounded-lg p-2.5">
                         <p className="text-sm text-gray-200 mt-1">
                            Pode deixar, obrigado viu
                        </p>
                        <div className="text-right text-xs text-gray-400 mt-1">12:13</div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
