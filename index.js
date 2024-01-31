const config = require("./config");
const nodemailer = require("nodemailer");

const { emailConfirmationTemplate } = require("./templates");
const { inlineStyleTemplate } = require("./templates/inlineStyle");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.developer_email,
    pass: config.developer_pass,
  },
});

const sendEmail = async (data) => {
  const htmlTemplate = emailConfirmationTemplate(data);

  try {
    const info = await transporter.sendMail({
      from: `"Arnifi" <${config.developer_email}>`,
      to: data.toEmail,
      subject: "Account confirmation",
      html: htmlTemplate,
    });

    console.log("Message sent: %s", info.messageId);

    return { message: "email send successfully", id: info.messageId };
  } catch (error) {
    console.log(error);
  }
};

const data = {
  toEmail: "Shohag Roy <pkshohag240@gmail.com>",
  name: "Shohag Roy",
  redirect: "http://arnifi.com",
  verifyLink: "http://arnifi.com",
};

sendEmail(data);
