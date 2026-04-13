import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | Machinami AI',
  description: 'まちなみ AI（Machinami AI）の特定商取引法に基づく表記に関する情報を掲載しています。',
};

export default function ASCTPage() {
  const legalInfo = [
    { label: '事業者名', value: 'まちなみ AI' },
    { label: '代表者', value: '佐田 真教' },
    { label: '所在地', value: '〒450-0002 愛知県名古屋市中村区名駅4-24-5 第2森ビル401' },
    { label: 'メールアドレス', value: 'info@machinami0924.com' },
    { label: '電話番号', value: '090-3454-2305' },
    { label: '提供価格', value: '各サービス紹介ページをご参照ください。導入規模やカスタマイズ内容に基づき、別途お見積もりを提示いたします。' },
    { label: '商品代金以外の必要料金', value: '銀行振込手数料（振込によるお支払いの場合）、インターネット接続料金、その他の通信費。' },
    { label: 'お支払方法', value: 'クレジットカード決済、銀行振込' },
    { label: '代金の支払時期', value: '【クレジットカード】各カード会社が定める引き落とし日\n【銀行振込】契約に基づき指定する期日まで' },
    { label: '商品の引き渡し時期', value: 'お支払い確認後（契約締結後）、別途合意したプロジェクトスケジュールに基づき順次提供いたします。' },
    { label: '返品・キャンセルについて', value: 'サービスの性質上、契約締結・作業開始後の返品または返金には応じかねます。中途解約に関しては、契約書の定めに準じます。' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 font-serif">
              特定商取引法に基づく表記
            </h1>
            <p className="text-slate-500 text-sm mb-12">
              Last updated: 2026-04-13
            </p>

            <div className="space-y-0">
              {legalInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={`py-6 flex flex-col md:flex-row border-b border-slate-100 last:border-0`}
                >
                  <div className="w-full md:w-1/3 text-slate-900 font-bold mb-2 md:mb-0">
                    {item.label}
                  </div>
                  <div className="w-full md:w-2/3 text-slate-600 whitespace-pre-wrap leading-relaxed">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 leading-relaxed">
                ※上記以外の事項に関しましては、お取引の際に請求があれば遅延なく提示いたします。
                お問い合わせは、上記メールアドレスまでご連絡ください。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
