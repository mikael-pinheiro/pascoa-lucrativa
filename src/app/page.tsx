import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { ImageGallerySection } from '@/components/landing/ImageGallerySection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { BenefitsSection } from '@/components/landing/BenefitsSection';
import { AgitationSection } from '@/components/landing/AgitationSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
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
    <div className="flex min-h-screen flex-col bg-[#FFF6E5]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ImageGallerySection />
        <ProblemSection />
        <BenefitsSection />
        <AgitationSection />
        <SolutionSection />
        <div className="py-12 text-center bg-[#FFF6E5]">
          <Button size="lg" className="w-full bg-[#FFC107] text-[#3B1F1F] hover:bg-[#FFC107]/90 font-bold text-lg py-7 px-10 sm:w-auto animate-pulse" asChild>
            <Link href="https://app.bancobabylon.com/payment/checkout/8b1471d4-f8df-4db1-9437-0131a2131459">🔴 QUERO LUCRAR NESSA PÁSCOA</Link>
          </Button>
        </div>
        <FeaturesSection />
        <SocialProofSection />
        <AuthoritySection />
        <BonusSection />
        <GuaranteeSection />
        <UrgencySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
