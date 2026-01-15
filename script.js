// Page-based navigation
document.addEventListener('DOMContentLoaded', function() {
    // Set active navigation link based on current page
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.split('/').pop() || 'index.html';
        
        // Remove 'index.html' normalization for comparison
        const normalizedCurrent = currentPage === '' ? 'index.html' : currentPage;
        const normalizedLink = linkPage === '' ? 'index.html' : linkPage;
        
        if (normalizedCurrent === normalizedLink || 
            (normalizedCurrent === 'index.html' && normalizedLink === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections and project cards for fade-in effect
    const sections = document.querySelectorAll('section');
    const projectCards = document.querySelectorAll('.project-card');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Handle PDF viewer loading
    const pdfViewer = document.querySelector('.pdf-viewer');
    if (pdfViewer) {
        pdfViewer.addEventListener('load', function() {
            console.log('PDF loaded successfully');
        });

        pdfViewer.addEventListener('error', function() {
            console.error('Error loading PDF');
            const errorMessage = document.createElement('div');
            errorMessage.className = 'pdf-error';
            errorMessage.innerHTML = `
                <p>Unable to load PDF viewer. Please <a href="CWrightResume (1).pdf" download>download the resume</a> instead.</p>
            `;
            pdfViewer.parentElement.appendChild(errorMessage);
        });
    }

    // Add mobile menu toggle (if needed for future enhancements)
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
    .navbar.scroll-down {
        transform: translateY(-100%);
    }
    .navbar.scroll-up {
        transform: translateY(0);
    }
    .pdf-error {
        padding: 2rem;
        text-align: center;
        color: var(--text-secondary);
    }
    .pdf-error a {
        color: var(--primary-color);
        text-decoration: underline;
    }
`;
document.head.appendChild(style);

