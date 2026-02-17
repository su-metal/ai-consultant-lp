import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'THE TOLL | Works | Machinami AI',
  description: 'THE TOLL: Chrome extension and smartphone web app for behavior control with exercise unlock flow.',
};

const features = [
  'Chrome拡張で対象サイトをロック',
  'スマホWebアプリで解除フローを実行',
  'Googleログイン連携',
  'Stripe Checkout + Customer Portal課金管理',
  'Supabaseで認証・RLS・購読状態同期',
];

const plans = [
  { name: 'FREE', detail: '基本機能（制限あり）' },
  { name: 'TRIAL', detail: '新規ユーザー 14日間トライアル' },
  { name: 'PRO', detail: 'すべての制限解除 + 課金機能' },
];

export default function TheTollPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20">
      <section className="container mx-auto px-4 max-w-5xl">
        <p className="text-xs font-mono text-blue-600 mb-3">WORKS / PRODUCT</p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-serif mb-4">THE TOLL</h1>
        <p className="text-slate-600 max-w-3xl leading-relaxed mb-10">
          THE TOLLは、YouTubeなどの誘惑サイトへのアクセスを「運動完了」までロックし、
          習慣改善を支援するプロダクトです。Chrome拡張・スマホWeb・認証・課金を一体で設計しています。
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold mb-4">主な機能</h2>
            <ul className="space-y-2 text-slate-700">
              {features.map((item) => (
                <li key={item} className="text-sm leading-relaxed">- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold mb-4">プラン構成</h2>
            <ul className="space-y-3 text-slate-700">
              {plans.map((plan) => (
                <li key={plan.name} className="text-sm">
                  <span className="font-bold text-slate-900">{plan.name}</span>
                  <span className="ml-2">{plan.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 md:p-8 mb-10">
          <h2 className="text-xl font-semibold mb-4">公開情報</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/privacy" className="px-4 py-2 rounded-lg border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="px-4 py-2 rounded-lg border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link href="/support" className="px-4 py-2 rounded-lg border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-colors">Support</Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/works" className="px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors">
            Works一覧へ戻る
          </Link>
          <Link href="/contact" className="px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">
            導入・開発相談
          </Link>
        </div>
      </section>
    </main>
  );
}
