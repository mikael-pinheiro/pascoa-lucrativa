import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqSection() {
  const faqs = [
    {
      question: 'É para iniciantes?',
      answer: 'Sim. Você aprende do zero.',
    },
    {
      question: 'Preciso ter muitos equipamentos?',
      answer: 'Não. A proposta é produção simples e lucrativa.',
    },
    {
      question: 'Por quanto tempo tenho acesso?',
      answer: 'Acesso completo para assistir quando quiser.',
    },
    {
      question: 'Funciona mesmo para quem vende pouco hoje?',
      answer: 'Sim. O método foi feito justamente para organizar e escalar.',
    },
  ];

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-headline text-3xl font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl">
            Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
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
