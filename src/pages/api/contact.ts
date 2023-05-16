import { NextApiRequest, NextApiResponse } from "next";

import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, email, phoneNumber } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: email || process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `E-mail enviado através do site por ${name}`,
    html: `<strong>Field</strong>: ${email} <br>
          <strong>Nome</strong>: ${name} <br>
          <strong>Número de telefone:</strong>: ${phoneNumber} <br>`,
  };

  const resultTransporter = await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) reject(err);
      else resolve(info);
    });
  });

  res.status(200).json({});
}
