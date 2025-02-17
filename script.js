document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(n) {
        // Remove classes ativas
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Atualiza o índice do slide atual
        currentSlide = (n + slides.length) % slides.length;
        
        // Adiciona classes ativas ao slide e dot atuais
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Event listeners para os botões
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

    // Event listeners para os dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Autoplay do slider
    setInterval(() => showSlide(currentSlide + 1), 5000);
});

// Função para animar os números
function animateNumbers() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const increment = target / 200; // Dividir a animação em 200 steps
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target;
            }
        };
        
        // Criar um novo Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            // Se o elemento estiver visível
            if (entries[0].isIntersecting) {
                updateNumber(); // Iniciar a animação
                observer.disconnect(); // Parar de observar após iniciar
            }
        }, {
            threshold: 0.5 // Iniciar quando 50% do elemento estiver visível
        });
        
        // Começar a observar o elemento
        observer.observe(stat);
    });
}

// Chamar a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    animateNumbers();
});

// Funcionalidade do FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alterna o estado do item atual
            item.classList.toggle('active');
        });
    });
});

// Funcionalidade do carrossel de depoimentos
document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = document.querySelector('.testimonials-slider .prev');
    const nextBtn = document.querySelector('.testimonials-slider .next');
    let currentTestimonial = 0;

    function showTestimonial(n) {
        // Remove classes ativas
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        // Atualiza o índice do depoimento atual
        currentTestimonial = (n + testimonialCards.length) % testimonialCards.length;
        
        // Adiciona classes ativas ao depoimento e dot atuais
        testimonialCards[currentTestimonial].classList.add('active');
        testimonialDots[currentTestimonial].classList.add('active');
    }

    // Event listeners para os botões
    prevBtn.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
    nextBtn.addEventListener('click', () => showTestimonial(currentTestimonial + 1));

    // Event listeners para os dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => showTestimonial(index));
    });
});

// Funcionalidade do botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) { // Mostra o botão após rolar 300px
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 