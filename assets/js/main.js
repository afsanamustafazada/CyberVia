/**
* Template Name: Strategy
* Template URL: https://bootstrapmade.com/strategy-bootstrap-agency-template/
* Updated: Jun 06 2025 with Bootstrap v5.3.6
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (!selectHeader || (!selectHeader.classList.contains("scroll-up-sticky") && !selectHeader.classList.contains("sticky-top") && !selectHeader.classList.contains("fixed-top"))) return;
    window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  function aosInit() {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }

  window.addEventListener("load", aosInit);

  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
      const configElement = swiperElement.querySelector(".swiper-config");
      if (!configElement) return;
      const config = JSON.parse(configElement.innerHTML.trim());
      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener("load", initSwiper);

  if (typeof GLightbox === "function") {
    GLightbox({
      selector: ".glightbox"
    });
  }

  document.querySelectorAll(".isotope-layout").forEach((isotopeItem) => {
    const container = isotopeItem.querySelector(".isotope-container");
    if (!container) return;

    const layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    const filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    const sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(container, () => {
      initIsotope = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll(".isotope-filters li").forEach((filters) => {
      filters.addEventListener("click", function() {
        const active = isotopeItem.querySelector(".isotope-filters .filter-active");
        if (active) active.classList.remove("filter-active");
        this.classList.add("filter-active");
        if (initIsotope) {
          initIsotope.arrange({
            filter: this.getAttribute("data-filter")
          });
        }
        aosInit();
      }, false);
    });
  });

  document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header").forEach((faqItem) => {
    faqItem.addEventListener("click", () => {
      faqItem.parentNode.classList.toggle("faq-active");
    });
  });

  window.addEventListener("load", () => {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash);
        const scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop, 10),
          behavior: "smooth"
        });
      }, 100);
    }
  });

  const navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      const section = document.querySelector(navmenulink.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  const translations = {
    en: {
      meta_title: "CyberVia Platform",
      "brand.name": "CyberVia Platform",
      "brand.tagline": "Cybersecurity | Product | Academy",
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "header.academy": "Join CyberVia Academy",
      "hero.kicker": "Trusted by ambitious teams building safer digital experiences",
      "hero.title": "Cybersecurity, design and product execution for brands that want to lead.",
      "hero.description": "CyberVia brings security expertise, business strategy, and modern digital craftsmanship into one execution layer. We help organizations launch stronger products, protect critical systems, and present themselves with confidence.",
      "hero.cta_services": "Explore Services",
      "hero.cta_contact": "Start a Conversation",
      "hero.metric_1_title": "24/7",
      "hero.metric_1_text": "SOC mindset and fast response support",
      "hero.metric_2_title": "End-to-End",
      "hero.metric_2_text": "From audit and strategy to launch",
      "hero.metric_3_title": "Premium",
      "hero.metric_3_text": "Sharper design, cleaner systems, stronger trust",
      "hero.trust_1": "Security Operations",
      "hero.trust_2": "Penetration Testing",
      "hero.trust_3": "Web Products",
      "hero.trust_4": "Certification Academy",
      "hero.panel_top_label": "CyberVia Method",
      "hero.panel_top_text": "Secure the core. Elevate the brand. Accelerate the outcome.",
      "hero.panel_bottom_label": "Delivery focus",
      "hero.panel_bottom_text": "Strategy, implementation, and client experience aligned in one clean workflow.",
      "hero.signal_1_label": "Trusted delivery",
      "hero.signal_1_value": "Security + Product + Brand",
      "hero.signal_2_label": "Built for",
      "hero.signal_2_value": "Founders, teams, and institutions",
      "proof.chip": "Premium execution layer",
      "proof.title": "One partner for security credibility, product velocity, and modern presentation.",
      "proof.card_1_title": "Security-first by default",
      "proof.card_1_text": "Every engagement is shaped to reduce risk, improve resilience, and strengthen trust before growth moves faster.",
      "proof.card_2_title": "Presentation that matches the expertise",
      "proof.card_2_text": "We help brands look as sharp as the capability behind them, with cleaner systems and higher-end digital touchpoints.",
      "proof.card_3_title": "Advisory and execution in one flow",
      "proof.card_3_text": "Strategy, technical delivery, and client experience stay aligned so progress feels fast, deliberate, and premium.",
      "about.section_label": "About",
      "about.section_title_a": "Dive Into ",
      "about.section_title_b": "Our World",
      "about.chip": "Why CyberVia",
      "about.title": "Driving Business Growth with Innovation",
      "about.lead": "At CyberVia, we design tailored strategies that cut through complexity and deliver real, measurable results for our partners.",
      "about.body": "By combining advanced analytics with creative problem-solving, we equip organizations to succeed and adapt in fast-changing markets.",
      "about.highlight_1_number": "01",
      "about.highlight_1_text": "Security-first thinking built into every engagement.",
      "about.highlight_2_number": "02",
      "about.highlight_2_text": "Business, creative, and technical execution moving together.",
      "about.feature_1_title": "Committed Expert Team",
      "about.feature_1_text": "Our passionate professionals provide personalized support and impactful solutions on every project, ensuring your vision becomes reality.",
      "about.feature_2_title": "Innovative Mindset",
      "about.feature_2_text": "We adopt forward-thinking methods to craft unique strategies that fuel sustainable growth and lasting success.",
      "about.cta": "Explore Our Services",
      "services.section_label": "Services",
      "services.section_title_a": "Check Our",
      "services.section_title_b": "Services",
      "services.chip": "Selected capabilities",
      "services.heading_a": "Empowering Growth",
      "services.heading_b": "Through Smart Innovation",
      "services.summary": "Designed for teams that need trust, clarity, and visible execution quality from the first impression to the final delivery.",
      "services.card_1_title_a": "Security Operations",
      "services.card_1_title_b": "Center Services",
      "services.card_1_text": "Our 24/7 Security Operations Center monitors your digital infrastructure in real time, detects threats, and responds to incidents swiftly. We help businesses stay protected against evolving cyberattacks through proactive threat intelligence and rapid action.",
      "services.card_2_title_a": "Penetration",
      "services.card_2_title_b": "Testing",
      "services.card_2_text": "We provide professional penetration testing services to identify vulnerabilities in your web applications, mobile apps, and internal systems. Our ethical hacking simulations uncover security gaps and deliver a detailed report with risk mitigation recommendations.",
      "services.card_3_title_a": "Certification",
      "services.card_3_title_b": "& Exam Center",
      "services.card_3_text": "We offer training courses for globally recognized certifications such as EC-Council, CompTIA, and ISC2. As an accredited exam center, we also facilitate official certification exams onsite, helping IT professionals validate their skills and advance their careers.",
      "services.card_4_title_a": "Website",
      "services.card_4_title_b": "Development",
      "services.card_4_text": "We design and develop secure, modern, and mobile-responsive websites tailored to your business needs. From UX/UI design to CMS integration and technical support, we deliver complete web solutions that reflect your brand and drive results.",
      "services.card_5_title_a": "Startup Project",
      "services.card_5_title_b": "Development",
      "services.card_5_text": "Have an idea? We turn it into reality. We provide full technological and business support throughout the entire journey, from building the right strategy for your startup to developing technical solutions and launching your product to market.",
      "services.card_6_title_a": "IT Services",
      "services.card_6_title_b": "& Helpdesk",
      "services.card_6_text": "We offer comprehensive IT support and helpdesk services to ensure your business operations run smoothly. Our team provides prompt technical assistance, troubleshooting, and maintenance for all your IT needs.",
      "team.section_label": "Team",
      "team.section_title_a": "Meet The",
      "team.section_title_b": "People Behind CyberVia",
      "team.member_label": "Founder & Strategic Lead",
      "team.member_name": "Afsana Mustafazada",
      "team.member_text": "CyberVia is shaped around leadership that blends cybersecurity awareness, business thinking, and strong digital execution. The result is a client experience built on trust, clarity, and measurable momentum.",
      "team.point_1": "Security-focused growth",
      "team.point_2": "Premium client delivery",
      "team.point_3": "Innovation with discipline",
      "team.side_chip": "Leadership mindset",
      "team.side_title": "Built for companies that want security, credibility, and modern presentation in one partner.",
      "team.side_text": "We combine consultancy thinking with product-quality design and execution, so every touchpoint feels intentional and every delivery supports long-term trust.",
      "team.stat_1_title": "Client-first",
      "team.stat_1_text": "Clear communication and high-touch delivery standards.",
      "team.stat_2_title": "Security-native",
      "team.stat_2_text": "Cyber resilience is considered from the start, not added later.",
      "team.stat_3_title": "Execution-ready",
      "team.stat_3_text": "Strategy, implementation, and brand polish move together.",
      "contact.section_label": "Contact",
      "contact.section_title_a": "Start Your",
      "contact.section_title_b": "Next Conversation",
      "contact.lead_chip": "Direct access",
      "contact.lead_title": "Tell us what you are building, securing, or improving.",
      "contact.lead_text": "Whether you need cybersecurity support, product execution, a stronger web presence, or training infrastructure, we can shape the right next step together.",
      "contact.lead_point_1": "Discovery calls",
      "contact.lead_point_2": "Custom service scope",
      "contact.lead_point_3": "Fast response",
      "contact.info_1_title": "Our Address",
      "contact.info_1_line_1": "Baku, Azerbaijan",
      "contact.info_1_line_2": "Zahid Khalilov street 33",
      "contact.info_2_title": "Email Address",
      "contact.info_2_line_1": "info@cybervia.org",
      "contact.info_2_line_2": "For partnerships and service inquiries",
      "contact.info_3_title": "Hours",
      "contact.info_3_line_1": "Sunday - Friday: 9 AM - 6 PM",
      "contact.info_3_line_2": "Saturday: 9 AM - 4 PM",
      "contact.form_chip": "Project intake",
      "contact.form_title": "Share your idea with CyberVia",
      "contact.form_text": "Give us a quick overview of your goals and we will get back to you with the most relevant next step.",
      "contact.form_name": "Full Name",
      "contact.form_email": "Email Address",
      "contact.form_subject": "What do you need help with?",
      "contact.form_message": "Tell us about your project, challenge, or idea...",
      "contact.loading": "Loading",
      "contact.sent": "Your message has been sent. Thank you!",
      "contact.submit": "Send Message",
      "footer.chip": "CyberVia",
      "footer.cta_title": "Ready to build a more secure and premium digital presence?",
      "footer.cta_link": "Book a Conversation",
      "footer.about_text": "CyberVia combines cybersecurity expertise, product execution, and modern brand presentation to help organizations move with more confidence and credibility.",
      "footer.badge_1": "Cybersecurity",
      "footer.badge_2": "Digital Products",
      "footer.badge_3": "Academy",
      "footer.nav_title": "Navigate",
      "footer.focus_title": "Focus Areas",
      "footer.focus_1": "SOC Services",
      "footer.focus_2": "Penetration Testing",
      "footer.focus_3": "Certification Center",
      "footer.focus_4": "Web Development",
      "footer.focus_5": "IT Helpdesk",
      "footer.contact_title": "Contact",
      "footer.contact_line_1": "Baku, Azerbaijan",
      "footer.contact_line_2": "Zahid Khalilov street 33",
      "footer.phone_label": "Phone:",
      "footer.email_label": "Email:",
      "footer.copyright_prefix": "© Copyright",
      "footer.copyright_suffix": "All Rights Reserved"
    },
    az: {
      meta_title: "CyberVia Platform",
      "brand.name": "CyberVia Platform",
      "brand.tagline": "Kibertəhlükəsizlik | Məhsul | Akademiya",
      "nav.home": "Ana səhifə",
      "nav.about": "Haqqımızda",
      "nav.services": "Xidmətlər",
      "nav.team": "Komanda",
      "nav.contact": "Əlaqə",
      "header.academy": "CyberVia Academy-yə qoşul",
      "hero.kicker": "Daha təhlükəsiz rəqəmsal təcrübələr quran iddialı komandaların seçimi",
      "hero.title": "Lider olmaq istəyən brendlər üçün kibertəhlükəsizlik, dizayn və məhsul icrası.",
      "hero.description": "CyberVia təhlükəsizlik təcrübəsini, biznes strategiyasını və müasir rəqəmsal yanaşmanı vahid icra qatında birləşdirir. Biz təşkilatlara daha güclü məhsullar qurmağa, kritik sistemləri qorumağa və özlərini daha inamlı təqdim etməyə kömək edirik.",
      "hero.cta_services": "Xidmətlərə bax",
      "hero.cta_contact": "Söhbətə başla",
      "hero.metric_1_title": "24/7",
      "hero.metric_1_text": "SOC düşüncəsi və sürətli cavab dəstəyi",
      "hero.metric_2_title": "Tam dövr",
      "hero.metric_2_text": "Audit və strategiyadan buraxılışa qədər",
      "hero.metric_3_title": "Premium",
      "hero.metric_3_text": "Daha güclü dizayn, daha təmiz sistemlər, daha çox etibar",
      "hero.trust_1": "Təhlükəsizlik Əməliyyatları",
      "hero.trust_2": "Penetrasiya Testi",
      "hero.trust_3": "Veb Məhsullar",
      "hero.trust_4": "Sertifikasiya Akademiyası",
      "hero.panel_top_label": "CyberVia metodu",
      "hero.panel_top_text": "Əsası qoruyun. Brendi yüksəldin. Nəticəni sürətləndirin.",
      "hero.panel_bottom_label": "İcra fokusumuz",
      "hero.panel_bottom_text": "Strategiya, icra və müştəri təcrübəsi vahid və təmiz iş axınında birləşir.",
      "hero.signal_1_label": "Etibarlı icra",
      "hero.signal_1_value": "Təhlükəsizlik + Məhsul + Brend",
      "hero.signal_2_label": "Kimlər üçün",
      "hero.signal_2_value": "Qurucular, komandalar və institutlar üçün",
      "proof.chip": "Premium icra qatı",
      "proof.title": "Təhlükəsizlik etibarı, məhsul sürəti və müasir təqdimat üçün tək tərəfdaş.",
      "proof.card_1_title": "Təhlükəsizlik ilk gündən",
      "proof.card_1_text": "Hər əməkdaşlıq riskləri azaltmaq, dayanıqlığı artırmaq və inkişaf sürətlənməzdən öncə etibarı gücləndirmək üçün formalaşdırılır.",
      "proof.card_2_title": "Ekspertizaya uyğun təqdimat",
      "proof.card_2_text": "Brendlərin görünüşünü arxadakı bacarıq səviyyəsinə uyğunlaşdırır, daha təmiz sistemlər və daha premium rəqəmsal toxunuşlar yaradırıq.",
      "proof.card_3_title": "Məsləhət və icra bir axında",
      "proof.card_3_text": "Strategiya, texniki icra və müştəri təcrübəsi eyni istiqamətdə hərəkət edir ki, inkişaf həm sürətli, həm düşünülmüş, həm də premium hiss olunsun.",
      "about.section_label": "Haqqımızda",
      "about.section_title_a": "Daha yaxından",
      "about.section_title_b": "tanıyın",
      "about.chip": "Niyə CyberVia",
      "about.title": "İnnovasiya ilə biznes inkişafını sürətləndiririk",
      "about.lead": "CyberVia olaraq mürəkkəbliyi sadələşdirən və tərəfdaşlarımız üçün real, ölçülə bilən nəticələr verən fərdi strategiyalar qururuq.",
      "about.body": "Qabaqcıl analizlə yaradıcı yanaşmanı birləşdirərək təşkilatların dəyişən bazarlarda uğur qazanmasına və uyğunlaşmasına kömək edirik.",
      "about.highlight_1_number": "01",
      "about.highlight_1_text": "Hər əməkdaşlıqda təhlükəsizlik yönümlü düşüncə əsasdır.",
      "about.highlight_2_number": "02",
      "about.highlight_2_text": "Biznes, kreativ və texniki icra birlikdə hərəkət edir.",
      "about.feature_1_title": "Peşəkar komanda",
      "about.feature_1_text": "Komandamız hər layihədə fərdi yanaşma və real nəticə təqdim edərək ideyanızı həyata keçirir.",
      "about.feature_2_title": "İnnovativ baxış",
      "about.feature_2_text": "Davamlı inkişaf və uzunmüddətli uğur üçün qabaqcıl metodlardan istifadə edirik.",
      "about.cta": "Xidmətlərimizə bax",
      "services.section_label": "Xidmətlər",
      "services.section_title_a": "Bizim",
      "services.section_title_b": "xidmətlər",
      "services.chip": "Seçilmiş istiqamətlər",
      "services.heading_a": "İnkişafı gücləndiririk",
      "services.heading_b": "Ağıllı innovasiya ilə",
      "services.summary": "İlk təəssüratdan son nəticəyə qədər etibar, aydınlıq və yüksək icra keyfiyyəti istəyən komandalar üçün hazırlanıb.",
      "services.card_1_title_a": "Təhlükəsizlik Əməliyyatları",
      "services.card_1_title_b": "Mərkəzi Xidmətləri",
      "services.card_1_text": "24/7 Təhlükəsizlik Əməliyyatları Mərkəzimiz infrastrukturunuzu real vaxtda izləyir, təhdidləri aşkarlayır və insidentlərə sürətli reaksiya verir. Biznesləri inkişaf edən kiberhücumlara qarşı proaktiv kəşfiyyat və operativ addımlarla qoruyuruq.",
      "services.card_2_title_a": "Penetrasiya",
      "services.card_2_title_b": "Testi",
      "services.card_2_text": "Veb tətbiqlər, mobil tətbiqlər və daxili sistemlər üçün peşəkar penetrasiya testi aparır, zəiflikləri aşkarlayır və risklərin azaldılması üzrə hesabat təqdim edirik.",
      "services.card_3_title_a": "Sertifikasiya",
      "services.card_3_title_b": "və İmtahan Mərkəzi",
      "services.card_3_text": "EC-Council, CompTIA və ISC2 kimi qlobal sertifikasiyalar üzrə təlimlər və rəsmi imtahan mərkəzi xidmətləri təqdim edirik.",
      "services.card_4_title_a": "Veb sayt",
      "services.card_4_title_b": "hazırlanması",
      "services.card_4_text": "Brendinizə uyğun təhlükəsiz, müasir və mobil uyğun veb saytlar hazırlayırıq. UX/UI-dan CMS inteqrasiyasına və texniki dəstəyə qədər tam həll təqdim edirik.",
      "services.card_5_title_a": "Startap layihə",
      "services.card_5_title_b": "inkişafı",
      "services.card_5_text": "İdeyanızı reallığa çeviririk. Strategiyadan texniki icraya və məhsulun bazara çıxmasına qədər bütün səyahət boyu texnoloji və biznes dəstəyi veririk.",
      "services.card_6_title_a": "IT xidmətləri",
      "services.card_6_title_b": "və Helpdesk",
      "services.card_6_text": "Biznesinizin fasiləsiz işləməsi üçün geniş IT dəstəyi, helpdesk xidməti, texniki yardım və texniki qulluq təqdim edirik.",
      "team.section_label": "Komanda",
      "team.section_title_a": "CyberVia-nın arxasındakı",
      "team.section_title_b": "insanlar",
      "team.member_label": "Təsisçi və Strateji rəhbər",
      "team.member_name": "Afsana Mustafazada",
      "team.member_text": "CyberVia kibertəhlükəsizlik baxışı, biznes düşüncəsi və güclü rəqəmsal icranı birləşdirən liderlik üzərində qurulub. Nəticədə etibar, aydınlıq və ölçülə bilən inkişaf təqdim edən müştəri təcrübəsi yaranır.",
      "team.point_1": "Təhlükəsizlik yönümlü inkişaf",
      "team.point_2": "Premium müştəri təcrübəsi",
      "team.point_3": "Nizamlı innovasiya",
      "team.side_chip": "Liderlik yanaşması",
      "team.side_title": "Təhlükəsizlik, etibar və müasir təqdimatı bir tərəfdaşda görmək istəyən şirkətlər üçün qurulub.",
      "team.side_text": "Məsləhətçi düşüncəni məhsul səviyyəli dizayn və icra ilə birləşdiririk ki, hər toxunuş düşünülmüş, hər nəticə isə etibarlı olsun.",
      "team.stat_1_title": "Müştəri öncədir",
      "team.stat_1_text": "Aydın kommunikasiya və yüksək toxunuşlu xidmət standartları.",
      "team.stat_2_title": "Təhlükəsizlik əsaslıdır",
      "team.stat_2_text": "Kiber dayanıqlıq sonradan əlavə edilmir, başlanğıcdan nəzərə alınır.",
      "team.stat_3_title": "İcraya hazır",
      "team.stat_3_text": "Strategiya, icra və brend keyfiyyəti birlikdə irəliləyir.",
      "contact.section_label": "Əlaqə",
      "contact.section_title_a": "Növbəti",
      "contact.section_title_b": "söhbətinizə başlayın",
      "contact.lead_chip": "Birbaşa əlaqə",
      "contact.lead_title": "Nə qurduğunuzu, nəyi qoruduğunuzu və ya nəyi yaxşılaşdırdığınızı bizimlə bölüşün.",
      "contact.lead_text": "Kibertəhlükəsizlik dəstəyi, məhsul icrası, daha güclü veb görünüş və ya təlim infrastrukturu axtarırsınızsa, uyğun növbəti addımı birlikdə qura bilərik.",
      "contact.lead_point_1": "Tanışlıq görüşü",
      "contact.lead_point_2": "Fərdi xidmət çərçivəsi",
      "contact.lead_point_3": "Sürətli cavab",
      "contact.info_1_title": "Ünvanımız",
      "contact.info_1_line_1": "Bakı, Azərbaycan",
      "contact.info_1_line_2": "Zahid Xəlilov küçəsi 33",
      "contact.info_2_title": "E-poçt",
      "contact.info_2_line_1": "info@cybervia.org",
      "contact.info_2_line_2": "Tərəfdaşlıq və xidmət sorğuları üçün",
      "contact.info_3_title": "İş saatları",
      "contact.info_3_line_1": "Bazar - Cümə: 09:00 - 18:00",
      "contact.info_3_line_2": "Şənbə: 09:00 - 16:00",
      "contact.form_chip": "Layihə müraciəti",
      "contact.form_title": "Fikrinizi CyberVia ilə paylaşın",
      "contact.form_text": "Məqsədlərinizi qısa şəkildə yazın, biz də sizə ən uyğun növbəti addımla geri dönək.",
      "contact.form_name": "Ad və soyad",
      "contact.form_email": "E-poçt ünvanı",
      "contact.form_subject": "Nə ilə bağlı dəstəyə ehtiyacınız var?",
      "contact.form_message": "Layihəniz, çətinliyiniz və ya ideyanız haqqında yazın...",
      "contact.loading": "Yüklənir",
      "contact.sent": "Mesajınız göndərildi. Təşəkkür edirik!",
      "contact.submit": "Mesaj göndər",
      "footer.chip": "CyberVia",
      "footer.cta_title": "Daha təhlükəsiz və premium rəqəmsal görünüş qurmağa hazırsınız?",
      "footer.cta_link": "Söhbət təyin et",
      "footer.about_text": "CyberVia kibertəhlükəsizlik təcrübəsini, məhsul icrasını və müasir brend təqdimatını birləşdirərək şirkətlərin daha inamlı və etibarlı irəliləməsinə kömək edir.",
      "footer.badge_1": "Kibertəhlükəsizlik",
      "footer.badge_2": "Rəqəmsal məhsullar",
      "footer.badge_3": "Akademiya",
      "footer.nav_title": "Naviqasiya",
      "footer.focus_title": "İstiqamətlər",
      "footer.focus_1": "SOC xidmətləri",
      "footer.focus_2": "Penetrasiya testi",
      "footer.focus_3": "Sertifikasiya mərkəzi",
      "footer.focus_4": "Veb hazırlama",
      "footer.focus_5": "IT Helpdesk",
      "footer.contact_title": "Əlaqə",
      "footer.contact_line_1": "Bakı, Azərbaycan",
      "footer.contact_line_2": "Zahid Xəlilov küçəsi 33",
      "footer.phone_label": "Telefon:",
      "footer.email_label": "E-poçt:",
      "footer.copyright_prefix": "© Müəllif hüquqları",
      "footer.copyright_suffix": "Bütün hüquqlar qorunur"
    }
  };

  const languageButtons = document.querySelectorAll(".lang-btn");

  function applyStaticFixes() {
    const heroImage = document.querySelector(".fluid-img");
    if (heroImage) {
      heroImage.setAttribute("src", "assets/img/abstract/Adsız tasarım (1).png");
    }

    const aboutImage = document.querySelector(".about-image img");
    if (aboutImage) {
      aboutImage.setAttribute("src", "assets/img/about/logo cybervıa 2.png");
    }

    const copyrightText = document.querySelector(".copyright p");
    if (copyrightText) {
      copyrightText.innerHTML = '<span data-i18n="footer.copyright_prefix">&copy; Copyright</span> <strong class="px-1 sitename">CyberVia</strong> <span data-i18n="footer.copyright_suffix">All Rights Reserved</span>';
    }
  }

  function applyLanguage(lang) {
    const selected = translations[lang] ? lang : "en";
    const dictionary = translations[selected];

    document.documentElement.lang = selected;
    document.title = dictionary.meta_title;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (dictionary[key]) {
        node.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      const key = node.getAttribute("data-i18n-placeholder");
      if (dictionary[key]) {
        node.setAttribute("placeholder", dictionary[key]);
      }
    });

    languageButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === selected);
    });

    localStorage.setItem("cybervia-language", selected);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyStaticFixes();
  applyLanguage(localStorage.getItem("cybervia-language") || "en");
})();
