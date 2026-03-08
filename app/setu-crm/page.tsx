import Link from 'next/link';

export default function SetuCrmPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Link href="/" className="text-sm text-slate-500">← Back to Setu Groups</Link>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-soft p-10">
          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-sm text-violet-700">Coming soon</span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-navy">Setu CRM</h1>
          <p className="mt-5 max-w-3xl text-lg text-slate-600">A clean, structured CRM designed for pipeline visibility, customer continuity, and commercial clarity. Built to feel natural within the Setu ecosystem — simple, powerful, and operationally grounded.</p>
          <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input type="email" placeholder="Your work email" className="flex-1 rounded-full border border-slate-300 px-5 py-3 outline-none" />
            <button className="rounded-full bg-setu-gradient px-6 py-3 font-medium text-white">Join waitlist</button>
          </form>
        </div>
      </div>
    </main>
  );
}
