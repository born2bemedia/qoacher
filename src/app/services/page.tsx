import { ContactFrame } from '@/features/contact-form/ui/contact-frame';
import { ServicePreview } from '@/features/services/ui/service-preview';

import { Hero } from '@/shared/ui/components/organisms/hero';

export default function ServicesPage() {
  return (
    <main>
      <Hero
        title={
          <>
            Choose the Coaching <br /> That Fits Your Situation
          </>
        }
        description="Career. Personal life. Relationships. Long-term growth."
        imgUrl="/images/services/hero.jpg"
      />
      <ServicePreview
        title="Career Coaching"
        text="If you're stuck, lost, or thinking about changing direction, we help you make clear decisions, prepare for the next step, and take control of your work life."
        buttonUrl="/career-coaching"
        imgUrl="/images/services/1.png"
      />
      <ServicePreview
        title="Personal Coaching"
        text="For people who feel drained, overwhelmed, or disconnected from themselves. We help you rebuild focus, stability, and personal clarity."
        buttonUrl="/personal-coaching"
        imgUrl="/images/services/2.png"
        reverse
      />
      <ServicePreview
        title="Communication and Relationship Coaching"
        text="Support for handling conflict, setting boundaries, and improving connection — whether at home, work, or anywhere between."
        buttonUrl="/communication-and-relationship-coaching"
        imgUrl="/images/services/3.png"
      />
      <ServicePreview
        title="Growth and Long-Term Planning"
        text="For those who want structure over time. We help you build habits, maintain progress, and stay aligned with where you're going."
        buttonUrl="/growth-and-long-term-planning"
        imgUrl="/images/services/4.png"
        reverse
      />
      <ContactFrame
        title="Need Help Choosing a Coaching Path?"
        description="Don’t hesitate to reach out. We’re available 24/7 to help you understand your options and find the right coaching for your situation."
      />
    </main>
  );
}
