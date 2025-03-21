document.addEventListener('DOMContentLoaded', () => {
    // Função pra animar contadores
    function animateCounter(element, totalGoals) {
        let currentCount = 0;
        const increment = Math.ceil(totalGoals / 50);
        const duration = 2000;
        const stepTime = duration / (totalGoals / increment);

        function updateCounter() {
            if (currentCount < totalGoals) {
                currentCount += increment;
                if (currentCount > totalGoals) currentCount = totalGoals;
                element.textContent = currentCount;
                setTimeout(updateCounter, stepTime);
            }
        }

        updateCounter();
    }

    // Lista de contadores
    const counters = [
        { element: document.getElementById('goal-count-pele'), goals: 1281 },
        { element: document.getElementById('goal-count-ronaldo'), goals: 414 },
        { element: document.getElementById('goal-count-ronaldinho'), goals: 313 },
        { element: document.getElementById('goal-count-cr7'), goals: 873 },
        { element: document.getElementById('goal-count-messi'), goals: 827 },
        { element: document.getElementById('goal-count-neymar'), goals: 439 },
        { element: document.getElementById('goal-count-bellingham'), goals: 62 }
    ];

    // Inicia contadores
    counters.forEach(counter => {
        if (counter.element) {
            animateCounter(counter.element, counter.goals);
        }
    });

    // Configuração do carrossel
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-img');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const caption = carousel.querySelector('.carousel-caption');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        let currentIndex = 0;

        // Cria dots
        images.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentIndex = i;
                showImage(currentIndex);
            });
            dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        // Função pra mostrar imagem
        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            caption.textContent = images[index].dataset.caption;
        }

        // Eventos dos botões
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        showImage(currentIndex);
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 5000);
    }

    // Animação da tabela
    const tableRows = document.querySelectorAll('#goals-table tbody tr');
    if (tableRows.length > 0) {
        tableRows.forEach((row, index) => {
            row.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`;
            row.style.opacity = '0';
        });
    }

    // Configuração das partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 50 },
            color: { value: '#ff3333' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { speed: 2, direction: 'none', random: true }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' }
            }
        }
    });
});