  
        document.addEventListener('DOMContentLoaded', function() {
            // Scroll suave para todos los enlaces
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 60,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Validación del formulario
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Validación básica
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    
                    if (name && email && message) {
                        alert('¡Mensaje enviado con éxito!\nGracias por contactar a Comida Para Llevar.');
                        contactForm.reset();
                    } else {
                        alert('Por favor complete todos los campos requeridos.');
                    }
                });
            }
            
            // Efecto adicional para el navbar al hacer scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = 'rgba(166, 134, 106, 0.95)';
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.backgroundColor = '';
                    navbar.style.boxShadow = '';
                }
            });
        });
        // Efecto de pulsación para el título
        const titles = document.querySelectorAll('.section-title');
        titles.forEach(title => {
            title.addEventListener('mouseenter', () => {
                title.style.animation = 'pulse 0.8s infinite alternate';
            });
            
            title.addEventListener('mouseleave', () => {
                title.style.animation = 'pulse 2s infinite alternate';
            });
        });
        
        // Efecto de iluminación para el botón
        const buttons = document.querySelectorAll('.listen-btn');
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                button.style.background = `radial-gradient(circle at ${x}px ${y}px, 
                    var(--primary-color), var(--secondary-color))`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.background = 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))';
            });
        });
        
        // Crear círculos pulsantes dinámicos
        function createPulseCircle() {
            const size = Math.random() * 200 + 50;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 3;
            
            const circle = document.createElement('div');
            circle.className = 'pulse-circle';
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.left = `${left}%`;
            circle.style.top = `${top}%`;
            circle.style.animationDelay = `${delay}s`;
            
            document.querySelector('.pulse-effect').appendChild(circle);
            
            // Eliminar después de la animación
            setTimeout(() => {
                circle.remove();
            }, 3000);
        }
        
        // Crear círculos cada segundo
        setInterval(createPulseCircle, 1000);
        
        // Crear algunos círculos iniciales
        for(let i = 0; i < 5; i++) {
            setTimeout(createPulseCircle, i * 500);
        }
