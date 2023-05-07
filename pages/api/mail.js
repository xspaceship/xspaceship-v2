import nodemailer from 'nodemailer';

const email = 'engineering@xspaceship.com';
const pass = 'zsdlniobvsrvnqxy';
const toEmail = 'hello@xspaceship.com';
const calendlyOption = {
  headers: {
    authorization:
      'Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjgzNDI4NTExLCJqdGkiOiJkMTBhZWIzYS01OGJmLTQ3MjYtODE1My0xODE1MzNjMzZmMDciLCJ1c2VyX3V1aWQiOiI4NmZlMjE0Yi1iYjhiLTQ1NmUtYmEyZS00Y2ZiNTlmNGIyNGIifQ.mJ1AA0Y85meWPlzjD5nM4KyyPoIgoFTMNOr-4xNjE9ldOnYbThqzceuHD5cYyEfsHiXK20nJ-XeLJoQxu-J_zg',
  },
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

const CONTACT_MESSAGE_FIELDS = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
  phone: 'Phone',
  topic: 'Topic',
  time: 'Time',
  duration: 'Duration (hour)',
};

const generateEmailContent = data => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    '',
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${
      CONTACT_MESSAGE_FIELDS[key]
    }</h3><p class="form-answer" align="left">${
      !val ? '' : Array.isArray(val) ? val.join(' | ') : val
    }</p>`);
  }, '');

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Coaching Session</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    const { topic, scheduled, duration, phone } = data;
    if (!data || !topic?.length || !scheduled) {
      return res.status(400).send({ message: 'Bad request' });
    }

    const eventUrl = scheduled.replace(/\/invitee.*/gi, '');

    const eventRespose = await fetch(eventUrl, calendlyOption);
    const eventJson = await eventRespose.json();
    const time = eventJson?.resource?.start_time || '';

    const inviteeRespose = await fetch(scheduled, calendlyOption);
    const inviteeJson = await inviteeRespose.json();
    const { name, email, questions_and_answers } = inviteeJson?.resource || {};

    const content = {
      time,
      name,
      email,
      message: questions_and_answers[0].answer,
      topic,
      duration,
      phone,
    };

    try {
      await transporter.sendMail({
        from: email,
        to: toEmail,
        ...generateEmailContent(content),
        subject: `xspaceship - coaching - ${name} - ${email}`,
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
