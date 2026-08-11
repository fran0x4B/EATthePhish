// ─── DATA ────────────────────────────────────────────────────────────
const emails = [
 {
  id: 1,
  subject: "PayPal: We've limited your account access",
  from: "service@paypa1.com",
  displayName: "PayPal",
  date: "Mon, 23 Mar 2026 08:14",
  preview: "We noticed unusual activity. Please verify your account...",
  solved: false,
  isPhishing: true,
explanation: `
  <strong>PHISHING DETECTED</strong>
  
  <div style="margin-top:12px;">
    <strong>Key Indicators:</strong>
    <ul style="margin:8px 0 8px 20px;">
      <li><strong>Sender domain:</strong> <span style="color:#d13438;font-weight:700;">paypa1.com</span> (uses "1" instead of "l")</li>
      <li><strong>SPF:</strong> <span style="color:#d13438;font-weight:700;">softfail</span></li>
      <li><strong>DKIM:</strong> <span style="color:#d13438;font-weight:700;">fail</span> (signature verification failed)</li>
      <li><strong>DMARC:</strong> <span style="color:#d13438;font-weight:700;">fail</span></li>
      <li><strong>Reply-To:</strong> <span style="color:#d13438;font-weight:700;">no-reply@paypa1.com</span> (does not match PayPal)</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Analysis:</strong><br>
    The sender domain is <span style="color:#d13438;font-weight:700;">paypa1.com</span>, not <span style="color:#107c10;font-weight:700;">paypal.com</span>. 
    This is a classic typosquatting technique. Additionally, all authentication 
    checks (SPF, DKIM, DMARC) fail, confirming that the email is not authorized 
    by PayPal.
  </div>
  
  <div style="margin-top:12px;">
    <strong>Lesson:</strong> Always verify the sender domain character-by-character, 
    especially for financial institutions. Hover over links before clicking.
  </div>
`,
  scoreIfCorrect: 100,
  scoreIfWrong: -50,
  senderInfo: { 
    display: "PayPal <service@paypa1.com>", 
    legitimate: "paypal.com",
    spf: "softfail", 
    dkim: "fail", 
    dmarc: "fail"
  },
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
        spf=softfail smtp.mailfrom=service@paypa1.com;
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
From: "PayPal" <service@paypa1.com>
Reply-To: no-reply@paypa1.com
To: analyst@company.com
Subject: PayPal: We've limited your account access
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="----=_Part_8821_1234567890"
X-Priority: 1`,
  body: `
    <div style="background:#f5f5f5;padding:20px;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        
        <!-- PayPal Header -->
        <div style="background:#003087;padding:24px 32px;text-align:center;">
          <span style="color:#009cde;font-size:32px;font-weight:900;letter-spacing:-1px;">Pay</span>
          <span style="color:#ffffff;font-size:32px;font-weight:900;letter-spacing:-1px;">Pal</span>
        </div>
        
        <!-- Main Content -->
        <div style="padding:32px;">
          <p style="font-size:20px;font-weight:600;color:#2c2e2f;margin-bottom:16px;">We've limited your account access</p>
          
          <p style="color:#2c2e2f;font-size:14px;margin-bottom:16px;">Dear PayPal member,</p>
          
          <p style="color:#2c2e2f;font-size:14px;line-height:1.6;margin-bottom:16px;">
            We noticed <strong>unusual activity</strong> associated with your PayPal account. 
            To ensure your account security, we have temporarily limited certain features.
          </p>
          
          <p style="color:#2c2e2f;font-size:14px;line-height:1.6;margin-bottom:24px;">
            Please verify your identity within <strong>24 hours</strong> to restore full access to your account.
          </p>
          
          <!-- CTA Button -->
          <div style="text-align:center;margin:28px 0;">
            <a class="email-cta" href="#" style="background:#0070ba;color:white;padding:14px 48px;border-radius:24px;font-size:15px;font-weight:600;text-decoration:none;display:inline-block;box-shadow:0 2px 4px rgba(0,0,0,0.2);">
              Verify My Account
            </a>
          </div>
          
          <!-- Info Box -->
          <div style="background:#f7f7f7;border:1px solid #e5e5e5;border-radius:4px;padding:16px;margin:24px 0;">
            <p style="color:#2c2e2f;font-size:13px;margin:0 0 8px 0;font-weight:600;">Why did this happen?</p>
            <p style="color:#6c7378;font-size:13px;line-height:1.5;margin:0;">
              We limit accounts when we detect unusual login attempts or transactions that don't match your typical activity.
            </p>
          </div>
          
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
          
          <p style="color:#6c7378;font-size:12px;line-height:1.6;margin-bottom:8px;">
            If you didn't request this, you can safely ignore this email. Your account will remain active.
          </p>
          
          <p style="color:#6c7378;font-size:12px;line-height:1.6;">
            Questions? Contact us at <a href="mailto:support@paypa1.com" style="color:#0070ba;text-decoration:none;">support@paypa1.com</a>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background:#f5f5f5;padding:24px 32px;border-top:1px solid #e5e5e5;">
          <p style="color:#6c7378;font-size:11px;text-align:center;margin:0 0 12px 0;">
            PayPal is committed to safeguarding your privacy. Please review our 
            <a href="#" style="color:#0070ba;text-decoration:none;">Privacy Statement</a> and 
            <a href="#" style="color:#0070ba;text-decoration:none;">User Agreement</a>.
          </p>
          <p style="color:#999;font-size:11px;text-align:center;margin:0;">
            © 2026 PayPal, Inc. All rights reserved. PayPal is located at 2211 North First Street, San Jose, CA 95131.
          </p>
        </div>
        
      </div>
      
      <!-- Security Tip -->
      <div class="email-warning" style="max-width:600px;margin:12px auto 0;background:#fff4ce;border-left:4px solid #f7ca00;padding:12px 16px;font-size:12px;color:#7a5e00;">
        <strong>Security Tip:</strong> Always check the sender email address carefully. 
        PayPal emails come from @paypal.com domains only.
      </div>
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
    isPhishing: true,
   explanation: `
  <strong>PHISHING DETECTED</strong>
  
  <div style="margin-top:12px;">
    <strong>Key Indicators:</strong>
    <ul style="margin:8px 0 8px 20px;">
      <li><strong>Envelope-From:</strong> <span style="color:#d13438;font-weight:700;">bounce@micros0ft-alert.com</span> (not microsoft.com)</li>
      <li><strong>Return-Path:</strong> <span style="color:#d13438;font-weight:700;">mismatch</span> with visible From address</li>
      <li><strong>SPF:</strong> <span style="color:#d13438;font-weight:700;">fail</span> (microsoft.com does not authorize 185.220.101.47)</li>
      <li><strong>DKIM:</strong> <span style="color:#d13438;font-weight:700;">none</span> (no signature found)</li>
      <li><strong>DMARC:</strong> <span style="color:#d13438;font-weight:700;">fail</span></li>
      <li><strong>X-Mailer:</strong> <span style="color:#d13438;font-weight:700;">PhishKit v3.1</span> (phishing toolkit!)</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Analysis:</strong><br>
    Although the visible From address shows <span style="color:#107c10;font-weight:700;">security@microsoft.com</span>, 
    the envelope-from (Return-Path) reveals the true sender: 
    <span style="color:#d13438;font-weight:700;">micros0ft-alert.com</span> (with "0" instead of "o"). 
    This is a classic example of envelope spoofing.
  </div>
  
  <div style="margin-top:12px;">
    <strong>Lesson:</strong> The visible From address is not always the real sender. 
    Always check Return-Path and Authentication-Results headers.
  </div>
`,
    scoreIfCorrect: 100,
    scoreIfWrong: -50,
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
  subject: "URGENT: Wire transfer needed for acquisition deal",
  from: "cfo@company.com",
  displayName: "Sarah Chen - CFO",
  date: "Sun, 22 Mar 2026 03:17",
  preview: "Need immediate wire transfer for time-sensitive acquisition...",
  solved: false,
  isPhishing: true,
 explanation: `
  <strong>PHISHING DETECTED — Business Email Compromise (BEC)</strong>
  
  <div style="margin-top:12px;">
    <strong>Key Indicators:</strong>
    <ul style="margin:8px 0 8px 20px;">
      <li><strong>Send time:</strong> <span style="color:#d13438;font-weight:700;">Sunday 3:17 AM</span> (unusual for CFO)</li>
      <li><strong>X-Originating-IP:</strong> <span style="color:#d13438;font-weight:700;">185.220.101.99</span> (Russia, not HQ office)</li>
      <li><strong>X-Originating-Country:</strong> <span style="color:#d13438;font-weight:700;">RU</span> (Russia)</li>
      <li><strong>URL in email:</strong> <span style="color:#d13438;font-weight:700;">company-secure.com</span> (not company.com)</li>
      <li><strong>Tone:</strong> <span style="color:#d13438;font-weight:700;">Artificial urgency</span> ("immediate", "time-sensitive")</li>
      <li><strong>Request:</strong> <span style="color:#d13438;font-weight:700;">Bypass normal procedures</span> ("don't wait for approval")</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Analysis:</strong><br>
    Although SPF/DKIM/DMARC pass (the CFO's email account may be compromised), 
    several contextual indicators reveal phishing:
    <ul style="margin:8px 0 8px 20px;">
      <li>Email sent on <span style="color:#d13438;font-weight:700;">Sunday at 3 AM</span> — improbable for a CFO</li>
      <li>Originating IP: <span style="color:#d13438;font-weight:700;">185.220.101.99</span> (Russia) — does not match company headquarters</li>
      <li>The link <span style="color:#d13438;font-weight:700;">company-secure.com</span> is a domain registered 2 days ago (typosquatting)</li>
      <li>The request to <span style="color:#d13438;font-weight:700;">bypass approval</span> is a classic BEC technique</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Lesson:</strong> SPF/DKIM/DMARC pass do not guarantee legitimacy! 
    Always analyze context: timing, IP, tone, and anomalous requests.
  </div>
  
  <div style="margin-top:12px;background:#fff4ce;padding:12px;border-left:4px solid #f7ca00;">
    <strong>BEC (Business Email Compromise):</strong> This is one of the most 
    costly attacks — causing billions of dollars in losses annually. Attackers 
    compromise real executive email accounts to send fraudulent requests.
  </div>
`,
  scoreIfCorrect: 120,
  scoreIfWrong: -60,
  urlTrigger: "company-secure.com",
  senderInfo: { 
    display: "Sarah Chen - CFO <cfo@company.com>", 
    legitimate: "company.com",
    spf: "pass", 
    dkim: "pass", 
    dmarc: "pass"
  },
  headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id x9csp882145qtw;
        Sun, 22 Mar 2026 03:17:42 +0000 (UTC)
Received: from mail.company.com (mail.company.com [185.220.101.99])
        by mx.company.com with ESMTPS id r4si9902341plk.77.2026.03.22.03.17.41
        (version=TLS1_2 cipher=ECDHE-RSA-AES256-GCM-SHA384 bits=256/256);
        Sun, 22 Mar 2026 03:17:41 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=pass (signature valid) header.d=company.com;
        spf=pass (company.com authorizes 185.220.101.99);
        dmarc=pass (p=REJECT; alignment=strict) header.from=company.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=company.com; s=mail2026; t=1742644661;
        h=From:To:Subject:Date:Message-ID:MIME-Version;
        bh=aB3cD4eF5gH6iJ7kL8mN9oP0qR1sT2=;
        b=ValidValidValidValidValidValid==
Received-SPF: Pass (185.220.101.99 authorized for company.com)
X-Originating-IP: 185.220.101.99
X-Originating-Country: RU
X-Mailer: Microsoft Outlook 16.0
X-Sender-Location: Moscow, Russia
Message-ID: <20260322031741.A1B2C3D4E5F6@mail.company.com>
Date: Sun, 22 Mar 2026 03:17:41 +0000 (UTC)
From: "Sarah Chen - CFO" <cfo@company.com>
Reply-To: cfo@company.com
To: analyst@company.com
Subject: URGENT: Wire transfer needed for acquisition deal
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
X-Priority: 1 (Highest)
Importance: High`,
  body: `
    <div style="background:#f5f5f5;padding:20px;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        
        <!-- CFO Header -->
        <div style="background:#0078d4;padding:18px 32px;display:flex;align-items:center;gap:12px;">
          <div style="background:white;border-radius:4px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:#0078d4;">CFO</div>
          <div>
            <div style="color:white;font-size:16px;font-weight:700;">Sarah Chen</div>
            <div style="color:#c7e0f9;font-size:11px;">Chief Financial Officer</div>
          </div>
        </div>
        
        <!-- Urgent Banner -->
        <div style="background:#fff4ce;border-left:4px solid #f7ca00;padding:12px 32px;font-size:13px;color:#7a5e00;">
          <strong>URGENT — Time-sensitive action required</strong>
        </div>
        
        <!-- Main Content -->
        <div style="padding:32px;">
          <p style="color:#323130;font-size:14px;margin-bottom:16px;">Hi,</p>
          
          <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:20px;">
            I'm currently traveling for the acquisition deal and need your immediate assistance 
            with a <strong>time-sensitive wire transfer</strong>. Our legal team has finalized 
            the agreement, but we need to complete the payment today to secure the deal.
          </p>
          
          <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:20px;">
            <strong>Amount:</strong> $485,000 USD<br>
            <strong>Recipient:</strong> Meridian Holdings Ltd.<br>
            <strong>Deadline:</strong> Today, 5 PM EST
          </p>
          
          <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:24px;">
            Due to the urgency, <strong>please process this transfer immediately without waiting 
            for the standard approval workflow</strong>. I'll sign off on the documentation 
            once I'm back in the office on Monday.
          </p>
          
          <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:24px;">
            You can access the wire transfer portal here:<br>
            <a href="https://company-secure.com/wire-transfer?ref=ACQ2026" style="color:#0078d4;text-decoration:underline;">
              https://company-secure.com/wire-transfer?ref=ACQ2026
            </a>
          </p>
          
          <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:24px;">
            Let me know once it's done. This is critical for closing the deal.
          </p>
          
          <p style="color:#323130;font-size:14px;margin-bottom:8px;">Thanks,</p>
          <p style="color:#323130;font-size:14px;font-weight:600;margin-bottom:24px;">
            Sarah Chen<br>
            <span style="font-size:12px;color:#605e5c;">Chief Financial Officer</span>
          </p>
          
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
          
          <p style="color:#888;font-size:11px;">
            This email and any attachments are confidential and intended solely for the use 
            of the individual or entity to whom they are addressed.
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background:#f3f2f1;padding:16px 32px;border-top:1px solid #e5e5e5;">
          <p style="color:#888;font-size:11px;text-align:center;">
            Company Finance Department · Confidential · 2026
          </p>
        </div>
        
      </div>
      
      <!-- Security Tip -->
      <div class="email-warning" style="max-width:600px;margin:12px auto 0;background:#fde7e9;border-left:4px solid #d13438;padding:12px 16px;font-size:12px;color:#d13438;">
        <strong>SECURITY TIP:</strong> Be suspicious of urgent financial requests, especially 
        outside business hours. Verify via phone!
      </div>
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
    isPhishing: false,
    explanation: `
  <strong>LEGITIMATE EMAIL</strong>
  
  <div style="margin-top:12px;">
    <strong>Indicators of Legitimacy:</strong>
    <ul style="margin:8px 0 8px 20px;">
      <li><strong>Sender domain:</strong> <span style="color:#107c10;font-weight:700;">company.com</span> (matches the organization)</li>
      <li><strong>SPF:</strong> <span style="color:#107c10;font-weight:700;">pass</span></li>
      <li><strong>DKIM:</strong> <span style="color:#107c10;font-weight:700;">pass</span> (signature valid, domain aligned)</li>
      <li><strong>DMARC:</strong> <span style="color:#107c10;font-weight:700;">pass</span> (alignment correct)</li>
      <li><strong>Headers:</strong> <span style="color:#107c10;font-weight:700;">No indicators</span> of spoofing or bulk mailer</li>
      <li><strong>X-Mailer:</strong> <span style="color:#107c10;font-weight:700;">Microsoft Exchange Server</span> (internal)</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Analysis:</strong><br>
    Despite the urgency ("password expires in 24 hours"), all authentication 
    checks are positive. The domain <span style="color:#107c10;font-weight:700;">company.com</span> is correct for an 
    internal IT communication. The decoded base64 token is harmless (contains 
    only sample text).
  </div>
  
  <div style="margin-top:12px;">
    <strong>Lesson:</strong> Not all "urgent" emails are phishing. Always verify 
    SPF/DKIM/DMARC before deciding.
  </div>
`,
    scoreIfCorrect: 100,
    scoreIfWrong: -50,
    senderInfo: { 
      display: "IT Helpdesk <it-helpdesk@company.com>", 
      legitimate: "company.com",
      spf: "pass", 
      dkim: "pass", 
      dmarc: "pass"
    },
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id p9csp441829qtv;
        Mon, 23 Mar 2026 13:30:55 +0000 (UTC)
Received: from mail.company.com (mail.company.com [10.0.1.50])
        by mx.company.com with ESMTPS id t5si7712038pmk.29.2026.03.23.13.30.54
        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);
        Mon, 23 Mar 2026 13:30:54 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=pass (signature valid) header.d=company.com;
        spf=pass (company.com authorizes 10.0.1.50);
        dmarc=pass (p=REJECT; alignment=strict) header.from=company.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=company.com; s=mail2026; t=1742733051;
        h=From:To:Subject:Date:Message-ID:MIME-Version;
        bh=kLmN3oPqRsT4uVwXyZaB5cDeF7gHiJ8=;
        b=ValidValidValidValidValidValid==
Received-SPF: Pass (10.0.1.50 authorized for company.com)
X-Originating-IP: 10.0.1.50
X-Mailer: Microsoft Exchange Server
Message-ID: <20260323133051.D2F5C4G22B3@mail.company.com>
Date: Mon, 23 Mar 2026 13:30:51 +0000 (UTC)
From: "IT Helpdesk" <it-helpdesk@company.com>
Reply-To: it-helpdesk@company.com
To: analyst@company.com
Subject: IT Dept: Password expiry notice
MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8
X-Priority: 3 (Normal)`,
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
          <div style="background:#e8f4f8;border-left:4px solid #0078d4;padding:12px 32px;font-size:13px;color:#004578;">
            <strong>Notice</strong> — Your password expires in less than 24 hours
          </div>
          <div style="padding:32px;">
            <p style="color:#323130;font-size:14px;margin-bottom:16px;">Dear Employee,</p>
            <p style="color:#323130;font-size:14px;line-height:1.6;margin-bottom:20px;">
              As part of our quarterly security policy, your company password is set to 
              <strong>expire in 24 hours</strong>. Please reset your password via the 
              official portal to maintain access.
            </p>
            <p style="color:#323130;font-size:13px;margin-bottom:8px;font-weight:600;">Your verification token:</p>
            <div style="background:#f3f2f1;border:1px solid #e1dfdd;border-radius:4px;padding:14px;font-family:monospace;font-size:13px;word-break:break-all;margin-bottom:24px;">
              SGVsbG8gd29ybGQhIFRoaXMgaXMgYSB0ZXN0IHRva2VuLg==
            </div>
            <div style="text-align:center;margin:24px 0;">
              <a href="https://company.com/password-reset" style="background:#6264a7;color:white;padding:12px 36px;font-size:14px;font-weight:600;text-decoration:none;display:inline-block;border-radius:4px;">
                Reset Password
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#888;font-size:12px;">
              This is an automated message. Do not reply.<br>
              <span style="font-size:11px;">it-helpdesk@company.com</span>
            </p>
          </div>
          <div style="background:#f3f2f1;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="color:#888;font-size:11px;text-align:center;">Company IT Department · Internal Use Only · 2026</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
    subject: "HR: Updated employment contract Q1 2026",
    from: "hr@company.com",
    displayName: "HR Department",
    date: "Mon, 23 Mar 2026 15:55",
    preview: "Please review and sign your updated contract...",
    solved: false,
    isPhishing: false,
    explanation: `
  <strong>LEGITIMATE EMAIL</strong>
  
  <div style="margin-top:12px;">
    <strong>Indicators of Legitimacy:</strong>
    <ul style="margin:8px 0 8px 20px;">
      <li><strong>Sender domain:</strong> <span style="color:#107c10;font-weight:700;">company.com</span> (matches the organization)</li>
      <li><strong>SPF:</strong> <span style="color:#107c10;font-weight:700;">pass</span></li>
      <li><strong>DKIM:</strong> <span style="color:#107c10;font-weight:700;">pass</span></li>
      <li><strong>DMARC:</strong> <span style="color:#107c10;font-weight:700;">pass</span></li>
      <li><strong>PDF Metadata:</strong> <span style="color:#107c10;font-weight:700;">Author = HR Department</span> (correct)</li>
      <li><strong>PDF Metadata:</strong> <span style="color:#107c10;font-weight:700;">Creator = Adobe Acrobat Pro DC</span> (legitimate tool)</li>
      <li><strong>X-Mailer:</strong> <span style="color:#107c10;font-weight:700;">Microsoft Exchange Server</span> (internal)</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Analysis:</strong><br>
    Despite the PDF attachment (often used in phishing), all authentication 
    checks are positive. The PDF metadata shows legitimate author and creator. 
    The domain <span style="color:#107c10;font-weight:700;">company.com</span> is correct for internal HR communications.
  </div>
  
  <div style="margin-top:12px;">
    <strong>Lesson:</strong> Not all emails with attachments are phishing. 
    Always analyze the complete context before deciding.
  </div>
`,
    scoreIfCorrect: 100,
    scoreIfWrong: -50,
    senderInfo: { 
      display: "HR Department <hr@company.com>", 
      legitimate: "company.com",
      spf: "pass", 
      dkim: "pass", 
      dmarc: "pass"
    },
    meta: `File: contract_Q1_2026.pdf
Author: HR Department
Creator: Adobe Acrobat Pro DC
Created: 2026-03-22 10:30:00 UTC
Modified: 2026-03-22 10:30:00 UTC
Producer: Adobe PDF Library 15.0
File size: 248 KB
Encryption: None`,
    headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id w2csp773012qtx;
        Mon, 23 Mar 2026 15:55:30 +0000 (UTC)
Received: from mail.company.com (mail.company.com [10.0.1.51])
        by mx.company.com with ESMTPS id u8si9901238pnl.61.2026.03.23.15.55.29
        (version=TLS1_2 cipher=ECDHE-RSA-AES256-SHA384 bits=256/256);
        Mon, 23 Mar 2026 15:55:29 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=pass (signature valid) header.d=company.com;
        spf=pass (company.com authorizes 10.0.1.51);
        dmarc=pass (p=REJECT; alignment=strict) header.from=company.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=company.com; s=mail2026; t=1742739330;
        h=From:To:Subject:Date:Message-ID:MIME-Version;
        bh=xYz9AbCdEfGhIjKlMnOpQrStUvWxYz=;
        b=ValidValidValidValidValidValid==
Received-SPF: Pass (10.0.1.51 authorized for company.com)
X-Originating-IP: 10.0.1.51
X-Mailer: Microsoft Exchange Server
X-Attachment: contract_Q1_2026.pdf
X-Attachment-Hash: a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4
X-Attachment-Size: 253952
Message-ID: <20260323155529.E3G6D5H33C4@mail.company.com>
Date: Mon, 23 Mar 2026 15:55:29 +0000 (UTC)
From: "HR Department" <hr@company.com>
Reply-To: hr@company.com
To: analyst@company.com
Subject: HR: Updated employment contract Q1 2026
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="----=_Part_3342_9876543210"
X-Priority: 3 (Normal)`,
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
              Please find attached your <strong>updated employment contract for Q1 2026</strong>, 
              reflecting the latest changes to our compensation structure and remote work policy.
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
              <a href="#" style="background:#d83b01;color:white;padding:8px 16px;font-size:12px;font-weight:600;text-decoration:none;border-radius:3px;white-space:nowrap;">
                Open
              </a>
            </div>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
            <p style="color:#888;font-size:12px;line-height:1.6;">
              Confidential — intended only for the named recipient.<br>
              <span style="font-size:11px;">hr@company.com</span>
            </p>
          </div>
          <div style="background:#f3f2f1;padding:16px 32px;border-top:1px solid #e5e5e5;">
            <p style="color:#888;font-size:11px;text-align:center;">Company HR Department · Confidential · 2026</p>
          </div>
        </div>
      </div>
    `
  },
 {
  id: 6,
  subject: "Amazon Prime: Your membership renewal confirmation",
  from: "prime-membership@amazon.com",
  displayName: "Amazon Prime",
  date: "Mon, 23 Mar 2026 11:02",
  preview: "Your Amazon Prime membership has been renewed. Receipt attached...",
  solved: false,
  isPhishing: true,
  explanation: `
  <strong>PHISHING DETECTED — DKIM Replay + Expired Domain</strong>
  
  <div style="margin-top:12px;">
    <strong>Key Indicators:</strong>
    <ul style="margin:8px 0 8px 20px;">
      <li><strong>Sender domain:</strong> <span style="color:#107c10;font-weight:700;">amazon.com</span> (legitimate domain!)</li>
      <li><strong>SPF:</strong> <span style="color:#107c10;font-weight:700;">pass</span> (amazon.com authorizes this IP)</li>
      <li><strong>DKIM:</strong> <span style="color:#107c10;font-weight:700;">pass</span> (signature is valid!)</li>
      <li><strong>DMARC:</strong> <span style="color:#107c10;font-weight:700;">pass</span> (alignment correct)</li>
      <li><strong>DKIM Signature Date:</strong> <span style="color:#d13438;font-weight:700;">2024-01-15</span> (2 years old!)</li>
      <li><strong>Email Date:</strong> <span style="color:#d13438;font-weight:700;">2026-03-23</span> (mismatch!)</li>
      <li><strong>Attachment:</strong> <span style="color:#d13438;font-weight:700;">prime_receipt_2026.pdf</span> (unexpected!)</li>
      <li><strong>Link domain:</strong> <span style="color:#d13438;font-weight:700;">amazon-renewals.com</span> (EXPIRED & re-registered!)</li>
      <li><strong>Domain age:</strong> <span style="color:#d13438;font-weight:700;">Re-registered 3 days ago</span> (suspicious!)</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Analysis:</strong><br>
    This is a sophisticated <strong>DKIM Replay Attack</strong> combined with 
    <strong>Expired Domain Hijacking</strong>:
    <ul style="margin:8px 0 8px 20px;">
      <li>The attacker captured a legitimate Amazon email from 2024</li>
      <li>Kept the valid DKIM signature (still cryptographically valid!)</li>
      <li>Modified the body to add a malicious link</li>
      <li>Re-registered an expired Amazon subdomain (amazon-renewals.com)</li>
    </ul>
  </div>
  
  <div style="margin:12px 0;background:#fff4ce;padding:12px;border-left:4px solid #f7ca00;">
    <strong>How to detect:</strong>
    <ul style="margin:8px 0 0 20px;font-size:13px;">
      <li>Check the <strong>DKIM signature timestamp</strong> (t= field in headers)</li>
      <li>Compare with the <strong>Email Date</strong> header</li>
      <li>Inspect URLs with URL tool — check domain registration date!</li>
      <li>If DKIM is old + domain is recently re-registered = attack!</li>
    </ul>
  </div>
  
  <div style="margin-top:12px;">
    <strong>Lesson:</strong> Even valid DKIM/DMARC can be bypassed! Attackers:
    <ul style="margin:8px 0 8px 20px;">
      <li>Reuse old emails with valid signatures (DKIM Replay)</li>
      <li>Re-register expired domains from legitimate brands</li>
      <li>Combine both techniques for maximum credibility</li>
    </ul>
    Always check DKIM timestamps AND inspect URLs for domain age!
  </div>
  
  <div style="margin-top:12px;background:#fde7e9;padding:12px;border-left:4px solid #d13438;">
    <strong>Expired Domain Hijacking:</strong> Attackers monitor expired domains 
    from big brands (Amazon, Microsoft, etc.) and re-register them for phishing. 
    The domain looks legitimate but is under attacker control!
  </div>
`,
  scoreIfCorrect: 150,
  scoreIfWrong: -75,
  urlTrigger: "amazon-renewals.com",
  senderInfo: { 
    display: "Amazon Prime <prime-membership@amazon.com>", 
    legitimate: "amazon.com",
    spf: "pass", 
    dkim: "pass (but signature is from 2024!)", 
    dmarc: "pass" 
  },
  headers: `Delivered-To: analyst@company.com
Received: by mail.company.com with SMTP id b4csp882011qvn;
        Mon, 23 Mar 2026 11:02:44 +0000 (UTC)
Received: from mail.amazon.com (mail.amazon.com [54.239.28.85])
        by mx.company.com with ESMTPS id r2si4401928pli.12.2026.03.23.11.02.43
        (version=TLS1_2 cipher=ECDHE-RSA-AES256-GCM-SHA384 bits=256/256);
        Mon, 23 Mar 2026 11:02:43 +0000 (UTC)
Authentication-Results: mx.company.com;
        dkim=pass (signature valid) header.i=@amazon.com;
        spf=pass (amazon.com authorizes 54.239.28.85);
        dmarc=pass (p=REJECT; alignment=strict) header.from=amazon.com
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=amazon.com; s=amazon2024; t=1705312800;
        h=From:To:Subject:Date:Message-ID:MIME-Version;
        bh=xYz9AbCdEfGhIjKlMnOpQrStUvWxYz=;
        b=ValidValidValidValidValidValid==
Received-SPF: Pass (54.239.28.85 authorized for amazon.com)
X-Originating-IP: 54.239.28.85
X-Mailer: Amazon SES
X-Attachment: prime_receipt_2026.pdf
X-Attachment-Hash: 7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c
X-Attachment-Size: 159744
Message-ID: <20240115103000.A1B2C3D4E5F6@mail.amazon.com>
Date: Mon, 23 Mar 2026 11:02:43 +0000
From: "Amazon Prime" <prime-membership@amazon.com>
Reply-To: prime-membership@amazon.com
To: analyst@company.com
Subject: Amazon Prime: Your membership renewal confirmation
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="----=_Part_3342_9876543210"
X-Priority: 3 (Normal)`,
  meta: `File: prime_receipt_2026.pdf
Author: Amazon.com
Creator: Amazon SES PDF Generator
Created: 2026-03-20 10:30:00 UTC
Modified: 2026-03-20 10:30:00 UTC
Producer: Amazon PDF Library 2.1
File size: 124 KB
Encryption: None`,
  body: `
    <div style="background:#eaeded;padding:20px;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;background:white;border-radius:4px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        
        <!-- Amazon Prime Header -->
        <div style="background:#0070ba;padding:20px 32px;text-align:center;">
          <span style="color:#ffffff;font-size:24px;font-weight:900;letter-spacing:-1px;">amazon</span>
          <span style="color:#ff9900;font-size:24px;font-weight:900;margin-left:4px;">prime</span>
        </div>
        
        <!-- Main Content -->
        <div style="padding:32px;">
          <p style="font-size:20px;font-weight:600;color:#111;margin-bottom:16px;">Your Prime membership has been renewed</p>
          
          <p style="color:#333;font-size:14px;margin-bottom:16px;">Hello,</p>
          
          <p style="color:#333;font-size:14px;line-height:1.6;margin-bottom:20px;">
            Your Amazon Prime membership has been successfully renewed. Your annual 
            subscription fee of <strong>€49.99</strong> has been charged to your 
            payment method ending in <strong>••4532</strong>.
          </p>
          
          <!-- Receipt Box -->
          <div style="background:#f7f7f7;border:1px solid #ddd;border-radius:4px;padding:16px;margin-bottom:24px;">
            <p style="color:#111;font-size:14px;margin:0 0 12px 0;font-weight:600;">Receipt Details:</p>
            <table style="width:100%;font-size:13px;color:#555;">
              <tr>
                <td style="padding:6px 0;">Order number:</td>
                <td style="padding:6px 0;font-weight:600;text-align:right;">#IT-4026-8831</td>
              </tr>
              <tr>
                <td style="padding:6px 0;">Renewal date:</td>
                <td style="padding:6px 0;font-weight:600;text-align:right;">23 March 2026</td>
              </tr>
              <tr>
                <td style="padding:6px 0;">Amount charged:</td>
                <td style="padding:6px 0;font-weight:600;text-align:right;">€49.99</td>
              </tr>
              <tr>
                <td style="padding:6px 0;">Next renewal:</td>
                <td style="padding:6px 0;font-weight:600;text-align:right;">23 March 2027</td>
              </tr>
            </table>
          </div>
          
          <div style="background:#e8f4f8;border-left:4px solid #0078d4;padding:16px;margin:20px 0;">
            <p style="color:#004578;font-size:13px;margin:0;">
              <strong>Receipt attached:</strong> Your invoice is attached as PDF. 
              Download it for your records or tax purposes.
            </p>
          </div>
          
          <!-- Attachment Section -->
          <div style="border:1px solid #ddd;border-radius:4px;padding:16px;margin:24px 0;background:#fafafa;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="background:#d13438;border-radius:4px;width:40px;height:50px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <span style="color:white;font-size:10px;font-weight:700;">PDF</span>
              </div>
              <div style="flex:1;">
                <div style="font-weight:600;font-size:13px;color:#111;">prime_receipt_2026.pdf</div>
                <div style="font-size:11px;color:#666;">124 KB · Invoice Receipt</div>
              </div>
              <a class="email-cta" href="#" style="background:#0070ba;color:white;padding:8px 16px;font-size:12px;font-weight:600;text-decoration:none;border-radius:4px;">Download</a>
            </div>
          </div>
          
          <!-- Manage Subscription Link -->
          <div style="text-align:center;margin:24px 0;">
            <p style="color:#333;font-size:14px;margin-bottom:12px;">
              Want to manage your subscription or update payment method?
            </p>
            <a class="email-cta" href="#" title="https://amazon-renewals.com/manage-prime?ref=IT40268831&session=a1b2c3d4" style="background:#0070ba;color:white;padding:14px 48px;border-radius:8px;font-size:15px;font-weight:600;text-decoration:none;display:inline-block;box-shadow:0 2px 4px rgba(0,0,0,0.2);">
              Manage Your Prime Membership
            </a>
          </div>
          
          <!-- URL Preview Box -->
          <div style="background:#f0f0f0;border:1px solid #ccc;border-radius:4px;padding:12px;margin:20px 0;">
            <p style="color:#555;font-size:12px;margin:0 0 6px 0;font-weight:600;">Secure Amazon URL:</p>
            <p style="color:#0070ba;font-size:12px;margin:0;font-family:monospace;word-break:break-all;">
              https://amazon-renewals.com/manage-prime?ref=IT40268831
            </p>
          </div>
          
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;">
          
          <p style="color:#555;font-size:12px;line-height:1.6;margin-bottom:8px;">
            Questions? Visit Your Account > Prime Membership to manage your subscription 
            or contact Customer Service.
          </p>
          
          <p style="color:#555;font-size:12px;line-height:1.6;">
            Thank you for being a Prime member!
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background:#232f3e;padding:24px 32px;border-top:1px solid #e5e5e5;">
          <p style="color:#ccc;font-size:11px;text-align:center;margin:0 0 12px 0;">
            Amazon EU S.à r.l., 38 avenue John F. Kennedy, L-1855 Luxembourg
          </p>
          <p style="color:#999;font-size:11px;text-align:center;margin:0;">
            © 2026 Amazon Prime. All rights reserved.
          </p>
        </div>
        
      </div>
      
      <!-- Security Tip -->
      <div class="email-warning" style="max-width:600px;margin:12px auto 0;background:#fff4ce;border-left:4px solid #f7ca00;padding:12px 16px;font-size:12px;color:#7a5e00;">
        <strong>Security Tip:</strong> Check DKIM timestamps AND inspect URLs for 
        domain registration date. Recently re-registered domains are suspicious!
      </div>
    </div>
  `
}
];

// ─── APP ─────────────────────────────────────────────────────────────
class PhishHunt {
  constructor() {
    this.player       = '';
    this.score        = 0;
    this.completedCount = 0;
    this.currentEmail = null;
    this.emails       = JSON.parse(JSON.stringify(emails));
    this.init();
  }

  init() {
    document.getElementById('startBtn').onclick      = () => this.start();
    document.getElementById('btnPhishing').onclick   = () => this.reportDecision(true);
    document.getElementById('btnLegit').onclick      = () => this.reportDecision(false);
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

   // Chiudi modal con ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('[role="dialog"]').forEach(modal => {
        modal.classList.add('hidden');
      });
    }
  });

    // Chiudi modal con click su X
    document.getElementById('urlScanClose').onclick = () => this.closeModal('urlScanModal');
    document.getElementById('senderModalClose').onclick = () => this.closeModal('senderModal');
    document.getElementById('pdfModalClose').onclick = () => this.closeModal('pdfModal');
    document.getElementById('verdictClose').onclick = () => this.closeModal('verdictModal');
  }

  closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  start() {
    const username = document.getElementById('username').value.trim();
    if (!username) {
      alert('Please enter your name!');
      return;
    }
    this.player = username;
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
        <div class="emailListSubject">${this.escapeHtml(email.subject)}</div>
        <div class="emailListFrom">${this.escapeHtml(email.displayName)} &lt;${this.escapeHtml(email.from)}&gt;</div>
        <div class="emailListPreview">${this.escapeHtml(email.preview)}</div>
      `;
      li.onclick = () => this.openEmail(email.id);
      list.appendChild(li);
    });
  }

  openEmail(id) {
    this.currentEmail = this.emails.find(e => e.id === id);
    if (!this.currentEmail) {
      console.error('Email not found:', id);
      return;
    }

    document.querySelectorAll('#emailList li').forEach((li, i) => {
      li.classList.toggle('active', i === id - 1);
    });

    document.getElementById('emailSubject').textContent = this.currentEmail.subject;
    document.getElementById('emailFrom').innerHTML  = `<strong>From:</strong> ${this.escapeHtml(this.currentEmail.displayName)} &lt;${this.escapeHtml(this.currentEmail.from)}&gt;`;
    document.getElementById('emailDate').innerHTML  = `<strong>Date:</strong> ${this.escapeHtml(this.currentEmail.date)}`;
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
    ['decisionFeedback','senderFeedback','urlFeedback','decodeFeedback','metaFeedback'].forEach(fid => {
      const el = document.getElementById(fid);
      if (el) { el.innerHTML = ''; el.className = ''; }
    });

    // Reset inputs
    ['senderInput','urlInput','decodeInput'].forEach(fid => {
      document.getElementById(fid).value = '';
    });

    // Mostra tutti i tool
    ['toolDecision','toolSender','toolHeaders','toolURL','toolDecode','toolMeta']
      .forEach(fid => document.getElementById(fid).classList.remove('hidden'));
  }

