import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const faqs = [
    {
      question: 'Preciso ter experiência em confeitaria?',
      answer: 'Não! O método foi desenhado para quem está começando do zero, com aulas passo a passo que ensinam desde o básico até as estratégias de venda.',
    },
    {
      question: 'Quanto preciso investir para começar?',
      answer: 'Muito pouco. Ensinamos a começar com os utensílios que você já tem em casa e com uma lista de ingredientes de baixo custo e alto retorno.',
    },
    {
      question: 'Funciona para quem mora em cidade pequena?',
      answer: 'Sim! As estratégias de venda online que ensinamos são perfeitas para alcançar clientes em qualquer cidade, grande ou pequena, através do Instagram e WhatsApp.',
    },
    {
      question: 'Como recebo o acesso ao curso?',
      answer: 'O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a plataforma de aulas.',
    },
    {
        question: 'Por quanto tempo tenho acesso?',
        answer: 'O acesso é vitalício! Você pode assistir às aulas no seu ritmo, quantas vezes quiser, e aproveitar todas as futuras atualizações sem custo adicional.',
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Ainda Tem Dúvidas?
          </h2>
           <p className="mt-4 text-center text-lg text-muted-foreground">
            Respondemos as perguntas mais comuns para você decidir com segurança.
          </p>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-xl font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
