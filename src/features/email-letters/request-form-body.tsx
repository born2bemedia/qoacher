import { htmlTemplate } from './html-template';

export const requestFormBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div style="width: 595px; margin: 0 auto;">
        <header class="header">
          <img src="https://qoacher.com/images/email/header.png" alt="full-logo" width="595" height="130" />
        </header>
        <div class="wrapper">
          <div class="main">
            <p style="font-size: 24px; color: #000;">Hi ${username},</p>
            <p class="text">Thank you for reaching out. Your message has been received, and a member of our team will get back to you shortly.</p>
            <p class="text">In the meantime, feel free to explore our <a href="https://qoacher.com/self-improvement" style="font-weight: 600; color: #000; text-decoration: none;">Self Improvement</a> section — it’s full of practical guides and tools you can start using right away: <br />Explore Self Improvement</p>
            <p class="text">If your request is urgent, you can also contact us directly at <strong style="font-weight: 600;">our email</strong>.</p>
            <p class="text">Thank you for connecting with us.</p>
            <p class="text" style="margin-top: 40px;"><span style="font-size: 16px;">The Coacher Team</span> <br /> Helping you take back control, one step at a time.</p>
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
      
      .title {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
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
