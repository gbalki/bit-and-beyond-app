import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <img
                src="/images/serhat_balki.jpeg"
                alt="Serhat Balkı"
                className="about-profile-photo"
                style={{ display: 'block', margin: '0 auto' }}
            />
            <p>
                Merhaba, ben Serhat Balkı. Fırat Üniversitesi Bilgisayar Programcılığı mezunuyum (2017–2019) ve yazılım geliştirme alanında kendini sürekli geliştiren bir yazılım geliştiricisiyim. Özellikle Spring Boot ve React.js teknolojileri üzerine uzmanlaştım. Hem bireysel projelerimde hem de profesyonel iş deneyimlerimde modern yazılım geliştirme yaklaşımlarını aktif olarak uygulama fırsatı buldum.
            </p>

            <h2 className="about-section-title">🎓 Eğitim & Sertifikalar</h2>
            <ul>
                <li>Spring Boot, JUnit, Mockito, MockMvc ile test yazımı</li>
                <li>Spring & React ile web uygulama geliştirme</li>
                <li>Udemy Java, React ve Web Development kursları</li>
                <li>Amerikan Kültür Yabancı Dil Eğitimi</li>
            </ul>

            <h2 className="about-section-title">⚙️ Kullandığım Teknolojiler</h2>
            <ul>
                <li><b>Backend:</b> Java, Spring Boot, Spring Web, Spring Security, JPA, REST API</li>
                <li><b>Frontend:</b> React.js, JavaScript, HTML, CSS, Axios, Bootstrap, Material UI</li>
                <li><b>Veritabanı:</b> MySQL, PostgreSQL, Microsoft SQL Server, MongoDB</li>
                <li><b>DevOps & Diğer:</b> Docker, Git, GitLab, GitHub, Bitbucket, SourceTree, Postman, JIRA</li>
                <li><b>Test:</b> JUnit, Mockito, MockMvc</li>
                <li><b>Framework:</b> Next.js</li>
            </ul>

            <h2 className="about-section-title">🚀 Katıldığım ve Geliştirdiğim Projeler</h2>
            <ul>
                <li>
                    <b>Bütçe Senin:</b> İstanbul Büyükşehir Belediyesi için geliştirilen mobil uyumlu bir React.js uygulaması. Next.js, Axios, Bootstrap kullanıldı. Veritabanı olarak Microsoft SQL Server tercih edildi.
                </li>
                <li>
                    <b>İstanbul Finansal Raporlama:</b> İBB iştirakleri için geliştirilen bir web raporlama sistemi. React.js, Axios, Bootstrap/Material UI, Git, Bitbucket ve SourceTree kullanıldı.
                </li>
                <li>
                    <b>Hoaxify:</b> Spring Boot ile geliştirilen bir backend servisi ve React.js frontend'i olan demo proje.
                </li>
            </ul>

            <h2 className="about-section-title">🌐 Hedefim</h2>
            <p>
                Yazılım geliştirme benim için sadece bir meslek değil, aynı zamanda bir tutku. Her gün yeni şeyler öğrenmeye, kendimi geliştirmeye ve yazılım topluluğuna katkı sağlamaya çalışıyorum. Blog sayfamda, edindiğim tecrübeleri ve öğrendiklerimi paylaşarak, benim gibi gelişim yolculuğunda olan kişilere destek olmayı amaçlıyorum.
            </p>
            <p className="about-quote">“Kod yazmak sadece bir araçtır. Önemli olan, o kodla neyi mümkün kıldığınızdır.”</p>
        </div>
    );
};

export default About;