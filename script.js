// ─── DATA ────────────────────────────────────────────────────────────
const emails = [
  {
    id: 1,
    subject: "Your PayPal account has been limited",
    from: "support@paypa1.com",
    displayName: "PayPal Support",
    date: "Mon, 23 Mar 2026 08:14",
    preview: "We noticed unusual activity on your account...",
    solved: false,
    flag: "FLAG{sp00f3d_s3nd3r}",
    urlTrigger: null,
    flagTool: 'sender',
    senderInfo: { display: "PayPal Support <support@paypa1.com>", legitimate: "paypal.com",spf: "softfail", dkim: "fail", dmarc: "fail"},
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id x7csp291034qtc;
        Mon, 23 Mar 2026 08:14:32 +0000 (UTC)
Received: from mail-relay-eu.paypa1.com (mail-relay-eu.paypa1.com [185.220.101.12])
        by mx.company.com with ESMTPS id a3si2109384plb.88.2026.03.23.08.14.31
        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
        Mon, 23 Mar 2026 08:14:31 +0000 (UTC)
Received: from smtp-out1.paypa1.com (smtp-out1.paypa1.com [185.220.101.13])
        by mail-relay-eu.paypa1.com with ESMTP id 3Dg7h2KqLm-00421;
        Mon, 23 Mar 2026 08:14:29 +0000
Received: from localhost (localhost [127.0.0.1])
        by smtp-out1.paypa1.com (Postfix) with ESMTP id A3F2B1C04D2;
        Mon, 23 Mar 2026 08:14:28 +0000 (UTC)
X-Spam-Status: No, score=-1.2
X-Spam-Checker-Version: SpamAssassin 4.0.0
Authentication-Results: mx.company.com;
        dkim=fail (signature verification failed) header.i=@paypa1.com;
        spf=softfail smtp.mailfrom=support@paypa1.com;
        dmarc=fail (p=REJECT) header.from=paypa1.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=paypa1.com;
        s=default; t=1742720069;
        bh=7Dj3kLmP9qRsT2uVwXyZaB4cDeF6gHiJ=;
        h=From:To:Subject:Date:Message-ID;
        b=INVALIDINVALIDINVALIDINVALIDINVALID==
Received-SPF: SoftFail (185.220.101.12 not permitted for paypa1.com)
X-Originating-IP: 185.220.101.12
X-Mailer: Postfix MTA 3.6.4
X-PHP-Originating-Script: 1000:mailer_v2.php
Message-ID: <20260323081428.A3F2B1C04D2@smtp-out1.paypa1.com>
Date: Mon, 23 Mar 2026 08:14:28 +0000 (UTC)
From: "PayPal Support" <support@paypa1.com>
Reply-To: no-reply@paypa1.com
To: analyst@company.com
Subject: Your PayPal account has been limited
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="----=_Part_8821_1234567890"
X-Priority: 1`,
    body: `
      <div style="background:#f5f5f5;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <div style="background:#003087;padding:20px 32px;display:flex;align-items:center;gap:8px;">
            <span style="color:#009cde;font-size:28px;font-weight:900;letter-spacing:-1px;">Pay</span>
            <span style="color:white;font-size:28px;font-weight:900;letter-spacing:-1px;">Pal</span>
          </div>
          <div style="padding:32px;">
            <p style="font-size:20px;font-weight:600;color:#2c2e2f;margin-bottom:16px;">We've limited your account access</p>
            <p style="color:#2c2e2f;font-size:14px;margin-bottom:16px;">Dear Customer,</p>
            <p style="color:#2c2e2f;font-size:14px;line-height:1.6;margin-bottom:16px;">
              We noticed <strong>unusual activity</strong> associated with your PayPal account. To ensure your account security, we have temporarily limited certain features.
            </p>
            <p style="color:#2c2e2f;font-size:14px;line-height:1.6;margin-bottom:24px;">
              Please verify your identity within <strong>24 hours</strong> to restore full access to your account.
            </p>
            <div style="text-align:center;margin:24px 0;">
              <a class="email-cta" style="background:#0070ba;color:white;padding:14px 40px;border-radius:24px;font-size:15px;font-weight:600;text-decoration:none;display:inline-block;">
                Verify My Account
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#6c7378;font-size:12px;line-height:1.6;">
              If you didn't request this, you can ignore this email.<br>
              support@paypa1.com
            </p>
          </div>
          <div style="background:#f5f5f5;padding:20px 32px;border-top:1px solid #e5e5e5;">
            <p style="color:#6c7378;font-size:11px;text-align:center;">2026 PayPal, Inc. All rights reserved.</p>
          </div>
        </div>
        <div class="email-warning" style="max-width:600px;margin:12px auto 0;">[TIP] Always check the sender email address carefully.</div>
      </div>
    `
  },
  {
    id: 2,
    subject: "Microsoft 365: Unusual sign-in detected",
    from: "security@microsoft.com",
    displayName: "Microsoft Security",
    date: "Mon, 23 Mar 2026 09:45",
    preview: "A sign-in from an unknown location was detected...",
    solved: false,
    flag: "FLAG{h34d3r_4n4lyst}",
    urlTrigger: null,
    flagTool: 'sender',
    senderInfo: {
      display: "Microsoft Security <security@microsoft.com>",
      legitimate: "microsoft.com",
      envelopeFrom: "bounce@micros0ft-alert.com",
      envelopeLegit: false,
      spf: "fail", dkim: "none", dmarc: "fail"
    },
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id m12csp109234qtw;
        Mon, 23 Mar 2026 09:45:18 +0000 (UTC)
Received: from mail-ww2-f42.micros0ft-alert.com (mail-ww2-f42.micros0ft-alert.com [185.220.101.47])
        by mx.company.com with ESMTPS id s9si3301284pjq.44.2026.03.23.09.45.17;
        Mon, 23 Mar 2026 09:45:17 +0000 (UTC)
Received: from smtp.micros0ft-alert.com (smtp.micros0ft-alert.com [185.220.101.48])
        by mail-ww2-f42.micros0ft-alert.com with ESMTP id 9Kp2m4LrNn-00187;
        Mon, 23 Mar 2026 09:45:15 +0000
Received: from evil-srv.ru (evil-srv.ru [185.220.101.47])
        by smtp.micros0ft-alert.com (Postfix) with ESMTP id B7D3A2E09F1;
        Mon, 23 Mar 2026 09:45:14 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=none (no signature found);
        spf=fail (microsoft.com does not authorize 185.220.101.47);
        dmarc=fail (p=REJECT) header.from=microsoft.com
Received-SPF: Fail (185.220.101.47 is not a permitted sender for microsoft.com)
Return-Path: <bounce@micros0ft-alert.com>
X-Originating-IP: 185.220.101.47
X-Mailer: PhishKit v3.1
Message-ID: <ph1sh1ng@micros0ft-alert.com>
Date: Mon, 23 Mar 2026 09:45:00 +0000
From: "Microsoft Security" <security@microsoft.com>
Reply-To: no-reply@micros0ft-alert.com
To: analyst@company.com
Subject: Microsoft 365: Unusual sign-in detected
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
X-Priority: 2`,
    body: `
      <div style="background:#f3f2f1;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <div style="background:white;padding:20px 32px;border-bottom:3px solid #737373;display:flex;align-items:center;gap:6px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;width:20px;">
              <div style="background:#f25022;width:9px;height:9px;"></div>
              <div style="background:#7fba00;width:9px;height:9px;"></div>
              <div style="background:#00a4ef;width:9px;height:9px;"></div>
              <div style="background:#ffb900;width:9px;height:9px;"></div>
            </div>
            <span style="font-size:18px;font-weight:300;color:#737373;letter-spacing:0.5px;">Microsoft</span>
          </div>
          <div style="padding:32px;">
            <p style="font-size:22px;font-weight:300;color:#000;margin-bottom:8px;">Unusual sign-in activity</p>
            <p style="color:#333;font-size:14px;margin-bottom:20px;">We detected something unusual about a recent sign-in to your Microsoft account.</p>
            <div style="border:1px solid #e0e0e0;border-radius:4px;overflow:hidden;margin-bottom:24px;">
              <div style="background:#0078d4;padding:10px 16px;">
                <span style="color:white;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Sign-in details</span>
              </div>
              <table style="width:100%;border-collapse:collapse;font-size:13px;">
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 16px;color:#666;width:40%;">Country/region</td>
                  <td style="padding:10px 16px;font-weight:600;">Russia (Moscow)</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 16px;color:#666;">IP address</td>
                  <td style="padding:10px 16px;font-weight:600;">185.220.101.47</td>
                </tr>
                <tr style="border-bottom:1px solid #f0f0f0;">
                  <td style="padding:10px 16px;color:#666;">Date</td>
                  <td style="padding:10px 16px;font-weight:600;">Mon, 23 Mar 2026 09:44 UTC</td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;color:#666;">Platform</td>
                  <td style="padding:10px 16px;font-weight:600;">Unknown Linux Device</td>
                </tr>
              </table>
            </div>
            <div style="text-align:center;margin:24px 0;">
              <a class="email-cta" style="background:#0078d4;color:white;padding:12px 36px;font-size:14px;font-weight:600;text-decoration:none;display:inline-block;border-radius:2px;">
                Review recent activity
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#888;font-size:12px;line-height:1.6;">
              You're receiving this because security alerts are enabled for your account.<br>
              From: security@microsoft.com
            </p>
          </div>
          <div style="background:#f3f2f1;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="color:#888;font-size:11px;text-align:center;">
              Microsoft Corporation · One Microsoft Way · Redmond, WA 98052
            </p>
          </div>
        </div>
        <div class="email-warning" style="max-width:600px;margin:12px auto 0;">[TIP] The visible From address is not always the real sender. Check the raw headers.</div>
      </div>
    `
  },
  {
    id: 3,
    subject: "Your invoice #INV-2026-0312 is ready",
    from: "billing@amaz0n-invoices.net",
    displayName: "Amazon Billing",
    date: "Mon, 23 Mar 2026 11:02",
    preview: "Your invoice for $499.99 is attached...",
    solved: false,
    flag: "FLAG{url_1nsp3ct0r}",
    urlTrigger: "invoice-view.xyz",
    flagTool: 'url',
    senderInfo: { display: "Amazon Billing <billing@amaz0n-invoices.net>", legitimate: "amazon.com",spf: "neutral", dkim: "permerror", dmarc: "fail" },
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id b4csp882011qvn;
        Mon, 23 Mar 2026 11:02:44 +0000 (UTC)
Received: from o7.amaz0n-invoices.net (o7.amaz0n-invoices.net [91.108.4.200])
        by mx.company.com with ESMTPS id r2si4401928pli.12.2026.03.23.11.02.43
        (version=TLS1_2 cipher=ECDHE-RSA-AES256-GCM-SHA384 bits=256/256);
        Mon, 23 Mar 2026 11:02:43 +0000 (UTC)
Received: from smtp-bulk1.amaz0n-invoices.net (smtp-bulk1.amaz0n-invoices.net [91.108.4.201])
        by o7.amaz0n-invoices.net with ESMTP id 4Rz8n1QsOo-00934;
        Mon, 23 Mar 2026 11:02:41 +0000
Received: from phish-host.xyz (phish-host.xyz [91.108.4.200])
        by smtp-bulk1.amaz0n-invoices.net (Postfix) with ESMTP id C9E4B3F11A2;
        Mon, 23 Mar 2026 11:02:40 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=permerror (no key in DNS) header.i=@amaz0n-invoices.net;
        spf=neutral smtp.mailfrom=billing@amaz0n-invoices.net;
        dmarc=fail (p=QUARANTINE) header.from=amaz0n-invoices.net
Received-SPF: Neutral (91.108.4.200 neither permitted nor denied)
X-Spam-Status: Yes, score=5.4
X-Spam-Flag: YES
X-Spam-Report:
        * 1.9 DOMAIN_IMPERSONATION Possible brand impersonation
        * 1.5 SUSPICIOUS_LINK URL points to non-matching domain
        * 1.2 BULK_MAILER Sent via bulk mail infrastructure
        * 0.8 NO_REAL_NAME No real name in From header
X-Originating-IP: 91.108.4.200
X-Source: phish-host.xyz
X-Source-Args: /var/www/phish/amazon/send.php
X-Mailer: BulkMailer Pro 5.2
Message-ID: <inv2026@amaz0n-invoices.net>
Date: Mon, 23 Mar 2026 11:02:40 +0000
From: "Amazon Billing" <billing@amaz0n-invoices.net>
Reply-To: billing@amaz0n-invoices.net
To: analyst@company.com
Subject: Your invoice #INV-2026-0312 is ready
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
X-Campaign-ID: AMZ-INV-2026-BULK-003`,
    body: `
      <div style="background:#e3e6e6;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <div style="background:#131921;padding:14px 32px;display:flex;align-items:center;justify-content:space-between;">
            <span style="color:#ff9900;font-size:24px;font-weight:900;letter-spacing:-0.5px;font-style:italic;">amazon</span>
            <span style="color:#ccc;font-size:12px;">Order & Billing Notifications</span>
          </div>
          <div style="background:#ff9900;height:4px;"></div>
          <div style="padding:32px;">
            <p style="font-size:18px;font-weight:700;color:#0f1111;margin-bottom:20px;">Your invoice is ready</p>
            <p style="color:#0f1111;font-size:14px;margin-bottom:16px;">Hello,</p>
            <p style="color:#0f1111;font-size:14px;line-height:1.6;margin-bottom:24px;">
              Your invoice <strong>#INV-2026-0312</strong> has been generated for a recent purchase. Please review the details below.
            </p>
            <div style="border:1px solid #ddd;border-radius:4px;padding:16px;margin-bottom:24px;background:#fafafa;">
              <table style="width:100%;font-size:13px;border-collapse:collapse;">
                <tr>
                  <td style="padding:6px 0;color:#555;">Invoice number</td>
                  <td style="padding:6px 0;font-weight:700;text-align:right;">#INV-2026-0312</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#555;">Date issued</td>
                  <td style="padding:6px 0;font-weight:700;text-align:right;">23 March 2026</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#555;">Item</td>
                  <td style="padding:6px 0;font-weight:700;text-align:right;">Amazon Prime + Electronics Bundle</td>
                </tr>
                <tr style="border-top:2px solid #ddd;">
                  <td style="padding:10px 0;font-size:15px;font-weight:700;">Total charged</td>
                  <td style="padding:10px 0;font-size:15px;font-weight:700;text-align:right;color:#b12704;">$499.99</td>
                </tr>
              </table>
            </div>
            <p style="color:#0f1111;font-size:13px;margin-bottom:8px;">View or download your invoice:</p>
            <p style="word-break:break-all;font-size:11px;background:#f3f2f1;padding:10px;border-radius:4px;font-family:monospace;">
              <span class="email-link">https://amazon.com.account-verify.invoice-view.xyz/INV-2026-0312?id=8f14e45fceef428d&redirect=portal</span>
            </p>
            <div style="text-align:center;margin:24px 0;">
              <a class="email-cta" style="background:#ff9900;color:#111;padding:12px 36px;font-size:14px;font-weight:700;text-decoration:none;display:inline-block;border-radius:3px;border:1px solid #e47911;">
                View Invoice
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#888;font-size:12px;">billing@amaz0n-invoices.net</p>
          </div>
          <div style="background:#232f3e;padding:16px 32px;">
            <p style="color:#aaa;font-size:11px;text-align:center;">
              2026 Amazon.com, Inc. All rights reserved.<br>
              Amazon.com · 410 Terry Ave N · Seattle, WA 98109
            </p>
          </div>
        </div>
        <div class="email-warning" style="max-width:600px;margin:12px auto 0;">[TIP] Copy the link and analyze it with the URL inspector — do not click it.</div>
      </div>
    `
  },
  {
    id: 4,
    subject: "IT Dept: Password expiry notice",
    from: "it-helpdesk@company.com",
displayName: "IT Helpdesk",
    date: "Mon, 23 Mar 2026 13:30",
    preview: "Your password will expire in 24 hours...",
    solved: false,
    flag: "FLAG{d3c0d3d_p4yl04d}",
    urlTrigger: "c0mpany-internal.com",
    flagTool: 'decode',
    senderInfo: { display: "IT Helpdesk <it-helpdesk@company.com>", legitimate: "company.com",spf: "fail", dkim: "pass (d=c0mpany-internal.com)", dmarc: "fail" },
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id p9csp441829qtv;
        Mon, 23 Mar 2026 13:30:55 +0000 (UTC)
Received: from mail.c0mpany-internal.com (mail.c0mpany-internal.com [45.142.212.100])
        by mx.company.com with ESMTPS id t5si7712038pmk.29.2026.03.23.13.30.54
        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);
        Mon, 23 Mar 2026 13:30:54 +0000 (UTC)
Received: from smtp-relay.cc (spam-relay.cc [45.142.212.101])
        by mail.c0mpany-internal.com with ESMTP id 7Yx5q3RtPp-00672;
        Mon, 23 Mar 2026 13:30:52 +0000
Received: from localhost (localhost [127.0.0.1])
        by spam-relay.cc (Postfix) with ESMTP id D2F5C4G22B3;
        Mon, 23 Mar 2026 13:30:51 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=pass (signature valid) header.d=c0mpany-internal.com;
        spf=fail (company.com does not authorize 45.142.212.100);
        dmarc=fail (p=NONE; alignment=relaxed) header.from=company.com
Received-SPF: Fail (45.142.212.100 not permitted for company.com)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=c0mpany-internal.com; s=mail2026; t=1742733051;
        h=From:To:Subject:Date:Message-ID:MIME-Version;
        bh=kLmN3oPqRsT4uVwXyZaB5cDeF7gHiJ8=;
        b=RkxBR3tkM2MwZDNkX3A0eWwwNGR9
X-DKIM-Note: Signature present — verify d= tag alignment with From domain
X-Originating-IP: 45.142.212.100
X-Mailer: PHPMailer 6.6.3
X-PHP-Originating-Script: 1001:reset_lure.php
X-Token-Verify: aGVsbG8gd29ybGQ=
Message-ID: <20260323133051.D2F5C4G22B3@spam-relay.cc>
Date: Mon, 23 Mar 2026 13:30:51 +0000 (UTC)
From: "IT Helpdesk" <it-helpdesk@company.com>
Reply-To: it-helpdesk@c0mpany-internal.com
To: analyst@company.com
Subject: IT Dept: Password expiry notice
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
X-Priority: 1 (Highest)
Importance: High`,
    body: `
      <div style="background:#f0f0f0;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <div style="background:#6264a7;padding:18px 32px;display:flex;align-items:center;gap:12px;">
            <div style="background:white;border-radius:4px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#6264a7;">IT</div>
            <div>
              <div style="color:white;font-size:16px;font-weight:700;">IT Helpdesk</div>
              <div style="color:#c7c6e0;font-size:11px;">Company Internal Security Notice</div>
            </div>
          </div>
          <div style="background:#fff4ce;border-left:4px solid #f7ca00;padding:12px 32px;font-size:13px;color:#7a5e00;">
            [!] <strong>Action required</strong> — Your password expires in less than 24 hours
          </div>
          <div style="padding:32px;">
            <p style="color:#323130;font-size:14px;margin-bottom:16px;">Dear Employee,</p>
            <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:20px;">
              As part of our quarterly security policy, your company password is set to <strong>expire in 24 hours</strong>.
              Failure to reset your password will result in loss of access to all company systems.
            </p>
            <p style="color:#323130;font-size:13px;margin-bottom:8px;font-weight:600;">Your verification token:</p>
            <div style="background:#f3f2f1;border:1px solid #e1dfdd;border-radius:4px;padding:14px;font-family:monospace;font-size:13px;word-break:break-all;margin-bottom:24px;">
              W1RSQVBdIFRoaXMgaXMgbm90IHRoZSBmbGFnIQ==
            </div>
            <div style="text-align:center;margin:24px 0;">
              <a class="email-cta"
              title="https://company.com.password-reset.c0mpany-internal.com/reset?user=analyst&session=8f14e45f"
              style="background:#6264a7;color:white;padding:12px 36px;font-size:14px;font-weight:600;text-decoration:none;display:inline-block;border-radius:4px;">
              Reset Password Now
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#888;font-size:12px;">
              This is an automated message. Do not reply.<br>
              <span style="font-size:11px;">it-helpdesk@c0mpany-internal.com</span>
            </p>
          </div>
          <div style="background:#f3f2f1;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="color:#888;font-size:11px;text-align:center;">Company IT Department · Internal Use Only · 2026</p>
          </div>
        </div>
        <div class="email-warning" style="max-width:600px;margin:12px auto 0;">
        [TIP] DKIM pass does not always mean the email is legitimate. Check what domain signed it.
        </div>
    `
  },
  {
    id: 5,
    subject: "HR: Updated employment contract Q1 2026",
    from: "hr@company-documents.info",
    displayName: "HR Department",
    date: "Mon, 23 Mar 2026 15:55",
    preview: "Please review and sign your updated contract...",
    solved: false,
    flag: "FLAG{m3t4d4t4_3xp0s3d}",
    urlTrigger: null,
    flagTool: 'meta',
    meta: `File: contract_Q1_2026.pdf
          Author: h4ck3r_user
          Creator: PhishKit PDF Generator v2
          Keywords: FLAG{m3t4d4t4_3xp0s3d}`,
    senderInfo: { display: "HR Department <hr@company-documents.info>", legitimate: "company.com",spf: "softfail", dkim: "fail", dmarc: "fail" },
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id w2csp773012qtx;
        Mon, 23 Mar 2026 15:55:30 +0000 (UTC)
Received: from mx1.company-documents.info (mx1.company-documents.info [185.193.126.51])
        by mx.company.com with ESMTPS id u8si9901238pnl.61.2026.03.23.15.55.29
        (version=TLS1_2 cipher=ECDHE-RSA-AES256-SHA384 bits=256/256);
        Mon, 23 Mar 2026 15:55:29 +0000 (UTC)
Received: from smtp-out.company-documents.info (smtp-out.company-documents.info [185.193.126.52])
        by mx1.company-documents.info with ESMTP id 2Az6r4SuQq-00815;
        Mon, 23 Mar 2026 15:55:27 +0000
Received: from bulk-mailer.cc (bulk-mailer.cc [185.193.126.51])
        by smtp-out.company-documents.info (Postfix) with ESMTP id E3G6D5H33C4;
        Mon, 23 Mar 2026 15:55:26 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=fail (domain key not found) header.i=@company-documents.info;
        spf=softfail smtp.mailfrom=hr@company-documents.info;
        dmarc=fail (p=NONE) header.from=company-documents.info
Received-SPF: SoftFail (185.193.126.51 not fully permitted for company-documents.info)
X-Spam-Status: Yes, score=6.2
X-Spam-Flag: YES
X-Spam-Report:
        * 2.3 ATTACHMENT_LURE Email lures user to open attachment
        * 1.5 DOMAIN_IMPERSONATION Impersonating company HR domain
        * 1.2 BULK_MAILER Sent via bulk mail infrastructure
        * 1.2 SPF_SOFTFAIL SPF soft fail
X-Originating-IP: 185.193.126.51
X-Mailer: Bulk Email Sender v4.1
X-PHP-Originating-Script: 2002:hr_lure_v3.php
X-Attachment: contract_Q1_2026.pdf
X-Attachment-Hash: 3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e
X-Attachment-Size: 253952
Message-ID: <20260323155526.E3G6D5H33C4@smtp-out.company-documents.info>
Date: Mon, 23 Mar 2026 15:55:26 +0000 (UTC)
From: "HR Department" <hr@company-documents.info>
Reply-To: hr@company-documents.info
To: analyst@company.com
Subject: HR: Updated employment contract Q1 2026
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="----=_Part_3342_9876543210"
X-Priority: 3 (Normal)
X-Complaints-To: abuse@bulk-mailer.cc`,
    meta: `File: contract_Q1_2026.pdf
Author: h4ck3r_user
Creator: PhishKit PDF Generator v2
Created: 2026-03-22 03:14:00 UTC
Modified: 2026-03-22 03:14:00 UTC
Producer: Malicious PDF Tools
Keywords: FLAG{m3t4d4t4_3xp0s3d}
File size: 248 KB
Encryption: None`,
    body: `
      <div style="background:#f5f5f5;padding:20px;">
        <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          <div style="background:#d83b01;padding:18px 32px;display:flex;align-items:center;gap:12px;">
            <div style="background:white;border-radius:50%;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#d83b01;font-size:14px;">HR</div>
            <div>
              <div style="color:white;font-size:16px;font-weight:700;">Human Resources</div>
              <div style="color:#f9b8a0;font-size:11px;">Company HR Department</div>
            </div>
          </div>
          <div style="padding:32px;">
            <p style="font-size:18px;font-weight:600;color:#323130;margin-bottom:20px;">Updated Employment Contract — Q1 2026</p>
            <p style="color:#323130;font-size:14px;margin-bottom:16px;">Dear Employee,</p>
            <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:20px;">
              Please find attached your <strong>updated employment contract for Q1 2026</strong>, reflecting the latest changes to our compensation structure and remote work policy.
            </p>
            <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:24px;">
              Kindly review the document carefully and return the <strong>signed copy by Friday, March 27th</strong>.
            </p>
            <div style="border:1px solid #e1dfdd;border-radius:4px;padding:16px;display:flex;align-items:center;gap:16px;margin-bottom:24px;background:#faf9f8;">
              <div style="background:#d83b01;border-radius:4px;width:44px;height:52px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <span style="color:white;font-size:11px;font-weight:700;">PDF</span>
              </div>
              <div style="flex:1;">
                <div style="font-weight:600;font-size:13px;color:#323130;">contract_Q1_2026.pdf</div>
                <div style="font-size:11px;color:#605e5c;margin-top:2px;">248 KB · PDF Document · Requires signature</div>
              </div>
              <a class="email-cta" style="background:#d83b01;color:white;padding:8px 16px;font-size:12px;font-weight:600;text-decoration:none;border-radius:3px;white-space:nowrap;">
                Open
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#888;font-size:12px;line-height:1.6;">
              Confidential — intended only for the named recipient.<br>
              <span style="font-size:11px;">hr@company-documents.info</span>
            </p>
          </div>
          <div style="background:#f3f2f1;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="color:#888;font-size:11px;text-align:center;">Company HR Department · Confidential · 2026</p>
          </div>
        </div>
        <div class="email-warning" style="max-width:600px;margin:12px auto 0;">
        [TIP] Before opening attachments, always inspect their metadata.
        </div>
    `
  }
];

// ─── APP ─────────────────────────────────────────────────────────────
class PhishHunt {
  constructor() {
    this.player       = '';
    this.score        = 0;
    this.flagCount    = 0;
    this.currentEmail = null;
    this.emails       = JSON.parse(JSON.stringify(emails));
    this.init();
  }

  init() {
    document.getElementById('startBtn').onclick      = () => this.start();
    document.getElementById('flagSubmit').onclick    = () => this.submitFlag();
    document.getElementById('flagInput').addEventListener('keypress', e => { if (e.key === 'Enter') this.submitFlag(); });
    document.getElementById('senderBtn').onclick     = () => this.inspectSender();
    document.getElementById('senderInput').addEventListener('keypress', e => { if (e.key === 'Enter') this.inspectSender(); });
    document.getElementById('toggleHeaders').onclick = () => this.toggleHeaders();
    document.getElementById('urlInspect').onclick    = () => this.inspectURL();
    document.getElementById('urlInput').addEventListener('keypress', e => { if (e.key === 'Enter') this.inspectURL(); });
    document.getElementById('decodeBtn').onclick     = () => this.decodeString();
    document.getElementById('decodeInput').addEventListener('keypress', e => { if (e.key === 'Enter') this.decodeString(); });
    document.getElementById('metaBtn').onclick       = () => this.inspectMeta();
    document.getElementById('restartBtn').onclick    = () => this.restart();
    document.getElementById('gameOverBtn').onclick   = () => this.closeGameOver();
  }

  start() {
    this.player = document.getElementById('username').value.trim() || 'analyst';
    document.getElementById('introScreen').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('topPlayer').textContent = `User: ${this.player}`;
    document.getElementById('playerName').textContent = this.player;
    this.renderEmailList();
  }

  renderEmailList() {
    const list = document.getElementById('emailList');
    list.innerHTML = '';
    this.emails.forEach(email => {
      const li = document.createElement('li');
      li.className = email.solved ? 'emailSolved' : 'unread';
      li.innerHTML = `
        <span class="emailListDate">${email.date.split(' ')[1]}</span>
        <div class="emailListSubject">${email.subject}</div>
        <div class="emailListFrom">${email.displayName} &lt;${email.from}&gt;</div>
        <div class="emailListPreview">${email.preview}</div>
      `;
      li.onclick = () => this.openEmail(email.id);
      list.appendChild(li);
    });
  }

  openEmail(id) {
    this.currentEmail = this.emails.find(e => e.id === id);
    if (!this.currentEmail) return;

    document.querySelectorAll('#emailList li').forEach((li, i) => {
      li.classList.toggle('active', i === id - 1);
    });

    document.getElementById('emailSubject').textContent = this.currentEmail.subject;
    document.getElementById('emailFrom').innerHTML  = `<strong>From:</strong> ${this.currentEmail.displayName} &lt;${this.currentEmail.from}&gt;`;
    document.getElementById('emailDate').innerHTML  = `<strong>Date:</strong> ${this.currentEmail.date}`;
    document.getElementById('emailBody').innerHTML  = this.currentEmail.body;

    // Chiudi pannello headers
    document.getElementById('headersPanel').classList.add('hidden');
    document.getElementById('toggleHeaders').textContent = 'Show Headers';

    // Intercetta click su link e bottoni
    document.querySelectorAll('#emailBody .email-cta, #emailBody .email-link').forEach(el => {
      el.style.cursor = 'pointer';
      el.onclick = (e) => {
        e.preventDefault();
        const label = el.classList.contains('email-link')
          ? `You clicked a malicious URL: "${el.textContent.trim().substring(0, 80)}..."`
          : `You clicked the "${el.textContent.trim()}" button!`;
        this.gameOver(label);
      };
    });

    document.getElementById('analysisPanel').classList.remove('hidden');

    // Reset feedback
    ['flagFeedback','senderFeedback','urlFeedback','decodeFeedback','metaFeedback'].forEach(fid => {
      const el = document.getElementById(fid);
      if (el) { el.innerHTML = ''; el.className = ''; }
    });

    // Reset inputs
    ['flagInput','senderInput','urlInput','decodeInput'].forEach(fid => {
      document.getElementById(fid).value = '';
    });

    // Mostra tutti i tool
    ['toolFlag','toolSender','toolHeaders','toolURL','toolDecode','toolMeta']
      .forEach(fid => document.getElementById(fid).classList.remove('hidden'));
  }

  submitFlag() {
    if (!this.currentEmail) return;
    const input    = document.getElementById('flagInput').value.trim();
    const feedback = document.getElementById('flagFeedback');

    if (this.currentEmail.solved) {
      feedback.textContent = '[OK] Already solved!';
      feedback.className   = 'feedback-info';
      return;
    }

    if (input === this.currentEmail.flag) {
      this.currentEmail.solved = true;
      const pts = 100 * this.currentEmail.id;
      this.score    += pts;
      this.flagCount++;
      feedback.textContent = `[OK] Correct! +${pts} pts`;
      feedback.className   = 'feedback-ok';
      this.updateStats();
      this.renderEmailList();
      if (this.flagCount === 5) setTimeout(() => this.showWin(), 1200);
    } else {
      feedback.textContent = '[ERR] Wrong flag. Keep analyzing!';
      feedback.className   = 'feedback-err';
    }
  }

inspectSender() {
  const input    = document.getElementById('senderInput').value.trim();
  const feedback = document.getElementById('senderFeedback');

  if (!input) {
    feedback.textContent = 'Paste the sender email address first.';
    feedback.className   = 'feedback-err';
    return;
  }

  if (!this.currentEmail?.senderInfo) return;

  const info        = this.currentEmail.senderInfo;
  const domainMatch = input.match(/@([^>\s]+)/);
  const domain      = domainMatch ? domainMatch[1].trim() : input;
  const isSpoofed   = domain !== info.legitimate;
  const revealsFlag = this.currentEmail.flagTool === 'sender' && isSpoofed;

  const statusColor  = isSpoofed ? '#f44747' : '#4ec9b0';
  const statusLabel  = isSpoofed ? 'SPOOFED' : 'LEGITIMATE';
  const domainColor  = isSpoofed ? '#f44747' : '#4ec9b0';
  const legitColor   = '#4ec9b0';

  const spfVal  = info.spf   || (isSpoofed ? 'fail' : 'pass');
const dkimVal = info.dkim  || (isSpoofed ? 'fail' : 'pass');
const dmarcVal= info.dmarc || (isSpoofed ? 'fail' : 'pass');

const spfOk   = spfVal.startsWith('pass');
const dkimOk  = dkimVal.startsWith('pass');
const dmarcOk = dmarcVal.startsWith('pass');


  document.getElementById('senderModalContent').innerHTML = `
<span style="color:#569cd6;">Input address   :</span> <span style="color:#ce9178;">${input}</span>
<span style="color:#569cd6;">Extracted domain:</span> <span style="color:${domainColor};font-weight:700;">${domain}</span>
<span style="color:#569cd6;">Legitimate domain:</span> <span style="color:${legitColor};">${info.legitimate}</span>

<span style="color:#888;">── SPF / DKIM / DMARC ──────────────────────────────</span>
<span style="color:#569cd6;">SPF             :</span> <span style="color:${spfOk ? '#4ec9b0' : '#f44747'};">${spfVal}</span>
<span style="color:#569cd6;">DKIM            :</span> <span style="color:${dkimOk ? '#4ec9b0' : '#f44747'};">${dkimVal}</span>
<span style="color:#569cd6;">DMARC           :</span> <span style="color:${dmarcOk ? '#4ec9b0' : '#f44747'};">${dmarcVal}</span>


<span style="color:#888;">── Domain Comparison ───────────────────────────────</span>
<span style="color:#569cd6;">Sender domain   :</span> <span style="color:${domainColor};font-weight:700;">${domain}</span>
<span style="color:#569cd6;">Expected domain :</span> <span style="color:${legitColor};">${info.legitimate}</span>
<span style="color:#569cd6;">Match           :</span> ${isSpoofed ? '<span style="color:#f44747;font-weight:700;">NO — domains do not match</span>' : '<span style="color:#4ec9b0;font-weight:700;">YES</span>'}

<span style="color:#888;">── Verdict ─────────────────────────────────────────</span>
<span style="color:${statusColor};font-weight:700;">[${statusLabel}]${isSpoofed ? ' Sender domain does not match the legitimate organization' : ' Sender looks legitimate'}</span>
${revealsFlag ? `\n<span style="color:#4ec9b0;font-weight:700;">[FLAG] ${this.currentEmail.flag}</span>` : ''}`;

  document.getElementById('senderModal').classList.remove('hidden');
  document.getElementById('senderModalClose').onclick = () => {
    document.getElementById('senderModal').classList.add('hidden');
  };

  feedback.textContent = isSpoofed
    ? '[!] Suspicious sender detected — see report.'
    : '[OK] Sender looks legitimate — see report.';
  feedback.className = isSpoofed ? 'feedback-err' : 'feedback-ok';
}


  toggleHeaders() {
    const panel    = document.getElementById('headersPanel');
    const raw      = document.getElementById('emailHeaderRaw');
    const btn      = document.getElementById('toggleHeaders');
    const isHidden = panel.classList.contains('hidden');

    raw.textContent = this.currentEmail?.headers || 'No headers available for this email.';
    panel.classList.toggle('hidden', !isHidden);
    btn.textContent = isHidden ? 'Hide Headers' : 'Show Headers';
  }

inspectURL() {
  const input    = document.getElementById('urlInput').value.trim();
  const feedback = document.getElementById('urlFeedback');

  if (!input) {
    feedback.textContent = 'Paste a URL first.';
    feedback.className   = 'feedback-err';
    return;
  }

  // Livello 3 — Amazon
  if (this.currentEmail?.flagTool === 'url' && this.currentEmail?.urlTrigger
      && input.includes(this.currentEmail.urlTrigger)) {
    const realDomain = this.currentEmail.urlTrigger;
    document.getElementById('urlScanContent').innerHTML = `
<span style="color:#569cd6;">URL submitted   :</span> <span style="color:#ce9178;">${input.substring(0, 65)}...</span>
<span style="color:#569cd6;">Scan time       :</span> Mon, 23 Mar 2026 11:04:12 UTC

<span style="color:#888;">── Domain Analysis ─────────────────────────────────</span>
<span style="color:#569cd6;">Effective TLD+1 :</span> <span style="color:#f44747;font-weight:700;">${realDomain}</span>
<span style="color:#569cd6;">Subdomain       :</span> <span style="color:#dcdcaa;">amazon.com.account-verify</span> <span style="color:#f44747;">[NOT amazon.com]</span>
<span style="color:#569cd6;">Registrar       :</span> Namecheap, Inc.
<span style="color:#569cd6;">Registered      :</span> <span style="color:#f44747;">2026-03-21</span> (2 days ago)
<span style="color:#569cd6;">ASN             :</span> AS62282 — BulkHost LLC (RU)
<span style="color:#569cd6;">IP              :</span> 91.108.4.200

<span style="color:#888;">── Threat Intelligence ─────────────────────────────</span>
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#f44747;">14/92 engines flagged</span>
<span style="color:#569cd6;">PhishTank       :</span> <span style="color:#f44747;">KNOWN PHISHING</span>
<span style="color:#569cd6;">Google Safe B.  :</span> <span style="color:#f44747;">MALICIOUS</span>
<span style="color:#569cd6;">URLhaus         :</span> <span style="color:#f44747;">ACTIVE PHISHING HOST</span>

<span style="color:#888;">── Verdict ─────────────────────────────────────────</span>
<span style="color:#f44747;font-weight:700;">[MALICIOUS] Brand impersonation — Amazon phishing page</span>

<span style="color:#4ec9b0;font-weight:700;">[FLAG] ${this.currentEmail.flag}</span>`;

    document.getElementById('urlScanModal').classList.remove('hidden');
    document.getElementById('urlScanClose').onclick = () => {
      document.getElementById('urlScanModal').classList.add('hidden');
    };
    feedback.textContent = '[!] Malicious URL detected — see report.';
    feedback.className   = 'feedback-err';
    return;
  }

  // Livello 4 — IT Helpdesk URL (indizio, no flag)
  if (this.currentEmail?.id === 4 && this.currentEmail?.urlTrigger
      && input.includes(this.currentEmail.urlTrigger)) {
    document.getElementById('urlScanContent').innerHTML = `
<span style="color:#569cd6;">URL submitted   :</span> <span style="color:#ce9178;">${input.substring(0, 65)}...</span>
<span style="color:#569cd6;">Scan time       :</span> Mon, 23 Mar 2026 13:31:04 UTC

<span style="color:#888;">── Domain Analysis ─────────────────────────────────</span>
<span style="color:#569cd6;">Effective TLD+1 :</span> <span style="color:#f44747;font-weight:700;">c0mpany-internal.com</span>
<span style="color:#569cd6;">Subdomain       :</span> <span style="color:#dcdcaa;">company.com.password-reset</span> <span style="color:#f44747;">[NOT company.com]</span>
<span style="color:#569cd6;">Registrar       :</span> GoDaddy LLC
<span style="color:#569cd6;">Registered      :</span> <span style="color:#f44747;">2026-03-20</span> (3 days ago)
<span style="color:#569cd6;">ASN             :</span> AS47583 — Hostinger International (LT)
<span style="color:#569cd6;">IP              :</span> 45.142.212.100

<span style="color:#888;">── Threat Intelligence ─────────────────────────────</span>
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#f44747;">8/92 engines flagged</span>
<span style="color:#569cd6;">PhishTank       :</span> <span style="color:#f44747;">SUSPECTED PHISHING</span>
<span style="color:#569cd6;">Google Safe B.  :</span> <span style="color:#dcdcaa;">NOT YET FLAGGED</span>
<span style="color:#569cd6;">URLhaus         :</span> <span style="color:#dcdcaa;">NOT LISTED</span>

<span style="color:#888;">── Verdict ─────────────────────────────────────────</span>
<span style="color:#f44747;font-weight:700;">[SUSPICIOUS] Domain impersonates internal company portal</span>
<span style="color:#dcdcaa;">The flag is not here — keep digging into the email headers.</span>`;

    document.getElementById('urlScanModal').classList.remove('hidden');
    document.getElementById('urlScanClose').onclick = () => {
      document.getElementById('urlScanModal').classList.add('hidden');
    };
    feedback.textContent = '[!] Suspicious URL detected — see report.';
    feedback.className   = 'feedback-err';
    return;
  }

  // Analisi generica
  const findings = [];
  if (input.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) findings.push('[!] IP address detected');
  if (input.split('.').length > 4)                         findings.push('[!] Suspicious subdomain chain');
  if (!input.startsWith('https://'))                       findings.push('[!] Not HTTPS');
  if (input.includes('redirect'))                          findings.push('[!] Redirect parameter detected');
  if (input.includes('id=') || input.includes('token='))   findings.push('[!] Suspicious parameter detected');

  feedback.innerHTML = findings.length
    ? findings.join('<br>')
    : '[OK] No obvious threats detected.';
  feedback.className = findings.length ? 'feedback-err' : 'feedback-ok';
}



  decodeString() {
    const input    = document.getElementById('decodeInput').value.trim();
    const feedback = document.getElementById('decodeFeedback');

    if (!input) {
      feedback.textContent = 'Paste a string first.';
      feedback.className   = 'feedback-err';
      return;
    }

    try {
      const decoded = atob(input);
      feedback.innerHTML = `[DECODED] <strong style="font-family:monospace">${decoded}</strong>`;
      feedback.className = decoded.includes('FLAG{') ? 'feedback-ok' : 'feedback-info';
    } catch {
      feedback.textContent = '[ERR] Not valid base64.';
      feedback.className   = 'feedback-err';
    }
  }

 inspectMeta() {
  const feedback = document.getElementById('metaFeedback');
  if (!this.currentEmail?.meta) {
    feedback.textContent = 'No attachment found.';
    feedback.className   = 'feedback-err';
    return;
  }

  const flag = this.currentEmail.flag;

  document.getElementById('pdfModalContent').innerHTML = `
<span style="color:#569cd6;">File            :</span> <span style="color:#ce9178;">contract_Q1_2026.pdf</span>
<span style="color:#569cd6;">Scan time       :</span> Mon, 23 Mar 2026 15:56:02 UTC

<span style="color:#888;">── File Properties ─────────────────────────────────</span>
<span style="color:#569cd6;">File Size       :</span> 248 KB
<span style="color:#569cd6;">MIME Type       :</span> application/pdf
<span style="color:#569cd6;">PDF Version     :</span> 1.6
<span style="color:#569cd6;">Encryption      :</span> <span style="color:#4ec9b0;">None</span>
<span style="color:#569cd6;">Linearized      :</span> No

<span style="color:#888;">── Document Metadata ───────────────────────────────</span>
<span style="color:#569cd6;">Title           :</span> Employment Contract Q1 2026
<span style="color:#569cd6;">Author          :</span> <span style="color:#f44747;font-weight:700;">h4ck3r_user</span>
<span style="color:#569cd6;">Creator         :</span> <span style="color:#f44747;">PhishKit PDF Generator v2</span>
<span style="color:#569cd6;">Producer        :</span> <span style="color:#f44747;">Malicious PDF Tools 3.1</span>
<span style="color:#569cd6;">Created         :</span> <span style="color:#f44747;">2026-03-22 03:14:00 UTC</span> (1 day ago)
<span style="color:#569cd6;">Modified        :</span> 2026-03-22 03:14:00 UTC
<span style="color:#569cd6;">Keywords        :</span> <span style="color:#f44747;font-weight:700;">${flag}</span>
<span style="color:#569cd6;">Subject         :</span> Q1 2026 HR Document

<span style="color:#888;">── Hash Check ──────────────────────────────────────</span>
<span style="color:#569cd6;">MD5             :</span> 3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e
<span style="color:#569cd6;">SHA256          :</span> a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#f44747;">21/62 engines flagged</span>
<span style="color:#569cd6;">MalwareBazaar   :</span> <span style="color:#f44747;">KNOWN MALWARE — PhishKit.PDF.Gen</span>

<span style="color:#888;">── Suspicious Indicators ────────────────────────────</span>
<span style="color:#f44747;">[!] Author does not match expected HR personnel</span>
<span style="color:#f44747;">[!] Created with known phishing toolkit</span>
<span style="color:#f44747;">[!] Document created at 03:14 UTC (unusual hours)</span>
<span style="color:#f44747;">[!] Hash matches known phishing campaign PhishKit.PDF.Gen</span>

<span style="color:#888;">── Verdict ─────────────────────────────────────────</span>
<span style="color:#f44747;font-weight:700;">[MALICIOUS] PDF generated by phishing toolkit — do not open</span>
`;

  document.getElementById('pdfModal').classList.remove('hidden');
  document.getElementById('pdfModalClose').onclick = () => {
    document.getElementById('pdfModal').classList.add('hidden');
  };

  feedback.textContent = '[!] Malicious PDF detected — see report.';
  feedback.className   = 'feedback-err';
}


  updateStats() {
    document.getElementById('score').textContent     = this.score;
    document.getElementById('flagCount').textContent = this.flagCount;
  }

  gameOver(msg) {
    document.getElementById('gameOverMsg').textContent = msg;
    document.getElementById('gameOverScreen').classList.remove('hidden');
  }

  closeGameOver() {
    document.getElementById('gameOverScreen').classList.add('hidden');
    this.resetGame();
  }

  showWin() {
    document.getElementById('finalScore').textContent = this.score;
    document.getElementById('winScreen').classList.remove('hidden');
  }

  restart() {
    document.getElementById('winScreen').classList.add('hidden');
    this.resetGame();
  }

  resetGame() {
    this.emails       = JSON.parse(JSON.stringify(emails));
    this.score        = 0;
    this.flagCount    = 0;
    this.currentEmail = null;
    this.updateStats();
    this.renderEmailList();
    document.getElementById('emailSubject').textContent = 'Select an email to start';
    document.getElementById('emailFrom').textContent    = '';
    document.getElementById('emailDate').textContent    = '';
    document.getElementById('emailBody').innerHTML      = '<p id="emailPlaceholder">Select an email from the inbox to start.</p>';
    document.getElementById('headersPanel').classList.add('hidden');
    document.getElementById('analysisPanel').classList.add('hidden');
  }
}

// ─── AVVIO ───────────────────────────────────────────────────────────
new PhishHunt();
