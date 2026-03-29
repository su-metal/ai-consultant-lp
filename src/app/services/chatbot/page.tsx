import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeDollarSign,
  Bot,
  CheckCircle2,
  CircleHelp,
  Clock3,
  FileText,
  MessageSquareText,
  Settings2,
  TrendingUp,
  Wrench,
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: '豊橋のチャットボット作成・導入支援',
  description:
    '豊橋・東三河の企業向けチャットボット作成サービス。問い合わせ対応、予約受付、社内ヘルプデスクを自動化し、導入メリット、費用、効果、導入の流れまでわかる詳細ページです。',
  alternates: {
    canonical: 'https://machinami-ai.com/services/chatbot',
  },
};

const useCases = [
  'Webサイト上の問い合わせ一次対応',
  'LINEを使った予約受付や来店前質問への対応',
  '社内向けFAQ・マニュアル検索チャット',
  '資料請求やサービス案内の自動応答',
  '営業時間外の取りこぼし防止',
  '採用応募者からのよくある質問対応',
];

const benefits = [
  {
    icon: Clock3,
    title: '対応時間を減らせる',
    description: 'よくある質問や定型案内を自動化し、電話・メール対応の工数を削減します。',
  },
  {
    icon: TrendingUp,
    title: '機会損失を減らせる',
    description: '営業時間外でも即時応答できるため、問い合わせの取りこぼしを防ぎやすくなります。',
  },
  {
    icon: FileText,
    title: '案内品質を揃えられる',
    description: '担当者ごとの説明のばらつきを減らし、必要な情報を一定品質で返せます。',
  },
  {
    icon: Settings2,
    title: '既存業務に合わせて作れる',
    description: '既製品任せではなく、業種や運用フローに合わせたシナリオや回答設計ができます。',
  },
];

const plans = [
  {
    name: 'スモールスタート',
    price: '20万円〜40万円',
    description: 'FAQ中心のシンプルなチャットボットを短期間で導入したい企業向け。',
    items: ['基本Q&A設計', 'Webサイト埋め込み', '回答文の初期整備', '軽微な調整'],
  },
  {
    name: '業務最適化',
    price: '50万円〜120万円',
    description: '問い合わせ分類、見込み客振り分け、社内情報参照など実務寄りの要件に対応。',
    items: ['シナリオ設計', 'フォーム連携', 'FAQ/RAG整備', '管理画面や運用設計'],
  },
  {
    name: '個別開発',
    price: '120万円〜',
    description: 'LINE連携、予約システム連携、CRM連携などを含む本格運用向け。',
    items: ['外部システム連携', '認証付き社内利用', '運用モニタリング', '改善サイクル設計'],
  },
];

const effects = [
  '定型問い合わせ対応時間を月20〜80時間削減',
  '営業時間外の問い合わせ取りこぼしを抑制',
  '担当者依存の説明品質を平準化',
  '見込み客対応の初速を改善し、商談化の機会を増加',
];

const steps = [
  {
    title: '1. 現状整理',
    description: '今どの問い合わせが多いか、どこで対応負荷が高いかを整理します。',
  },
  {
    title: '2. 設計',
    description: '回答範囲、NG回答、引き継ぎ条件、導線設計を決めます。',
  },
  {
    title: '3. 構築',
    description: 'チャットUI、回答データ、必要な連携機能を実装します。',
  },
  {
    title: '4. 改善',
    description: '利用ログを見ながら回答精度や導線を継続改善します。',
  },
];

