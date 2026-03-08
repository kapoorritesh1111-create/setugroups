import Image from "next/image";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { WaitlistForm } from "../forms/waitlist-form";

export function WaitlistPageContent() {
  return (
    <>
      <section className="pb-14 pt-14 sm:pb-18 sm:pt-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex rounded-full border border-electric/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric shadow-soft">
                Setu CRM • Coming soon
              </div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-soft">
                  <Image src="/setu-crm-icon.svg" alt="Setu CRM" width={56} height={56} className="h-14 w-14" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/45">Commercial clarity platform</span>
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
                Pipeline visibility, customer continuity, and commercial clarity.
              </h1>
              <p className="mt-6 text-lg leading-8 text-navy/70 sm:text-xl">
                Setu CRM is being shaped as a clean, structured CRM for teams that want better pipeline oversight without bloated software overhead. It is built to feel natural within the Setu ecosystem — simple, powerful, and operationally grounded.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#waitlist">Join the waitlist</Button>
                <Button href="/setu-track" variant="secondary">Explore Setu Track</Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Pipelines", "Cleaner stage visibility"],
                  ["Continuity", "Better customer follow-through"],
                  ["Ecosystem", "Designed to sit beside Setu Track"],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-navy/6 bg-white px-4 py-4 shadow-soft">
                    <p className="text-sm font-semibold text-navy">{title}</p>
                    <p className="mt-1 text-sm text-navy/60">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="section-ring rounded-[30px] bg-white p-5 shadow-card">
              <div className="rounded-[24px] border border-navy/6 bg-gradient-to-br from-[#F8FAFF] via-white to-violet/10 p-6">
                <div className="flex items-center justify-between rounded-2xl border border-navy/6 bg-white px-5 py-4 shadow-soft">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">Coming soon</p>
                    <p className="mt-1 text-lg font-semibold text-navy">Setu CRM concept preview</p>
                  </div>
                  <Image src="/setu-crm-icon.svg" alt="Setu CRM" width={46} height={46} className="h-12 w-12" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Pipeline health", "Structured stage visibility"],
                    ["Client continuity", "Clear next-step ownership"],
                    ["Commercial clarity", "Clean account-level snapshots"],
                    ["Setu ecosystem", "Built to connect naturally"],
                  ].map(([title, text], index) => (
                    <div key={title} className={`rounded-2xl p-5 ${index === 0 ? "bg-brand-gradient text-white" : "bg-white shadow-soft"}`}>
                      <p className="text-sm font-semibold">{title}</p>
                      <p className={`mt-2 text-sm ${index === 0 ? "text-white/80" : "text-navy/60"}`}>{text}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-[22px] border border-navy/6 bg-white p-5 shadow-soft">
                  <p className="text-sm font-semibold text-navy">Why a waitlist now?</p>
                  <p className="mt-3 text-sm leading-7 text-navy/65">
                    This page is designed to validate interest, start commercial conversations, and give the Setu ecosystem a product roadmap story before the CRM launch is public.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="waitlist" className="pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[30px] border border-navy/6 bg-white p-8 shadow-soft">
              <h2 className="text-3xl font-semibold tracking-tight text-navy">What Setu CRM is intended to solve</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-navy/70">
                <p>Many teams outgrow spreadsheets before they are ready for heavy, overbuilt CRM platforms.</p>
                <p>Setu CRM is being shaped to create structure without friction: cleaner pipeline visibility, better customer continuity, and a more grounded commercial workflow.</p>
                <p>It will be especially strong for founder-led businesses, operationally minded teams, and companies that want clarity more than software theatre.</p>
              </div>
            </div>
            <WaitlistForm />
          </div>
        </Container>
      </section>
    </>
  );
}
