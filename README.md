# ai-consultant-lp

Next.js 15 で構築した AI コンサルティング LP です。  
お問い合わせフォームは `src/app/api/contact/route.ts` から Resend API を呼び出してメール送信します。

## ローカル起動

```bash
npm install
npm run dev
```

`http://localhost:3000` を開いて確認します。

## お問い合わせメールの設定

お問い合わせフォームを実際に受信できるようにするには、Resend 側の設定と環境変数の投入が必要です。

### 1. Resend で送信元ドメインを認証

1. Resend にログイン
2. `Domains` で送信に使うドメインを追加
3. DNS レコードを設定して認証を完了
4. 認証済みドメイン配下の送信元メールアドレスを決める

例: `inquiry@machinami0924.com`

### 2. 環境変数を設定

`.env.local` を作成し、以下を設定します。

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL=inquiry@your-domain.com
CONTACT_TO_EMAIL=info@machinami0924.com
```

補足:

- `CONTACT_FROM_EMAIL` は Resend で認証済みドメイン配下のアドレスである必要があります
- `CONTACT_TO_EMAIL` はカンマ区切りで複数指定できます
- フォーム送信者の返信先は `reply_to` として自動設定されます

### 3. 本番環境にも同じ値を設定

Vercel を使っている場合は、Project Settings の `Environment Variables` に同じ3つを登録してください。  
登録後は再デプロイが必要です。

## 動作確認

1. `npm run dev` でローカル起動
2. `/contact` またはトップページ下部のフォームから送信
3. `CONTACT_TO_EMAIL` に設定した受信箱でメール到着を確認

設定不備がある場合、API は 500 を返し、以下のどちらかが原因である可能性が高いです。

- `RESEND_API_KEY` 未設定
- `CONTACT_FROM_EMAIL` が未設定、または Resend 未認証ドメイン

## 実装メモ

- API: [src/app/api/contact/route.ts](/f:/App_dev/AI_consultant_LP/ai-consultant-lp/src/app/api/contact/route.ts)
- フォーム: [src/components/ContactSection.tsx](/f:/App_dev/AI_consultant_LP/ai-consultant-lp/src/components/ContactSection.tsx)

現在の実装では、基本的なバリデーションに加えて簡易 honeypot によるスパム対策を入れています。
