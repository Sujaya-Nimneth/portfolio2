// ===== PORTFOLIO DATA =====
// Edit this file to update your portfolio content

export interface Skill {
  name: string;
  icon: string; // devicon class name
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  level: number; // 0-100
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  github?: string;
  live?: string;
  year: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
  affiliation?: string;
}

export interface ThemeColor {
  name: string;
  primary: string;
  secondary: string;
  id: string;
}

export const themeColors: ThemeColor[] = [
  { name: 'Cyan', primary: '#00f0ff', secondary: '#7b61ff', id: 'cyan' },
  { name: 'Orange', primary: '#ff6b35', secondary: '#f7c948', id: 'orange' },
  { name: 'Vice', primary: '#ff00aa', secondary: '#00d4ff', id: 'vice' },
  { name: 'Purple', primary: '#a855f7', secondary: '#6366f1', id: 'purple' },
];

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored', category: 'languages', level: 90 },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'languages', level: 85 },
  { name: 'Python', icon: 'devicon-python-plain colored', category: 'languages', level: 80 },
  { name: 'Java', icon: 'devicon-java-plain colored', category: 'languages', level: 70 },
  { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'languages', level: 95 },
  { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'languages', level: 90 },
  { name: 'SQL', icon: 'devicon-azuresqldatabase-plain colored', category: 'languages', level: 75 },
  // Frontend
  { name: 'React', icon: 'devicon-react-original colored', category: 'frontend', level: 85 },
  { name: 'Next.js', icon: 'devicon-nextjs-plain', category: 'frontend', level: 80 },
  { name: 'Vue.js', icon: 'devicon-vuejs-plain colored', category: 'frontend', level: 65 },
  { name: 'TailwindCSS', icon: 'devicon-tailwindcss-original colored', category: 'frontend', level: 85 },
  { name: 'SASS', icon: 'devicon-sass-original colored', category: 'frontend', level: 80 },
  // Backend
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'backend', level: 80 },
  { name: 'Express', icon: 'devicon-express-original', category: 'backend', level: 75 },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'backend', level: 70 },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'backend', level: 70 },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored', category: 'backend', level: 75 },
  // Tools
  { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools', level: 90 },
  { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'tools', level: 65 },
  { name: 'Vite', icon: 'devicon-vitejs-plain colored', category: 'tools', level: 85 },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'tools', level: 95 },
  { name: 'Figma', icon: 'devicon-figma-plain colored', category: 'tools', level: 70 },
  { name: 'Linux', icon: 'devicon-linux-plain', category: 'tools', level: 70 },
];

