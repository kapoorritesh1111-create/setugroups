import { SectionShell } from './ui/section-shell';
import { Button } from './ui/button';

export function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Start the Conversation"
      description="Whether you’re exploring services, partnerships, or products, Setu Groups is built to feel trustworthy before the first meeting. Email us or schedule a call — we’ll respond within 24 hours."
    >
      <div className="rounded-3xl bg-ink p-8 text-white shadow-soft md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-semibold">Let’s talk about what you’re building.</p>
            <p className="mt-3 text-slate-300">Email: hello@setugroups.com</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="mailto:hello@setugroups.com">Email Us</Button>
            <Button href="/#products" variant="secondary">Explore Products</Button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
