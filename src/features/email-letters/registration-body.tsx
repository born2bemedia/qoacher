import { htmlTemplate } from './html-template';

export const registrationBody = ({ username }: { username: string }) => {
  return htmlTemplate({
    body: `
      <div style="width: 595px; margin: 0 auto;">
        <header class="header">
          <img src="https://qoacher.com/images/email/header.png" alt="full-logo" width="595" height="130" />
        </header>
        <div class="wrapper">
          <div class="main">
            <p style="font-size: 24px; color: #000;">Hi ${username},</p>
            <p class="text">Your Qoacher account has been successfully created. You can now access your dashboard anytime to:</p>
            <p class="text">– View your active programs <br />– Download invoices <br />– Update your information</p>
            <a href="https://qoacher.com/sign-in" style="text-decoration: none; color: #000;">
              <button
                    style="
                    margin-top: 40px;
                    all: unset;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    padding: 16px 32px;
                    background: #000;
                    color: #fff;
                    border: none;
                    font-size: 14px;
                    line-height: 1.2;
                    text-align: center;
                    text-decoration: none;
                    font-family: Arial, sans-serif;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                  "
              ><img style="margin-right: 8px;" src="https://qoacher.com/images/email/acc.png" alt="full-logo" width="18" height="18" /> Your Account</button>
            </a>
            <p class="text" style="margin-top: 40px;">Whenever you’re ready to take your next step — we’ll be here.</p>
            <p class="text" style="margin-top: 40px;">See you inside, <br /> <span style="font-size: 16px;">The Qoacher Team</span></p>
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

      .btn {
        all: unset;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        padding: 16px 32px;
        background: #000;
        color: #fff;
        border: none;
        font-size: 14px;
        line-height: 1.2;
        text-align: center;
        text-decoration: none;
        font-family: Arial, sans-serif;
        -webkit-appearance: none;
        -moz-appearance: none;
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
    `,
  });
};
