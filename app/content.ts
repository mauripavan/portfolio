export const profile = {
  name: "Mauricio Pavan",
  role: "Product Engineer, web and mobile",
  location: "Buenos Aires, Argentina",
  email: "mauriciopavan60@gmail.com",
  linkedin: "https://www.linkedin.com/in/mauriciopavan",
  github: "https://github.com/mauripavan",
  cv: "/cv-mauricio-pavan.pdf",
};

export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "Libra Seguros",
    title: "Product Engineer (Web & Mobile) / Mobile Lead",
    start: "Nov 2025",
    end: "Nov 2026",
    summary:
      "Led the company's mobile app from an empty repo to the App Store and Play Store, while building two web products in parallel.",
    highlights: [
      "Defined the mobile architecture, development standards and team practices for the React Native app.",
      "Built authentication, push notifications and API integration through a BFF layer that orchestrated external services.",
      "Built and maintained Libra Hub, an internal web platform, and the insurance multi-quote tool with Next.js, React and TypeScript.",
      "Improved production stability through debugging and error monitoring with Sentry.",
      "Mentored 2 developers and took part in the team's technical decisions.",
      "Brought AI-assisted development into the workflow: Claude Code and Cursor agents, plus bots for code review, fixing Sentry errors and ticket management.",
    ],
    stack: ["React Native", "Expo", "Next.js", "TypeScript", "Sentry", "BFF"],
  },
  {
    company: "Vía Bariloche",
    title: "React Native Developer",
    start: "Jun 2024",
    end: "Nov 2025",
    summary:
      "Worked on Viapago, a high-traffic payments app in production, where every release touches real money.",
    highlights: [
      "Built secure payment flows, authentication and integration with a BFF layer that orchestrated external services.",
      "Integrated payment providers, KYC and analytics, and protected the APIs with SSL pinning and captcha.",
      "Shipped QR and barcode scanning, push notifications (Firebase/APNs) and OTA updates.",
      "Improved performance and stability through refactoring, dependency upgrades and Sentry monitoring.",
    ],
    stack: ["React Native", "Payments", "KYC", "SSL pinning", "Firebase", "OTA"],
  },
  {
    company: "DFSoft",
    title: "React Native Developer",
    start: "Oct 2023",
    end: "Jun 2024",
    summary:
      "Built features for client apps inside agile teams with code reviews and iterative delivery.",
    highlights: [
      "Built scalable features with Clean Architecture and refactored legacy code with SOLID and a modular structure.",
      "Integrated REST and GraphQL APIs, geolocation and Mercado Pago payments.",
    ],
    stack: ["React Native", "Clean Architecture", "GraphQL", "Mercado Pago"],
  },
  {
    company: "Freelance",
    title: "React Native Developer",
    start: "Apr 2022",
    end: "Oct 2023",
    summary: "Designed and built apps end to end for my own clients.",
    highlights: [
      "Built React Native and Expo apps from scratch, integrated with APIs and backend services.",
      "Implemented Stripe payments, push notifications and complex Reanimated animations.",
      "Automated builds and releases with EAS Build, CI/CD and OTA updates.",
    ],
    stack: ["React Native", "Expo", "Stripe", "Reanimated", "EAS Build"],
  },
];

export const strengths = [
  {
    title: "Product ownership, end to end",
    body: "From architecture to the store listing. I work closely with backend and product to decide what to build, not just how.",
  },
  {
    title: "Web and mobile in one stack",
    body: "React, Next.js and React Native with TypeScript, so the same person can ship the app and the web product around it.",
  },
  {
    title: "Stable in production",
    body: "Sentry, careful releases and OTA updates. I care about what happens after the deploy.",
  },
  {
    title: "Payments and security",
    body: "Stripe, Mercado Pago, KYC, SSL pinning and captcha, in apps that move real money.",
  },
  {
    title: "Technical leadership",
    body: "Setting standards, reviewing code and mentoring developers so the team ships with confidence.",
  },
  {
    title: "Agentic workflows",
    body: "I work daily with Claude Code, Cursor and review bots, and I'm increasingly focused on building AI-powered products.",
  },
];

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages and web", items: ["TypeScript", "JavaScript", "React", "Next.js", "zod"] },
  {
    group: "Mobile",
    items: ["React Native", "Expo", "Reanimated", "iOS and Android", "Store releases", "OTA updates", "Offline-first"],
  },
  {
    group: "State, data and APIs",
    items: ["Redux", "Zustand", "React Query", "REST", "GraphQL", "Socket.io", "Firebase", "APNs"],
  },
  { group: "Payments and security", items: ["Stripe", "Mercado Pago", "KYC", "SSL pinning", "Captcha"] },
  {
    group: "Quality and delivery",
    items: ["Jest", "React Native Testing Library", "Sentry", "EAS Build", "CI/CD", "Code review"],
  },
  {
    group: "Applied AI",
    items: ["Claude Code", "Cursor", "LLMs", "RAG", "Embeddings", "Evals", "Tool calling", "Streaming UI"],
  },
  {
    group: "Architecture",
    items: ["Clean Architecture", "SOLID", "Modular architecture", "BFF", "Microfrontends"],
  },
];

export const sideProject = {
  name: "Papelera Isene",
  summary:
    "My father runs a paper-goods store where every product and price lived on paper. I'm digitizing it: a product and price database, an admin panel he uses every day, and a WhatsApp bot that sends price lists and takes orders.",
  points: [
    "Admin panel in production, where he reviews products, edits prices and manages orders.",
    "Pricing rules per payment method, since cash and transfer prices differ by product.",
    "WhatsApp bot on the official API, running end to end: it takes the order, confirms stock with the store and asks for the receipt.",
  ],
  stack: ["Express", "Prisma", "PostgreSQL", "React", "Vite", "TanStack Query", "WhatsApp API", "Railway"],
  repo: "https://github.com/mauripavan/papelera-isene-api",
};
