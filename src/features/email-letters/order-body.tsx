import { htmlTemplate } from './html-template';

export const orderBody = ({
  username,
  datePurchase,
  discount,
  product,
  total,
}: {
  username: string;
  product: string;
  datePurchase: string;
  discount: string;
  total: string;
}) => {
  return htmlTemplate({
    body: `
      <div style="width: 595px; margin: 0 auto;">
        <header class="header">
          <img src="https://qoacher.com/images/email/header.png" alt="full-logo" width="595" height="130" />
        </header>
        <div class="wrapper">
          <div class="main">
            <p style="font-size: 24px; color: #000;">Dear ${username},</p>
            <p class="text" style="color: #000;">Thank you for choosing Qoacher to support your personal growth journey. We're pleased to confirm that your recent purchase of ${product} has been successfully processed.</p>
            <p style="font-size: 18px; color: #000; font-weight: 600; margin-top: 20px;">Order Details</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px; background: rgba(128, 128, 128, 0.05);">Product:</td>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px;">${product}</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px; background: rgba(128, 128, 128, 0.05);">Price:</td>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px;">$${total}</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px; background: rgba(128, 128, 128, 0.05);">Date of Purchase:</td>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px;">${datePurchase}</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px; background: rgba(128, 128, 128, 0.05);">Payment Method:</td>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px;">Wire Transfer</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px; background: rgba(128, 128, 128, 0.05);">Discount:</td>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px;">${discount}%</td>
              </tr>
              <tr>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px; background: rgba(128, 128, 128, 0.05);">Total Paid:</td>
                <td style="border: 1px solid rgba(128, 128, 128, 0.15); padding: 8px;">$${total}</td>
              </tr>
            </table>
            <p style="font-size: 18px; color: #000; font-weight: 600; margin-top: 20px;">What Happens Next</p>
            <p class="text" style="color: #000;">Our team will contact you shortly to arrange an online meeting and begin your coaching process. During this meeting, we'll review your goals, outline the plan, and make sure you're fully prepared for the next steps.</p>
            <p class="text" style="color: #000;">If your purchase includes a program, you will also receive all relevant materials and instructions by email before your first session.</p>
            <p style="font-size: 18px; color: #000; font-weight: 600; margin-top: 20px;">Need Assistance?</p>
            <p class="text" style="color: #000;">If you have any questions before we reach out, feel free to reply to this email or contact us directly via support email.</p>
            <p class="text" style="color: #000;">Thank you once again for choosing Qoacher. We look forward to working with you and supporting your growth step by step.</p>
            <p class="text" style="color: #000;">Warm regards,<br /> <span style="font-size: 16px;">The Qoacher Team</span></p>
          </div>
        </div>
        <div>
          <img src="https://qoacher.com/images/email/footer.png" alt="full-logo" width="595" height="130" />
        </div>
      </div>
    `,
    style: `      
      .main {
        padding: 40px;
        background: ##FFFFFF;
      }
      
      .header {
        overflow: hidden;
        background: #010101;
        padding: 40px;
      }
      
      .strong {
        font-weight: 600;
        color: #000;
      }
       
      .heading {
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
       
      .text {
        margin-top: 20px;
        color: #000 !important;
        font-size: 14px;
      }
      
      .logo {
        width: 159px;
        height: 40px;
      }
      
      .logoSm {
        width: 157px;
        height: 40px;
      }
    `,
  });
};
