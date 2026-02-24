import { NextResponse } from 'next/server';

type ContactPayload = {
    companyName?: string;
    email?: string;
    message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as ContactPayload;

        const companyName = (body.companyName || '').trim();
        const email = (body.email || '').trim();
        const message = (body.message || '').trim();

        if (!email || !EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { error: '有効なメールアドレスを入力してください。' },
                { status: 400 },
            );
        }

        if (!message) {
            return NextResponse.json({ error: 'ご相談内容を入力してください。' }, { status: 400 });
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        const toEmail = process.env.CONTACT_TO_EMAIL || 'info@machinami0924.com';
        const fromEmail = process.env.CONTACT_FROM_EMAIL;

        if (!resendApiKey || !fromEmail) {
            console.error('Contact mail env is not configured. RESEND_API_KEY / CONTACT_FROM_EMAIL are required.');
            return NextResponse.json(
                { error: 'お問い合わせ機能の設定が未完了です。管理者にご連絡ください。' },
                { status: 500 },
            );
        }

        const subject = `【無料相談】${companyName || '会社名未入力'} 様からお問い合わせ`;

        const text = [
            '無料相談フォームからお問い合わせがありました。',
            '',
            `会社名: ${companyName || '未入力'}`,
            `メールアドレス: ${email}`,
            '',
            'ご相談内容:',
            message,
        ].join('\n');

        const html = `
            <div style="font-family: system-ui, sans-serif; line-height: 1.7; color: #0f172a;">
              <h2 style="margin: 0 0 16px;">無料相談フォームからお問い合わせがありました</h2>
              <p style="margin: 0 0 8px;"><strong>会社名:</strong> ${escapeHtml(companyName || '未入力')}</p>
              <p style="margin: 0 0 8px;"><strong>メールアドレス:</strong> ${escapeHtml(email)}</p>
              <p style="margin: 16px 0 8px;"><strong>ご相談内容:</strong></p>
              <pre style="white-space: pre-wrap; font-family: inherit; margin: 0; padding: 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">${escapeHtml(message)}</pre>
            </div>
        `.trim();

        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: fromEmail,
                to: [toEmail],
                reply_to: email,
                subject,
                text,
                html,
            }),
        });

        if (!resendResponse.ok) {
            const errorText = await resendResponse.text();
            console.error('Resend API error:', resendResponse.status, errorText);
            return NextResponse.json(
                { error: 'メール送信に失敗しました。時間をおいて再度お試しください。' },
                { status: 502 },
            );
        }

        return NextResponse.json({
            message: 'お問い合わせを受け付けました。1〜2営業日以内にご連絡します。',
        });
    } catch (error) {
        console.error('Contact API unexpected error:', error);
        return NextResponse.json(
            { error: '送信処理でエラーが発生しました。時間をおいて再度お試しください。' },
            { status: 500 },
        );
    }
}
