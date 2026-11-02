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
import { activeLogoId, adekunleConcepts } from "@/data/brand";
import "./brand.css";

export default function BrandStudio() {
  const [selected, setSelected] = useState(activeLogoId);
  const concept = adekunleConcepts.find((item) => item.id === selected);
  return (
    <main className="brand-studio">
      <header className="brand-masthead">
        <Link href="/">
          <ArrowLeft size={16} /> Back to portfolio
        </Link>
        <span className="mono">ADEKUNLE.CLOUD / IDENTITY STUDIES</span>
        <span className="mono">V.02</span>
      </header>
      <section className="brand-introduction">
        <p className="eyebrow">ONE INITIAL. A WORLD OF POSSIBILITY.</p>
        <h1>
          A new perspective.
          <br />
          <span>Distinctly Adekunle.</span>
        </h1>
        <div className="brand-intro-bottom">
          <p>
            Three original A monograms for adekunle.cloud. Structure, flow,
            and negative space—each with its own way of expressing your work.
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
          {adekunleConcepts.map((item) => (
            <button
              key={item.id}
              className="brand-option"
              aria-pressed={selected === item.id}
              aria-controls="brand-selected"
              aria-label={`Preview ${item.name}`}
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
                {item.id === activeLogoId && <span className="brand-pick">SELECTED IDENTITY</span>}
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
            download={`adekunle-cloud-${concept.id}.svg`}
          >
            Download SVG <Download size={16} />
          </a>
        </div>
        <div className="brand-selected-layout">
          <div className="brand-selected-art brand-paper">
            <BrandMark
              variant={concept.id}
              label={`${concept.name} monogram`}
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
              <Check size={14} /> Flow A is the selected identity for
              adekunle.cloud. Explore the other studies for comparison.
            </span>
          </div>
        </div>
        <div className="brand-context">
          <div className="brand-context-heading">
            <h3>In the real world</h3>
            <a className="brand-wordmark-download" href={`/brand/${concept.id}-wordmark.svg`} download={`adekunle-cloud-${concept.id}-wordmark.svg`}>Download wordmark <Download size={14} /></a>
          </div>
          <div className="brand-header-demo brand-ink">
            <div className="brand-lockup">
              <BrandMark variant={concept.id} />
              <span>
                adekunle<span className="brand-domain">.cloud</span><small>CLOUD / DEVOPS / AI</small>
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
                  adekunle<span>.cloud</span>
                </strong>
                <span>BUILD WITH CLARITY.</span>
              </div>
            </div>
            <div className="brand-small-sizes">
              {[16, 24, 32, 48].map((size) => (
                <div key={size}>
                  <span
                    className="brand-size-mark brand-favicon"
                    style={{ width: size, height: size, padding: size * 0.12 }}
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
      <section className="brand-reference" aria-label="Previous identity reference">
        <div className="brand-reference-mark brand-ink"><BrandMark variant="interlock" /></div>
        <div><p className="eyebrow">THE STARTING POINT</p><h2>The original Interlock.</h2><p>The WA identity, kept here as a reference for the angular rhythm and confidence you liked.</p></div>
        <a href="/brand/adekunle-directions.svg" download="adekunle-cloud-logo-directions.svg">Download comparison sheet <Download size={16} /></a>
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
