import { XCircle, DollarSign, Clock, Users } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: DollarSign,
      title: 'Vender sem lucro',
      description: 'Você trabalha sem parar, vende bastante, mas no final do mês, o dinheiro não sobra. A precificação errada está comendo todo o seu ganho.',
    },
    {
      icon: Clock,
      title: 'Produção caótica',
      description: 'A cozinha vira um campo de batalha. Você perde tempo, se cansa demais e o estresse toma conta, afetando a qualidade dos seus produtos.',
    },
    {
      icon: Users,
      title: 'Clientes não aparecem',
      description: 'Seus doces são deliciosos, mas você não consegue atrair clientes. A divulgação parece um bicho de sete cabeças e a concorrência parece levar todos.',
    },
    {
      icon: XCircle,
      title: 'Medo de começar',
      description: 'A vontade de ter seu próprio negócio é grande, mas a insegurança e a falta de um plano claro te paralisam. Por onde começar? O que vender?',
    },
  ];

  return (
    <section id="problema" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Você se identifica com algum desses problemas?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Se você sonha em lucrar com confeitaria na Páscoa, mas se sente perdida, você não está sozinha.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 text-left sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground flex-shrink-0 mt-1">
                    <problem.icon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="font-bold text-lg font-headline text-foreground">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
