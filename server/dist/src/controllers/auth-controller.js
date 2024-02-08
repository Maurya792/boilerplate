"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mail_service_1 = require("../services/mail-service");
const client_1 = require("../../prisma/__generated__/client");
const token_service_1 = require("../services/token-service");
const client_2 = require("@prisma/client");
class AuthController {
    constructor() {
        this.login = async (req, res) => {
            console.log("Received login request", req.body);
            try {
                const body = req.body;
                const userFound = await client_1.prismaClient.user.findUnique({
                    where: {
                        username: body.username,
                        status: client_2.account_status.active,
                    },
                });
                if (userFound) {
                    const valid = await bcryptjs_1.default.compare(body.password, userFound.password);
                    if (valid) {
                        const accessToken = token_service_1.TokenService.generateAccessToken({
                            username: userFound.username,
                            name: userFound.name,
                            userId: userFound.id,
                        });
                        return res.status(200).send({ accessToken });
                    }
                    return res.status(401).send("Incorrect Password!");
                }
                else {
                    return res.status(404).send("User not found!");
                }
            }
            catch (err) {
                return res.status(500).send(`Server error occurred: ${err.message}`);
            }
        };
        this.register = async (req, res) => {
            console.log("Received user register request", req.body);
            try {
                const user = req.body;
                const userFound = await client_1.prismaClient.user.findUnique({
                    where: {
                        username: user.username,
                    },
                });
                if (userFound) {
                    return res.status(400).send("User exists already.");
                }
                else {
                    const hashedPassword = await bcryptjs_1.default.hash(user.password, 5);
                    const userRequest = {
                        username: user.username,
                        password: hashedPassword,
                        name: user.name,
                    };
                    const _ = await client_1.prismaClient.user.create({ data: userRequest });
                    return res.status(201).end();
                }
            }
            catch (err) {
                return res.status(500).send(`Server error occurred: ${err.message}`);
            }
        };
        this.forgotPassword = async (req, res) => {
            console.log("Received forgot password request", req.body);
            try {
                const user = req.body;
                const userFound = await client_1.prismaClient.user.findUnique({
                    where: {
                        username: user.username,
                    },
                });
                if (userFound) {
                    const resetPasswordToken = token_service_1.TokenService.generateResetPasswordToken({
                        username: userFound.username,
                        userId: userFound.id,
                    });
                    const targetUrl = new URL(user.redirectUrl);
                    targetUrl.searchParams.append("token", resetPasswordToken);
                    const mailService = new mail_service_1.MailService();
                    const isSuccess = await mailService.send({
                        to: user.username,
                        subject: "Reset Password",
                        html: `
              <table>
              <thead>
                <tr>
                  <th>Reset your password <a target="__blank" href="${targetUrl}">here.</a></th>
                </tr>
              </thead>
              </table>
            `,
                    });
                    if (isSuccess) {
                        return res.status(200).json("Mail sent successfully");
                    }
                    else {
                        throw Error("Couldn't send mail");
                    }
                }
                else {
                    return res.status(404).send("User not found!");
                }
            }
            catch (err) {
                return res.status(500).send(`Server error occurred: ${err.message}`);
            }
        };
        this.resetPassword = async (req, res) => {
            console.log("Received reset password request", req.body);
            try {
                const { token, password } = req.body;
                const user = jsonwebtoken_1.default.decode(token);
                if (!user) {
                    return res.status(400).json("Invalid token!");
                }
                const userFound = await client_1.prismaClient.user.findUnique({
                    where: {
                        username: user.username,
                    },
                });
                if (userFound) {
                    const passwordHash = await bcryptjs_1.default.hash(password, 5);
                    const _ = await client_1.prismaClient.user.update({
                        data: { password: passwordHash },
                        where: { id: userFound.id },
                    });
                    return res.status(200).json("Password changed successfully");
                }
                else {
                    return res.status(404).send("User not found!");
                }
            }
            catch (err) {
                return res
                    .status(500)
                    .send(`Server error occurred: ${err.message}`);
            }
        };
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth-controller.js.map