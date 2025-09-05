export const blogPosts = [
  {
    id: 1,
    title: "🚀 Java Programlama Diline Giriş: Temelden İleri Seviyeye Kapsamlı Rehber",
    excerpt: "Java'nın temellerinden ileri seviyeye kadar adım adım öğrenin. Kod örnekleriyle desteklenmiş, kapsamlı ve güncel bir Java rehberi.",
    category: "Java",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Java, 1995 yılında Sun Microsystems tarafından geliştirilen, nesne yönelimli (object-oriented), platformdan bağımsız (platform-independent) ve geniş topluluk desteğine sahip bir programlama dilidir. Günümüzde kurumsal uygulamalardan Android geliştirmeye, büyük veri projelerinden web uygulamalarına kadar çok geniş bir alanda kullanılmaktadır.

Bu yazıda Java'yı temelden ileri seviyeye kadar adım adım öğreneceğiz. Kod örnekleriyle desteklenmiş bu rehber sayesinde Java bilginizi sağlam temeller üzerine kurabilir ve ileri seviyeye taşıyabilirsiniz.

## 📌 İçindekiler

- Java Nedir?
- Java Kurulumu
- Temel Kavramlar
- Nesne Yönelimli Programlama (OOP)
- Koleksiyonlar ve Veri Yapıları
- Java’da Hata Yönetimi
- Dosya İşlemleri
- Çoklu İş Parçacığı (Multithreading)
- Lambda İfadeleri ve Stream API
- JDBC ve Veritabanı İşlemleri
- Java 8+ Yenilikleri
- İleri Seviye Konular: JVM, Garbage Collector, Design Patterns
- Proje Önerileri

---

### 1. ☕ Java Nedir?

- Nesne yönelimlidir: Her şey bir nesnedir. Bu sayede kod yeniden kullanılabilir ve genişletilebilir.
- Platformdan bağımsızdır: "Write once, run anywhere." (Bir kez yaz, her yerde çalıştır).
- Güvenlidir: Java, otomatik bellek yönetimi ve güçlü hata kontrol mekanizmaları sunar.
- Yorumlayıcı ve derleyici birleşimidir: .java dosyaları önce .class (bytecode) dosyalarına derlenir, ardından JVM (Java Virtual Machine) tarafından çalıştırılır.

---

### 2. 💻 Java Kurulumu

Adımlar:

1. Java Development Kit (JDK) kurulumunu yap.
2. Ortam değişkenlerini (JAVA_HOME ve PATH) ayarla.
3. Bir IDE seç: IntelliJ IDEA, Eclipse veya Visual Studio Code.

İlk Java programını yaz:

\`\`\`java
public class MerhabaDunya {
    public static void main(String[] args) {
        System.out.println("Merhaba Dünya!");
    }
}
\`\`\`

Terminalde çalıştırmak için:

\`\`\`bash
javac MerhabaDunya.java
java MerhabaDunya
\`\`\`

---

### 3. 🔤 Temel Kavramlar

**Değişkenler ve Veri Tipleri**
\`\`\`java
int sayi = 10;
double pi = 3.14;
char harf = 'A';
boolean aktifMi = true;
String isim = "Ahmet";
\`\`\`

**Operatörler**

- Aritmetik: + - * / %
- Karşılaştırma: == != > < >= <=
- Mantıksal: && || !

**Kontrol Yapıları**
\`\`\`java
if (sayi > 0) {
    System.out.println("Pozitif");
} else {
    System.out.println("Negatif veya sıfır");
}

for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

while (true) {
    break; // sonsuz döngüden çıkmak için
}
\`\`\`

**Metotlar**
\`\`\`java
public static int topla(int a, int b) {
    return a + b;
}
\`\`\`

---

### 4. 🧱 Nesne Yönelimli Programlama (OOP)

Java'nın en güçlü yönlerinden biri OOP'dir. Temel kavramlar:

- Sınıf (Class)
- Nesne (Object)
- Encapsulation (Kapsülleme)
- Inheritance (Kalıtım)
- Polymorphism (Çok Biçimlilik)
- Abstraction (Soyutlama)

**Örnek:**
\`\`\`java
class Araba {
    String marka;
    int hiz;

    void hizlan() {
        hiz += 10;
    }
}

public class Main {
    public static void main(String[] args) {
        Araba a1 = new Araba();
        a1.marka = "Toyota";
        a1.hizlan();
        System.out.println(a1.hiz);
    }
}
\`\`\`

---

### 5. 📚 Koleksiyonlar ve Veri Yapıları

Java Collection Framework:

- List → ArrayList, LinkedList
- Set → HashSet, TreeSet
- Map → HashMap, TreeMap
- Queue → PriorityQueue, LinkedList

\`\`\`java
List<String> isimler = new ArrayList<>();
isimler.add("Ali");
isimler.add("Veli");
\`\`\`

---

### 6. ❗ Hata Yönetimi (Exception Handling)

\`\`\`java
try {
    int sonuc = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Sıfıra bölünemez!");
} finally {
    System.out.println("Bu blok her zaman çalışır.");
}
\`\`\`

---

### 7. 📂 Dosya İşlemleri

\`\`\`java
import java.io.*;

public class DosyaOrnegi {
    public static void main(String[] args) throws IOException {
        FileWriter writer = new FileWriter("deneme.txt");
        writer.write("Merhaba dosya!");
        writer.close();
    }
}
\`\`\`

---

### 8. 🧵 Çoklu İş Parçacığı (Multithreading)

\`\`\`java
class MerhabaThread extends Thread {
    public void run() {
        System.out.println("Thread çalışıyor...");
    }
}

public class Main {
    public static void main(String[] args) {
        MerhabaThread t1 = new MerhabaThread();
        t1.start();
    }
}
\`\`\`

---

### 9. 🔁 Lambda İfadeleri ve Stream API

Java 8 ile geldi. Fonksiyonel programlama özellikleri kazandırır.

\`\`\`java
List<String> isimler = Arrays.asList("Ali", "Ayşe", "Veli");

isimler.stream()
      .filter(s -> s.startsWith("A"))
      .forEach(System.out::println);
\`\`\`

---

### 10. 🗄️ JDBC ile Veritabanı Bağlantısı

\`\`\`java
import java.sql.*;

public class DBOrnek {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "1234");
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT * FROM ogrenci");

        while (rs.next()) {
            System.out.println(rs.getString("isim"));
        }

        conn.close();
    }
}
\`\`\`

---

### 11. 🆕 Java 8+ Yenilikleri

- Lambda ifadeleri
- Stream API
- Optional sınıfı
- LocalDate / Time API
- Varsayılan metotlar (default methods)

---

### 12. 🧠 İleri Seviye Konular

**JVM (Java Virtual Machine)**
- Bytecode çalıştırır.
- Bellek yönetimini sağlar (Heap, Stack, Metaspace).

**Garbage Collector**
- Java’da bellek yönetimi otomatik yapılır.
- System.gc() ile manuel tetiklenebilir.

**Design Patterns**
- Singleton
- Factory
- Observer
- Strategy

---

### 13. 💡 Proje Önerileri

- Kütüphane Otomasyonu
- Restoran Sipariş Sistemi
- Android Hava Durumu Uygulaması (Java + Android SDK)
- Not Alma Uygulaması (Java + JavaFX)
- JDBC ile Stok Takip Sistemi

---

### 🎯 Sonuç

Java, hem güçlü hem de geniş kullanım alanı olan bir programlama dilidir. Bu yazıda temel yapısından ileri düzey konularına kadar kapsamlı bir Java rehberi sunduk. Öğrendiklerinizi pekiştirmek için küçük projelerle alıştırma yapmayı ihmal etmeyin.
    `,
    date: "2025-08-19"
  },
  {
    id: 2,
    title: "Spring Boot ile Başlarken",
    excerpt: "Spring Boot’un temelleri, avantajları ve örnek bir proje yapısı.",
    category: "Spring Boot",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Spring Boot, **Spring Framework** üzerine inşa edilmiş, geliştiricilerin Spring tabanlı uygulamaları **daha hızlı ve kolay** bir şekilde oluşturmasını sağlayan güçlü bir Java framework'üdür.

Spring geleneksel olarak yapılandırma gerektiren karmaşık bir yapıya sahiptir. Spring Boot, bu karmaşıklığı ortadan kaldırmak için şunları sağlar:

- Otomatik konfigürasyon (auto-configuration)
- Dahili Tomcat sunucusu
- Üretime hazır özellikler (actuator, metrics)
- Hızlı başlatma ve bağımsız (standalone) çalışabilen uygulamalar
- Minimum XML konfigürasyonu

---

## 📦 Temel Bağımlılıklar (pom.xml)

Spring Boot ile bir REST API ya da web uygulaması başlatmak için aşağıdaki gibi bir bağımlılık yeterlidir:

\`\`\`xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>

  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>

  <dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
  </dependency>
</dependencies>
\`\`\`

- \`spring-boot-starter-web\`: Web ve REST API geliştirmek için gerekli tüm bağımlılıkları içerir.
- \`spring-boot-starter-data-jpa\`: Veritabanı işlemleri için JPA ve Hibernate desteği sağlar.
- \`h2\`: Hafif bir bellek içi veritabanıdır, özellikle geliştirme sürecinde kullanılır.

---

## 🚀 Uygulama Girişi

Spring Boot uygulamasını başlatmak için \`@SpringBootApplication\` anotasyonu ile işaretlenmiş bir main sınıfı gerekir:

\`\`\`java
@SpringBootApplication
public class MyApp {
  public static void main(String[] args) {
    SpringApplication.run(MyApp.class, args);
  }
}
\`\`\`

Bu sınıf 3 önemli Spring anotasyonunu tek bir çatı altında toplar:

- \`@Configuration\`: Uygulamanın bir yapılandırma sınıfı olduğunu belirtir.
- \`@EnableAutoConfiguration\`: Spring Boot’un otomatik konfigürasyon özelliklerini aktif eder.
- \`@ComponentScan\`: Belirtilen paketteki bileşenleri tarar (controller, service, repository vb.)

---

## 🧩 Spring Boot’un Temel Avantajları

- ✅ **Kolay başlatma**: Spring Boot CLI veya Maven/Gradle ile dakikalar içinde proje oluşturulabilir.
- ⚙️ **Otomatik ayarlar**: Hangi bağımlılıkları eklediyseniz, Spring Boot ona göre varsayılan konfigürasyonları uygular.
- 🧪 **Test desteği**: Unit test ve integration test yazmak çok kolaydır.
- 📈 **Actuator ile izleme**: Uygulamanın sağlığını ve performansını izleyebilirsiniz.

---

## 🗂 Örnek Proje Yapısı

\`\`\`
src/
 └── main/
     ├── java/
     │   └── com/example/myapp/
     │       ├── MyApp.java
     │       ├── controller/
     │       ├── service/
     │       └── repository/
     └── resources/
         ├── application.properties
         └── static/
\`\`\`

---

## 🌐 Basit Bir REST Controller

\`\`\`java
@RestController
@RequestMapping("/api/hello")
public class HelloController {

  @GetMapping
  public String sayHello() {
    return "Merhaba, Spring Boot!";
  }
}
\`\`\`

Tarayıcıda \`http://localhost:8080/api/hello\` adresine gittiğinizde, bu mesajı görebilirsiniz.

---

## 📋 Sonuç

Spring Boot, kurumsal Java geliştirme sürecini kolaylaştırır ve mikroservis mimarileri için sağlam bir temel sunar. Hızlı başlangıç, üretime hazır araçlar ve zengin ekosistemi sayesinde Java geliştiricileri için vazgeçilmez bir framework haline gelmiştir.

Spring Boot ile sadece birkaç adımda REST API'ler, mikroservisler, veri tabanı bağlantıları ve daha fazlası kolayca inşa edilebilir.
  `,
    date: "2025-08-20"
  }
  ,
  {
    id: 3,
    title: "Spring Data JPA ile Kullanıcı (User) Entity’si Üzerinden CRUD İşlemleri",
    excerpt: "Spring Data JPA kullanarak `User` entity'si ile nasıl veritabanı işlemleri yapılır? Anlamlı alanlar ve JPA açıklamalarıyla detaylı rehber.",
    category: "Spring Boot",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Spring Data JPA, Java uygulamalarında veri erişimini kolaylaştıran güçlü bir kütüphanedir. Aşağıda bir kullanıcı yönetim sisteminde sıkça kullanılan bir \`User\` entity’si örneği üzerinden açıklamalar yapılmıştır.

### User Entity Tanımı

\`\`\`java
@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String firstName;

    private String lastName;

    private String displayName;

    private String email;

    private String password;

    private String image;

    private boolean active;

    private String otp;

    private LocalDateTime otpGeneratedTime;

    private String passwordResetToken;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Token> tokens;

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Twitter> twitters;

    @OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)
    private List<Like> likes;

    @OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)
    private List<Comment> comments;

    public String getFullName() {
        return firstName + " " + lastName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
\`\`\`

### Açıklamalar

- \`@Entity\`: Bu sınıfın bir JPA entity’si olduğunu belirtir. Yani veritabanında bir tabloya karşılık gelir.
- \`@Table(name = "users")\`: Entity'nin hangi tabloya karşılık geldiğini belirtir. Burada tablo adı açıkça \`users\` olarak tanımlanmıştır.
- \`@Id\`: \`id\` alanı, entity’nin birincil anahtarıdır.
- \`@GeneratedValue(strategy = GenerationType.AUTO)\`: ID değeri otomatik olarak veritabanı tarafından atanır.
- Diğer alanlar (\`firstName\`, \`email\`, \`password\` vb.) otomatik olarak tablo sütunlarına karşılık gelir.
- \`LocalDateTime otpGeneratedTime\`: Zaman damgası tutmak için kullanılır; örneğin OTP'nin ne zaman üretildiğini kaydetmek için.

### Spring Data JPA ile Repository

\`User\` entity’si için bir repository tanımlayarak CRUD işlemleri yapılabilir:

\`\`\`java
public interface UserRepository extends JpaRepository<User,Long> {

    User findUserById(Long id);

    Optional<User> findByEmail(String email);

    Page<User> findByEmailNotAndActiveTrue(String email, Pageable page);

    Page<User> findUserByActiveTrue(Pageable page);
}
\`\`\`

### Kullanım Örneği

\`\`\`java
@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private final ModelMapper mapper;

    private final FileService fileService;

    private final JwtService jwtService;

    public Page<UserDTO> getAll(Pageable page, User currentUser) {
        if (currentUser != null) {
            Page<User> currentUserNot = userRepository.findByEmailNotAndActiveTrue(currentUser.getEmail(), page);
            return new PageImpl<>(currentUserNot.stream().map(u -> mapper.map(u, UserDTO.class)).collect(Collectors.toList()));
        }
        Page<User> users = userRepository.findUserByActiveTrue(page);
        return new PageImpl<>(users.stream().map(user -> mapper.map(user, UserDTO.class)).collect(Collectors.toList()));
    }

    public UserDTO updateUser(Long id, UserUpdateRequest userUpdateRequest) {
        User user = userRepository.findUserById(id);
        user.setFirstName(userUpdateRequest.getFirstName());
        user.setLastName(userUpdateRequest.getLastName());
        user.setDisplayName(userUpdateRequest.getDisplayName());
        if (userUpdateRequest.getImage() != null) {
            try {
                String storageFileName = fileService.writeBase64EncodedStringToFile(userUpdateRequest.getImage());
                fileService.deleteProfileImage(user.getImage());
                user.setImage(storageFileName);
            } catch (IOException e) {
                throw new RuntimeException("Incorrect file type");
            }
        }
        return mapper.map(userRepository.save(user), UserDTO.class);
    }
         public void deleteUser(Long id) {
        try {
            User user = userRepository.findUserById(id);
            fileService.deleteAllStoredFilesForUser(user);
            userRepository.delete(user);
        } catch (RuntimeException e) {
            throw new UserNotFoundException("User not found in this id:" + id);
        }
    }
  }
\`\`\`

\`\`\`java
@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;

    private final TokenRepository tokenRepository;

    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final ModelMapper mapper;

    private final OtpUtil otpUtil;

    private final EmailUtil emailUtil;

    @Transactional
    public String save(UserSaveRequest userSaveRequest) {
        String otp = otpUtil.generateOtp();
        User user = mapper.map(userSaveRequest, User.class);
        user.setPassword(passwordEncoder.encode(userSaveRequest.getPassword()));
        user.setOtp(otp);
        user.setOtpGeneratedTime(LocalDateTime.now());
        userRepository.save(user);
        try {
            emailUtil.sendOtpEmail(userSaveRequest.getEmail(), otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again");
        }
        return "Please verify your account within 3 minutes";
    }
  }
\`\`\`

### Sonuç

Spring Data JPA ile \`User\` gibi bir entity üzerinden CRUD işlemlerini minimal konfigürasyonla gerçekleştirebiliriz. Repository arayüzü sayesinde veritabanı sorgularını metot isimleriyle bile tanımlamak mümkündür.
  `,
    date: "2025-08-22"
  },
  {
    id: 4,
    title: "React.js ile Kullanıcı Arayüzü Geliştirme",
    excerpt: "React.js ile modern ve dinamik kullanıcı arayüzleri oluşturma. Temel bileşen ve API entegrasyonu örnekleri.",
    category: "React",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
React.js ile Kullanıcı Arayüzü Geliştirme

React.js, modern JavaScript kütüphanelerinden biridir ve kullanıcı arayüzleri geliştirmek için yaygın olarak kullanılır. React, bileşen tabanlı mimarisi sayesinde UI'yi daha yönetilebilir ve yeniden kullanılabilir hale getirir.

## React.js Nedir?

React, kullanıcı arayüzleri için kullanılan bir kütüphanedir. Bileşenlerden oluşur ve sanal DOM (Virtual DOM) kullanarak UI’nin hızlı ve verimli bir şekilde güncellenmesini sağlar.

## Basit Bir React Bileşeni

Aşağıda, bir React bileşeni örneği verilmiştir:

\`\`\`jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
\`\`\`

## React ile API Entegrasyonu

React, dış API'lere bağlanmak için fetch veya axios gibi kütüphaneler kullanır. Aşağıda, bir kullanıcı girişi API'sine istek gönderme örneği bulunmaktadır:

\`\`\`jsx
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Login Success:', response.data);
    } catch (err) {
      setError('Login failed');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;
\`\`\`

---

## Özet

**React.js:** Modern ve dinamik kullanıcı arayüzleri oluşturmak için kullanılan bir kütüphanedir. Bileşen tabanlı yapısı sayesinde daha yönetilebilir ve yeniden kullanılabilir UI’ler geliştirilebilir.
`,
    date: "2025-08-26"
  }
  ,
  {
    id: 5,
    title: "⚛️ React Virtual DOM Nedir? Nasıl Çalışır? Avantajları Nelerdir?",
    excerpt: "React'in performansının arkasındaki Virtual DOM kavramı nedir, nasıl çalışır ve avantajları nelerdir? Detaylı rehber.",
    category: "React",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Frontend dünyasında performans her şeydir. Bir web uygulamasında kullanıcı arayüzü hızlı ve akıcı tepki vermiyorsa, kullanıcı deneyimi kötü olur. İşte React gibi modern kütüphaneler, performansı artırmak için bazı akıllı teknikler kullanır. Bunların en başında da Virtual DOM gelir.

Bu yazıda, Virtual DOM’un ne olduğunu, nasıl çalıştığını ve neden önemli olduğunu detaylıca inceleyeceğiz.

## 📌 İçindekiler

- DOM Nedir?
- Virtual DOM Nedir?
- React’te Virtual DOM Nasıl Çalışır?
- Neden Virtual DOM Kullanılır?
- Virtual DOM vs Real DOM
- React Fiber: Yeni Nesil Virtual DOM
- Özet ve Avantajlar

---

### 1. 🧱 DOM Nedir?

DOM (Document Object Model), bir HTML sayfasının tarayıcı tarafından temsil edildiği ağaç (tree) yapısına verilen isimdir. JavaScript ile bu yapıya erişip üzerinde değişiklikler yapabiliriz.

**Örnek HTML:**
\`\`\`html
<div>
  <h1>Merhaba</h1>
  <p>Bu bir paragraf.</p>
</div>
\`\`\`

Bu, DOM’da şöyle temsil edilir:

- div  
  ├── h1  
  └── p

❗ **Sorun Ne?**

DOM, çok büyük ve karmaşık hale gelebilir. Her küçük değişiklikte tarayıcının bu ağacı güncellemesi (repaint, reflow gibi işlemler) pahalı işlemlerdir ve performansı olumsuz etkileyebilir.

---

### 2. 🌐 Virtual DOM Nedir?

Virtual DOM (Sanal DOM), gerçek DOM’un hafif, hafızada tutulan bir kopyasıdır. React, bu sanal kopya üzerinde değişiklikleri yapar, sonra değişen yerleri tespit edip sadece o kısımları gerçek DOM’a uygular.

Yani, Virtual DOM bir tür “aracıdır” – gerçek DOM’u doğrudan değiştirmek yerine, önce bir taslak oluşturulur ve sadece farklar uygulanır.

---

### 3. ⚙️ React Virtual DOM Nasıl Çalışır?

React, UI'yi bir bileşen ağacı olarak temsil eder. Her bileşen, kendi iç durumuna (state) ve özelliklerine (props) sahiptir. Bir bileşenin durumu değiştiğinde, React şu adımları izler:

1. **Sanatıcı (Reconciler)**: React, bileşenin yeni durumunu hesaplar ve Virtual DOM'da günceller.
2. **Karşılaştırma (Diffing)**: Yeni Virtual DOM ile eski Virtual DOM karşılaştırılır. Değişiklikler tespit edilir.
3. **Güncelleme (Updating)**: Sadece değişen bileşenler gerçek DOM'a uygulanır.

Bu süreç, gereksiz DOM güncellemelerini önler ve uygulamanın performansını artırır.

---

### 4. Neden Virtual DOM Kullanılır?

- **Performans**: Doğrudan DOM manipülasyonu yerine, hafif bir Virtual DOM üzerinde değişiklikler yapılır. Bu, uygulamanın daha hızlı tepki vermesini sağlar.
- **Verimlilik**: Sadece değişen bileşenler güncellenir, bu da gereksiz yere DOM güncellemelerini önler.
- **Soyutlama**: Geliştiriciler, gerçek DOM'un karmaşıklığıyla uğraşmak zorunda kalmazlar. React, bu karmaşıklığı soyutlar.

---

### 5. Virtual DOM vs Real DOM

| Özellik         | Virtual DOM                            | Real DOM                             |
|-----------------|----------------------------------------|--------------------------------------|
| Tanım           | Gerçek DOM'un hafif bir kopyası       | Tarayıcı tarafından kullanılan gerçek yapı |
| Güncelleme      | Sanal DOM'da değişiklikler yapılır, sonra gerçek DOM'a uygulanır | Doğrudan değişiklikler yapılır      |
| Performans      | Daha hızlı (öncelikle hafif güncellemeler) | Daha yavaş (tam ağaç güncellemeleri) |
| Soyutlama       | Evet (React tarafından yönetilir)    | Hayır (geliştirici tarafından yönetilir) |

---

### 6. React Fiber: Yeni Nesil Virtual DOM

React 16 ile birlikte gelen Fiber, React'in yeni bir rekonsilyasyon motorudur. Daha önceki sürümlerdeki Virtual DOM'un yerini alır. Fiber ile birlikte gelen yenilikler:

- **Paralel İşleme**: Fiber, güncellemeleri paralel olarak işleyebilir, bu da daha hızlı tepki süreleri anlamına gelir.
- **Kesintili Güncellemeler**: Uzun süren güncellemeler kesintiye uğratılabilir ve daha sonra devam ettirilebilir.
- **Öncelik Sıralaması**: Güncellemeler önceliklerine göre sıralanabilir, bu da daha önemli güncellemelerin önce işlenmesini sağlar.

---

### 7. Özet ve Avantajlar

Virtual DOM, React'in performansını artıran temel bir bileşendir. Geliştiricilere, kullanıcı arayüzlerini daha verimli bir şekilde güncelleme ve yönetme imkanı tanır. Virtual DOM'un başlıca avantajları:

- Hızlı güncellemeler
- Daha iyi kullanıcı deneyimi
- Geliştirici dostu soyutlama

React ile çalışırken, Virtual DOM'un sağladığı bu avantajlardan yararlanarak yüksek performanslı ve kullanıcı dostu uygulamalar geliştirebilirsiniz.
    `,
    date: "2025-08-27"
  }
  ,


  {
    id: 6,
    title: "⚛️ React Redux Toolkit Nedir? Neden ve Nasıl Kullanılır?",
    excerpt: "Redux Toolkit ile React uygulamalarında modern, sade ve güçlü state yönetimi. Avantajları, temel kavramlar ve örnek uygulama.",
    category: "React",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
React ile uygulama geliştirirken bir süre sonra bileşenler arası durum (state) yönetimi karmaşık hale gelir. Uygulamanız büyüdükçe bu durum yönetimini merkezileştirmek ve sadeleştirmek gerekir. İşte bu noktada devreye Redux ve onun daha modern, sade ve kullanışlı hali olan Redux Toolkit (RTK) girer.

Bu yazıda Redux Toolkit’in ne olduğunu, neden kullanıldığını ve nasıl kullanıldığını detaylıca öğreniyoruz. Ayrıca örnek bir uygulama ile pratik yapıyoruz.

## 📌 İçindekiler

- Redux Nedir? Redux Toolkit Neden Ortaya Çıktı?
- Redux Toolkit’in Avantajları
- Kurulum ve Temel Yapı
- Slice Kavramı
- Redux Store Oluşturma
- React ile Entegrasyon
- Asenkron İşlemler: createAsyncThunk
- Proje Yapısı Önerisi
- Sonuç ve Kaynaklar

---

### 1. ❓ Redux Nedir? Redux Toolkit Neden Ortaya Çıktı?

Redux, JavaScript uygulamaları için öngörülebilir bir state container’dır. Genellikle React ile birlikte kullanılır.

Ancak klasik Redux’ın dezavantajları:

- Fazla boilerplate (şablon) kod gerektirir.
- action, reducer, store yapıları karmaşıklaşabilir.
- switch-case yapıları uzar ve okunabilirlik düşer.

**🛠️ Redux Toolkit Neden Geliştirildi?**

Redux Toolkit (RTK), Redux geliştiricileri tarafından resmi olarak önerilen, Redux’ı kullanımı kolay hale getiren modern bir araçtır.

---

### 2. ✅ Redux Toolkit’in Avantajları

- 🔥 Daha az kod
- 📦 Immer ile immutability otomatik
- 🧠 createSlice ile reducer + action birleşik
- 🧵 Asenkron işlemler için createAsyncThunk
- 🧪 Daha kolay test edilebilir yapı

---

### 3. 🛠️ Kurulum

\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

Proje yapısı örneği:

\`\`\`
src/
├── app/
│   └── store.js
├── features/
│   └── counter/
│       ├── counterSlice.js
├── App.js
└── index.js
\`\`\`

---

### 4. 🍰 Slice Nedir?

Slice, Redux Toolkit’te hem reducer’ları hem de action’ları tek dosyada yazmamıza olanak tanır.

**Örnek: counterSlice.js**
\`\`\`javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    arttir: (state) => {
      state.value += 1;
    },
    azalt: (state) => {
      state.value -= 1;
    },
    arttirMiktar: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { arttir, azalt, arttirMiktar } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

---

### 5. 🏗️ Store Oluşturma

\`\`\`javascript
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
\`\`\`

---

### 6. ⚛️ React ile Entegrasyon

index.js içerisinde Provider ile sarmalama:
\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
\`\`\`

App.js içinde slice kullanımı:
\`\`\`javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { arttir, azalt } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Sayac: {count}</h1>
      <button onClick={() => dispatch(arttir())}>Arttır</button>
      <button onClick={() => dispatch(azalt())}>Azalt</button>
    </div>
  );
}

export default App;
\`\`\`

---

### 7. 🌐 Asenkron İşlemler (createAsyncThunk)

Redux Toolkit ile API istekleri kolayca yönetilebilir.

**Örnek: Kullanıcı listesini API'den çekme**
\`\`\`javascript
// usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { list: [], status: 'idle' },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default usersSlice.reducer;
\`\`\`

React tarafı:
\`\`\`javascript
const dispatch = useDispatch();
const users = useSelector(state => state.users.list);

useEffect(() => {
  dispatch(fetchUsers());
}, []);
\`\`\`

---

### 8. 🗂️ Proje Yapısı Önerisi

\`\`\`
src/
├── app/
│   └── store.js
├── features/
│   ├── auth/
│   │   └── authSlice.js
│   ├── counter/
│   │   └── counterSlice.js
│   └── users/
│       └── usersSlice.js
├── components/
├── pages/
├── App.js
└── index.js
\`\`\`

Böylece her slice ayrı yönetilir ve kodlar modüler kalır.

---

### 9. ✅ Sonuç: Redux Toolkit Kullanmaya Değer mi?

Kesinlikle evet. Redux Toolkit;

- Redux kullanımını ciddi şekilde kolaylaştırır.
- Daha okunabilir ve sürdürülebilir kod yazmanızı sağlar.
- Asenkron veri yönetimini sadeleştirir.
- Resmi Redux çözümüdür, yani geleceği güvence altındadır.
  `,
    date: "2025-08-28"
  }
  ,
  {
    id: 7,
    title: "✅ JUnit ve Mockito ile Java Uygulamalarını Test Etmek: Temelden Uzmana",
    excerpt: "JUnit ve Mockito ile Java'da birim test yazmanın temelleri, mock nesneler, gerçek senaryolar ve iyi test yazma ipuçları.",
    category: "Java",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Yazılım geliştirme sürecinin en kritik ama bazen en çok göz ardı edilen bölümlerinden biri: Test yazmaktır.

Kod yazmak kadar onu test etmek de önemlidir. Hataları erken bulmak, refactor yaparken güvenli ilerlemek, entegrasyon sorunlarını erkenden fark etmek... Tüm bunlar için birim test (unit test) şarttır.

Java dünyasında test denince akla gelen iki güçlü araç:

- **JUnit:** Test yazmak için kullanılan çerçeve (framework)
- **Mockito:** Mock (taklit) nesneler oluşturarak bağımlılıkları izole etmemizi sağlayan kütüphane

Bu yazıda JUnit ve Mockito'yu detaylı bir şekilde ele alacağız.

## 📌 İçindekiler

- JUnit Nedir?
- Mockito Nedir?
- JUnit Kurulumu ve Temel Kullanımı
- Mockito ile Mock Nesneler Oluşturmak
- JUnit + Mockito: Entegre Kullanım
- Gerçek Hayattan Test Senaryosu
- İyi Test Yazmanın Püf Noktaları
- Sonuç ve Kaynaklar

---

### 1. 🧪 JUnit Nedir?

JUnit, Java programlama dili için geliştirilmiş açık kaynaklı bir birim testi (unit testing) çerçevesidir.

Kısaca:

- Test senaryolarını yazmanı sağlar.
- Otomatik test çalıştırır.
- Hangi kodun testten geçtiğini veya başarısız olduğunu gösterir.

---

### 2. 🧱 Mockito Nedir?

Mockito, testler sırasında gerçek bağımlılıkları kullanmak yerine taklit (mock) nesneler oluşturmamıza olanak tanıyan bir Java kütüphanesidir.

Özellikle:

- Veritabanı erişimi
- Dış API çağrıları
- E-posta servisleri

gibi dış sistemleri izole etmek için kullanılır.

---

### 3. ⚙️ JUnit Kurulumu ve Temel Kullanımı

**Maven ile Bağımlılıklar:**
\`\`\`xml
<dependencies>
  <dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
  </dependency>
</dependencies>
\`\`\`

**Basit Test Sınıfı:**
\`\`\`java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class HesapMakinesiTest {

    @Test
    public void toplaTest() {
        HesapMakinesi h = new HesapMakinesi();
        int sonuc = h.topla(3, 4);
        assertEquals(7, sonuc);
    }
}
\`\`\`

---

### 4. 🧪 Mockito ile Mock Oluşturmak

**Mockito Bağımlılığı:**
\`\`\`xml
<dependency>
  <groupId>org.mockito</groupId>
  <artifactId>mockito-core</artifactId>
  <version>5.11.0</version>
  <scope>test</scope>
</dependency>
\`\`\`

**Basit Mock Kullanımı:**
\`\`\`java
import static org.mockito.Mockito.*;

public class MockOrnek {
    @Test
    public void testList() {
        List<String> mockedList = mock(List.class);

        when(mockedList.get(0)).thenReturn("Merhaba");

        assertEquals("Merhaba", mockedList.get(0));
        verify(mockedList).get(0);
    }
}
\`\`\`

---

### 5. 🧩 JUnit + Mockito Entegre Kullanımı

**Senaryo:**
Bir sipariş servisi, ürün fiyatını ProductService üzerinden alıp ödeme tutarını hesaplıyor.

\`\`\`java
// ProductService.java
public class ProductService {
    public int getPrice(String productId) {
        // Gerçek DB sorgusu burada olurdu.
        return 100;
    }
}

// OrderService.java
public class OrderService {
    private ProductService productService;

    public OrderService(ProductService productService) {
        this.productService = productService;
    }

    public int calculateTotal(String productId, int adet) {
        int fiyat = productService.getPrice(productId);
        return fiyat * adet;
    }
}
\`\`\`

**Test Sınıfı (Mockito ile):**
\`\`\`java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class OrderServiceTest {

    @Test
    public void toplamTutarDogruHesaplaniyor() {
        ProductService productService = mock(ProductService.class);
        when(productService.getPrice("P001")).thenReturn(200);

        OrderService orderService = new OrderService(productService);
        int total = orderService.calculateTotal("P001", 3);

        assertEquals(600, total);
        verify(productService).getPrice("P001");
    }
}
\`\`\`

---

### 6. 🎯 Gerçek Hayattan Kullanım: Kullanıcı Girişi

\`\`\`java
// AuthService.java
public class AuthService {
    private UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}

// Test:
@Test
public void girisBasariliOlmali() {
    UserRepository repo = mock(UserRepository.class);
    User user = new User("ahmet", "1234");

    when(repo.findByUsername("ahmet")).thenReturn(user);

    AuthService authService = new AuthService(repo);
    assertTrue(authService.login("ahmet", "1234"));
}
\`\`\`

---

### 7. 💡 İyi Test Yazmanın Püf Noktaları

- ✅ Her bir test tek bir şeyi test etmeli
- ✅ İsimlendirme açık olmalı: girisBasariliOlmali()
- ✅ Gerçek veritabanı, dosya, ağ gibi sistemlerle bağ kurulmamalı
- ✅ Mock kullanarak dış bağımlılıklar izole edilmeli
- ✅ Negatif senaryolar da test edilmeli (örneğin: şifre yanlışsa ne olur?)
- ✅ Kod coverage değil, test kalitesi önemli!

---

### 8. ✅ Sonuç

JUnit ve Mockito, Java dünyasında test yazmanın temel taşlarıdır.
Bu iki araçla:

- Kodunuz güvenli hale gelir,
- Hatalar erkenden bulunur,
- Refactoring özgürce yapılabilir,
- Geliştirme süreci daha profesyonel ilerler.
    `,
    date: "2025-08-30"
  }
  ,
  {
    id: 8,
    title: "🐇 RabbitMQ Nedir? Mesajlaşmanın Kalbinde Bir Aracı",
    excerpt: "RabbitMQ nedir, neden kullanılır, temel bileşenleri ve kullanım senaryoları nelerdir? JavaScript ile örnek uygulama ve Kafka karşılaştırması.",
    category: "RabbitMQ",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Modern yazılım mimarilerinde mikroservisler, event-driven (olay odaklı) yaklaşımlar ve asenkron işlemler ön plana çıkmaya başladı. Bu gibi yapılarda farklı bileşenlerin birbiriyle gevşek bağlı (loosely coupled), güvenilir ve etkili bir şekilde iletişim kurması gerekir.

Bu iletişimi sağlayan temel parçalardan biri de **mesaj kuyruk sistemleri (Message Brokers)**dir. İşte bu sistemler arasında en popüler olanlardan biri: RabbitMQ.

## 📌 İçindekiler

- RabbitMQ Nedir?
- Neden Mesaj Kuyruğuna İhtiyacımız Var?
- RabbitMQ Temel Bileşenleri
- RabbitMQ Nasıl Çalışır?
- Yaygın Kullanım Senaryoları
- RabbitMQ ile Basit Bir Uygulama
- RabbitMQ vs Kafka
- Avantajlar ve Dezavantajlar
- Sonuç ve Öneriler

---

### 1. 🐇 RabbitMQ Nedir?

RabbitMQ, açık kaynaklı, yüksek performanslı bir mesaj kuyruğu (message broker) sistemidir. AMQP (Advanced Message Queuing Protocol) protokolünü kullanır. 2007 yılında piyasaya sürülmüştür ve Erlang dilinde yazılmıştır.

**RabbitMQ Ne Yapar?**

- Bir uygulamadan gelen mesajları alır.
- Bu mesajları kuyruklara yerleştirir.
- Diğer uygulamalar bu kuyruklardan mesajları alarak işler.

---

### 2. ❓ Neden Mesaj Kuyruğu Kullanmalıyız?

Modern uygulamalarda aşağıdaki ihtiyaçlar ortaya çıkar:

- **Asenkron iletişim:** Uzun süren işlemleri anında beklemek yerine arkaya atmak.
- **Yük dengeleme:** İstekleri kuyruğa alarak sunucu yoğunluğunu azaltmak.
- **Hata toleransı:** Mesajlar kuyrukta durur, tüketici geçici olarak çalışmazsa bile kaybolmaz.
- **Gevşek bağlı sistemler:** Mikroservislerin bağımsız çalışması için.

---

### 3. 🔧 RabbitMQ Temel Bileşenleri

| Bileşen      | Açıklama                                      |
|--------------|-----------------------------------------------|
| Producer     | Mesajı oluşturan gönderici uygulama           |
| Queue        | Mesajların geçici olarak tutulduğu yer        |
| Consumer     | Mesajları tüketen uygulama                    |
| Exchange     | Mesajların hangi kuyruğa yönlendirileceğine karar verir |
| Routing Key  | Mesajları eşleştirmek için kullanılır         |
| Binding      | Exchange ile Queue arasında ilişki kurar      |

---

### 4. 🔄 RabbitMQ Nasıl Çalışır?

RabbitMQ'nun işleyişi şu adımlarla özetlenebilir:

1. Producer, bir mesajı Exchange’e gönderir.
2. Exchange, mesajı bir veya daha fazla Queue'ya yönlendirir.
3. Consumer, ilgili kuyruktan mesajı çeker ve işler.

**Exchange Türleri**

| Tür     | Açıklama                                      |
|---------|-----------------------------------------------|
| Direct  | Routing key'e tam eşleşme                     |
| Fanout  | Routing key'e bakmadan tüm kuyruklara gönderir|
| Topic   | Routing key üzerinden desen eşleşmesi yapar   |
| Headers | Routing key değil, header bilgisine göre yönlendirme yapar |

---

### 5. 🔄 RabbitMQ Kullanım Senaryoları

- 📩 E-posta gönderimi: Kullanıcı kaydı sonrası e-posta kuyruğa atılır.
- 📦 Sipariş işleme: E-ticaret sisteminde sipariş alındıktan sonra arka planda işlenir.
- 📊 Loglama: Loglar başka bir servise asenkron olarak aktarılır.
- 🔔 Bildirim sistemi: Kullanıcı bildirimleri kuyruk üzerinden yönetilir.
- 🤖 Mikroservis iletişimi: Servisler birbirine mesaj atarak haberleşir.

---

### 6. 👨‍💻 Basit RabbitMQ Uygulaması (JavaScript ile)

Önce kütüphaneyi yükleyin:
\`\`\`bash
npm install amqplib
\`\`\`

**✅ Producer**
\`\`\`javascript
const amqp = require('amqplib');

async function sendMsg() {
  const conn = await amqp.connect('amqp://localhost');
  const ch = await conn.createChannel();
  const queue = 'hello';

  await ch.assertQueue(queue);
  ch.sendToQueue(queue, Buffer.from('Merhaba RabbitMQ!'));
  console.log('Mesaj gönderildi');

  setTimeout(() => {
    conn.close();
  }, 500);
}

sendMsg();
\`\`\`

**📥 Consumer**
\`\`\`javascript
const amqp = require('amqplib');

async function receiveMsg() {
  const conn = await amqp.connect('amqp://localhost');
  const ch = await conn.createChannel();
  const queue = 'hello';

  await ch.assertQueue(queue);
  console.log('Mesajlar bekleniyor...');

  ch.consume(queue, (msg) => {
    console.log("Gelen Mesaj:", msg.content.toString());
  }, { noAck: true });
}

receiveMsg();
\`\`\`

---

### 7. 🥊 RabbitMQ vs Apache Kafka

| Özellik         | RabbitMQ                                 | Kafka                           |
|-----------------|------------------------------------------|---------------------------------|
| Kullanım Türü   | İşlem mesajları, mikroservis iletişimi   | Büyük veri, log toplama         |
| Saklama         | Kısa süreli (memory + disk)              | Uzun süreli (disk tabanlı)      |
| Performans      | Daha az                                  | Yüksek throughput               |
| Gecikme         | Düşük                                    | Orta                            |
| Protokol        | AMQP                                     | Kafka protokolü                 |

---

### 8. ✅ Avantajlar ve ❌ Dezavantajlar

**Avantajlar**
- ✅ Açık kaynak ve ücretsiz
- ✅ Hafif ve kolay kurulum
- ✅ Gelişmiş routing (exchange yapısı)
- ✅ Geniş dil desteği (Java, Python, Node.js, Go vb.)
- ✅ Web UI ile yönetilebilir

**Dezavantajlar**
- ❌ Çok büyük veri akışlarında Kafka kadar verimli değil
- ❌ Uzun süreli veri saklama için uygun değil
- ❌ Queue overflow durumunda mesaj kaybı yaşanabilir

---

### 9. 🎯 Sonuç ve Öneriler

RabbitMQ, mikroservis tabanlı sistemlerde, e-ticaret, IoT ve event-driven mimarilerde vazgeçilmez bir mesajlaşma aracıdır. Geliştiriciler olarak uygulamalar arasında gevşek bağlılık, asenkron işlem ve güvenilir veri iletimi sağlamak istiyorsak RabbitMQ'yu projelerimize dahil etmeliyiz.
    `,
    date: "2025-08-31"
  }
  ,
  {
    id: 9,
    title: "Spring Security ile Kimlik Doğrulama",
    excerpt: "Spring Security ile kullanıcı giriş sistemi oluşturma.",
    category: "Spring Security",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Spring Security, Spring tabanlı uygulamalarda kimlik doğrulama (authentication) ve yetkilendirme (authorization) işlemlerini yönetmek için kullanılan güçlü bir güvenlik çerçevesidir.

## 1. Temel Bileşenler

- **Authentication:** Kullanıcının kim olduğunu doğrulama.
- **Authorization:** Kullanıcının hangi kaynaklara erişebileceğini belirleme.
- **UserDetailsService:** Kullanıcı bilgilerini sağlayan arabirim.
- **PasswordEncoder:** Şifreleri güvenli bir şekilde saklamak için kullanılır.

## 2. Basit Konfigürasyon

Spring Boot uygulamasında, aşağıdaki gibi temel bir güvenlik yapılandırması oluşturabilirsin:

\`\`\`
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests()
                .requestMatchers("/login/**").permitAll()
                .requestMatchers("/dashboard/**").hasAuthority("ADMIN")
                .requestMatchers("/login/logout").authenticated()
                .anyRequest()
                .authenticated()
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
\`\`\`

## 3. In-Memory Kullanıcı Tanımı

Hızlıca test etmek için kullanıcıyı bellekte tanımlayabilirsin:

\`\`\`
@Override
protected void configure(AuthenticationManagerBuilder auth) throws Exception {
  auth.inMemoryAuthentication()
    .withUser("admin")
    .password("{noop}1234") // {noop} => şifre encoder yok
    .roles("ADMIN");
}
\`\`\`

## 4. UserDetailsService

 Kullanıcı bilgilerini veritabanından alıp doğrulamak için \`UserDetailsService\` implementasyonu yapabilirsin:

\`\`\`
@Configuration
@RequiredArgsConstructor
public class ApplicationConfiguration {

    private final UserRepository userRepository;

    @Bean
    public UserDetailsService userDetailsService() {
        return email -> userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
\`\`\`

---

## Özet

Spring Security ile:
- Giriş çıkış işlemleri
- Yetki kontrolleri
- Şifre koruması
- Özelleştirilmiş kullanıcı hizmetleri

gibi işlemleri güvenli ve ölçeklenebilir şekilde gerçekleştirebilirsin.

`,
    date: "2025-09-01"
  }
  ,
  {
    id: 10,
    title: "Docker ile Uygulama Konteynerlemesi",
    excerpt: "Docker ile uygulamanızı izole bir ortamda çalıştırın ve dağıtın. Dockerfile ve Compose örnekleriyle pratik anlatım.",
    category: "Docker",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Docker ile Uygulama Konteynerlemesi

Docker, uygulamaları ve bağımlılıklarını izole bir ortamda çalıştırmak için kullanılan açık kaynaklı bir platformdur. Docker sayesinde, uygulamanızı her ortamda aynı şekilde çalışacak şekilde paketleyebilir ve dağıtabilirsiniz. Bu, geliştiricilerin, QA ekiplerinin ve operasyon mühendislerinin uygulamanın her ortamda uyumlu çalışmasını sağlamalarına yardımcı olur.

## Docker Nedir?

Docker, uygulamaları konteyner adı verilen bağımsız birimler içinde çalıştırarak taşınabilirliği ve çevresel tutarlılığı sağlar. Konteyner, gerekli olan tüm dosya ve bağımlılıkları içerdiği için, uygulamanın her yerde aynı şekilde çalışmasını garanti eder.

## Dockerfile Örneği

Bir Dockerfile, uygulamanın nasıl çalıştırılacağını ve hangi bağımlılıkların yükleneceğini belirtir. Örneğin, bir Spring Boot uygulaması için Dockerfile şu şekilde olabilir:

\`\`\`dockerfile
FROM adoptopenjdk/openjdk11
EXPOSE 8080
ARG JAR_FILE=target/spring-boot-docker-example-0.0.1-SNAPSHOT.jar
ADD \${JAR_FILE} application.jar
ENTRYPOINT ["java","-jar","/application.jar"]
\`\`\`

## Docker Compose Örneği

Birden fazla konteyneri (örneğin, bir web uygulaması ve veritabanı) yönetmek için Docker Compose kullanabilirsiniz. Aşağıda bir Spring Boot uygulaması ve PostgreSQL veritabanı için bir docker-compose.yml örneği verilmiştir:

\`\`\`yaml
version: '3.8'
services:
  twitter-clone:
    container_name: twitter-app
    image:  twitter-clone-app
    restart: always
    build: .
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql-docker:3306/twitterdb_docker?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
      - SPRING_DATASOURCE_USERNAME=root
      - SPRING_DATASOURCE_PASSWORD=root
      - SPRING_JPA_HIBERNATE_DDL_AUTO=update
      - SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect
    ports:
      - "8080:8080"

  mysql-docker:
    image: mysql:8
    container_name: docker-connection
    environment:
      MYSQL_DATABASE: twitterdb_docker
      MYSQL_ROOT_PASSWORD: root
    ports:
      - "3308:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
\`\`\`

---

## Özet

**Docker:** Uygulamaları taşınabilir ve izolasyonlu bir şekilde çalıştırmanıza olanak tanır. Her ortamda aynı şekilde çalışacak bir yapı kurmak için mükemmeldir.
`,
    date: "2025-09-02"
  }
  ,
  {
    id: 11,
    title: "Hibernate ile Veritabanı Yönetimi",
    excerpt: "Hibernate ile Java uygulamalarında veritabanı işlemleri ve temel konfigürasyon örnekleri.",
    category: "Hibernate",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Hibernate ile Veritabanı Yönetimi

Hibernate, Java ile ilişkisel veritabanları arasında kolayca etkileşim kurmanızı sağlayan bir ORM (Object-Relational Mapping) framework'üdür. Hibernate, SQL sorgularını yazmanıza gerek kalmadan Java nesneleriyle veritabanı işlemleri yapmanıza olanak tanır.

## Hibernate Nedir?

Hibernate, Java sınıflarını veritabanındaki tablolara bağlar ve CRUD (Create, Read, Update, Delete) işlemlerini kolayca yapmanızı sağlar. Veritabanı bağımsızlığı sunar ve SQL sorgularını otomatik olarak oluşturur.

## Hibernate Konfigürasyonu

Spring Boot ve Hibernate kullanarak bir uygulama konfigüre etmek oldukça basittir. İşte basit bir application.properties konfigürasyonu:

\`\`\`properties
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=user
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
\`\`\`

## Entity Sınıfı Örneği

Bir User sınıfı tanımlayarak, bu sınıfın veritabanında bir tabloya karşılık gelmesini sağlayabiliriz:

\`\`\`java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "username", unique = true, nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;
    
    // Getter ve Setter metodları
}
\`\`\`

## Repository

Veritabanı işlemleri için Spring Data JPA ile bir repository kullanabiliriz:

\`\`\`java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
\`\`\`

---

## Özet

**Hibernate:** Java tabanlı uygulamalarda, veritabanı işlemlerini basitleştiren ve ORM desteği sunan bir araçtır. SQL yazmadan veritabanı işlemleri yapabilirsiniz.
`,
    date: "2025-09-03"
  },
  {
    id: 12,
    title: "Spring Boot ile Geliştirdiğim Twitter Clone Projesi",
    excerpt: "Spring Security 6, Docker, Mail Sender, H2/MySQL, JUnit ve ModelMapper kullandığım gerçek dünya projesi: Twitter Clone.",
    category: "Spring Boot",
    author: "Serhat Balkı",
    authorPhoto: "/images/serhat_balki.jpeg",
    content: `
Spring Boot ile geliştirdiğim bu **Twitter Clone** projesi, temel sosyal medya işlevlerine sahip, modüler ve test edilebilir bir web uygulamasıdır. Projede modern yazılım geliştirme yaklaşımları uygulanmış, mimari yapı dikkatli şekilde oluşturulmuştur.

---

## ⚙️ Kullanılan Teknolojiler

- **Spring Boot 3**  
- **Spring Security 6 (JWT Authentication)**  
- **Java Mail Sender**  
- **Docker & Docker Compose**  
- **JUnit 5**  
- **H2 (test ortamı için)**  
- **MySQL (canlı ortam için)**  
- **ModelMapper**  

---

## 🧱 Proje Paket Yapısı

\`\`\`
src/
└── main/
    ├── java/
    │   └── com/twitterclone/
    │       ├── annotation/
    │       ├── configuration/
    │       ├── controller/
    │       ├── dto/
    │       ├── exception/
    │       ├── model/
    │       ├── repository/
    │       ├── request/
    │       ├── response/
    │       ├── service/
    │       ├── util/
    │       └── validation/
    └── resources/
        ├── application.yml
        └── static/
\`\`\`

Bu yapı, katmanlı mimariyi net bir şekilde yansıtır. Her paket, tek bir sorumluluğa odaklanır.

---

## 🔐 Güvenlik Katmanı (Spring Security 6 + JWT)

- Kullanıcı kimlik doğrulama işlemleri JWT ile yapılır.
- Güvenlik ayarları \`configuration\` paketinde merkezi şekilde yönetilir.
- Email doğrulama ve token sistemi entegre edilmiştir.

---

## 📧 Mail Sender ile OTP Sistemi

- Kayıt işlemi sırasında kullanıcıya OTP gönderilir.
- OTP doğrulaması sonrası hesap aktif hale gelir.
- Mail gönderimi Java Mail Sender ile yapılır.

---

## 🧪 Testler

- Birim ve entegrasyon testleri için JUnit 5 kullanıldı.
- Test ortamı için **H2 in-memory** veritabanı yapılandırıldı.
- Geliştirilen her servis, test edilebilir olacak şekilde tasarlandı.

---

## 🐳 Docker Entegrasyonu

- Uygulama ve veritabanı, \`Dockerfile\` ve \`docker-compose.yml\` ile container olarak çalıştırılabilir.
- Docker kullanımı ile taşıması ve yaygınlaştırması kolay bir yapı sağlanır.

---

## 🔄 DTO – Entity Dönüşümleri

- \`ModelMapper\` kütüphanesi ile \`Entity <-> DTO\` dönüşümleri otomatikleştirildi.
- \`request\`, \`response\` ve \`dto\` paketleri ayrı tutuldu.

---

## ✅ Projenin Temel Özellikleri

- Kullanıcı kaydı ve aktivasyonu (OTP)
- Login / Logout (JWT tabanlı)
- Tweet oluşturma, silme, listeleme
- Yorum ve beğeni sistemleri
- Profil güncelleme, görsel yükleme
- API seviyesinde tüm işlemler testlerle güvence altına alındı

---

## 💡 Sonuç

Bu proje, gerçek dünya koşullarına uygun olarak inşa edilmiş; hem mimari açıdan temiz hem de genişletilebilir bir örnektir. Spring Boot ile mikroservis altyapısına geçişte sağlam bir temel oluşturabilir. Proje açık kaynak olarak GitHub üzerinde yayında.

👉 [Proje GitHub Sayfası](https://github.com/gbalki/twitter-clone)

Geri bildirimlere açığım! Beğendiyseniz yıldız bırakmayı unutmayın ⭐

`,
    date: "2025-09-04"
  }
  ,
];