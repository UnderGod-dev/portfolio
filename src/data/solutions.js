// Proposed engagement blueprints. These describe scope and acceptance criteria,
// not completed client projects or measured historical outcomes.
export const solutions = [
  {
    id: "migration",
    title: "Cloud migration",
    icon: "cloud",
    subtitle: "A clear migration path. A controlled cutover.",
    challenge:
      "You need to move an application or modernize an existing AWS environment without losing control of dependencies, data, or the cutover.",
    aim: "A staged migration with a rehearsed rollback path and an operating model your team can own.",
    tools: [
      "AWS",
      "Terraform",
      "VPC & IAM",
      "Database replication",
      "CloudWatch",
    ],
    milestones: [
      {
        title: "Map the starting point",
        description:
          "Inventory workloads, network paths, data dependencies, and operational constraints. Agree recovery objectives and identify what can move together.",
        check:
          "Dependency map, migration waves, and acceptance criteria agreed.",
      },
      {
        title: "Build the landing zone",
        description:
          "Define network boundaries, least-privilege access, environment separation, remote state, and audit logging in versioned infrastructure.",
        check:
          "Infrastructure reviewed and a clean environment reproducible from code.",
      },
      {
        title: "Rehearse the move",
        description:
          "Test data movement, application behavior, backup restoration, and a rollback sequence in a representative environment before the production change window.",
        check: "Data validation, smoke tests, and rollback rehearsal recorded.",
      },
      {
        title: "Cut over, then stabilize",
        description:
          "Move traffic in controlled stages, watch application and database signals, and verify the agreed acceptance checks before closing the rollback window.",
        check:
          "Service checks, ownership, runbooks, and the handover completed.",
      },
    ],
    deliverables: [
      "Migration readiness assessment",
      "Terraform landing-zone modules",
      "Cutover & rollback runbook",
      "Operational handover",
    ],
    cta: "Discuss a migration",
  },
  {
    id: "delivery",
    title: "DevOps & platform delivery",
    icon: "layers",
    subtitle: "A better path from commit to production.",
    challenge:
      "Development and operations rely on handoffs and manual deployment steps. Environments drift, build artifacts change between stages, and production releases are hard to explain or repeat.",
    aim: "An end-to-end DevOps workflow: reproducible environments, automated CI/CD, one versioned artifact, controlled promotion, and production feedback.",
    tools: [
      "Docker",
      "Kubernetes · EKS",
      "Jenkins · GitHub Actions",
      "Terraform",
      "Ansible",
    ],
    milestones: [
      {
        title: "Audit the release path",
        description:
          "Trace a change from a pull request to production and back through incident feedback. Identify manual handoffs, secret handling, inconsistent builds, and environment drift.",
        check:
          "Delivery bottlenecks and the target release process documented.",
      },
      {
        title: "Standardize the building blocks",
        description:
          "Define container builds, environment configuration, infrastructure modules, and secret references that can be reused across services.",
        check:
          "The same versioned artifact can be promoted between environments.",
      },
      {
        title: "Automate with review gates",
        description:
          "Connect Jenkins or GitHub Actions to builds, tests, image scanning, and Terraform plans. Define artifact promotion, production approvals, and least-privilege pipeline permissions.",
        check:
          "Failed checks block promotion and infrastructure changes remain reviewable.",
      },
      {
        title: "Release with feedback",
        description:
          "Add readiness checks, deployment visibility, and a documented rollback path. Close the loop with logs and service health signals.",
        check:
          "Release and rollback paths exercised, with an operator handover.",
      },
    ],
    deliverables: [
      "CI/CD pipeline & promotion rules",
      "Reusable infrastructure modules",
      "Container platform & environment configuration",
      "Release & rollback playbook",
    ],
    cta: "Plan my DevOps workflow",
  },
  {
    id: "observability",
    title: "Monitoring & observability",
    icon: "activity",
    subtitle: "Less guessing. Better signals.",
    challenge:
      "You have dashboards and alerts, but incidents still start with guesswork. Signals are scattered, noisy, or disconnected from the user experience.",
    aim: "A coherent view of service health, with alerts that explain the impact and point an owner toward the next action.",
    tools: [
      "CloudWatch · CloudTrail",
      "Grafana",
      "Prometheus",
      "OpenTelemetry",
      "Logs · Metrics · Traces",
    ],
    milestones: [
      {
        title: "Define what healthy means",
        description:
          "Identify critical user journeys and dependencies. Define service indicators and agree availability, latency, and recovery targets with the business.",
        check: "Service map, SLIs, and measurable SLO definitions agreed.",
      },
      {
        title: "Connect the telemetry",
        description:
          "Plan metrics, structured logs, and distributed traces with consistent service labels, trace IDs, retention, and sampling appropriate to the workload.",
        check:
          "A representative request can be followed across the selected services.",
      },
      {
        title: "Build dashboards for decisions",
        description:
          "Surface request rates, errors, latency, saturation, and dependency health. Separate service-level views from infrastructure drill-downs.",
        check:
          "An operator can move from a service symptom to supporting evidence.",
      },
      {
        title: "Make the alerts actionable",
        description:
          "Define severity, ownership, routing, and runbook context. Test alert delivery and tune noisy conditions against the agreed service objectives.",
        check: "A simulated failure reaches an owner with a useful runbook.",
      },
    ],
    deliverables: [
      "Service-health dashboard pack",
      "Instrumentation & telemetry plan",
      "SLO & alert routing definitions",
      "Incident triage runbooks",
    ],
    cta: "Make my systems observable",
  },
  {
    id: "resilience",
    title: "Reliability & cost",
    icon: "shield",
    subtitle: "Prove the recovery path. Understand the spend.",
    challenge:
      "Backups exist, but recovery is uncertain. Resource usage is hard to explain, and reliability decisions are made without a clear view of the trade-offs.",
    aim: "An evidence-based improvement plan that balances resilience, recovery objectives, security, and operational cost.",
    tools: [
      "AWS architecture review",
      "Backup & restore",
      "IAM",
      "Cost allocation",
      "Capacity planning",
    ],
    milestones: [
      {
        title: "Establish the baseline",
        description:
          "Review architecture, ownership, resource utilization, and billing categories. Identify single points of failure and expensive unknowns.",
        check:
          "Risks, cost drivers, and priorities recorded in a shared baseline.",
      },
      {
        title: "Test the recovery assumptions",
        description:
          "Review backup policy and restore procedures. Exercise selected failure and restore scenarios in an agreed safe environment.",
        check: "Recovery evidence compared with the agreed RTO and RPO.",
      },
      {
        title: "Improve the highest-value gaps",
        description:
          "Prioritize right-sizing, lifecycle policies, access boundaries, recovery automation, and capacity changes against business impact.",
        check:
          "Each recommendation has an owner, trade-off, and validation method.",
      },
      {
        title: "Keep the gains visible",
        description:
          "Add cost allocation, budgets, drift checks, and periodic recovery reviews. Document the architecture decisions and how to revisit them.",
        check:
          "Review cadence, dashboards, and operating responsibilities agreed.",
      },
    ],
    deliverables: [
      "Reliability & cost assessment",
      "Recovery test plan",
      "Prioritized improvement backlog",
      "Operational review checklist",
    ],
    cta: "Review my platform",
  },
];

export const enquiryServices = [
  ...solutions.map((solution) => solution.title),
  "Agentic AI & automation",
  "Architecture review",
];
