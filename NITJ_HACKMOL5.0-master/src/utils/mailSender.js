const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
        let transporter = nodemailer.createTransport({
            host : "smtp.gmail.com",
            auth:{
                pass : "bjcmxfhnwhxxdsnq",
                user : "gwe.nitj@gmail.com",
            }

        })

        let info = await transporter.sendMail({
            from: 'Go With Ease',
            to:`${email}`,
            subject: `${title}`,
            html: `${body}`,
        });
        console.log(info);
        return info;

    } catch(error) {
        console.error(error);
    }
}

module.exports = mailSender;