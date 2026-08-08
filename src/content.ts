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
    name: 'LEXai / LexGH',
    role: 'Hackathon · 1st place',
    summary:
      'Cursor UCC Hackathon — team LexGH took 1st place ($500 Cursor Credits). Built under pressure with real collaboration, late nights, and a shipping mindset.',
    stack: ['TypeScript', 'AI', 'Hackathon', 'Team'],
    repoUrl: 'https://github.com/Fred24752475/LEXai',
    featured: true,
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

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
};

export const photos: Photo[] = [
  {
    src: '/photos/07-fredrick-typing.png',
    alt: 'Fredrick coding at Cursor UCC Hackathon',
    caption: 'In the zone — Cursor UCC Hackathon',
    wide: true,
  },
  {
    src: '/photos/06-fredrick-mobile.png',
    alt: 'Fredrick testing on phone beside teammate',
    caption: 'Building & testing with the team',
  },
  {
    src: '/photos/02-cursor-banner.png',
    alt: 'Hackathon room with Cursor banner',
    caption: 'Late-night build energy',
  },
  {
    src: '/photos/08-collab-screen.png',
    alt: 'Pairing on a laptop at the hackathon',
    caption: 'Pair debugging',
  },
  {
    src: '/photos/11-lexgh-first.png',
    alt: 'LexGH team holding first place check',
    caption: '1st place — LexGH · Cursor UCC Hackathon',
    wide: true,
  },
  {
    src: '/photos/12-lexgh-win.png',
    alt: 'LexGH winners with Cursor credits check',
    caption: '$500 Cursor Credits · 1st Place Winner',
  },
  {
    src: '/photos/13-handshake.png',
    alt: 'Team handshake with prize check',
    caption: 'LexGH celebrating the win',
  },
  {
    src: '/photos/14-group.png',
    alt: 'Full Cursor Hackathon group photo',
    caption: 'Cursor Hackathon · UCC community',
    wide: true,
  },
  {
    src: '/photos/09-lab-huddle.png',
    alt: 'Team huddled around a monitor',
    caption: 'Huddle around the build',
  },
  {
    src: '/photos/10-team-huddle.png',
    alt: 'Collaborating around dual monitors',
    caption: 'Shipping together',
  },
  {
    src: '/photos/04-team-table.png',
    alt: 'Team working at shared tables',
    caption: 'Table-side collaboration',
  },
  {
    src: '/photos/01-focus.png',
    alt: 'Focused coding session at hackathon',
    caption: 'Focus mode',
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