const faqs = [
  {
    question: 'AIチャットボットとFAQページの違いは何ですか？',
    answer:
      'FAQページは利用者が自分で情報を探す形式ですが、チャットボットは質問に応じて必要な回答を返せます。営業時間外対応や導線改善にも向いています。',
  },
  {
    question: '最初からAIを使った高機能版でないと意味がありませんか？',
    answer:
      'いいえ。最初は定型Q&A中心のシンプル構成でも十分です。問い合わせ内容を把握した上で、必要に応じてAI回答や社内データ連携を追加するのが現実的です。',
  },
  {
    question: '社内資料を読ませることはできますか？',
    answer:
      '可能です。就業規則、マニュアル、社内FAQなどをもとに回答する社内向けチャットボットも構築できます。閲覧権限や公開範囲は要件に応じて設計します。',
  },
  {
    question: '費用は何で変わりますか？',
    answer:
      '回答数の多さ、AI利用の有無、外部システム連携、LINE対応、運用保守の範囲によって変わります。まずは要件を整理して、段階導入にするのがコストを抑えやすいです。',
  },
];

const chatbotSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'チャットボット作成・導入支援',
  provider: {
    '@type': 'ProfessionalService',
    name: 'まちなみ AI',
    areaServed: ['豊橋市', '豊川市', '蒲郡市', '田原市', '新城市', '東三河'],
  },
  serviceType: 'チャットボット作成',
  areaServed: '豊橋・東三河',
  description:
    '問い合わせ対応、予約受付、社内FAQ対応などに対応したチャットボットの設計・構築・改善支援サービス。',
};

export default function ChatbotServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotSchema) }}
      />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_35%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100 mb-6">
              <MessageSquareText className="w-4 h-4" />
              Chatbot Service
            </p>
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.98] mb-6">
              豊橋の企業向け
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                チャットボット作成
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
              問い合わせ対応、予約受付、社内FAQ、資料案内を自動化するチャットボットを、
              現場の運用に合わせて設計・構築します。AIを使うべき部分と、ルールベースで十分な部分を切り分け、
              過剰投資にならない形で導入を進めます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
              >
                無料相談をする
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
              >
                サービス一覧へ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Use Cases</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">こんな用途で使えます</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase) => (
              <div key={useCase} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-lg shadow-slate-200/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="font-medium text-slate-700 leading-relaxed">{useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Benefits</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">導入メリット</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              チャットボット導入の価値は、単なる自動応答ではありません。対応速度、機会損失、運用品質の改善まで含めて効果が出ます。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="rounded-[2rem] bg-slate-50 border border-slate-100 p-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/30">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">費用の目安</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                費用は、回答範囲、AI活用の深さ、外部連携の有無、公開先の数で変わります。最初から大きく作るより、
                小さく始めて改善する方が投資対効果を出しやすいです。
              </p>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div key={plan.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-slate-600 mt-2">{plan.description}</p>
                      </div>
                      <p className="text-2xl font-black text-blue-600 whitespace-nowrap">{plan.price}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700">
                      {plan.items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-600 text-white rounded-[2rem] p-8 shadow-xl shadow-blue-600/20">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <BadgeDollarSign className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">費用を抑える考え方</h3>
                <p className="leading-relaxed text-blue-50">
                  よくある質問の整備、手動対応との役割分担、対象ページの絞り込みだけでも初期費用は大きく変わります。
                  まずは効果が見えやすい範囲から始めるのが現実的です。
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/30">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">期待できる効果</h3>
                <ul className="space-y-4 text-slate-700">
                  {effects.map((effect) => (
                    <li key={effect} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                      <span>{effect}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 mt-5">
                  効果は業種、問い合わせ量、現状フローによって変わります。個社ごとに試算します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Flow</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">導入の流れ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.title} className="bg-slate-50 rounded-[2rem] border border-slate-100 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">よくある質問</h2>
          </div>
          <div className="space-y-4 max-w-5xl">
            {faqs.map((faq) => (
              <article key={faq.question} className="bg-white rounded-[2rem] border border-slate-100 p-7 shadow-lg shadow-slate-200/20">
                <div className="flex items-start gap-4">
                  <CircleHelp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-6">
              <Bot className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">
              チャットボットを
              <span className="block text-blue-300">現場で使える形で導入する</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
              何でも答えるAIをいきなり作るより、まずは問い合わせの多い部分から整える方が失敗しにくいです。
              まちなみ AI では、設計、作成、改善まで伴走します。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors"
            >
              無料で相談する
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
