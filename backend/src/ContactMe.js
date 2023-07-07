import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config();


const sendEmail = (req, res) => {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json('Incorrect form submission');
  }

  const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',port: 465,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  const mailContact = {
    from: email,
    to: process.env.MY_GMAIL,
    subject: `Massage - moyalron.com`,
    html: `
      <h3>Message</h3>
      <p>${message}</p>

      <h3>Information</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
      </ul>
    `
  };

  smtpTransport.sendMail(mailContact, (error, response) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json('the message was sent successfully!');
    }
    smtpTransport.close();
});
};

export default sendEmail ;
