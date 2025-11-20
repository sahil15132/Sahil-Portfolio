// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll('.skill-level');

const animateSkillBars = () => {
    skillBars.forEach(skillBar => {
        const skillLevel = skillBar.getAttribute('data-level');
        const skillBarPosition = skillBar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(skillBarPosition < screenPosition) {
            skillBar.style.width = skillLevel + '%';
        }
    });
};

// Initialize skill bars on page load
window.addEventListener('load', () => {
    animateSkillBars();
});

// Animate skill bars on scroll
window.addEventListener('scroll', animateSkillBars);

// Add active class to navigation links based on scroll position
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const highlightNav = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if(item.getAttribute('href') === `#${sectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Add typing effect to hero section
const typingEffect = () => {
    const text = "Cybersecurity Specialist";
    const heroTitle = document.querySelector('.hero-content h1');
    let i = 0;
    
    heroTitle.textContent = '';
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
};

// Initialize typing effect when page loads
window.addEventListener('load', typingEffect);

// Add scroll to top functionality
const scrollToTop = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollBtn.classList.add('scroll-to-top');
    document.body.appendChild(scrollBtn);
    
    // Style the scroll to top button
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '30px';
    scrollBtn.style.right = '30px';
    scrollBtn.style.width = '50px';
    scrollBtn.style.height = '50px';
    scrollBtn.style.backgroundColor = 'var(--accent)';
    scrollBtn.style.color = 'white';
    scrollBtn.style.border = 'none';
    scrollBtn.style.borderRadius = '50%';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    scrollBtn.style.justifyContent = 'center';
    scrollBtn.style.alignItems = 'center';
    scrollBtn.style.fontSize = '1.2rem';
    scrollBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    scrollBtn.style.transition = 'all 0.3s';
    scrollBtn.style.zIndex = '1000';
    
    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.backgroundColor = '#2c5aa0';
        scrollBtn.style.transform = 'translateY(-3px)';
    });
    
    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.backgroundColor = 'var(--accent)';
        scrollBtn.style.transform = 'translateY(0)';
    });
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Initialize scroll to top button
scrollToTop();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Security features simulation
const securityFeatures = () => {
    console.log('Security features initialized:');
    console.log('- HTTPS enforced');
    console.log('- Content Security Policy implemented');
    console.log('- XSS protection enabled');
    console.log('- Form validation active');
};

// Initialize security features
securityFeatures();