export const projects: Project[] = [
  {
    title: 'VectorTrace',
    subtitle: 'Real-time epidemiological dashboard for outbreak tracking and response',
    description: 'VectorTrace is a command-center web platform for monitoring hantavirus risks in real time. It combines a high-signal operational UI, geospatial tracking, and rapid case intake with a Supabase-backed data layer and role-based access control. The app includes an admin-only infrastructure console that surfaces system health signals for the ingestion pipeline, enabling rapid response and operational visibility across the surveillance workflow.',
    features: [
      'Command-center dashboard for live incident monitoring',
      'Geospatial mapping and case visualization with Leaflet',
      'Role-based access control with secure data workflows',
      'Admin-only infrastructure console for pipeline health',
      'Supabase-powered backend with fast case intake',
      'Real-time epidemiological tracking and risk assessment',
    ],
    techStack: ['TypeScript', 'React', 'TanStack Start', 'Vite', 'Tailwind CSS', 'Supabase', 'Leaflet'],
    github: 'https://github.com/Sujaya-Nimneth/VectorTrace-Hantavirus-Surveillance',
    live: 'https://vectortrace-hantavirus-surveillance.sujayanimneth.workers.dev/',
    year: '2026',
  },
  {
    title: 'Oil Burn Tracker',
    subtitle: 'Real-time satellite fire detection for conflict-affected infrastructure',
    description: 'OilBurnTracker combines real-time satellite fire detection with facility identification and emissions estimates to monitor conflict-affected oil and gas infrastructure. Features an interactive 3D satellite map with terrain visualization, facility markers scaled by impact, and NASA FIRMS satellite fire detections.',
    features: [
      'Interactive 3D satellite map with zoom, tilt, and rotate',
      'Facility markers scaled by impact — bigger glow = more critical',
      'Real-time disruption level monitoring (normal to catastrophe)',
      'NASA FIRMS satellite fire detections as heatmap + pulsing markers',
      '20+ curated facilities including strategic chokepoints',
      'Deploy cost: $0 — built entirely on free, open-source tools',
    ],
    techStack: ['Next.js', 'TypeScript', 'Mapbox GL', 'NASA FIRMS API', 'Cloudflare Pages', 'Vercel'],
    github: 'https://github.com/Sujaya-Nimneth/Oil-Burn-Tracker',
    live: 'https://oil-burn-tracker.vercel.app',
    year: '2026',
  },
  {
    title: 'NeuroSync',
    subtitle: 'SDGP University Group Project — ADHD Focus Companion App',
    description: 'A calm productivity mobile app designed for ADHD minds, built as part of the Software Development Group Project (SDGP) module. NeuroSync offers gentle structure, emotion-aware guidance, and one clear next step at a time — helping users focus without pressure.',
    features: [
      'Focus mode with calming soundscapes and distraction-light UI',
      'AI-powered task breakdown for overwhelming work',
      'Adaptive routine builder with flexible scheduling',
      'Mood tracking with pattern recognition and self-awareness',
      'Guilt-free recovery system — no streak anxiety or punishment',
      'Minimal dashboard designed to reduce cognitive load',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'Docker'],
    github: 'https://github.com/SDGP-CS75/neurosync-app',
    live: 'https://www.neurosync.social',
    year: '2026',
  },
  {
    title: 'Voxelle',
    subtitle: 'A cutting-edge, voice-first multimodal AI assistant designed with a futuristic cyber-dark aesthetic',
    description: 'Voxelle is a cutting-edge, voice-first multimodal AI assistant designed with a futuristic cyber-dark aesthetic. Built on the modern Next.js 16 (App Router) and React 19, Voxelle integrates state-of-the-art Web Speech technologies, advanced AI reasoning, and multi-provider LLM support. It features a stunning glassmorphic UI, responsive micro-animations, real-time function calling panels, and full multimodal vision capabilities.',
    features: [
      'Intelligent speech-to-text (STT) via the browser\'s Web Speech API',
      'High-fidelity text-to-speech (TTS) responses with manual audio interruption control',
      'Server-side API router supporting Gemini 2.0 Flash and Groq (Llama-3.3-70b)',
      'Frictionless offline/demo mode with zero API key requirement',
      'Intelligent function calling for calendar events and smart home device toggles',
      'Futuristic cyberpunk glassmorphism layout styled with Tailwind CSS v4 and Framer Motion',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Gemini API'],
    github: 'https://github.com/Sujaya-Nimneth/voxelle',
    live: '#',
    year: '2026',
  },
  {
    title: 'Prediction Market Aggregator',
    subtitle: 'Full-stack platform consolidating event forecasting data with in-memory cache layer',
    description: 'A full-stack TypeScript application that aggregates prediction market data from Kalshi and Polymarket, matches semantically similar events using text similarity, computes volume-weighted aggregate probabilities, and exposes the results via a secure REST API with a premium Next.js dashboard.',
    features: [
      'Real-time prediction market data ingestion from Kalshi and Polymarket APIs',
      'Semantic event matching engine powered by custom text similarity models',
      'Volume-weighted aggregation calculating consolidated probability percentages',
      'High-performance Express API backend secured with rate limiting and Helmet',
      'In-memory TTL cache layer to optimize API performance and request frequencies',
      'Premium frontend dashboard leveraging Next.js 15 App Router and Tailwind CSS',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Axios'],
    github: 'https://github.com/Sujaya-Nimneth/Prediction-market-aggregator',
    live: '#',
    year: '2026',
  },
  {
    title: 'Steam Matchmaking Platform',
    subtitle: 'A gamer-focused matchmaking system utilizing official Steam APIs and Compatibility Scores',
    description: 'A custom matchmaking platform designed like Tinder for finding your perfect gaming duo. Our platform uses your Steam gaming data to securely authenticate via OpenID and intelligently match you with players who share your interests, playstyles, and dedication to the games you love.',
    features: [
      'Secure Steam OpenID authentication flow with automatic profile synchronization',
      'Real-time Steam Web API integration fetching user libraries and recent playtime summaries',
      'Intelligent matchmaking engine calculating compatibility score (0-100)',
      'Playtime similarity logarithmic formulas and a 1.5x recent activity multiplier',
      'Playstyle synergy recognition tracking Casual, Competitive, and Hardcore categories',
      'Profile integrity checks displaying real-time VAC ban status',
    ],
    techStack: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Steam Web API'],
    github: 'https://github.com/Sujaya-Nimneth/steam-matchmaking-platform',
    live: '#',
    year: '2026',
  },
  {
    title: 'Aurora TaskFlow',
    subtitle: 'A modern project management platform for teams',
    description: 'A modern project management platform with Kanban boards, real-time collaboration, and intelligent task prioritization. Built with a focus on developer experience and team productivity.',
    features: [
      'Kanban boards with drag-and-drop task management',
      'Real-time collaboration via WebSockets',
      'Intelligent task prioritization and filtering',
      'Board, list, and calendar views',
      'User testing session tracking and analytics',
      'Responsive design for mobile and desktop',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    github: 'https://github.com/Sujaya-Nimneth',
    live: '#',
    year: '2026',
  },
  {
    title: 'CryptoFlow Analytics',
    subtitle: 'Real-time cryptocurrency analytics dashboard',
    description: 'A real-time cryptocurrency analytics dashboard featuring live price tracking, portfolio management, candlestick charts, and intelligent market alerts with a sleek, data-rich interface.',
    features: [
      'Live price tracking with real-time data updates',
      'Portfolio management with performance analytics',
      'Interactive candlestick charts and market trends',
      'Intelligent market alerts and notifications',
      'Watchlist with top gainers and market overview',
      'Portfolio allocation breakdown and insights',
    ],
    techStack: ['Next.js', 'Chart.js', 'REST API', 'Supabase'],
    github: 'https://github.com/Sujaya-Nimneth/cryptoflow',
    live: 'https://9dffbbf5.cryptoflow-c4x.pages.dev',
    year: '2026',
  },
  {
    title: 'Autonomous RL Agent Arena',
    subtitle: 'Deep reinforcement learning agent training and visual simulation playground',
    description: 'An interactive, web-based simulation and training environment for reinforcement learning agents. Users can configure, train, and visualize deep reinforcement learning models (such as Q-Learning and Deep Q-Networks) in real time across custom-built gridworlds and control environments. The platform renders real-time reward convergence metrics, interactive agent path planning overlays, and dynamic Q-value mapping.',
    features: [
      'Real-time training visualization with adjustable learning rates and exploration policy overrides',
      'Customizable physics-based gridworld environments with dynamic obstacle placement',
      'Fully client-side model execution using TensorFlow.js for deep Q-networks (DQN)',
      'Interactive state-action value (Q-value) heatmap overlays updated on every step',
      'Dynamic reward convergence line graphs and episode performance tracking metrics',
      'Frictionless sandbox controls to pause, accelerate, and checkpoint model training states',
    ],
    techStack: ['TypeScript', 'React', 'TensorFlow.js', 'Chart.js', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/Sujaya-Nimneth/reinforcement-learning-agent',
    live: '#',
    year: '2026',
  },
];

export const education: Education[] = [
  {
    institution: 'University of Westminster',
    degree: 'Undergraduate — Computer Science / Software Engineering',
    period: 'Present',
    description: 'Currently pursuing undergraduate studies with a focus on software engineering, algorithms, and modern web technologies. Engaged in group projects, hackathons, and self-directed learning in AI/ML.',
    affiliation: 'Affiliated with IIT Sri Lanka',
  },
];

export const typingTexts = [
  'Hello World_',
  'Full Stack Engineer_',
  'Software Developer_',
  'AI/ML Enthusiast_',
  'Problem Solver_',
];

// Terminal commands and responses for the About section
export const terminalCommands: Record<string, string> = {
  'help': `Available commands:
  about       - Who am I?
  skills      - My technical skills
  interests   - What drives me
  education   - My academic background
  gaming      - My origin story
  contact     - How to reach me
  clear       - Clear terminal
  help        - Show this menu`,

  'about': `> Hi, I'm Sujaya Nimneth. 👋

  I'm a Full Stack Engineer with a deep obsession
  for dissecting complex systems. I translate
  deep-dive focus and determination into solving
  real-world technological challenges.

  I approach every project with the relentless
  dedication of a lifelong enthusiast. 🚀`,

  'skills': `> Technical Arsenal:
  ├── Languages:  JavaScript, TypeScript, Python, Java
  ├── Frontend:   React, Next.js, Vue.js, TailwindCSS
  ├── Backend:    Node.js, Express, PostgreSQL, MongoDB
  └── Tools:      Git, Docker, Vite, VS Code, Figma`,

  'interests': `> Professional Interests:
  ┌─────────────────────────────────────────┐
  │  Software Development  ██████████  100% │
  │  AI / Machine Learning ████████░░   80% │
  │  System Architecture   ███████░░░   70% │
  │  Problem Solving       ██████████  100% │
  └─────────────────────────────────────────┘`,

  'education': `> Academic Background:
  🎓 University of Westminster
     BSc Computer Science / Software Engineering
     📍 Affiliated with IIT Sri Lanka
     📅 Currently Pursuing (Undergraduate)`,

  'gaming': `> Origin Story:
  My journey into tech began at age 7 with a
  controller in my hand. I wasn't merely playing
  games — I was captivated by the intricate
  mechanics, logic, and architectural designs
  that powered those digital landscapes.

  That childhood curiosity about how things work
  "under the hood" became my professional drive.
  Today, I bring that same gamer's determination
  to every coding challenge. 🎮`,

  'contact': `> Let's Connect:
  📧  sujayanimneth@outlook.com
  🔗  linkedin.com/in/sujaya-nimneth-9280b4254
  🐙  github.com/Sujaya-Nimneth`,
};
