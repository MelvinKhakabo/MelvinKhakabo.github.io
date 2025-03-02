document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle('light-mode');
    
    const icon = toggleButton.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

const roles = [
    { text: "Data Scientist", class: "role-data-scientist" },
    { text: "Machine Learning Enthusiast", class: "role-ml-enthusiast" },
    { text: "Software Developer", class: "role-software-dev" }
];

const typedText = document.querySelector('.typed-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    typedText.className = `typed-text ${currentRole.class}`;
    
    if (!isDeleting && charIndex <= currentRole.text.length) {
        typedText.textContent = currentRole.text.substring(0, charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex >= 0) {
        typedText.textContent = currentRole.text.substring(0, charIndex);
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(type, isDeleting ? 1000 : 2000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});