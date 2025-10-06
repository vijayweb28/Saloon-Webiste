document.addEventListener("DOMContentLoaded", () => {

    // ======================== Navbar Logic ========================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // ======================== Smooth Scrolling ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ======================== Active Link Highlighting on Scroll ========================
    const sections = document.querySelectorAll("section[id]");
    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }
    window.addEventListener("scroll", navHighlighter);
    navHighlighter();

    // ======================== Hero Slider Logic ========================
    const heroSlides = document.querySelectorAll(".hero-slider .slide");
    let currentHeroSlide = 0;
    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }
    function nextHeroSlide() {
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        showHeroSlide(currentHeroSlide);
    }
    setInterval(nextHeroSlide, 5000);

    // ======================== Testimonial Slider Logic ========================
    const testimonialItems = document.querySelectorAll(".testimonial-item");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }
    
    prevBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        nextBtn.click();
    }, 7000);


    // ======================== Scroll Reveal Animation ========================
    const revealElements = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add("active");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // ======================== Form Validation ========================
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We will get back to you shortly.");
        contactForm.reset();
    });
});
