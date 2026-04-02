import './style.css';
import { skills, projects, education, typingTexts, terminalCommands, themeColors } from './data';

// ===== THEME SYSTEM =====
function initTheme() {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const savedColor = localStorage.getItem('color') || 'cyan';
  html.setAttribute('data-theme', savedTheme);
  html.setAttribute('data-color', savedColor);

  // Dark / Light toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateCanvasColors();
  });

  // Palette dropdown
  const paletteToggle = document.getElementById('palette-toggle');
  const dropdown = document.getElementById('theme-dropdown');
  paletteToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown?.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown?.contains(e.target as Node) && e.target !== paletteToggle) {
      dropdown?.classList.remove('open');
    }
  });

  // Render swatches
  const swatchesContainer = document.getElementById('theme-swatches');
  if (swatchesContainer) {
    themeColors.forEach(tc => {
      const swatch = document.createElement('button');
      swatch.className = `theme-swatch ${tc.id === savedColor ? 'active' : ''}`;
      swatch.setAttribute('aria-label', `${tc.name} theme`);
      swatch.title = tc.name;
      swatch.style.cssText = ``;
      // Create the two-color split
      const styleEl = document.createElement('style');
      const uid = `swatch-${tc.id}`;
      swatch.id = uid;
      styleEl.textContent = `
        #${uid}::before { background: ${tc.primary}; }
        #${uid}::after { background: ${tc.secondary}; }
      `;
      document.head.appendChild(styleEl);

      swatch.addEventListener('click', () => {
        html.setAttribute('data-color', tc.id);
        localStorage.setItem('color', tc.id);
        document.querySelectorAll('.theme-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        updateCanvasColors();
        dropdown?.classList.remove('open');
      });

      swatchesContainer.appendChild(swatch);
    });
  }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('main-nav');
  btn?.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav?.classList.toggle('open');
  });
  nav?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn?.classList.remove('active');
      nav?.classList.remove('open');
    });
  });
}

// ===== STICKY HEADER =====
function initStickyHeader() {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== ACTIVE NAV =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active',
            link.getAttribute('data-section') === entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  let tIdx = 0, cIdx = 0, deleting = false;
  function type() {
    const current = typingTexts[tIdx];
    if (!deleting) {
      el.textContent = current.substring(0, cIdx + 1);
      cIdx++;
      if (cIdx === current.length) {
        setTimeout(() => { deleting = true; type(); }, 2000);
        return;
      }
      setTimeout(type, 80);
    } else {
      el.textContent = current.substring(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        deleting = false;
        tIdx = (tIdx + 1) % typingTexts.length;
        setTimeout(type, 300);
        return;
      }
      setTimeout(type, 40);
    }
  }
  type();
}

// ===== PARTICLE CANVAS =====
let canvasCtx: CanvasRenderingContext2D | null = null;
let particles: Array<{ x: number; y: number; vx: number; vy: number; r: number }> = [];

function getAccentColor(): string {
  const cs = getComputedStyle(document.documentElement);
  return cs.getPropertyValue('--accent-primary').trim() || '#00f0ff';
}

function updateCanvasColors() {
  // Canvas redraws with current accent color automatically
}

function initCanvas() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  canvasCtx = ctx;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(80, Math.floor(window.innerWidth / 15));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    r: Math.random() * 2 + 0.5,
  }));

  function animate() {
    if (!canvasCtx) return;
    const accent = getAccentColor();
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      canvasCtx!.beginPath();
      canvasCtx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      canvasCtx!.fillStyle = accent;
      canvasCtx!.globalAlpha = 0.4;
      canvasCtx!.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = p.x - particles[j].x;
        const dy = p.y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          canvasCtx!.beginPath();
          canvasCtx!.moveTo(p.x, p.y);
          canvasCtx!.lineTo(particles[j].x, particles[j].y);
          canvasCtx!.strokeStyle = accent;
          canvasCtx!.globalAlpha = 0.06 * (1 - dist / 120);
          canvasCtx!.lineWidth = 0.5;
          canvasCtx!.stroke();
        }
      }
      canvasCtx!.globalAlpha = 1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== TERMINAL (ABOUT SECTION) =====