reportDecision(isPhishingReport) {
  if (!this.currentEmail) return;
  
  const email = this.currentEmail;
  const feedback = document.getElementById('decisionFeedback');
  
  if (email.solved) {
    feedback.textContent = '[OK] Already analyzed!';
    feedback.className = 'feedback-info';
    return;
  }
  
  const isCorrect = (isPhishingReport === email.isPhishing);
  
  if (isCorrect) {
    this.score += email.scoreIfCorrect;
    email.solved = true;
    this.completedCount++;
    
    // Mostra modale di valutazione
    this.showVerdictModal(true, email);
    
    this.updateStats();
    this.renderEmailList();
    
    // Se tutte le email sono state analizzate, aggiorna il top bar
    if (this.completedCount === this.emails.length) {
      this.showCompletionMessage();
    }
  } else {
    this.score += email.scoreIfWrong;
    
    // Mostra modale di valutazione (errato)
    this.showVerdictModal(false, email);
    
    this.updateStats();
  }
}

showVerdictModal(isCorrect, email) {
  const modal = document.getElementById('verdictModal');
  const content = document.getElementById('verdictContent');
  
  if (isCorrect) {
    content.innerHTML = `
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:48px;margin-bottom:8px;"></div>
        <h2 style="color:#107c10;margin:0;">Correct!</h2>
        <p style="color:#666;margin:8px 0 0 0;font-size:18px;">+${email.scoreIfCorrect} points</p>
      </div>
      
      <div style="background:#f7f7f7;border:1px solid #e0e0e0;border-radius:4px;padding:16px;margin-bottom:20px;">
        <h3 style="margin:0 0 12px 0;font-size:14px;color:#333;">Analysis Report</h3>
        <div style="font-size:13px;line-height:1.6;color:#444;">${email.explanation}</div>
      </div>
      
      <div style="text-align:center;">
        <button id="verdictCloseBtn" type="button" style="background:#0078d4;color:white;border:none;padding:12px 32px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:600;">Continue Investigation</button>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:48px;margin-bottom:8px;"></div>
        <h2 style="color:#d13438;margin:0;">Incorrect!</h2>
        <p style="color:#666;margin:8px 0 0 0;font-size:18px;">${email.scoreIfWrong} points</p>
      </div>
      
      <div style="background:#fde7e9;border:1px solid #f5c6cb;border-radius:4px;padding:16px;margin-bottom:20px;">
        <h3 style="margin:0 0 12px 0;font-size:14px;color:#721c24;">Correct Analysis</h3>
        <div style="font-size:13px;line-height:1.6;color:#721c24;">${email.explanation}</div>
      </div>
      
      <div style="text-align:center;">
        <button id="verdictCloseBtn" type="button" style="background:#d13438;color:white;border:none;padding:12px 32px;border-radius:4px;cursor:pointer;font-size:14px;font-weight:600;">Continue Investigation</button>
      </div>
    `;
  }
  
  modal.classList.remove('hidden');
  
  // Attacca il listener DOPO aver inserito l'HTML
  setTimeout(() => {
    const closeBtn = document.getElementById('verdictCloseBtn');
    if (closeBtn) {
      closeBtn.onclick = () => this.closeModal('verdictModal');
    }
  }, 10);
}

