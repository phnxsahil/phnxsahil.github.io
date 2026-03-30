export interface Project {
  id: string;
  name: string;
  label: string;
  year: string;
  summary: string;
  description: string;
  highlight: string;
  stack: string[];
  url: string;
  github?: string;
  image?: string;
  featured: boolean;
  category: 'AI' | 'Social' | 'Fintech' | 'Tooling';
  outcomes: string[];
  decisions: string[];
  architecture?: string;
  challenge?: string;
  uxPerspective?: string;
  techPerspective?: string;
  uxDeepDive?: string;
  techDeepDive?: string;
}

export const projects: Project[] = [
  {
    id: 'miryn-ai',
    name: 'Miryn AI',
    label: 'AI context-companion / Identity Engine',
    year: '2025',
    featured: true,
    category: 'AI',
    url: 'https://miryn-ai.vercel.app',
    github: 'https://github.com/phnxsahil/Miryn-AI',
    image: '/projects/miryn.png',
    summary: 'Solves AI amnesia by creating a persistent identity engine that grows with the user.',
    description: 'Miryn AI moves beyond transactional chat by implementing a persistent identity layer. It tracks versioned traits, values, and open loops to build a reflective "second brain" that evolves as you use it.',
    uxPerspective: 'Identity-first interface designed for "shared growth" rather than "one-off answers."',
    techPerspective: 'Hybrid memory layer using pgvector for semantic recall and Redis for real-time state management.',
    uxDeepDive: 'The UI of Miryn AI is built on the premise that reflection is hard. We removed standard input forms in favor of a "thought canvas" that reacts to user speed. The functional UX includes a reflective "think-aloud" pipeline where the AI evaluates past context before responding, creating a seamless bridge between past and present entries. The core differentiator is the transition from "active input" to "passive reflection," facilitated by smooth, quintic-eased layout shifts.',
    techDeepDive: 'Architecturally, the app leverages a distributed RAG pipeline. We use pgvector (Supabase) for sub-100ms similarity search and a custom FastAPI worker to re-rank retrieved contexts based on emotional intensity. A Redis-backed identity system allows traits, values, and beliefs to be versioned, ensuring the companion doesnt just remember facts, but the evolving persona of the user.',
    highlight: 'Persistent Identity Engine with semantic recall',
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Redis', 'OpenAI'],
    outcomes: [
      'Successfully modeled long-term trait evolution in AI',
      'Production-ready vector search with context re-ranking',
      'Waitlist for private beta with active user testing'
    ],
    decisions: [
      'Built a hybrid RAG system to combine short-term and long-term memory.',
      'Implemented versioned traits to allow the AI identity to change over time.',
      'Used a reflection pipeline to summarize entities and emotions automatically.'
    ],
    challenge: 'The primary challenge was preventing "context drift," where the AI loses its specific persona over long chat histories.',
    architecture: 'Miryn uses a decoupled architecture where a FastAPI backend orchestrates semantic search and identity management, while a Next.js frontend handles the reflective interaction design.'
  },
  {
    id: 'fltrd',
    name: 'FLTRD',
    label: 'stop doomscrolling. start living. / Product design',
    year: '2025',
    featured: true,
    category: 'Social',
    url: 'https://fl-trd.vercel.app',
    github: 'https://github.com/phnxsahil/Fltrd',
    image: '/projects/fl-trd.png',
    summary: 'Protecting user attention by condensing the internet into a 3-5 item daily quota.',
    description: 'FLTRD fights the attention economy. It protects users from infinite consumption by using an intent-based ranking system that restricts the entire internet to a handful of high-value items per day.',
    uxPerspective: 'Attention-quota design using Fira Code and Cabinet Grotesk for deep reading.',
    techPerspective: 'Intent-vector routing logic processing curated content at the network edge.',
    uxDeepDive: 'The "slow social" experience is achieved through intentional friction. We introduced a hard quota system where users only see updates during specific windows of their choosing, preventing the dopamine-loop of constant refreshing. The typography prioritizes concentration, utilizing Fira Code for metadata and Cabinet Grotesk for body text to reduce cognitive load during consumption.',
    techDeepDive: 'The "Intent-Rank" system is powered by a custom scoring algorithm running on Vercel Edge. By mapping user interest vectors to content embeddings in real-time, we deliver a personalized feed without the overhead of a massive database lookup, ensuring sub-50ms TTFB for high-concurrency feed updates.',
    highlight: 'Proprietary Intent-Rank scoring system',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion', 'Tailwind'],
    outcomes: [
      'Filtered internet noise to 3-5 high-value items per user',
      'Intent-based ranking logic running on global edge',
      'Shipped specialized design language (Fira Code Integration)'
    ],
    decisions: [
      'Intentionally broke infinite scroll patterns to "go touch grass."',
      'Ranked content by intent-depth rather than raw engagement stats.',
      'Implemented a time-windowed digest to protect cognitive focus.'
    ],
    challenge: 'Winning back attention from platforms designed to steal it required a UI that was both extremely premium and fundamentally un-addictive.',
    architecture: 'Full-stack TypeScript application leveraging Vercel Edge Functions for real-time personalization and intent-based sorting.'
  },
  {
    id: 'stash',
    name: 'Stash',
    label: "The Internet's Save Button for Music",
    year: '2025',
    featured: false,
    category: 'Tooling',
    url: 'https://stashyourmusic.vercel.app',
    github: 'https://github.com/phnxsahil/Stash',
    summary: 'Bridges social music discovery and Spotify utility with a single link-paste.',
    description: 'Stash solves the friction between finding a song on Instagram Reels and actually stashing it in your library. It auto-extracts audio, identifies tracks, and adds them to Spotify instantly.',
    uxDeepDive: 'We solved "discovery amnesia." The UX is built around a single input bar that handles all complexity. It handles the "wait state" through elegant progress indicators while audio metadata is being extracted and matched against the Spotify catalog.',
    techDeepDive: 'Stash uses an async worker architecture. When a link is stashed, a FastAPI backend uses run_in_executor with yt-dlp for non-blocking concurrent metadata extraction. We implemented UUID-based temporary file management to ensure thread safety across thousands of concurrent stashes.',
    highlight: 'Concurrent metadata extraction with yt-dlp',
    stack: ['React', 'FastAPI', 'yt-dlp', 'Spotify API', 'Gemini'],
    outcomes: [
      'Eliminated 3-step friction for saving songs from social clips',
      'Handled concurrent stashes with atomic temp-file logic',
      'Integration with Spotify API for zero-click stashing'
    ],
    decisions: [
      'Used server-side extraction to bypass browser-based player restrictions.',
      'Implemented async task queues to handle song identification spikes.',
      'Prioritized Spotify URI accuracy over raw extraction speed.'
    ]
  },
  {
    id: 'bookie',
    name: 'Bookie',
    label: 'Bake your Bookie / Knowledge curation',
    year: '2024',
    featured: false,
    category: 'Tooling',
    url: 'https://bookieapp.vercel.app',
    github: 'https://github.com/phnxsahil/Bookie_App',
    summary: 'Bypassing regional ISP blocks (Jio/Airtel) to bake bookmarks into organized knowledge.',
    description: 'Bookie is a bookmark manager that works where others fail. Built to bypass regional DNS blocks, it uses a custom proxy to protect the knowledge-organization flow.',
    uxDeepDive: 'The "Baking" workflow turns static links into dynamic assets. The UX focus was on "Instant Curation"—where a link paste immediately yields a summary, a tag-cloud, and a semantic index entry, ensuring the user actually learns rather than just "collects."',
    techDeepDive: 'To solve the regional ISP (Jio/Airtel) blocks on Supabase/Google Auth, we engineered a custom OAuth relay proxy. We also implemented a scraping pipeline using Cloudflare Workers to bypass CORS and headless-detection, allowing high-fidelity content extraction from JS-heavy sites.',
    highlight: 'Regional ISP-bypass via custom OAuth relay',
    stack: ['Next.js', 'Supabase', 'Cloudflare Workers', 'Google Auth API'],
    outcomes: [
      'Enabled seamless usage for 100% of Indian regional ISP users',
      'Automated curation pipeline (summary + tags) with Gemini',
      'High-speed scraping via edge infrastructure'
    ],
    decisions: [
      'Built a custom proxy layer to solve regional DNS hijacking issues.',
      'Used edge workers to prevent scraping blocks and improve reliability.',
      'Designed a category-first UX to encourage active link classification.'
    ]
  },
  {
    id: 'chai-paani',
    name: 'ChaiPaani',
    label: 'Settling bills with atomic certainty',
    year: '2025',
    featured: false,
    category: 'Fintech',
    url: 'https://chai-paani.vercel.app',
    github: 'https://github.com/phnxsahil/ChaiPaani_app',
    summary: 'Solving social debt friction with atomic database precision.',
    description: 'ChaiPaani ensures group expenses are handled with financial certainty. It moves calculation logic from the frontend to the database for guaranteed balance accuracy.',
    uxDeepDive: 'The UI focuses on "Zero-Calc" certainty. Users see their real-time net-balance at all times, with a "Settlement-Sim" that shows exactly who needs to pay whom to reach a zero-debt state in the minimum number of steps.',
    techDeepDive: 'ChaiPaani uses PostgreSQL Security Definer functions to handle all balance math directly in the database layer. This ensures that every settlement is atomic and accurate, even if the user has a poor network connection or if the client-side state is out of sync.',
    highlight: 'Atomic math via SQL Security Definer functions',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Zustand'],
    outcomes: [
      'Guaranteed 100% financial integrity via DB-level logic',
      'Instant settlement discovery with graph-optimization search',
      'Real-time balance updates across group members'
    ],
    decisions: [
      'Moved math logic to SQL to prevent frontend calculation mismatches.',
      'Leveraged Supabase RLS to ensure group privacy and security.',
      'Used Zustand for lightweight, reactive state management.'
    ]
  }
];
