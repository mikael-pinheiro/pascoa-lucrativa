import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { AgitationSection } from '@/components/landing/AgitationSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { SocialProofSection } from '@/components/landing/SocialProofSection';
import { AuthoritySection } from '@/components/landing/AuthoritySection';
import { BonusSection } from '@/components/landing/BonusSection';
import { UrgencySection } from '@/components/landing/UrgencySection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <AgitationSection />
        <SolutionSection />
        <BenefitsSection />
        <FeaturesSection />
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
