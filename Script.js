 document.addEventListener('DOMContentLoaded', function() {
            // Navbar scroll effect
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Typed.js effect
            const options = {
                strings: ["Web Developer", "Software Engineer", "Tech Enthusiast"],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true
            };
            new Typed('#typedElement', options);
        });
        // Skill bar animation
        document.querySelectorAll('.skill-progress').forEach(skill => {
            const width = skill.getAttribute('data-width');
            skill.style.width = width + '%';
        });
        // Circle skill animation
        document.querySelectorAll('.circle-bg').forEach(circle => {
            const percentage = circle.style.getPropertyValue('--percentage');
            circle.style.background = `conic-gradient(#8888dd 0% ${percentage}, rgba(255, 255, 255, 0.1) ${percentage} 100%)`;
        });
        // Smooth scroll for navigation links
        document.querySelectorAll('a.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
        // Form submission (dummy)
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            this.reset();
        });
        // Footer year update
        const footerYear = new Date().getFullYear();
        document.querySelector('.footer p').innerHTML = `&copy; ${footerYear} Somnath Chatterjee. All rights reserved.`;
        // Add Font Awesome icons
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(link);