export interface StackItem {
  name: string
  years: string
  /** One or two sentences of context, shown on expand. */
  note?: string
}

export interface StackGroup {
  title: string
  items: StackItem[]
}

export const stack: StackGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', years: '8 yrs', note: 'FastAPI, Flask, Django, SQLAlchemy, pytest, asyncio; TensorFlow, torch, spaCy, HuggingFace, pandas, OpenCV, moviepy, whisperx.' },
      { name: 'SQL', years: '8 yrs', note: 'Postgres first, ClickHouse second, some MsSQL. EXPLAIN ANALYZE, index choice, recursive queries, load-testing databases before launch.' },
      { name: 'JavaScript / TypeScript', years: '7 yrs', note: 'Landings, a web terminal, a code editor, a WYSIWYG editor, Pixel Streaming and HLS video, JSON-schema form generation, canvas photo editor, dashboards with a DSL; Node.js, Next.js, WebSocket, AST parsing.' },
      { name: 'Go', years: '4 yrs', note: 'Music search and recognition, image generation, a search engine, NER, orchestrators; Kafka, RabbitMQ, Redis, MongoDB, Postgres integrations.' },
      { name: 'Java', years: '2 yrs', note: 'Core banking services on Quarkus at Banank.' },
      { name: 'C++', years: '2 yrs', note: 'First language. Stack and heap, pointers, OOP; a multi-messenger client on Qt.' },
    ],
  },
  {
    title: 'Backend & infra',
    items: [
      { name: 'Testing', years: '8 yrs', note: 'Selenium, Jest, pytest, Cucumber/Gherkin; load testing with JMeter, Yandex.Tank and k6; Testcontainers.' },
      { name: 'Docker · Kubernetes', years: '5 yrs', note: 'Images for Go, Python, Node.js, PHP, Postgres, ELK, Redis, RabbitMQ; Helm charts, minikube, multi-arch builds.' },
      { name: 'FastAPI · Flask', years: '4 yrs', note: 'REST services, uvicorn workers, hundreds of hours of asyncio debugging; wrappers for ML models, LLMs, NER and search.' },
      { name: 'NATS · Kafka · RabbitMQ', years: '3 yrs', note: 'NATS JetStream as an event bus with auth-callout; Kafka for logs; RabbitMQ workers.' },
      { name: 'ElasticSearch', years: '2 yrs', note: 'Kibana-like tooling, aggregations, index and privilege setup; later dropped for search as too slow.' },
      { name: 'Operating systems', years: '', note: 'Windows, Linux (Ubuntu, CentOS) and macOS; WSL, building Python and rpm packages offline.' },
    ],
  },
  {
    title: 'ML & AI',
    items: [
      { name: 'NLP · classical ML', years: '4 yrs', note: 'Classifiers, NER, typo correction, sentiment, custom tokenizers, summarization; BERT and Transformers since "Attention is All You Need".' },
      { name: 'LLM · RAG · agents', years: '3 yrs', note: 'RAG pipelines, LangGraph agents with tool routing, MCP servers, LLM cost and quota control.' },
      { name: 'PyTorch · TensorFlow', years: '3 yrs' },
      { name: 'Weaviate · vector search', years: '2 yrs', note: 'BGE-M3 embeddings, hybrid retrieval over docs and code.' },
      { name: 'Video · ffmpeg', years: '3 yrs', note: 'Ad generation with Robust Video Matting, OpenCV, moviepy and whisperx; HLS renditions; image preprocessing on the backend.' },
    ],
  },
  {
    title: 'Frontend & mobile',
    items: [
      { name: 'React', years: '5 yrs', note: 'Redux Toolkit, sagas, MobX, effector; recursive components, DSL-driven UIs, WebSocket and WebRTC, Storybook, SSR and SSG.' },
      { name: 'UI/UX', years: '5 yrs', note: 'Often the only designer on the team: UX principles, perception psychology, Figma plugins for routine work.' },
      { name: 'Vue', years: '1 yr', note: 'Vue and Vuex in TypeScript: a video streaming service and an Unreal Engine control interface.' },
      { name: 'Flutter · Dart', years: '6 mo', note: 'gomusic.to for Android, iOS and Web; BLoC, MethodChannel bridges to native libraries.' },
      { name: 'PHP', years: '1 yr', note: 'Laravel, service providers, own packages; Solr, ElasticSearch, RabbitMQ integrations.' },
    ],
  },
]
