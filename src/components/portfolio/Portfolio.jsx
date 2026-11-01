"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Sun,
  Moon,
  Menu,
  X,
  Cloud,
  Activity,
  BarChart3,
  Layers3,
  Workflow,
  Globe2,
  Network,
  Box,
  Database,
  MessageSquare,
  Terminal,
  ShieldCheck,
  GitBranch,
  Github,
  Linkedin,
  Check,
  Loader2,
  Send,
  MapPin,
  RotateCcw,
} from "lucide-react";
import {
  architectures,
  devopsStages,
  expertise,
  profile,
} from "@/data/profile";
import { enquiryServices } from "@/data/solutions";
import SolutionBlueprints from "./SolutionBlueprints";
import BrandMark from "@/components/brand/BrandMark";

const icons = {
  cloud: Cloud,
  activity: Activity,
  chart: BarChart3,
  layers: Layers3,
  agent: Workflow,
  globe: Globe2,
  network: Network,
  box: Box,
  database: Database,
  message: MessageSquare,
  terminal: Terminal,
  shield: ShieldCheck,
  git: GitBranch,
};
const navigation = [
  ["Expertise", "expertise"],
  ["DevOps", "devops"],
  ["Systems", "systems"],
  ["Approach", "journey"],
  ["Solutions", "work"],
];

function Icon({ name, ...props }) {
  const Component = icons[name] || Cloud;
  return <Component aria-hidden="true" {...props} />;
}

function Reveal({ children, className = "", ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.08 },
    );
    element.classList.add("will-reveal");
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} {...props}>
      {children}
    </div>
  );
}

