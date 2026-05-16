// ============================================
// FUNCIONALIDADES DO SITE
// ============================================

// Scroll suave para seções
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal do Instagram
function openInstagramPopup() {
    const modal = document.getElementById('instagramModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeInstagramPopup() {
    const modal = document.getElementById('instagramModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('instagramModal');
    
    modal.addEventListener('click', function(event) {
        if (event.target === this) {
            closeInstagramPopup();
        }
    });

    // Fechar modal com ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeInstagramPopup();
        }
    });
});

// Tratamento do formulário
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Aqui você pode enviar os dados para um servidor
    // Exemplo com fetch:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(result => {
    //     alert('Mensagem enviada com sucesso!');
    //     event.target.reset();
    // })
    // .catch(error => console.error('Erro:', error));
    
    // Por enquanto, apenas mostra uma mensagem
    console.log('Dados do formulário:', data);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    event.target.reset();
}

// Animação de entrada dos elementos
document.addEventListener('DOMContentLoaded', function() {
    // Observador de interseção para animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards de serviço
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observar cards de diferenciais
    document.querySelectorAll('.differential-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Efeito de scroll no header
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.boxShadow = '0 2px 10px rgba(212, 175, 55, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Validação do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('invalid', function(e) {
                e.preventDefault();
                this.style.borderColor = '#ff6b6b';
            });
            
            input.addEventListener('input', function() {
                if (this.validity.valid) {
                    this.style.borderColor = '';
                }
            });
        });
    }
});

// Suporte a navegação por teclado
document.addEventListener('keydown', function(event) {
    // Fechar modal com ESC
    if (event.key === 'Escape') {
        const modal = document.getElementById('instagramModal');
        if (modal.classList.contains('active')) {
            closeInstagramPopup();
        }
    }
});

// Analytics (opcional)
// Você pode adicionar seu código de analytics aqui
// Exemplo: Google Analytics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');
