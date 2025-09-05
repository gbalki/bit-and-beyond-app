const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/my-blog-app/contact/sendEmail', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'bitandbeyondapp@gmail.com',
                pass: 'owkytvxjqogeefze',
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'serhatbalki97@gmail.com',
            subject: 'Bit and Beyond - Yeni İletişim Mesajı',
            text: message,
            html: `<p><strong>Ad:</strong> ${name}</p>
                   <p><strong>E-posta:</strong> ${email}</p>
                   <p><strong>Mesaj:</strong><br>${message}</p>`,
        });

        res.status(200).json({ message: 'Email başarıyla gönderildi' });
    } catch (error) {
        console.error('Mail gönderme hatası:', error);
        res.status(500).json({ error: 'Email gönderilirken hata oluştu.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor.`);
});