function initTerminal() {
  const input = document.getElementById('terminal-input') as HTMLInputElement;
  const output = document.getElementById('terminal-output');
  if (!input || !output) return;

  // Command history
  const history: string[] = [];
  let historyIndex = -1;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;

      history.unshift(cmd);
      historyIndex = -1;

      // Add the command to output
      const cmdLine = document.createElement('div');
      cmdLine.className = 'terminal-line';
      cmdLine.innerHTML = `<span class="term-green">sujaya@portfolio</span><span class="term-white">:</span><span class="term-blue">~</span><span class="term-white">$ </span><span class="term-cmd">${escapeHtml(cmd)}</span>`;
      output.appendChild(cmdLine);

      // Process command
      if (cmd === 'clear') {
        output.innerHTML = '';
      } else if (terminalCommands[cmd]) {
        const responseLine = document.createElement('div');
        responseLine.className = 'terminal-line term-response';
        const pre = document.createElement('pre');
        pre.textContent = terminalCommands[cmd];
        responseLine.appendChild(pre);
        output.appendChild(responseLine);
      } else {
        const errorLine = document.createElement('div');
        errorLine.className = 'terminal-line term-response';
        const pre = document.createElement('pre');
        pre.textContent = `bash: ${cmd}: command not found\nType 'help' for available commands.`;
        pre.style.color = '#f85149';
        errorLine.appendChild(pre);
        output.appendChild(errorLine);
      }

      input.value = '';
      // Scroll to bottom
      const termBody = document.getElementById('terminal-body');
      if (termBody) termBody.scrollTop = termBody.scrollHeight;
      output.scrollTop = output.scrollHeight;

    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        historyIndex++;
        input.value = history[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        historyIndex--;
        input.value = history[historyIndex];
      } else {
        historyIndex = -1;
        input.value = '';
      }
    }
  });

  // Focus terminal on click
  const termWindow = document.querySelector('.terminal-window');
  termWindow?.addEventListener('click', () => input.focus());

  // Auto-run welcome sequence
  setTimeout(() => {
    input.value = 'about';
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    input.dispatchEvent(event);
  }, 1500);
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===== RENDER SKILLS =====
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const categories = [
    { key: 'languages', label: '// Languages' },
    { key: 'frontend', label: '// Frontend' },
    { key: 'backend', label: '// Backend' },
    { key: 'tools', label: '// Tools & DevOps' },
  ];

  categories.forEach(cat => {
    const label = document.createElement('div');
    label.className = 'skill-category-label';
    label.textContent = cat.label;
    grid.appendChild(label);

    skills
      .filter(s => s.category === cat.key)
      .forEach((skill, i) => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.setAttribute('data-animate', 'fade-up');
        card.setAttribute('data-delay', String(i * 50));
        card.innerHTML = `
          <div class="skill-icon">
            <i class="${skill.icon}"></i>
          </div>
          <span class="skill-name">${skill.name}</span>
          <div class="skill-bar">
            <div class="skill-bar-fill" data-width="${skill.level}%"></div>
          </div>
        `;
        grid.appendChild(card);
      });
  });
}

// ===== RENDER PROJECTS =====
function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;

  projects.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-animate', 'fade-up');
    card.setAttribute('data-delay', String(i * 100));

    const linksHTML = `
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>` : ''}
        ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Live Demo"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>` : ''}
      </div>
    `;

    card.innerHTML = `
      <div class="project-header">
        <div class="project-info">
          <div class="project-year">${project.year}</div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-subtitle">${project.subtitle}</p>
        </div>
        ${linksHTML}
      </div>
      <p class="project-description">${project.description}</p>
      <ul class="project-features">
        ${project.features.map(f => `<li class="project-feature">${f}</li>`).join('')}
      </ul>
      <div class="project-tech">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    `;

    list.appendChild(card);
  });
}

// ===== RENDER EDUCATION =====
function renderEducation() {
  const timeline = document.getElementById('education-timeline');
  if (!timeline) return;

  education.forEach((edu, i) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-animate', 'fade-up');
    item.setAttribute('data-delay', String(i * 100));
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-period">${edu.period}</div>
        <h3 class="timeline-institution">${edu.institution}</h3>
        <p class="timeline-degree">${edu.degree}</p>
        ${edu.affiliation ? `<span class="timeline-affiliation">${edu.affiliation}</span>` : ''}
        <p class="timeline-description">${edu.description}</p>
      </div>
    `;
    timeline.appendChild(item);
  });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.getAttribute('data-delay') || 0);
        setTimeout(() => {
          entry.target.classList.add('visible');
          // Animate skill bars
          const bar = entry.target.querySelector('.skill-bar-fill') as HTMLElement;
          if (bar) bar.style.width = bar.dataset.width || '0%';
        }, delay);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initStickyHeader();
  initActiveNav();
  initTypingAnimation();
  initCanvas();
  renderSkills();
  renderProjects();
  renderEducation();
  initTerminal();

  // Init scroll animations after a short delay to let DOM paint
  requestAnimationFrame(() => {
    initScrollAnimations();
  });
});
