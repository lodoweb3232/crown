// Datos de las bicicletas
const bikes = [
    {
        name: "Trail Blazer XT",
        price: "$1,499",
        description: "Bicicleta de trail con suspensión delantera de 120mm, ideal para senderos técnicos.",
        image: "imagenes/bici1.jpg"
    },
    {
        name: "Enduro Pro",
        price: "$2,799",
        description: "Doble suspensión 160mm, diseñada para descensos agresivos y terrenos rocosos.",
        image: "imagenes/bici2.jpg"
    },
    {
        name: "XC Race Carbon",
        price: "$3,499",
        description: "Cuadro de carbono ultraligero para competiciones de cross country.",
        image: "imagenes/bici3.jpg"
    },
    {
        name: "All Mountain Elite",
        price: "$2,199",
        description: "Versátil para todo tipo de terrenos montañosos con suspensión de 140mm.",
        image: "imagenes/bici4.jpg"
    },
    {
        name: "Downhill Dominator",
        price: "$4,299",
        description: "Maquina de descenso con 200mm de suspensión y componentes premium.",
        image: "imagenes/bici5.jpg"
    },
    {
        name: "Hardtail Trail",
        price: "$899",
        description: "Perfecta para iniciarse en el mundo del mountain bike con componentes duraderos.",
        image: "imagenes/bici6.jpg"
    }
];

// Videos de tutoriales
const tutorials = [
    {
        title: "Técnicas básicas de manejo",
        description: "Aprende las posiciones fundamentales para el control de tu bicicleta.",
        thumbnail: "imagenes/tutorial1.jpg",
        url: "#"
    },
    {
        title: "Superar obstáculos",
        description: "Técnicas para pasar troncos, rocas y otros obstáculos del sendero.",
        thumbnail: "imagenes/tutorial2.jpg",
        url: "#"
    },
    {
        title: "Mantenimiento básico",
        description: "Aprende a limpiar y lubricar tu cadena correctamente.",
        thumbnail: "imagenes/tutorial3.jpg",
        url: "#"
    },
    {
        title: "Ajuste de suspensión",
        description: "Cómo configurar tu suspensión para tu peso y estilo de manejo.",
        thumbnail: "imagenes/tutorial4.jpg",
        url: "#"
    },
    {
        title: "Cambios de velocidad",
        description: "Uso óptimo del cambio de velocidades en diferentes terrenos.",
        thumbnail: "imagenes/tutorial5.jpg",
        url: "#"
    },
    {
        title: "Frenado técnico",
        description: "Técnicas avanzadas de frenado en descensos técnicos.",
        thumbnail: "imagenes/tutorial6.jpg",
        url: "#"
    }
];

// Cargar contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar bicicletas
    loadBikes();
    
    // Cargar tutoriales
    loadTutorials();
    
    // Configurar menú hamburguesa
    setupMobileMenu();
    
    // Configurar scroll suave
    setupSmoothScrolling();
    
    // Configurar formulario de contacto
    setupContactForm();
    
    // Configurar formulario de newsletter
    setupNewsletterForm();
    
    // Configurar eventos para los botones de video
    setupVideoButtons();
    
    // Cambiar clase activa en el menú al hacer scroll
    setupScrollSpy();
});

// Función para cargar las bicicletas
function loadBikes() {
    const gallery = document.querySelector('.bike-gallery');
    
    bikes.forEach(bike => {
        const bikeCard = document.createElement('div');
        bikeCard.className = 'bike-card';
        
        bikeCard.innerHTML = `
            <img src="${bike.image}" alt="${bike.name}">
            <div class="bike-info">
                <h3>${bike.name}</h3>
                <p class="price">${bike.price}</p>
                <p>${bike.description}</p>
                <a href="#contacto" class="btn-details">Consultar</a>
            </div>
        `;
        
        gallery.appendChild(bikeCard);
    });
}

// Función para cargar los tutoriales
function loadTutorials() {
    const gallery = document.querySelector('.video-gallery');
    
    tutorials.forEach(tutorial => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${tutorial.thumbnail}" alt="${tutorial.title}">
                <div class="play-button"><i class="fas fa-play"></i></div>
            </div>
            <h3>${tutorial.title}</h3>
            <p>${tutorial.description}</p>
        `;
        
        // Agregar evento click al card
        videoCard.addEventListener('click', function() {
            window.location.href = tutorial.url;
        });
        
        gallery.appendChild(videoCard);
    });
}

// Función para configurar el menú móvil
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Función para configurar scroll suave
function setupSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
}

// Función para configurar el formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular envío del formulario
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        setTimeout(function() {
            submitButton.innerHTML = '<i class="fas fa-check"></i> Enviado';
            
            // Mostrar mensaje de éxito
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
            contactForm.appendChild(successMessage);
            
            // Resetear formulario después de 3 segundos
            setTimeout(function() {
                contactForm.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                successMessage.remove();
            }, 3000);
        }, 1500);
    });
}

// Función para configurar el formulario de newsletter
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const submitButton = this.querySelector('button[type="submit"]');
        
        if (emailInput.value.trim() === '') {
            alert('Por favor ingresa tu correo electrónico');
            return;
        }
        
        // Simular suscripción
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        setTimeout(function() {
            submitButton.innerHTML = '<i class="fas fa-check"></i>';
            emailInput.value = '';
            
            setTimeout(function() {
                submitButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
            }, 2000);
        }, 1500);
    });
}

// Función para configurar los botones de video
function setupVideoButtons() {
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const videoCard = this.closest('.video-card');
            const videoTitle = videoCard.querySelector('h3').textContent;
            alert(`Reproduciendo: ${videoTitle}`);
        });
    });
}

// Función para cambiar la clase activa en el menú al hacer scroll
function setupScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.querySelector('.nav-link').classList.remove('active');
            if (item.querySelector('.nav-link').getAttribute('href') === `#${current}`) {
                item.querySelector('.nav-link').classList.add('active');
            }
        });
    });
}