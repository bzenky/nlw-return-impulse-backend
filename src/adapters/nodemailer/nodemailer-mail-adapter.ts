import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "de96a07fdeed2f",
        pass: "dd53a17f297925"
    }
});

export class NodemailerMailAdapter implements MailAdapter {

    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Zenky <bzenky@gmail.com>',
            subject,
            html: body
        })
    }
}