export interface Project {
  slug: string
  name: string
  /** Employer or context shown as the small caption on cards. */
  org: string
  /** One-line description for cards. */
  tagline: string
  /** Long description for the project page, paragraphs. */
  story: string[]
  role: string
  years: string
  url?: string
  tags: string[]
  featured?: boolean
}

// Galleries: src/assets/projects/<slug>/1.jpg, 2.jpg ... in display order.
const galleryFiles = import.meta.glob<string>('../assets/projects/*/*.jpg', { eager: true, import: 'default' })
const logoFiles = import.meta.glob<string>('../assets/logos/*', { eager: true, import: 'default' })

export function galleryOf(slug: string): string[] {
  return Object.entries(galleryFiles)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => Number(a.match(/(\d+)\.jpg$/)?.[1]) - Number(b.match(/(\d+)\.jpg$/)?.[1]))
    .map(([, url]) => url)
}

export function logoOf(slug: string): string | undefined {
  return Object.entries(logoFiles).find(([path]) => path.includes(`/logos/${slug}.`))?.[1]
}

/** Logos drawn for a light background need a light tile; these are white-on-transparent. */
export const LIGHT_LOGOS = new Set(['nextdocs'])

export const projects: Project[] = [
  {
    slug: 'nextdocs',
    name: 'nextdocs.ai',
    org: 'Founder · 2024 — now',
    tagline:
      'AI-native documentation platform: 14 services, Yjs collaborative editor over NATS, two-way GitHub sync, RAG and an MCP server for Claude connectors.',
    story: [
      'Nextdocs.ai gives a team fast, readable documentation in two clicks, with a built-in WYSIWYG editor in the spirit of Notion. Editing is collaborative, diagrams are collaborative, and access control mirrors GitHub so nobody spends time on configuration. Documentation updates itself when the code changes.',
      'Fourteen services, each in its own repository: a Go core API, chat and comments; TypeScript auth, a CRDT collaboration backend and a markdown↔Yjs converter; a Python LangGraph agent, RAG, documentation generator and an MCP server. NATS JetStream is the event bus; Postgres, Weaviate and Redis hold state; a Helm chart deploys the whole set on any domain.',
      'The agent answers over a RAG index built from tree-sitter chunks and BGE-M3 embeddings, with intent routing and per-user LLM quota metering. The MCP server exposes 36 tools behind OAuth 2.1, so Claude and other agents can read and write the docs.',
    ],
    role: 'Founder, sole architect',
    years: '2024 — present',
    url: 'https://nextdocs.ai',
    tags: ['Go', 'TypeScript', 'Python', 'NATS JetStream', 'Weaviate', 'Yjs', 'LangGraph', 'MCP', 'Helm'],
    featured: true,
  },
  {
    slug: 'search-engine',
    name: 'Search Engine',
    org: 'Samsung',
    tagline: 'Search and recommendation over 20M+ heterogeneous records in 11–50 ms.',
    story: [
      'A search system with an integrated recommendation engine and automatic typo correction. Several concepts were reworked along the way: vector representations, TF-IDF, LLMs, combinatorics, Soundex-style algorithms, Levenshtein and Damerau-Levenshtein distances, prefix indexing and combinations of them.',
      'Load testing covered the supporting software as well: Postgres, ElasticSearch, ClickHouse, a vector database and Redis. SERP satisfaction went from 30% to 73%.',
    ],
    role: 'Head of Research and Development',
    years: '2023 — 2024',
    tags: ['Python', 'ElasticSearch', 'ClickHouse', 'LLM', 'ML'],
  },
  {
    slug: '5g-oran',
    name: '5G · O-RAN',
    org: 'Nokia',
    tagline: 'Monitoring and configuration of 3GPP/LTE/5G devices in O-RAN architecture.',
    story: [
      'O-RAN standardizes mobile network equipment: a device from manufacturer X can be replaced by one from manufacturer Y without losing compatibility. Our team built the system that monitors and configures CU/DU/RU devices, composing their configuration and delivering it over NETCONF to confD.',
      'The UI is generated from YANG data models, so when the model version changes the interface rebuilds itself. The same interface plugs into the global network management system and into a single network element, including the case where an engineer connects with a patch cord and opens a browser. A remote terminal with history, search and command templates, and configurable dashboards built from the first frame received on the socket, completed the tool.',
    ],
    role: 'Senior Software Engineer',
    years: '2021 — 2023',
    url: 'https://www.nokia.com/networks/5g',
    tags: ['Go', 'React', 'YANG', 'NETCONF', 'Kubernetes'],
  },
  {
    slug: 'map',
    name: 'MAP',
    org: 'Platform team',
    tagline: 'Orchestration, deployment and monitoring of containers — Kubernetes with a GUI.',
    story: [
      'An orchestration, deployment and container control system: tracing with Zipkin, data in MongoDB and Postgres, logs through Kafka and the Elastic stack, queues on RabbitMQ. A GROK-pattern builder made log parsing fast, and we started automating it.',
      'Applications in Java, Go, Node.js, Docker containers and static sites deployed with a click; SSO closed authorization for related services; a hierarchical RBAC limited data access by role across every store; rule-based alerting was configured in the GUI. Planning and research often ran two or three months ahead. The best team efficiency I have seen.',
    ],
    role: 'Software Engineer',
    years: '2021 — 2022',
    tags: ['Go', 'Kafka', 'ElasticSearch', 'RabbitMQ', 'SSO', 'RBAC'],
  },
  {
    slug: 'go-music',
    name: 'Go Music',
    org: 'Side project',
    tagline: 'Music sharing and recognition for iOS, Android and Web, built from scratch.',
    story: [
      'A team of specialists found itself between projects and built a product. Nobody but me had done cross-platform work, so the MVP stack became Flutter and Go, tested through Appium. Integrations were planned from day one, so every interaction with other services was documented in Postman and written up in detail.',
      'The differentiator is simplicity: copy a link to a track in Apple Music, Spotify or TikTok and open it wherever you want — three steps, no sign-up. I worked hard on a UI kit that feels native on Android, iOS and Web at once. Automatic iOS builds ship to TestFlight.',
    ],
    role: 'Software Engineer',
    years: '2022 — 2023',
    url: 'https://web.gomusic.to',
    tags: ['Flutter', 'Go', 'AWS', 'Python', 'Node.js'],
  },
  {
    slug: 'bike-net',
    name: 'bike.net',
    org: 'Marketplace',
    tagline: 'A marketplace integrated into an existing social network for bikers.',
    story: [
      'A marketplace integrated into an existing social network: personal and company accounts, search and filtering by price and category, a "similar products" block and multi-language support.',
      'The project ran on a custom MVC framework with MySQL, and Solr as the search engine — all filtering and search lived there. Creating or updating a record queued an index update. HTML came from PHP and XSLT; both Solr and XSLT had to be learned for this project.',
    ],
    role: 'Software Engineer',
    years: '2018',
    url: 'https://bike.net',
    tags: ['PHP', 'Solr', 'MySQL', 'XSLT'],
  },
  {
    slug: 'neo4web',
    name: 'Neo4Web',
    org: 'Locka',
    tagline: 'Streaming service for apartment previews rendered in Unreal Engine, up to 4K.',
    story: [
      'A web application driving an Unreal Engine scene: move around the city, pick an apartment, walk inside. Apartments filter by price, rooms, area and more.',
      'The browser talks to Unreal Engine through Pixel Streaming over WebRTC. The hard part was understanding how UE implemented WebRTC; some Safari and Firefox bugs took a few versions to be fixed. Built with React and Vue.',
    ],
    role: 'Team Lead',
    years: '2020 — 2021',
    url: 'https://www.locka.com/',
    tags: ['WebRTC', 'Pixel Streaming', 'React', 'Vue', 'Node.js'],
  },
  {
    slug: 'frieze',
    name: 'Frieze',
    org: 'Art fair',
    tagline: 'Online viewing room integrated into the existing Frieze website.',
    story: [
      'An online gallery integrated into an existing site: pixel-accurate layout with every detail of photo and video display considered, a UI kit, and two-factor authentication by phone number.',
    ],
    role: 'Frontend Engineer',
    years: '2020',
    url: 'https://www.frieze.com/',
    tags: ['React', 'UI kit', '2FA'],
  },
  {
    slug: 'durex-match',
    name: 'Durex Match',
    org: 'VK mini app',
    tagline: 'A Tinder-like marketing app inside VK with up to 50,000 active users a day.',
    story: [
      'A matching mechanic added to an existing client app to raise brand engagement: a user takes a test and sends a link; the other person takes it too, and both get their matching score.',
      'Frontend in JavaScript and React, backend in PHP and Laravel on MySQL. The platform allowed one push notification a day, so users activate a chatbot and receive all results as bot messages — RabbitMQ and a set of workers behind it. Up to 50,000 active users per day.',
    ],
    role: 'Software Engineer',
    years: '2019',
    url: 'https://m.vk.com/app6999162',
    tags: ['React', 'PHP', 'Laravel', 'RabbitMQ', 'MySQL'],
  },
  {
    slug: 'kia-cap',
    name: 'KIA CAP',
    org: 'Kia',
    tagline: 'Automatic advertising-compensation reporting for a nationwide dealer network.',
    story: [
      'Kia dealers across the country ran campaigns in Google Ads and Yandex.Direct and needed detailed reports with the final compensation by region, model and ad type, downloadable as XLS and available as JSON for other systems.',
      'A scheduled queue pulled data from both ad platforms in time-bounded batches; failures went to a dead-letter queue with an alert and were replayed after a fix. Everything landed in ClickHouse — about 50 million records a month — so regular reports were precomputed and cached on the first of each month, and totals were validated against the platforms. Free-form reports were delivered by callback or synchronously.',
    ],
    role: 'Software Engineer → Team Lead',
    years: '2017 — 2020',
    url: 'https://kia.com/',
    tags: ['Python', 'ClickHouse', 'Queues', 'Google Ads API', 'Yandex.Direct API'],
  },
  {
    slug: 'alfa-crypto-group',
    name: 'Alfa Crypto Group',
    org: 'Landing page',
    tagline: 'A landing page with 4K motion video streamed over HLS.',
    story: [
      'Built with UI/UX and motion designers and two junior developers: take the design and 4K video, lay out the page, integrate the video. HLS streams renditions prepared with ffmpeg according to screen size and connection speed. A payment architecture was designed to avoid payment-service fees.',
    ],
    role: 'Software Engineer',
    years: '2019',
    url: 'https://echostudio.xyz/works.html',
    tags: ['HLS', 'ffmpeg', 'JavaScript'],
  },
]

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
