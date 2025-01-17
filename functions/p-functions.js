let loadingStart;
let removeLoadingScreen;

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    
    // Helper function to get elements by ID
    const $ = id => document.getElementById(id);

    const loadingScreen = $('loading-screen');
    if (!loadingScreen) {
        console.error('Loading screen element not found');
        return;
    }

    const minLoadingTime = 1100; // 1.1 seconds
    const maxLoadingTime = 5500; // 5.5 seconds
    loadingStart = Date.now();

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Function to remove the loading screen
    function removeLoadingScreen() {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }, 500);
    }

    // Prevent any interactions while loading
    loadingScreen.addEventListener('click', (e) => e.preventDefault());
    loadingScreen.addEventListener('touchstart', (e) => e.preventDefault());

    // Set a timeout to remove the loading screen after the minimum time
    setTimeout(() => {
        const loadingDuration = Date.now() - loadingStart;
        console.log(`Loading duration: ${loadingDuration}ms`);
        removeLoadingScreen();
    }, minLoadingTime);

});




       // Create animated background elements
        const animatedBg = document.querySelector('.animated-bg');
        for (let i = 0; i < 20; i++) {
            const span = document.createElement('span');
            span.style.left = Math.random() * window.innerWidth + 'px';
            span.style.top = Math.random() * window.innerHeight + 'px';
            span.style.width = Math.random() * 30 + 10 + 'px';
            span.style.height = span.style.width;
            span.style.animationDelay = Math.random() * 5 + 's';
            animatedBg.appendChild(span);
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add animation to process steps on scroll
        const processSteps = document.querySelectorAll('.process-step');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.5 });

        processSteps.forEach(step => {
            observer.observe(step);
        });

        // Add floating icons
        const main = document.querySelector('main');
        const icons = ['fa-couch', 'fa-chair', 'fa-bed', 'fa-lamp'];
        for (let i = 0; i < 10; i++) {
            const icon = document.createElement('i');
            icon.classList.add('fas', icons[Math.floor(Math.random() * icons.length)], 'floating-icon');
            icon.style.left = Math.random() * window.innerWidth + 'px';
            icon.style.top = Math.random() * window.innerHeight + 'px';
            icon.style.animationDelay = Math.random() * 5 + 's';
            main.appendChild(icon);
        }

        // Scroll progress bar
        window.addEventListener('scroll', () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = `${scrollPx / winHeightPx * 100}%`;
            scrollProgress.style.width = scrolled;
        });

        // Parallax effect for header background
        window.addEventListener('scroll', () => {
            const headerBg = document.querySelector('.header-bg');
            headerBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        });

        // Add hover effect to CTA buttons
        const ctaButtons = document.querySelectorAll('.cta-btn');
        ctaButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                button.style.setProperty('--x', `${x}px`);
                button.style.setProperty('--y', `${y}px`);
            });
        });

