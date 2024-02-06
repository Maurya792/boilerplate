"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const constants_1 = require("../../constants");
class MailService {
    constructor() {
        this.defaultSender = '"Codage Habitation LLP." <crm@codagehabitation.com>';
        this.transporter = nodemailer_1.default.createTransport({
            host: "mail.codagehabitation.com",
            port: 465,
            secure: true,
            auth: {
                user: constants_1.MAIL_SERVICE_USER,
                pass: constants_1.MAIL_SERVICE_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    }
    async send(args) {
        var _a;
        try {
            const info = await this.transporter.sendMail(Object.assign(Object.assign({}, args), { from: (_a = args.from) !== null && _a !== void 0 ? _a : this.defaultSender }));
            console.log("Message sent: %s", info.messageId);
            return true;
        }
        catch (err) {
            console.log("Error sending mail :", err);
            return false;
        }
    }
}
exports.MailService = MailService;
//# sourceMappingURL=index.js.map