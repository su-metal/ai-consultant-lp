import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Search,
  Zap,
  Shield,
  MessageSquareText,
  MousePointer2,
  Layout,
  Code
} from 'lucide-react';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'AIエージェントで作るウェブサイト制作・構築支援',
  description:
    'AIエージェントが設計・開発を担う、次世代のウェブサイト制作サービス。コーポレートサイトやLPにチャットボットを標準統合し、短納期・低コスト・高セキュリティなサイトを実現します。',
  alternates: {
    canonical: 'https://machinami-ai.com/services/website',
  },
};

const targets = [
  '自社サイトがない、または5年以上更新していない',
  '広告用のLP（ランディングページ）を早く・安く作りたい',
  'サイトはあるが、問い合わせ対応まで手が回らない',
  'WordPressの保守やセキュリティに不安がある',
  'AI活用をアピールできるモダンなサイトにしたい',
  '補助金を活用してデジタル化を進めたい',
];

const benefits = [
  {
    icon: Clock3,
    title: '圧倒的な短納期',
    description: 'AIエージェントが設計・コーディングの大部分を担うことで、従来の約1/2の期間で納品可能です。',
  },
  {
    icon: Zap,
    title: '高パフォーマンス・SEO',
    description: 'Next.js等のモダン技術を採用。爆速の表示速度でユーザー離脱を防ぎ、検索順位にも貢献します。',
  },
  {
    icon: Shield,
    title: '保守コストの削減',
    description: 'WordPressを使わない構成により、プラグイン更新の手間や脆弱性のリスクを根本から排除します。',
  },
  {
    icon: MessageSquareText,
    title: 'AIチャットボット標準搭載',
    description: 'サイト公開初日から、AIが24時間365日、お客様の問い合わせに自動で対応します。',
  },
];

const plans = [
  {
    name: 'パッケージA：コーポレートサイト',
    price: '60万円〜150万円',
    description: '信頼性を高める本格サイトと、AI接客をセットで導入したい中小企業様向け。',
    items: ['5〜8ページ構成', 'AIチャットボット統合', 'レスポンシブ対応', 'SEO内部施策済', 'AI運用レクチャー'],
  },
  {
    name: 'パッケージB：LP（ランディングページ）',
    price: '35万円〜70万円',
    description: '特定のサービスや商品の集客に特化し、即戦力の導線を作りたい企業様向け。',
    items: ['1ページ構成（長尺対応可）', 'FAQチャットボット統合', 'フォーム連携', 'ABテスト考慮設計', '高速表示対応'],
  },
];

const steps = [
  {
    title: '1. 戦略・ヒアリング',
    description: 'AIエージェントと共に、ターゲットや強みを整理し、最適な構成を導き出します。',
  },
  {
    title: '2. AI設計・開発',
    description: 'AIが設計図からコーディングまでを高速に実行。人間が品質を最終チェックします。',
  },
  {
    title: '3. チャットボット統合',
    description: 'サイトの内容を学習したAIチャットボットを組み込み、問い合わせ対応を自動化します。',
  },
  {
    title: '4. 公開・運用開始',
    description: '納品後もAIを活用したコンテンツ更新や、データに基づく改善をご提案します。',
  },
];

const faqs = [
  {
    question: 'なぜ従来の制作より安く、早いのですか？',
    answer:
      'ウェブ制作の工程（骨組み作成・コーディング・テスト）に特化した「AIエージェント」を活用しているためです。ルーチンワークをAIが担い、人間が「戦略」と「クリエイティブの仕上げ」に集中することで、高品質と低コストを両立させています。',
  },
  {
    question: '制作事例は見られますか？',
    answer:
      '現在、本サービスによる制作事例を準備中です。先行モニター様としての特別プランもご案内可能ですので、詳しくはお問い合わせください。',
  },
  {
    question: '今まで使っていたWordPressからの移行はできますか？',
    answer:
      'はい、可能です。既存サイトのコンテンツを活かしつつ、セキュリティが高く表示の速いNext.js環境へ移行し、さらにAIチャットボットを統合することで、より使いやすいサイトへ進化させます。',
  },
  {
    question: '補助金の利用は可能ですか？',
    answer:
      'IT導入補助金などの対象となる場合があります。まちなみ AI では地域企業の補助金活用も支援しておりますので、お気軽にご相談ください。',
  },
];

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AIエージェントで作るウェブサイト制作',
  provider: {
    '@type': 'ProfessionalService',
    name: 'まちなみ AI',
    areaServed: ['豊橋市', '豊川市', '蒲郡市', '田原市', '新城市', '東三河'],
  },
  serviceType: 'ウェブサイト制作',
  areaServed: '全国対応',
  description:
    'AIエージェントが設計・開発を担い、チャットボット付きで納品する次世代のウェブサイト制作サービス。',
};

export default function WebsiteServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.14),transparent_35%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold border border-blue-100 mb-6">
              <Globe className="w-4 h-4" />
              AI Agent x Web Creation
            </p>
            <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black tracking-[-0.04em] leading-[0.98] mb-6">
              AIエージェントが創る
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                次世代のウェブサイト
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-10">
              AIエージェントが設計・コーディング・テストの大部分を担い、
              圧倒的な短納期とコストパフォーマンスを実現。
              24時間働くAIチャットボットを標準装備し、御社の「最強の営業拠点」を構築します。
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
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Target</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">こんな企業様に向いています</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {targets.map((target) => (
              <div key={target} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-lg shadow-slate-200/30">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="font-medium text-slate-700 leading-relaxed">{target}</p>
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
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">AIエージェント活用のメリット</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              最新のAI技術とオーダーメイド開発を組み合わせることで、従来の制作会社やWordPressにはない価値を提供します。
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
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Packages</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-5">パッケージ料金の目安</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                全てのプランにAIチャットボットが標準統合されています。
                「どこまでAIに任せ、どこをこだわるか」によって柔軟に対応可能です。
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
              <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl shadow-slate-900/20">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <MousePointer2 className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">WordPressを使わない理由</h3>
                <p className="leading-relaxed text-slate-300">
                  脆弱性への不安、複雑なプラグイン管理、そして読み込み速度の低下。
                  まちなみ AI では、Next.jsを採用することで、これらのストレスを解消。
                  安全で、速く、運用しやすい次世代サイトを提供します。
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/30">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">制作事例は準備中</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  現在、本サービスによる新しい制作事例を随時構築しております。実績として掲載可能な先行モニター様には、特別な優待プランもご用意しております。
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-500 transition-colors">
                  モニタープランについて聞く
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-3">Flow</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-5">制作の流れ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step) => (
              <div key={step.title} className="bg-slate-50 rounded-[2rem] border border-slate-100 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <Code className="w-6 h-6" />
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

      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
