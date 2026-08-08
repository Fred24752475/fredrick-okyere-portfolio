export const profile = {
  name: 'Fredrick Okyere',
  shortName: 'Fredrick',
  tagline:
    'I build full-stack products — Flutter apps, realtime backends, and cloud infra — with a cybersecurity mindset.',
  email: 'fredrickokyere60@gmail.com',
  emailAlt: 'fredrickokyere777@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fredrick-okyere-43677124a',
  github: 'https://github.com/Fred24752475',
  location: 'Ghana · Open to opportunities',
  about: [
    'I’m a builder who ships end-to-end: mobile clients in Flutter, backends on Supabase and Node, and edge/CDN work on Cloudflare — plus Redis-backed APIs on Render when speed matters.',
    'I also care about how systems stay safe. Alongside product work, I’ve practiced cybersecurity analysis, Linux, and Windows log investigation so security isn’t an afterthought.',
    'My flagship product is SAYLYT — a social + learning app with feed, reels, chat, AI learn tools, and explore — live at saylyt.com.',
  ],
};

export type Project = {
  name: string;
  role: string;
  summary: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: 'SAYLYT',
    role: 'Founder · Full-stack',
    summary:
      'Social + learning app: endless feed, reels, stories, AI learn, realtime chat/calls, and explore. Built for speed with Supabase realtime, FCM push, Cloudflare media CDN, Redis feed cache, and Workers AI search.',
    stack: [
      'Flutter',
      'Supabase',
      'Cloudflare',
      'Redis',
      'Render',
      'FCM',
      'TypeScript',
    ],
    liveUrl: 'https://saylyt.com',
    repoUrl: 'https://github.com/Fred24752475',
    featured: true,
  },
  {
    name: 'American Buddy Bot',
    role: 'Builder',
    summary:
      'WhatsApp multi-device bot powered by Groq AI — conversational assistant wired for real messaging workflows.',
    stack: ['JavaScript', 'WhatsApp MD', 'Groq AI'],
    repoUrl: 'https://github.com/Fred24752475/American-buddy-bot',
  },
  {
    name: 'LEXai',
    role: 'Hackathon builder',
    summary:
      'TypeScript hackathon project exploring AI-assisted experiences under tight shipping constraints.',
    stack: ['TypeScript', 'AI'],
    repoUrl: 'https://github.com/Fred24752475/LEXai',
  },
  {
    name: 'UCC Shuttle Tracker',
    role: 'Developer',
    summary:
      'University of Cape Coast shuttle tracking — help students see campus shuttle movement across routes.',
    stack: ['HTML', 'Web', 'Tracking'],
    repoUrl:
      'https://github.com/Fred24752475/ucc-shuttle-tracker33333321323',
  },
  {
    name: 'Windows Event Log Analysis',
    role: 'Security practice',
    summary:
      'Hands-on analysis of login events, failed attempts, and system changes using Windows Event Viewer workflows — SOC-minded fundamentals.',
    stack: ['Cybersecurity', 'Windows', 'Log analysis'],
    repoUrl:
      'https://github.com/Fred24752475/Log-Analysis-with-Windows-Event-Viewer',
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['Dart', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Mobile & Web',
    items: ['Flutter', 'Frontend', 'Backend', 'REST APIs', 'Website development'],
  },
  {
    title: 'Cloud & Data',
    items: ['Supabase', 'Cloudflare', 'Redis', 'Docker', 'Render', 'Sentry'],
  },
  {
    title: 'DevOps',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Linux'],
  },
  {
    title: 'Security',
    items: [
      'Cybersecurity analysis',
      'Log analysis',
      'Linux hardening basics',
      'Secure auth patterns',
    ],
  },
];
