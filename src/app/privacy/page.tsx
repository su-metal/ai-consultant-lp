import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Machinami AI',
  description: 'まちなみ AI（Machinami AI）のプライバシーポリシー（個人情報保護方針）に関する情報を掲載しています。',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 font-serif">
              プライバシーポリシー
            </h1>
            <p className="text-slate-500 text-sm mb-12">
              最終更新日: 2026-04-13
            </p>

            <div className="space-y-10 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  1. 個人情報の定義
                </h2>
                <p>
                  本プライバシーポリシーにおいて、個人情報とは、個人情報保護法に定める個人情報を指します。
                  具体的には、氏名、住所、電話番号、メールアドレス、勤務先、その他の記述により特定の個人を識別できる情報、および他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを指します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  2. 個人情報の収集方法
                </h2>
                <p>
                  当事業は、ユーザーがお問い合わせフォームを利用する際や、サービスの提供にあたって必要な範囲で、氏名、勤務先、メールアドレス、電話番号などの個人情報を適正な手段により収集いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  3. 個人情報の利用目的
                </h2>
                <p>
                  収集した個人情報は、以下の目的で利用いたします。
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>提供するサービスの提供・運営のため</li>
                  <li>お問い合わせに対する回答、および本人確認のため</li>
                  <li>重要なお知らせやメンテナンス情報等の連絡のため</li>
                  <li>提供するサービスに関する案内の提供、改善等のため（メールマガジン送信等を含む）</li>
                  <li>利用規約に違反したユーザーの特定や、不正・不当な目的での利用を防止するため</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  4. 個人情報の第三者提供
                </h2>
                <p>
                  当事業は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく第三者に個人情報を提供することはありません。
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合であり、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が、法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  5. 個人情報の開示・訂正・削除
                </h2>
                <p>
                  ユーザー本人から個人情報の開示、訂正、追加、削除、利用の停止、または消去の請求があった場合には、ご本人であることを確認の上、遅延なく対応いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  6. お問い合わせ窓口
                </h2>
                <p>
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="font-bold">まちなみ AI</p>
                  <p>代表: 佐田 真教</p>
                  <p>メールアドレス: info@machinami0924.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
