import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Machinami AI',
  description: 'Terms of Service for THE TOLL extension and related services.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20">
      <section className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026-02-13</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Service Overview</h2>
            <p>THE TOLL helps users restrict access to selected websites until exercise tasks are completed via smartphone verification.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">2. Billing and Subscription</h2>
            <p>Paid plans are billed through Stripe. Cancellation at period end keeps access active until period end. Immediate cancellation may end paid access immediately.</p>
            <p className="mt-2">In principle, fees are non-refundable except where required by applicable law or explicitly approved by us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Acceptable Use</h2>
            <p>You agree not to abuse, reverse engineer, disrupt, or unlawfully access the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Governing Law</h2>
            <p>These terms are governed by the laws of Japan. Disputes are subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Contact</h2>
            <p>Operator: THE TOLL Operations Office</p>
            <p>Email: support@example.com</p>
          </section>
        </div>
      </section>
    </main>
  );
}
