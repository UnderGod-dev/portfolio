// Personal content lives here so updates do not require layout changes.
export const profile = {
  name: "Adekunle",
  fullName: "Warith Adekunle",
  siteUrl: "https://warithadekunle.com",
  role: "Cloud, DevOps & Systems Engineering",
  location: "EU & beyond",
  linkedin: "https://www.linkedin.com/in/warith-taofeek/",
  github: "https://github.com/UnderGod-dev",
  certification:
    "https://www.credly.com/badges/6dd1ff92-ac22-465b-9a78-73b481f1cfce/linked_in_profile",
};

export const expertise = [
  {
    number: "01",
    title: "Cloud architecture",
    icon: "cloud",
    description:
      "A solid foundation for everything that comes next. Scalable AWS environments, thoughtful network design, and security built into the architecture.",
    tools: [
      "AWS",
      "EC2 · Lambda · S3",
      "VPC & networking",
      "IAM",
      "RDS · DynamoDB",
    ],
    detail:
      "From VPC segmentation and routing to compute, storage, and identity, I connect the pieces into infrastructure that serves the application and the people behind it.",
  },
  {
    number: "02",
    title: "DevOps & platform engineering",
    icon: "layers",
    description:
      "Connect development and operations through automation. CI/CD pipelines, versioned infrastructure, container platforms, and release practices that make production changes repeatable and reviewable.",
    tools: [
      "Terraform",
      "Ansible",
      "Docker · Kubernetes",
      "Jenkins · GitHub Actions",
      "Linux · Python · Go",
    ],
    detail:
      "I work across the DevOps lifecycle: source control, infrastructure provisioning, configuration management, CI/CD, container orchestration, and production feedback. Build once, promote the same artifact between environments, review infrastructure plans, and pair each release with health checks and a rollback path.",
  },
  {
    number: "03",
    title: "Monitoring & observability",
    icon: "activity",
    description:
      "Know what is happening, why it matters, and where to look next. Service health dashboards, actionable alerts, and a connected view of metrics, logs, and traces.",
    tools: [
      "CloudWatch",
      "Grafana",
      "CloudTrail",
      "Splunk",
      "Metrics · Logs · Traces",
    ],
    detail:
      "Start with the user journey, then instrument the signals that explain it: request rate, errors, latency, resource saturation, and dependencies. Pair dashboards with alert ownership, incident context, and practical runbooks so visibility leads to action.",
  },
  {
    number: "04",
    title: "Agentic AI & coding",
    icon: "agent",
    description:
      "Connecting AI reasoning with useful tools and dependable infrastructure. A focus on coding agents and workflows that help teams investigate, build, and automate with human oversight.",
    tools: ["Codex · Claude Code", "LangGraph", "MCP", "Human-in-the-loop"],
    detail:
      "I’m exploring coding agents, context-aware workflows, and tool-connected systems. My focus is on useful automation with clear boundaries, inspectable steps, and human checkpoints.",
  },
];

