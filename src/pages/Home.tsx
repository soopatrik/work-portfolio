import { HeroSection } from "@/components/hero-section"
import { AITechnologySection } from "@/components/ai-technology-section"
import { AIProcessSection } from "@/components/ai-process-section"
import { AIImpactSection } from "@/components/ai-impact-section"
import { CORXShowcase } from "@/components/corx-showcase"
import { SocialProofSection } from "@/components/social-proof-section"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AITechnologySection />
      <AIProcessSection />
      <AIImpactSection />
      <CORXShowcase />
      <SocialProofSection />
    </div>
  )
}

export default Home