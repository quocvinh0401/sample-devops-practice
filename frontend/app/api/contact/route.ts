import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request: NextRequest) => {
    const { body } = await request.json();
    const { name, message, phone, email } = body;

    const data = {
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: "Contact",
        text: message,
        html: `<div>
        <p>${name} - ${phone}</p>
        <p>Email: ${email}</p>
        <p><strong>Message:</strong> ${message}</p></div>`,
    };

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_CONTACT,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(data, (err, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
};
