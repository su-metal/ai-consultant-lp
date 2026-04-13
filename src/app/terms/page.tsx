import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約 | Machinami AI',
  description: 'まちなみ AI（Machinami AI）のサービス利用規約に関する情報を掲載しています。',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 font-serif">
              利用規約
            </h1>
            <p className="text-slate-500 text-sm mb-12">
              最終更新日: 2026-04-13
            </p>

            <div className="space-y-10 text-slate-700 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  1. 適用
                </h2>
                <p>
                  この利用規約（以下「本規約」といいます）は、まちなみ AI（以下「当事業」といいます）が提供するコンサルティング、システム開発、およびそれに関連するサービス（以下「本サービス」といいます）の利用条件を定めるものです。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  2. 契約の成立
                </h2>
                <p>
                  本サービスの利用を希望する者が、本規約に同意した上で当事業の定める方法によって利用申し込みを行い、当事業がこれを承諾することによって利用契約が成立するものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  3. サービスの提供
                </h2>
                <p>
                  当事業は、善良な管理者の注意をもって本サービスを提供します。
                  システムの開発やコンサルティングの結果については、個別の契約（仕様書や要件定義書等）に基づき提供されるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  4. 利用料金および支払方法
                </h2>
                <p>
                  ユーザーは、本サービスの対価として、当事業が別途定め、見積書等に記載された利用料金を、指定する方法により支払うものとします。
                  支払期限を過ぎた場合、当事業はサービスの提供を一時停止することがあります。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  5. 禁止事項
                </h2>
                <p>
                  ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当事業、他のユーザー、または第三者の権利を侵害する行為</li>
                  <li>本サービスの運営を妨害する恐れのある行為</li>
                  <li>その他、当事業が不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  6. 免責事項
                </h2>
                <p>
                  当事業は、本サービスに関して、ユーザーに生じた損害について、当事業の故意または重大な過失による場合を除き、一切の責任を負いません。
                  また、当事業が責任を負う場合であっても、その範囲は直接かつ通常の損害に限られ、賠償額は受領済みの対価を上限とします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-blue-500 pl-4">
                  7. 準拠法・裁判管轄
                </h2>
                <p>
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、当事業の所在地を管轄する地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
