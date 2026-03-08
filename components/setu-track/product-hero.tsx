"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function ProductHero() {
  return (
    <section className="overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-electric/20 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-electric shadow-soft">
              Setu Track • Live product
            </div>
            <div className="mb-6 flex items-center gap-4">
              <Image src="/logo-setu-track.png" alt="Setu Track" width={68} height={68} className="h-16 w-16 rounded-2xl object-contain" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-navy/45">Contractor operations platform</span>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-navy sm:text-6xl lg:text-7xl">
              Contractor Operations, Without the Chaos
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/70 sm:text-xl">
              Setu Track brings time tracking, approvals, payroll preparation, exports, and operational visibility into one clean platform.
              Built for teams that need accuracy, accountability, and financial clarity.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="mailto:hello@setugroups.com?subject=Setu%20Track%20Demo%20Request">Request a Demo</Button>
              <Button href="#workflow" variant="secondary">See How It Works</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Time + approvals", "One structured workflow"],
                ["Payroll prep", "Lock-ready periods"],
                ["Visibility", "Hours, cost, margin"],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-navy/6 bg-white/85 px-4 py-4 shadow-soft">
                  <p className="text-sm font-semibold text-navy">{title}</p>
                  <p className="mt-1 text-sm text-navy/60">{description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="section-ring rounded-[30px] bg-white p-4 shadow-card sm:p-6">
              <div className="rounded-[24px] border border-navy/6 bg-gradient-to-br from-[#F9FBFF] via-white to-[#F4F8FF] p-6">
                <div className="flex items-center justify-between rounded-2xl border border-navy/6 bg-white px-5 py-4 shadow-soft">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">Live operational view</p>
                    <p className="mt-1 text-lg font-semibold text-navy">Setu Track dashboard</p>
                  </div>
                  <div className="rounded-full bg-electric/8 px-3 py-1 text-xs font-semibold text-electric">Overview</div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Payroll cost", "$84.2k", "+9.8%"],
                    ["Client revenue", "$132.4k", "+12.4%"],
                    ["Gross margin", "36.4%", "+2.1 pts"],
                  ].map(([label, value, delta]) => (
                    <div key={label} className="rounded-2xl border border-navy/5 bg-white p-5 shadow-soft">
                      <p className="text-sm font-medium text-navy/55">{label}</p>
                      <p className="mt-3 text-3xl font-semibold tracking-tight text-navy">{value}</p>
                      <p className="mt-2 text-sm font-medium text-emerald-600">{delta}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                  <div className="rounded-2xl border border-navy/5 bg-white p-5 shadow-soft">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-navy">Project visibility</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">Current cycle</p>
                    </div>
                    <div className="mt-5 space-y-4">
                      {[
                        ["Apollo delivery", "412h", "41% margin"],
                        ["Northstar ops", "286h", "33% margin"],
                        ["Helix support", "198h", "27% margin"],
                      ].map(([name, hours, margin]) => (
                        <div key={name} className="flex items-center justify-between rounded-2xl bg-soft px-4 py-3">
                          <div>
                            <p className="text-sm font-semibold text-navy">{name}</p>
                            <p className="text-xs text-navy/55">Structured hours + approvals</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-navy">{hours}</p>
                            <p className="text-xs text-emerald-600">{margin}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-navy/5 bg-white p-5 shadow-soft">
                    <p className="text-sm font-semibold text-navy">Approval queue</p>
                    <div className="mt-5 space-y-3">
                      {[
                        ["Pending approvals", "16"],
                        ["Ready for payroll", "9"],
                        ["Export packages", "4"],
                      ].map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between rounded-2xl bg-soft px-4 py-3">
                          <span className="text-sm text-navy/70">{label}</span>
                          <span className="text-sm font-semibold text-navy">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
