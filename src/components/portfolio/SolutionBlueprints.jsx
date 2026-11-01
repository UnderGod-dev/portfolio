"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cloud,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { solutions } from "@/data/solutions";

const icons = {
  cloud: Cloud,
  layers: Layers3,
  activity: Activity,
  shield: ShieldCheck,
};

export default function SolutionBlueprints({ onEnquire }) {
  const [selected, setSelected] = useState(solutions[0].id);
  const solution = solutions.find((item) => item.id === selected);
  return (
    <div className="solution-explorer">
      <div
        className="solution-options"
        aria-label="Choose a solution blueprint"
      >
        {solutions.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <button
              key={item.id}
              id={`solution-${item.id}`}
              aria-pressed={selected === item.id}
              aria-controls="solution-detail"
              onClick={() => setSelected(item.id)}
            >
              <span className="mono solution-index">0{index + 1}</span>
              <Icon size={21} aria-hidden="true" />
              <span>{item.title}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          );
        })}
        <div className="solution-note">
          <ShieldCheck size={17} />
          <p>
            Scope first. Validate at every milestone. Leave a system the team
            can operate.
          </p>
        </div>
      </div>
      <section
        className="solution-detail"
        id="solution-detail"
        aria-labelledby={`solution-${selected}`}
      >
        <div className="solution-panel-heading">
          <span className="eyebrow">REFERENCE BLUEPRINT / PROPOSED SCOPE</span>
          <span className="mono">
            0{solutions.findIndex((item) => item.id === selected) + 1} — 04
          </span>
        </div>
        <div className="solution-summary" aria-live="polite">
          <h3>{solution.subtitle}</h3>
          <p>{solution.challenge}</p>
        </div>
        <div className="solution-aim">
          <span className="mono">ENGAGEMENT AIM</span>
          <p>{solution.aim}</p>
        </div>
        <ol className="migration-milestones">
          {solution.milestones.map((milestone, index) => (
            <li key={`${selected}-${milestone.title}`}>
              <span className="milestone-marker mono">0{index + 1}</span>
              <div>
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
                <div className="milestone-check">
                  <Check size={13} aria-hidden="true" />
                  <span>
                    <strong>Acceptance check:</strong> {milestone.check}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="solution-deliverables">
          <p className="eyebrow">WHAT YOU TAKE AWAY</p>
          <ul>
            {solution.deliverables.map((item) => (
              <li key={item}>
                <ArrowRight size={13} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="solution-stack tool-tags">
          {solution.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <div className="solution-panel-footer">
          <span>Adapted to your workload, constraints, and team.</span>
          <a
            className="button button-primary"
            href="#contact"
            onClick={() => onEnquire(solution.title)}
          >
            {solution.cta}
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
