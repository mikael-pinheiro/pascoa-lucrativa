import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection as ImageGallerySection } from '@/components/landing/ProblemSection';
import { AgitationSection as DesireSection } from '@/components/landing/AgitationSection';
import { SolutionSection as ProfitSimulationSection } from '@/components/landing/SolutionSection';
import { FeaturesSection as ModulesSection } from '@/components/landing/FeaturesSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { AuthoritySection } from '@/components/landing/AuthoritySection';
import { BonusSection } from '@/components/landing/BonusSection';
import { UrgencySection } from '@/components/landing/UrgencySection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { Footer } from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImageGallerySection />
        <DesireSection />
        <div className="py-12 text-center bg-background">
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 sm:w-auto animate-pulse" asChild>
            <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">🔴 QUERO LUCRAR NESSA PÁSCOA</Link>
          </Button>
        </div>
        <ProfitSimulationSection />
        <ModulesSection />
         <div className="py-12 text-center bg-accent">
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-7 px-10 sm:w-auto animate-pulse" asChild>
            <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">🔴 QUERO LUCRAR NESSA PÁSCOA</Link>
          </Button>
        </div>
        <SocialProofSection />
        <AuthoritySection />
        <BonusSection />
        <UrgencySection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