inspectSender() {
  const input = document.getElementById('senderInput').value.trim();
  const feedback = document.getElementById('senderFeedback');

  if (!input) {
    feedback.textContent = 'Paste the sender email address first.';
    feedback.className = 'feedback-err';
    return;
  }

  if (!this.currentEmail?.senderInfo) {
    feedback.textContent = 'No sender info available for this email.';
    feedback.className = 'feedback-info';
    return;
  }

  const info = this.currentEmail.senderInfo;
  const domainMatch = input.match(/@([^>\s]+)/);
  const domain = domainMatch ? domainMatch[1].trim() : input;
  const isSpoofed = domain !== info.legitimate;

  const statusColor = isSpoofed ? '#f44747' : '#4ec9b0';
  const domainColor = isSpoofed ? '#f44747' : '#4ec9b0';
  const legitColor = '#4ec9b0';

  const spfVal = info.spf || (isSpoofed ? 'fail' : 'pass');
  const dkimVal = info.dkim || (isSpoofed ? 'fail' : 'pass');
  const dmarcVal = info.dmarc || (isSpoofed ? 'fail' : 'pass');

  const spfOk = spfVal.startsWith('pass');
  const dkimOk = dkimVal.startsWith('pass');
  const dmarcOk = dmarcVal.startsWith('pass');

  document.getElementById('senderModalContent').innerHTML = `
<span style="color:#569cd6;">Input address   :</span> <span style="color:#ce9178;">${this.escapeHtml(input)}</span>
<span style="color:#569cd6;">Extracted domain:</span> <span style="color:${domainColor};font-weight:700;">${this.escapeHtml(domain)}</span>
<span style="color:#569cd6;">Legitimate domain:</span> <span style="color:${legitColor};">${this.escapeHtml(info.legitimate)}</span>

<span style="color:#888;">── SPF / DKIM / DMARC ──────────────────────────────</span>
<span style="color:#569cd6;">SPF             :</span> <span style="color:${spfOk ? '#4ec9b0' : '#f44747'};">${this.escapeHtml(spfVal)}</span>
<span style="color:#569cd6;">DKIM            :</span> <span style="color:${dkimOk ? '#4ec9b0' : '#f44747'};">${this.escapeHtml(dkimVal)}</span>
<span style="color:#569cd6;">DMARC           :</span> <span style="color:${dmarcOk ? '#4ec9b0' : '#f44747'};">${this.escapeHtml(dmarcVal)}</span>

<span style="color:#888;">── Domain Comparison ───────────────────────────────</span>
<span style="color:#569cd6;">Sender domain   :</span> <span style="color:${domainColor};font-weight:700;">${this.escapeHtml(domain)}</span>
<span style="color:#569cd6;">Expected domain :</span> <span style="color:${legitColor};">${this.escapeHtml(info.legitimate)}</span>
<span style="color:#569cd6;">Match           :</span> ${isSpoofed ? '<span style="color:#f44747;font-weight:700;">NO</span>' : '<span style="color:#4ec9b0;font-weight:700;">YES</span>'}
`;

  document.getElementById('senderModal').classList.remove('hidden');

  feedback.textContent = 'Report generated — see modal.';
  feedback.className = 'feedback-info';
}

  toggleHeaders() {
    const panel = document.getElementById('headersPanel');
    const raw = document.getElementById('emailHeaderRaw');
    const btn = document.getElementById('toggleHeaders');
    const isHidden = panel.classList.contains('hidden');

    raw.textContent = this.currentEmail?.headers || 'No headers available for this email.';
    panel.classList.toggle('hidden', !isHidden);
    btn.textContent = isHidden ? 'Hide Headers' : 'Show Headers';
  }

 inspectURL() {
  const input = document.getElementById('urlInput').value.trim();
  const feedback = document.getElementById('urlFeedback');

  if (!input) {
    feedback.textContent = 'Paste a URL first.';
    feedback.className = 'feedback-err';
    return;
  }

  // Estrai il dominio dall'URL
  let domain = '';
  try {
    const urlObj = new URL(input);
    domain = urlObj.hostname;
  } catch (e) {
    const match = input.match(/(?:https?:\/\/)?([^\/\?]+)/i);
    domain = match ? match[1] : input;
  }

  // Livello 3 — BEC (company-secure.com)
  if (this.currentEmail?.urlTrigger === 'company-secure.com' && domain.includes(this.currentEmail.urlTrigger)) {
    document.getElementById('urlScanContent').innerHTML = `
<span style="color:#569cd6;">URL submitted   :</span> <span style="color:#ce9178;">${this.escapeHtml(input.substring(0, 65))}...</span>
<span style="color:#569cd6;">Scan time       :</span> Sun, 22 Mar 2026 03:18:44 UTC

<span style="color:#888;">── Domain Analysis ─────────────────────────────────</span>
<span style="color:#569cd6;">Effective TLD+1 :</span> <span style="color:#f44747;font-weight:700;">company-secure.com</span>
<span style="color:#569cd6;">Subdomain       :</span> <span style="color:#dcdcaa;">wire-transfer</span>
<span style="color:#569cd6;">Registrar       :</span> Namecheap, Inc.
<span style="color:#569cd6;">Registered      :</span> <span style="color:#f44747;">2026-03-20</span> (3 days ago)
<span style="color:#569cd6;">ASN             :</span> AS47583 — Hostinger International (LT)
<span style="color:#569cd6;">IP              :</span> 185.220.101.99

<span style="color:#888;">── Threat Intelligence ─────────────────────────────</span>
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#f44747;">6/92 engines flagged</span>
<span style="color:#569cd6;">PhishTank       :</span> <span style="color:#f44747;">SUSPECTED PHISHING</span>
<span style="color:#569cd6;">Google Safe B.  :</span> <span style="color:#dcdcaa;">NOT YET FLAGGED</span>
<span style="color:#569cd6;">URLhaus         :</span> <span style="color:#dcdcaa;">NOT LISTED</span>

<span style="color:#888;">── Domain History ──────────────────────────────────</span>
<span style="color:#569cd6;">First seen      :</span> 2026-03-20 (newly registered)
<span style="color:#569cd6;">Previous owner  :</span> <span style="color:#dcdcaa;">None (first registration)</span>
`;

    document.getElementById('urlScanModal').classList.remove('hidden');
    feedback.textContent = 'Report generated — see modal.';
    feedback.className = 'feedback-info';
    return;
  }

  // Livello 6 — DKIM Replay + Expired Domain (amazon-renewals.com)
  if (this.currentEmail?.urlTrigger === 'amazon-renewals.com' && domain.includes(this.currentEmail.urlTrigger)) {
    document.getElementById('urlScanContent').innerHTML = `
<span style="color:#569cd6;">URL submitted   :</span> <span style="color:#ce9178;">${this.escapeHtml(input.substring(0, 65))}...</span>
<span style="color:#569cd6;">Scan time       :</span> Mon, 23 Mar 2026 11:04:12 UTC

<span style="color:#888;">── Domain Analysis ─────────────────────────────────</span>
<span style="color:#569cd6;">Effective TLD+1 :</span> <span style="color:#f44747;font-weight:700;">amazon-renewals.com</span>
<span style="color:#569cd6;">Subdomain       :</span> <span style="color:#dcdcaa;">manage-prime</span>
<span style="color:#569cd6;">Registrar       :</span> GoDaddy LLC
<span style="color:#569cd6;">Registered      :</span> <span style="color:#f44747;">2026-03-20</span> (3 days ago)
<span style="color:#569cd6;">EXPIRED         :</span> <span style="color:#f44747;">YES — 2024-12-15</span> (re-registered!)
<span style="color:#569cd6;">Previous owner  :</span> <span style="color:#f44747;">Amazon.com, Inc.</span>
<span style="color:#569cd6;">ASN             :</span> AS14618 — Amazon.com, Inc. (spoofed!)
<span style="color:#569cd6;">IP              :</span> 54.239.28.85

<span style="color:#888;">── Threat Intelligence ─────────────────────────────</span>
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#f44747;">3/92 engines flagged</span>
<span style="color:#569cd6;">PhishTank       :</span> <span style="color:#dcdcaa;">NOT YET LISTED</span>
<span style="color:#569cd6;">Google Safe B.  :</span> <span style="color:#dcdcaa;">NOT YET FLAGGED</span>
<span style="color:#569cd6;">URLhaus         :</span> <span style="color:#dcdcaa;">NOT LISTED</span>

<span style="color:#888;">── Domain History ──────────────────────────────────</span>
<span style="color:#569cd6;">First seen      :</span> 2019-03-15 (Amazon subdomain)
<span style="color:#569cd6;">Expired         :</span> 2024-12-15 (Amazon let it expire)
<span style="color:#569cd6;">Re-registered   :</span> <span style="color:#f44747;">2026-03-20</span> (3 days ago — UNKNOWN OWNER!)
`;

    document.getElementById('urlScanModal').classList.remove('hidden');
    feedback.textContent = 'Report generated — see modal.';
    feedback.className = 'feedback-info';
    return;
  }

  // Analisi generica
  const findings = [];
  if (input.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) findings.push('[!] IP address detected');
  if (input.split('.').length > 4) findings.push('[!] Suspicious subdomain chain');
  if (!input.startsWith('https://')) findings.push('[!] Not HTTPS');
  if (input.includes('redirect')) findings.push('[!] Redirect parameter detected');
  if (input.includes('id=') || input.includes('token=')) findings.push('[!] Suspicious parameter detected');

  feedback.innerHTML = findings.length
    ? findings.join('<br>')
    : '[OK] No obvious threats detected.';
  feedback.className = findings.length ? 'feedback-err' : 'feedback-ok';
}

  decodeString() {
    const input = document.getElementById('decodeInput').value.trim();
    const feedback = document.getElementById('decodeFeedback');

    if (!input) {
      feedback.textContent = 'Paste a string first.';
      feedback.className = 'feedback-err';
      return;
    }

    try {
      const decoded = atob(input);
      feedback.innerHTML = `[DECODED] <strong style="font-family:monospace">${this.escapeHtml(decoded)}</strong>`;
      feedback.className = 'feedback-info';
    } catch {
      feedback.textContent = '[ERR] Not valid base64.';
      feedback.className = 'feedback-err';
    }
  }

