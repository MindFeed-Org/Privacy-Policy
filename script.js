/**
 * MINDFEED EDITORIAL & PRIVACY POLICY SCRIPT
 * Theme Persistence · Scrollspy · Progress Bar · Micro-animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Date Formatting
  const dateElement = document.getElementById('currentDate');
  if (dateElement) {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
    dateElement.textContent = formatted;
  }

  // 2. Reading Progress Bar
  const progressBar = document.getElementById('readingProgress');
  const updateProgress = () => {
    if (!progressBar) return;
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollTotal <= 0) {
      progressBar.style.width = '0%';
      return;
    }
    const progress = (window.scrollY / scrollTotal) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // 3. Theme Toggle (Warm Paper vs Night Edition)
  const themeToggle = document.getElementById('themeToggle');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  const root = document.documentElement;

  const getPreferredTheme = () => {
    const saved = localStorage.getItem('mindfeed_policy_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('mindfeed_policy_theme', theme);
    if (themeLabel) {
      themeLabel.textContent = theme === 'dark' ? 'Night Edition' : 'Warm Paper';
    }
    if (themeToggle) {
      themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to Warm Paper' : 'Switch to Night Edition'
      );
    }
  };

  // Initialize Theme
  applyTheme(getPreferredTheme());

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });

  // 4. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('active'));
  }

  // 5. ScrollSpy for Desktop Sidebar & Mobile Pill Bar
  const sections = document.querySelectorAll('section[id]');
  const tocLinks = document.querySelectorAll('.toc-link');
  const mobilePills = document.querySelectorAll('.mobile-pill');

  const updateActiveNav = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    if (!currentId && sections.length > 0 && window.scrollY < sections[0].offsetTop) {
      currentId = sections[0].getAttribute('id');
    }

    if (currentId) {
      tocLinks.forEach((link) => {
        const href = link.getAttribute('href')?.replace('#', '');
        link.classList.toggle('active', href === currentId);
      });

      mobilePills.forEach((pill) => {
        const href = pill.getAttribute('href')?.replace('#', '');
        const isActive = href === currentId;
        pill.classList.toggle('active', isActive);
        if (isActive && pill.parentElement) {
          // Keep active pill scrolled into view on mobile
          const pillOffset = pill.offsetLeft;
          const containerWidth = pill.parentElement.offsetWidth;
          pill.parentElement.scrollTo({
            left: pillOffset - containerWidth / 2 + pill.offsetWidth / 2,
            behavior: 'smooth'
          });
        }
      });
    }
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
});
