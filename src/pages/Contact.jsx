import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('http://localhost:5000/my-blog-app/contact/sendEmail', form);
            setSubmitted(true);
        } catch (err) {
            setError('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
        }
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">İletişim</h1>
            <p className="contact-desc">
                Her türlü soru, öneri veya iş birliği için aşağıdaki formu doldurabilirsiniz.
            </p>
            {submitted ? (
                <div className="contact-success">
                    Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapılacaktır.
                </div>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Adınız
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Adınızı girin"
                        />
                    </label>
                    <label>
                        E-posta
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="E-posta adresiniz"
                        />
                    </label>
                    <label>
                        Mesajınız
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Mesajınızı yazın"
                            rows={5}
                        />
                    </label>
                    {error && <div className="contact-error">{error}</div>}
                    <button type="submit" className="contact-btn">Gönder</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
