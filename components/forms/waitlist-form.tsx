'use client';

export function WaitlistForm() {
  return (
    <form className="mt-8 flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="Your email"
        className="w-full rounded-full border border-slate-300 bg-white px-5 py-3 outline-none ring-electric/20 transition focus:ring"
      />
      <button type="submit" className="rounded-full bg-setu-gradient px-6 py-3 font-semibold text-white shadow-soft">
        Join Waitlist
      </button>
    </form>
  );
}