function Header() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "light");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {}
  }
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <a className="wordmark" href="#home" aria-label="Adekunle, back to top">
          <BrandMark className="wordmark-icon" viewBox="6 10 120 84" />
          <span className="wordmark-name">
            ADEKUNLE
            <br />
            CLOUD & DEVOPS
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            <Sun size={15} className={theme === "light" ? "selected" : ""} />
            <Moon size={15} className={theme === "dark" ? "selected" : ""} />
          </button>
          <a className="header-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-toggle icon-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        hidden={!open}
        aria-label="Mobile navigation"
      >
        {[...navigation, ["Contact", "contact"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div
      className="hero-visual"
      aria-label="Cloud, DevOps, and agents connected as one system"
      role="img"
    >
      <div className="visual-topline mono">
        <span>
          <i className="status-dot" /> SYSTEMS THINKING
        </span>
        <span>FIG. 001</span>
      </div>
      <div className="orbital">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit-axis axis-one" />
        <div className="orbit-axis axis-two" />
        <div className="orbital-center">
          <span className="core-symbol">
            <BrandMark viewBox="6 10 120 84" />
          </span>
          <span className="mono">BUILD · CONNECT · EVOLVE</span>
        </div>
        <div className="orbit-label label-cloud">
          <Cloud size={20} />
          <span>
            Cloud<span className="mono">THE FOUNDATION</span>
          </span>
        </div>
        <div className="orbit-label label-agent">
          <Workflow size={20} />
          <span>
            Agents<span className="mono">THE NEXT FRONTIER</span>
          </span>
        </div>
        <div className="orbit-label label-infra">
          <GitBranch size={20} />
          <span>
            DevOps<span className="mono">THE DELIVERY ENGINE</span>
          </span>
        </div>
        <span className="orbit-point point-one" />
        <span className="orbit-point point-two" />
        <span className="orbital-cross cross-one">+</span>
        <span className="orbital-cross cross-two">+</span>
      </div>
      <div className="visual-bottomline mono">
        <span>HUMAN INTENT → RELIABLE SYSTEMS</span>
        <ArrowUpRight size={17} />
      </div>
    </div>
  );
}

function ArchitectureLab() {
  const [selected, setSelected] = useState("cloud");
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);
  const system = architectures[selected];
  useEffect(() => () => clearInterval(timer.current), []);
  function select(key) {
    clearInterval(timer.current);
    setRunning(false);
    setStep(-1);
    setSelected(key);
  }
  function run() {
    if (running) return;
    clearInterval(timer.current);
    setStep(0);
    setRunning(true);
    let current = 0;
    timer.current = setInterval(() => {
      current += 1;
      if (current > 3) {
        clearInterval(timer.current);
        setRunning(false);
      } else setStep(current);
    }, 800);
  }
  function keyNavigation(event) {
    const keys = Object.keys(architectures);
    const index = keys.indexOf(selected);
    let next;
    if (event.key === "ArrowRight") next = keys[(index + 1) % keys.length];
    if (event.key === "ArrowLeft")
      next = keys[(index + keys.length - 1) % keys.length];
    if (event.key === "Home") next = keys[0];
    if (event.key === "End") next = keys[keys.length - 1];
    if (next) {
      event.preventDefault();
      select(next);
      document.getElementById(`tab-${next}`)?.focus();
    }
  }
  return (
    <div className="architecture-lab">
      <div className="lab-toolbar">
        <div
          className="lab-tabs"
          role="tablist"
          aria-label="Architecture examples"
          onKeyDown={keyNavigation}
        >
          {Object.entries(architectures).map(([key, value]) => (
            <button
              key={key}
              id={`tab-${key}`}
              role="tab"
              aria-selected={selected === key}
              aria-controls="architecture-panel"
              tabIndex={selected === key ? 0 : -1}
              onClick={() => select(key)}
            >
              {value.label}
            </button>
          ))}
        </div>
        <span className="mono lab-caption">INTERACTIVE SKETCH</span>
      </div>
      <div
        className="lab-body"
        id="architecture-panel"
        role="tabpanel"
        aria-labelledby={`tab-${selected}`}
        tabIndex={0}
      >
        <div className="lab-copy">
          <p className="eyebrow">{system.eyebrow}</p>
          <h3>{system.title}</h3>
          <p>{system.description}</p>
        </div>
        <div className="system-flow">
          {system.nodes.map((node, index) => (
            <div
              className={`flow-stage ${step >= index ? "flow-active" : ""}`}
              key={`${selected}-${node.name}`}
            >
              <div className="flow-node">
                <span className="node-number mono">0{index + 1}</span>
                <Icon name={node.icon} size={27} />
                <strong>{node.name}</strong>
                <span>{node.sub}</span>
                <span className="node-status">
                  {step >= index ? <Check size={12} /> : <span />}
                </span>
              </div>
              {index < 3 && (
                <div className="flow-connector">
                  <span />
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="lab-console">
          <div className="console-title mono">
            <Terminal size={14} />
            <span>execution.trace</span>
            <button onClick={run} disabled={running} className="run-button">
              {running ? (
                <Loader2 className="spin" size={13} />
              ) : step === 3 ? (
                <RotateCcw size={13} />
              ) : (
                <ArrowRight size={13} />
              )}
              {running
                ? "Tracing…"
                : step === 3
                  ? "Run again"
                  : "Trace the flow"}
            </button>
          </div>
          <div className="console-output mono" aria-live="polite">
            {step < 0 ? (
              <p className="console-placeholder">
                <span>$</span> Follow a request through the system
                <span className="terminal-cursor" />
              </p>
            ) : (
              system.lines.slice(0, step + 1).map((line, index) => (
                <p key={`${selected}-${index}`}>
                  <span className="trace-check">✓</span>
                  <span className="trace-index">0{index + 1}</span>
                  {line}
                </p>
              ))
            )}
          </div>
        </div>
        <p className="lab-foot">
          <ShieldCheck size={15} />
          {system.foot}
        </p>
      </div>
    </div>
  );
}

function ContactForm({ service, onServiceChange }) {
  const [state, setState] = useState({ status: "idle", message: "" });
  const formRef = useRef(null);
  async function submit(event) {
    event.preventDefault();
    if (state.status === "sending") return;
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setState({ status: "sending", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error || "Something went wrong. Please try again.",
        );
      setState({
        status: "success",
        message:
          "Message received. Thanks for reaching out — I’ll be in touch.",
      });
      formRef.current?.reset();
      onServiceChange("");
    } catch (error) {
      setState({
        status: "error",
        message:
          error.name === "TimeoutError"
            ? "That took too long. Please try again or connect on LinkedIn."
            : error.message === "Failed to fetch"
              ? "Couldn’t connect. Check your connection and try again."
              : error.message,
      });
    }
  }
  return (
    <form ref={formRef} onSubmit={submit} className="contact-form">
      <div className="form-heading">
        <span className="mono">START A CONVERSATION</span>
        <ArrowUpRight size={19} />
      </div>
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Your email address"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label className="service-label">
        What can I help with?
        <select
          name="service"
          value={service}
          onChange={(event) => onServiceChange(event.target.value)}
        >
          <option value="">Let’s find the right starting point</option>
          {enquiryServices.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label>
        What’s on your mind?
        <textarea
          name="message"
          rows={4}
          placeholder="Tell me about your platform, your biggest bottleneck, and what you want to improve…"
          required
          minLength={10}
          maxLength={5000}
        />
      </label>
      <div className="form-honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="form-bottom">
        <span>Good things start with a conversation.</span>
        <button
          className="button button-primary"
          type="submit"
          disabled={state.status === "sending"}
        >
          {state.status === "sending" ? "Sending…" : "Send message"}
          {state.status === "sending" ? (
            <Loader2 size={16} className="spin" />
          ) : (
            <Send size={15} />
          )}
        </button>
      </div>
      <p
        className={`form-status ${state.status}`}
        role={state.status === "error" ? "alert" : "status"}
      >
        {state.message}
      </p>
    </form>
  );
}

export default function Portfolio() {
  const [expanded, setExpanded] = useState(null);
  const [service, setService] = useState("");
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section id="home" className="hero wrap">
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="status-dot" /> CLOUD / DEVOPS / AGENTIC AI
              </p>
              <h1>
                Good ideas.
                <br />
                Intelligent systems.
                <br />
                <span>Solid foundations.</span>
              </h1>
              <p className="hero-intro">
                I’m Adekunle. I bring cloud, DevOps, and AI together—automating
                infrastructure, making releases repeatable, and keeping
                production observable.
              </p>
              <div className="hero-ctas">
                <a className="button button-primary" href="#work">
                  Explore solutions <ArrowDown size={16} />
                </a>
                <a className="text-link" href="#contact">
                  Let’s talk infrastructure <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-location mono">
                <MapPin size={13} /> {profile.location.toUpperCase()}{" "}
                <span>/</span> GOOD IDEAS TRAVEL
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="hero-bottom">
            <a
              href={profile.certification}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-strip"
            >
              <span className="aws-mark">
                aws
                <span />
              </span>
              <div>
                <strong>AWS Certified</strong>
                <span>Solutions Architect — Associate</span>
              </div>
              <ArrowUpRight size={17} />
            </a>
            <div className="hero-current">
              <span className="mono">ENGINEERING PRIORITIES</span>
              <span>Reliability · Visibility · Repeatability</span>
            </div>
            <a className="scroll-note mono" href="#expertise">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
          </div>
        </section>

        <section id="expertise" className="expertise-section section-pad">
          <div className="wrap">
            <Reveal className="section-heading">
              <div>
                <p className="eyebrow">
                  <span className="section-index">01 /</span> WHAT I BRING
                </p>
                <h2>
                  Different layers.
                  <br />
                  <span className="muted">One connected mindset.</span>
                </h2>
              </div>
              <p>
                From the infrastructure underneath to the intelligence on top.
                Build for the people using it, the engineers operating it, and
                the business depending on it.
              </p>
            </Reveal>
            <div className="expertise-list">
              {expertise.map((item, index) => (
                <Reveal key={item.number}>
                  <article
                    className={`expertise-item ${expanded === index ? "expanded" : ""}`}
                  >
                    <span className="expertise-number mono">{item.number}</span>
                    <div className="expertise-title">
                      <Icon name={item.icon} size={25} />
                      <h3>{item.title}</h3>
                    </div>
                    <div className="expertise-content">
                      <p>{item.description}</p>
                      <div className="tool-tags">
                        {item.tools.map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>
                      <div
                        id={`expertise-detail-${index}`}
                        hidden={expanded !== index}
                        className="expertise-detail"
                      >
                        <p>{item.detail}</p>
                        {item.icon === "agent" && (
                          <p className="exploration-note">
                            <span className="mono">EXPLORATION TOOLKIT</span>
                            Codex · Claude Code · LangGraph · Model Context
                            Protocol
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      className="expand-button icon-button"
                      aria-expanded={expanded === index}
                      aria-controls={`expertise-detail-${index}`}
                      aria-label={`${expanded === index ? "Less" : "More"} about ${item.title}`}
                      onClick={() =>
                        setExpanded(expanded === index ? null : index)
                      }
                    >
                      <ArrowUpRight size={22} />
                    </button>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="devops"
          className="devops-section section-pad"
          aria-labelledby="devops-heading"
        >
          <div className="wrap">
            <Reveal className="section-heading">
              <div>
                <p className="eyebrow">DEVOPS IN PRACTICE</p>
                <h2 id="devops-heading">
                  DevOps, from commit
                  <br />
                  <span className="muted">to production and back.</span>
                </h2>
              </div>
              <p>
                DevOps connects the people building software with the people
                operating it. I turn that connection into automated pipelines,
                reproducible environments, and clear operating practices.
              </p>
            </Reveal>
            <div className="devops-stages">
              {devopsStages.map((stage) => (
                <Reveal key={stage.number} className="devops-stage">
                  <div className="devops-stage-top">
                    <span className="mono">{stage.number}</span>
                    <Icon name={stage.icon} size={24} />
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <ul>
                    {stage.practices.map((practice) => (
                      <li key={practice}>
                        <Check size={12} aria-hidden="true" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mono devops-stack">{stage.tools}</span>
                </Reveal>
              ))}
            </div>
            <Reveal className="devops-feedback">
              <div>
                <RotateCcw size={19} aria-hidden="true" />
                <p>
                  <strong>Continuous feedback is part of delivery.</strong>
                  <span>
                    Production signals, incident learning, and team feedback
                    shape the next improvement.
                  </span>
                </p>
              </div>
              <a
                className="button button-primary"
                href="#contact"
                onClick={() => setService("DevOps & platform delivery")}
              >
                Let’s talk DevOps <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="systems" className="systems-section section-pad wrap">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-index">02 /</span> UNDER THE HOOD
              </p>
              <h2>
                Everything connects.
                <br />
                <span className="muted">Here’s how I see it.</span>
              </h2>
            </div>
            <p>
              Architecture is easier to understand when you can follow it.
              Explore cloud architecture, a DevOps pipeline, agent workflows,
              and observability—one step at a time.
            </p>
          </Reveal>
          <Reveal>
            <ArchitectureLab />
          </Reveal>
          <div className="systems-principles mono">
            <span>
              <span>01</span> DESIGN FOR FAILURE
            </span>
            <span>
              <span>02</span> AUTOMATE WITH INTENT
            </span>
            <span>
              <span>03</span> MAKE IT OBSERVABLE
            </span>
          </div>
        </section>

        <section id="journey" className="journey-section section-pad">
          <div className="wrap journey-grid">
            <Reveal className="journey-intro">
              <p className="eyebrow">
                <span className="section-index">03 /</span> HOW I APPROACH THE
                WORK
              </p>
              <h2>
                Built to run.
                <br />
                <span>
                  Designed to
                  <br />
                  be understood.
                </span>
              </h2>
              <p>
                A deployment is one moment. Operating the system is the longer
                story. My DevOps approach connects architecture, delivery, and
                operations so the team has a clear path forward.
              </p>
              <a className="text-link" href="#work">
                Explore the engagement blueprints <ArrowUpRight size={17} />
              </a>
            </Reveal>
            <div className="journey-timeline">
              <Reveal className="journey-entry">
                <span className="timeline-dot" />
                <p className="eyebrow">01 / UNDERSTAND THE SYSTEM</p>
                <h3>Start with the constraints.</h3>
                <p>
                  Map the workload, dependencies, failure modes, and business
                  priorities. Agree what reliability, recovery, security, and
                  cost need to look like before choosing the architecture.
                </p>
                <span className="mono timeline-caption">
                  WORKLOAD → TRADE-OFFS → ACCEPTANCE CRITERIA
                </span>
              </Reveal>
              <Reveal className="journey-entry">
                <span className="timeline-dot" />
                <p className="eyebrow">02 / MAKE CHANGE REPEATABLE</p>
                <h3>Build a path the team can trust.</h3>
                <p>
                  Keep infrastructure in version control. Automate the
                  repeatable steps, review the changes, test the recovery path,
                  and make environment configuration explicit.
                </p>
                <span className="mono timeline-caption">
                  INFRASTRUCTURE AS CODE → CI/CD → CONTROLLED RELEASES
                </span>
              </Reveal>
              <Reveal className="journey-entry current-entry">
                <span className="timeline-dot" />
                <p className="eyebrow">03 / CLOSE THE OPERATING LOOP</p>
                <h3>Visibility is part of the architecture.</h3>
                <p>
                  Connect service health, logs, metrics, and traces to an owner
                  and a response. Document the decisions and runbooks so the
                  system stays understandable after the handover.
                </p>
                <span className="mono timeline-caption">
                  MONITOR → INVESTIGATE → RECOVER → IMPROVE
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="credentials-section wrap"
          aria-labelledby="credentials-title"
        >
          <Reveal className="credentials-grid">
            <div>
              <p className="eyebrow">CURIOSITY, BACKED BY LEARNING</p>
              <h2 id="credentials-title">
                Certified foundations.
                <br />
                An evolving toolkit.
              </h2>
            </div>
            <div className="credential-list">
              <a
                href={profile.certification}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShieldCheck size={24} />
                <div>
                  <h3>AWS Solutions Architect — Associate</h3>
                  <span>Amazon Web Services · Issued August 2026</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.coursera.org/account/accomplishments/records/3SL093H94S0D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box size={24} />
                <div>
                  <h3>Microservices & Serverless Development</h3>
                  <span>IBM · October 2025</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.coursera.org/account/accomplishments/verify/VPUF1XXXQQO1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Layers3 size={24} />
                <div>
                  <h3>Docker, Kubernetes & OpenShift</h3>
                  <span>IBM · September 2025</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.coursera.org/account/accomplishments/records/9T9R8AIQ15OD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitBranch size={24} />
                <div>
                  <h3>Introduction to DevOps</h3>
                  <span>IBM · September 2025</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a
                href="https://www.coursera.org/account/accomplishments/records/M3OTZQW7ARWV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Cloud size={24} />
                <div>
                  <h3>Introduction to Cloud Computing</h3>
                  <span>IBM · September 2025</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <div className="learning-note">
                <span className="mono">CONTINUOUS LEARNING</span>
                <p>
                  AWS architecture and networking. Infrastructure automation and
                  container platforms. Ongoing exploration of coding agents,
                  tool orchestration, and observable AI workflows.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="work" className="work-section section-pad wrap">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="section-index">04 /</span> FROM CHALLENGE TO
                DELIVERY
              </p>
              <h2>
                Clear milestones.
                <br />
                <span className="muted">Tangible deliverables.</span>
              </h2>
            </div>
            <p>
              Reference blueprints for common infrastructure challenges. Explore
              the proposed scope, delivery milestones, and acceptance checks for
              an engagement.
            </p>
          </Reveal>
          <Reveal>
            <SolutionBlueprints onEnquire={setService} />
          </Reveal>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="wrap">
            <Reveal className="contact-grid">
              <div className="contact-copy">
                <p className="eyebrow">
                  <span className="section-index">05 /</span> WHAT’S NEXT?
                </p>
                <h2>
                  Let’s build
                  <br />
                  something
                  <br />
                  <span>that matters.</span>
                  <ArrowUpRight className="contact-big-arrow" />
                </h2>
                <p>
                  Planning a migration? Untangling deployments? Missing the
                  signals that explain an incident? Tell me where you are now
                  and what needs to work better.
                </p>
                <div className="contact-socials">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={17} /> GitHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
              <ContactForm service={service} onServiceChange={setService} />
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a href="#home" className="footer-name">
          <BrandMark className="footer-mark" viewBox="6 10 120 84" />
          Adekunle<span>.</span>
        </a>
        <p className="mono">WARITHADEKUNLE.COM / BUILT WITH INTENT.</p>
        <span className="footer-copyright">© {new Date().getFullYear()}</span>
        <a href="#home" className="back-top" aria-label="Back to top">
          <ArrowUpRight size={18} />
        </a>
      </footer>
    </>
  );
}
