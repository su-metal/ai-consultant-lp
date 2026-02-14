import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Machinami AI',
  description: 'Privacy Policy for THE TOLL extension and related services.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20">
      <section className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: 2026-02-13</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">1. Data We Process</h2>
            <p>We process account identifiers, billing metadata, service configuration data, and operational logs necessary to provide THE TOLL.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">2. How We Use Data</h2>
            <p>Data is used to provide lock/unlock functionality, sync account entitlement, process subscriptions, and maintain service reliability and security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">3. Data Sharing</h2>
            <p>We share data only with service providers required for operation, including Google (auth), Stripe (billing), and Supabase (backend).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">4. Data Retention</h2>
            <p>Account and billing linkage data may be retained while the account is active and for up to 180 days after deletion unless a longer period is legally required. Operational logs are retained for 30 to 90 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">5. Contact</h2>
            <p>Operator: THE TOLL Operations Office</p>
            <p>Email: privacy@example.com</p>
          </section>
        </div>
      </section>
    </main>
  );
}
