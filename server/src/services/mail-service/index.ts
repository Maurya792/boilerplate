import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import {
  MAIL_SERVICE_PASSWORD,
  MAIL_SERVICE_USER,
} from "../../constants";
export class MailService {
  private readonly transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
  private readonly defaultSender = '"Codage Habitation LLP." <crm@codagehabitation.com>';
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "mail.codagehabitation.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: MAIL_SERVICE_USER,
        pass: MAIL_SERVICE_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
    }
    });
  }

  async send(args: Mail.Options) {
    try {
      const info = await this.transporter.sendMail({
        ...args,
        from: args.from ?? this.defaultSender,
      });

      console.log("Message sent: %s", info.messageId);
      return true;
    } catch (err) {
        console.log("Error sending mail :", err)
      return false;
    }
  }
}