inspectMeta() {
  const feedback = document.getElementById('metaFeedback');
  
  if (!this.currentEmail?.meta) {
    feedback.textContent = 'No attachment found.';
    feedback.className = 'feedback-err';
    return;
  }

  const email = this.currentEmail;
  const meta = email.meta;
  
  // Determina se il PDF è legittimo o malevolo in base ai dati dell'email
  const isMalicious = email.isPhishing && meta.includes('JavaScript');
  
  let metaReport = '';
  
  if (isMalicious) {
    // PDF malevolo (email 6)
    metaReport = `
<span style="color:#569cd6;">File            :</span> <span style="color:#ce9178;">prime_receipt_2026.pdf</span>
<span style="color:#569cd6;">Scan time       :</span> Mon, 23 Mar 2026 15:56:02 UTC

<span style="color:#888;">── File Properties ─────────────────────────────────</span>
<span style="color:#569cd6;">File Size       :</span> 124 KB
<span style="color:#569cd6;">MIME Type       :</span> application/pdf
<span style="color:#569cd6;">PDF Version     :</span> 1.6
<span style="color:#569cd6;">Encryption      :</span> <span style="color:#4ec9b0;">None</span>
<span style="color:#569cd6;">Linearized      :</span> No

<span style="color:#888;">── Document Metadata ───────────────────────────────</span>
<span style="color:#569cd6;">Title           :</span> Prime Membership Receipt
<span style="color:#569cd6;">Author          :</span> <span style="color:#4ec9b0;font-weight:700;">Amazon.com</span>
<span style="color:#569cd6;">Creator         :</span> <span style="color:#4ec9b0;">Amazon SES PDF Generator</span>
<span style="color:#569cd6;">Producer        :</span> <span style="color:#4ec9b0;">Amazon PDF Library 2.1</span>
<span style="color:#569cd6;">Created         :</span> <span style="color:#4ec9b0;">2026-03-20 10:30:00 UTC</span>
<span style="color:#569cd6;">Modified        :</span> 2026-03-20 10:30:00 UTC

<span style="color:#888;">── Hash Check ──────────────────────────────────────</span>
<span style="color:#569cd6;">MD5             :</span> 7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c
<span style="color:#569cd6;">SHA256          :</span> a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#4ec9b0;">0/62 engines flagged</span>
<span style="color:#569cd6;">MalwareBazaar   :</span> <span style="color:#4ec9b0;">NOT LISTED</span>
`;
  } else {
    // PDF legittimo (email 5)
    metaReport = `
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
<span style="color:#569cd6;">Author          :</span> <span style="color:#4ec9b0;font-weight:700;">HR Department</span>
<span style="color:#569cd6;">Creator         :</span> <span style="color:#4ec9b0;">Adobe Acrobat Pro DC</span>
<span style="color:#569cd6;">Producer        :</span> <span style="color:#4ec9b0;">Adobe PDF Library 15.0</span>
<span style="color:#569cd6;">Created         :</span> <span style="color:#4ec9b0;">2026-03-22 10:30:00 UTC</span>
<span style="color:#569cd6;">Modified        :</span> 2026-03-22 10:30:00 UTC
<span style="color:#569cd6;">Subject         :</span> Q1 2026 HR Document

<span style="color:#888;">── Hash Check ──────────────────────────────────────</span>
<span style="color:#569cd6;">MD5             :</span> a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4
<span style="color:#569cd6;">SHA256          :</span> a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2
<span style="color:#569cd6;">VirusTotal      :</span> <span style="color:#4ec9b0;">0/62 engines flagged</span>
<span style="color:#569cd6;">MalwareBazaar   :</span> <span style="color:#4ec9b0;">NOT LISTED</span>
`;
  }

  document.getElementById('pdfModalContent').innerHTML = metaReport;
  document.getElementById('pdfModal').classList.remove('hidden');
  
  feedback.textContent = 'Report generated — see modal.';
  feedback.className = 'feedback-info';
}

  updateStats() {
    document.getElementById('score').textContent = this.score;
    document.getElementById('flagCount').textContent = this.completedCount;
  }

  showCompletionMessage() {
  const topBar = document.getElementById('topBar');
  topBar.innerHTML = `
    <span> Investigation Complete! Final Score: ${this.score} pts</span>
    <button id="playAgainBtn" type="button" style="background:#107c10;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:600;font-size:13px;">Play Again</button>
  `;
  
  // Aggiungi listener per il bottone
  document.getElementById('playAgainBtn').onclick = () => this.restart();
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
  this.emails = JSON.parse(JSON.stringify(emails));
  this.score = 0;
  this.completedCount = 0;
  this.currentEmail = null;
  this.updateStats();
  this.renderEmailList();
  
  // Ripristina il top bar originale
  document.getElementById('topBar').innerHTML = `
    <span>EAT the Phish - Email Analysis Training</span>
    <span id="topPlayer">User: ${this.player}</span>
  `;
  
  document.getElementById('emailSubject').textContent = 'Select an email to start';
  document.getElementById('emailFrom').textContent = '';
  document.getElementById('emailDate').textContent = '';
  document.getElementById('emailBody').innerHTML = '<p id="emailPlaceholder">Select an email from the inbox to start.</p>';
  document.getElementById('headersPanel').classList.add('hidden');
  document.getElementById('analysisPanel').classList.add('hidden');
}
}

// ─── AVVIO ───────────────────────────────────────────────────────────
new PhishHunt();