// Educational architecture sketches, not representations of deployed client systems.
export const architectures = {
  cloud: {
    label: "Cloud platform",
    eyebrow: "A resilient application path",
    title: "Give good ideas a solid home.",
    description:
      "An illustrative AWS request path, from the public edge to private application services and persistent data.",
    nodes: [
      { name: "Route 53", sub: "Resolve & route", icon: "globe" },
      { name: "Load balancer", sub: "Distribute traffic", icon: "network" },
      { name: "EKS workloads", sub: "Run & scale", icon: "box" },
      { name: "Data layer", sub: "Persist & protect", icon: "database" },
    ],
    lines: [
      "request → resolve domain",
      "ingress → distribute traffic",
      "workload → process request",
      "storage → persist state",
    ],
    foot: "Across the system: identity, network boundaries, logs, and metrics.",
  },
  agents: {
    label: "Agent workflow",
    eyebrow: "From a goal to a useful action",
    title: "Reason. Use tools. Check the result.",
    description:
      "An illustrative agent loop with context, tool access, and a human review point before consequential actions.",
    nodes: [
      { name: "Intent", sub: "Define the goal", icon: "message" },
      { name: "Agent", sub: "Plan with context", icon: "agent" },
      { name: "Tools & MCP", sub: "Connect capabilities", icon: "terminal" },
      { name: "Review", sub: "Verify the outcome", icon: "shield" },
    ],
    lines: [
      "goal → gather relevant context",
      "plan → select a bounded tool",
      "action → inspect tool output",
      "review → approve or iterate",
    ],
    foot: "Guardrails: scoped permissions, human checkpoints, and an audit trail.",
  },
  observe: {
    label: "Observability",
    eyebrow: "From a signal to an informed response",
    title: "See the signal. Find the cause.",
    description:
      "A reference telemetry path connecting application signals, correlated dashboards, and an alert with enough context to act on.",
    nodes: [
      { name: "Instrument", sub: "Metrics, logs, traces", icon: "activity" },
      { name: "Collect", sub: "Route & enrich", icon: "network" },
      { name: "Correlate", sub: "Connect the signals", icon: "chart" },
      { name: "Respond", sub: "Triage with context", icon: "shield" },
    ],
    lines: [
      "telemetry → capture service signals",
      "context → attach service and trace IDs",
      "correlate → connect symptoms to a path",
      "alert → route with owner and runbook",
    ],
    foot: "Reference stack: OpenTelemetry, Prometheus or CloudWatch, and Grafana. Sampling, retention, and alert thresholds are tuned to the environment.",
  },
  delivery: {
    label: "DevOps pipeline",
    eyebrow: "A repeatable path to production",
    title: "Less ceremony. More confidence.",
    description:
      "A reference DevOps pipeline connecting Git changes, automated build checks, infrastructure review, and a release with operational feedback.",
    nodes: [
      { name: "Commit", sub: "Version the change", icon: "git" },
      { name: "CI pipeline", sub: "Build, test & scan", icon: "terminal" },
      { name: "IaC plan", sub: "Review the change", icon: "layers" },
      { name: "CD & feedback", sub: "Release & observe", icon: "cloud" },
    ],
    lines: [
      "source → trigger pipeline",
      "CI → build, test, and scan an artifact",
      "plan → review infrastructure diff",
      "CD → promote, observe, and improve",
    ],
    foot: "DevOps closes the loop: release evidence, service health, incident learning, and a rehearsed rollback path.",
  },
};

// Delivery practices offered as engagement scope, without invented client metrics.
export const devopsStages = [
  {
    number: "01",
    icon: "terminal",
    title: "Build & validate",
    description:
      "Turn a source change into a versioned artifact with repeatable checks before it gets near production.",
    tools: "Jenkins / GitHub Actions / Docker",
    practices: [
      "Automated build and test stages",
      "Image scanning and artifact versioning",
      "The same artifact across environments",
    ],
  },
  {
    number: "02",
    icon: "layers",
    title: "Provision & configure",
    description:
      "Make environments reproducible through reviewed infrastructure code and consistent configuration.",
    tools: "Terraform / Ansible / AWS",
    practices: [
      "Reusable modules and remote state",
      "Reviewed plans and environment separation",
      "Configuration, secret references, and drift checks",
    ],
  },
  {
    number: "03",
    icon: "git",
    title: "Release & recover",
    description:
      "Give each release a controlled path forward and an understood route back when a health check fails.",
    tools: "Kubernetes / EKS / CI/CD",
    practices: [
      "Promotion rules and approval gates",
      "Readiness probes and staged rollouts",
      "Documented, exercised rollback procedures",
    ],
  },
  {
    number: "04",
    icon: "activity",
    title: "Operate & improve",
    description:
      "Bring production signals back into engineering decisions so each change starts with better context.",
    tools: "CloudWatch / Grafana / Runbooks",
    practices: [
      "Service indicators and actionable alerts",
      "Incident ownership and operational handover",
      "Review, learn, and improve the next release",
    ],
  },
];
