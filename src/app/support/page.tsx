import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Machinami AI',
  description: 'Support page for THE TOLL extension users.',
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20">
      <section className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Support</h1>
        <p className="text-slate-600 mb-10">If you have issues with login, billing, or unlock flow, contact us with the details below.</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Contact</h2>
            <p>Support email: support@example.com</p>
            <p>Response target: within 2 business days</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Please include in your report</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account email used in THE TOLL</li>
              <li>Date/time of issue (UTC preferred)</li>
              <li>Error message text</li>
              <li>Screenshot or short recording</li>
              <li>Chrome version and extension version</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">FAQ</h2>
            <p><strong>Q:</strong> Plan status did not update after billing action.</p>
            <p><strong>A:</strong> Reopen popup and verify Stripe webhook delivery status is 200.</p>
            <p className="mt-3"><strong>Q:</strong> Why is PRO still shown after cancellation?</p>
            <p><strong>A:</strong> If canceled at period end, PRO remains active until current period end.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
