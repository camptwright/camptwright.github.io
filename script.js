/* ================================================================
   script.js - Campbell Wright Portfolio
================================================================ */

(function () {
    'use strict';

    // ----------------------------------------------------------------
    // Theme toggle
    // ----------------------------------------------------------------
    const savedTheme = localStorage.getItem('cw-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    function initThemeToggle() {
        const btn = document.querySelector('.theme-toggle');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('cw-theme', next);
        });
    }

    // ----------------------------------------------------------------
    // Active nav link
    // ----------------------------------------------------------------
    function initActiveNav() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-link').forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
            link.classList.toggle('active', linkPage === page);
        });
    }

    // ----------------------------------------------------------------
    // Navbar: scroll shadow + show/hide
    // ----------------------------------------------------------------
    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let last = 0;
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            navbar.classList.toggle('scrolled', y > 10);
            last = y;
        }, { passive: true });
    }

    // ----------------------------------------------------------------
    // Hamburger menu
    // ----------------------------------------------------------------
    function initHamburger() {
        const btn  = document.querySelector('.hamburger');
        const menu = document.querySelector('.mobile-menu');
        if (!btn || !menu) return;

        btn.addEventListener('click', () => {
            const open = btn.classList.toggle('open');
            menu.classList.toggle('open', open);
        });

        // Close on link click
        menu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                btn.classList.remove('open');
                menu.classList.remove('open');
            });
        });

        // Close on outside click
        document.addEventListener('click', e => {
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                btn.classList.remove('open');
                menu.classList.remove('open');
            }
        });
    }

    // ----------------------------------------------------------------
    // Intersection Observer for fade-up animations
    // ----------------------------------------------------------------
    function initScrollAnimations() {
        const els = document.querySelectorAll('.fade-up');
        if (!els.length) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        els.forEach((el, i) => {
            el.style.transitionDelay = `${(i % 5) * 70}ms`;
            observer.observe(el);
        });
    }

    // ----------------------------------------------------------------
    // Project filter tabs
    // ----------------------------------------------------------------
    function initProjectFilter() {
        const tabs  = document.querySelectorAll('.filter-tab');
        const cards = document.querySelectorAll('.project-card');
        if (!tabs.length) return;

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.dataset.filter;
                cards.forEach(card => {
                    const match = filter === 'all' || card.dataset.category === filter;
                    card.classList.toggle('hidden', !match);
                });
            });
        });
    }

    // ----------------------------------------------------------------
    // PDF viewer error handling
    // ----------------------------------------------------------------
    function initPdfViewer() {
        const iframe = document.querySelector('.pdf-viewer');
        if (!iframe) return;

        iframe.addEventListener('error', () => {
            const msg = document.createElement('div');
            msg.style.cssText = 'padding:2rem;text-align:center;color:var(--text-secondary)';
            msg.innerHTML = `
                Unable to display PDF.
                <a href="Campbell_Wright_Resume.pdf" download
                   style="color:var(--accent);text-decoration:underline;margin-left:0.25rem">
                   Download instead
                </a>
            `;
            iframe.replaceWith(msg);
        });
    }

    // ----------------------------------------------------------------
    // Init
    // ----------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', () => {
        initThemeToggle();
        initActiveNav();
        initNavbar();
        initHamburger();
        initScrollAnimations();
        initProjectFilter();
        initPdfViewer();
    });

})();
