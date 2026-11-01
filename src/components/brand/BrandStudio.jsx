"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowDown,
  ArrowUpRight,
  Download,
  Check,
} from "lucide-react";
import BrandMark from "./BrandMark";
import { activeLogoId, logoConcepts } from "@/data/brand";
import "./brand.css";

export default function BrandStudio() {
  const [selected, setSelected] = useState(activeLogoId);
  const concept = logoConcepts.find((item) => item.id === selected);
  return (
    <main className="brand-studio">
      <header className="brand-masthead">
        <Link href="/">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <span className="mono">WARITH ADEKUNLE / IDENTITY STUDIES</span>
        <span className="mono">V.01</span>
      </header>
      <section className="brand-introduction">
        <p className="eyebrow">TWO INITIALS. A SHARED GEOMETRY.</p>
        <h1>
          A W. An A.
          <br />
          <span>A mark of your own.</span>
        </h1>
        <div className="brand-intro-bottom">
          <p>
            Six directions built around opposing angles, shared strokes, and the
            confidence of the original W.
          </p>
          <a href="#directions">
            Compare the directions <ArrowDown size={16} />
          </a>
        </div>
      </section>
      <section
        className="brand-directions"
        id="directions"
        aria-labelledby="directions-heading"
      >
        <div className="brand-section-title">
          <h2 id="directions-heading">The directions</h2>
          <span className="mono">SELECT A MARK TO EXPLORE</span>
        </div>
        <div className="brand-options">
          {logoConcepts.map((item) => (
            <button
              key={item.id}
              className="brand-option"
              aria-pressed={selected === item.id}
              aria-controls="brand-selected"
              onClick={() => setSelected(item.id)}
            >
              <div className="brand-option-meta">
                <span className="mono">
                  {item.number} / {item.name.toUpperCase()}
                </span>
                <span className="brand-option-check">
                  {selected === item.id ? (
                    <Check size={13} />
                  ) : (
                    <ArrowUpRight size={14} />
                  )}
                </span>
              </div>
              <div className="brand-option-pair">
                <div className="brand-paper">
                  <BrandMark variant={item.id} />
                </div>
                <div className="brand-ink">
                  <BrandMark variant={item.id} />
                </div>
              </div>
              <div className="brand-option-footer">
                <strong>{item.name}</strong>
                <span>{item.character}</span>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section
        className="brand-selected"
        id="brand-selected"
        aria-labelledby="selected-heading"
      >
        <div className="brand-section-title">
          <div>
            <p className="eyebrow">IN FOCUS / {concept.number}</p>
            <h2 id="selected-heading">{concept.name}</h2>
          </div>
          <a
            className="brand-download"
            href={`/brand/${concept.id}.svg`}
            download={`warith-adekunle-${concept.id}.svg`}
          >
            Download SVG <Download size={16} />
          </a>
        </div>
        <div className="brand-selected-layout">
          <div className="brand-selected-art brand-paper">
            <BrandMark
              variant={concept.id}
              label={`${concept.name} WA monogram`}
            />
          </div>
          <div className="brand-selected-copy" aria-live="polite">
            <span className="mono">THE IDEA</span>
            <h3>{concept.character.split(" · ").join(". ")}.</h3>
            <p>{concept.idea}</p>
            <div className="brand-designer-note">
              <span className="mono">DESIGN NOTE</span>
              <p>{concept.recommendation}</p>
            </div>
            <span className="brand-preview-note">
              <Check size={14} /> Interlock is the selected portfolio identity.
              Other directions remain available for comparison.
            </span>
          </div>
        </div>
        <div className="brand-context">
          <div className="brand-context-heading">
            <h3>In the real world</h3>
            <span className="mono">HEADER / WORDMARK / SMALL SIZES</span>
          </div>
          <div className="brand-header-demo brand-ink">
            <div className="brand-lockup">
              <BrandMark variant={concept.id} />
              <span>
                ADEKUNLE<small>CLOUD & DEVOPS</small>
              </span>
            </div>
            <span className="brand-demo-nav">
              Cloud. Systems. Intelligence.
            </span>
            <ArrowUpRight size={20} />
          </div>
          <div className="brand-size-row brand-paper">
            <div className="brand-large-lockup">
              <BrandMark variant={concept.id} />
              <div>
                <strong>
                  Adekunle<span>.</span>
                </strong>
                <span>WARITHADEKUNLE.COM</span>
              </div>
            </div>
            <div className="brand-small-sizes">
              {[16, 24, 32, 48].map((size) => (
                <div key={size}>
                  <span
                    className="brand-size-mark"
                    style={{ width: size, height: size }}
                  >
                    <BrandMark variant={concept.id} />
                  </span>
                  <span className="mono">{size}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="brand-studio-footer">
        <span>Built as original, scalable vector marks.</span>
        <span className="mono">ADEKUNLE / CLOUD & DEVOPS</span>
        <Link href="/">
          Back to portfolio <ArrowUpRight size={15} />
        </Link>
      </footer>
    </main>
  );
}
