import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0A0A0F",
  bgCard: "#12121A",
  bgCardHover: "#1A1A26",
  border: "#1E1E2E",
  borderLight: "#2A2A3E",
  accent: "#4F7BF7",
  accentDim: "#3A5CC0",
  accentGlow: "rgba(79, 123, 247, 0.15)",
  red: "#E05252",
  redDim: "rgba(224, 82, 82, 0.15)",
  green: "#4ADE80",
  greenDim: "rgba(74, 222, 128, 0.15)",
  amber: "#FBBF24",
  amberDim: "rgba(251, 191, 36, 0.15)",
  text: "#E8E8EE",
  textMuted: "#9898AA",
  textDim: "#6B6B7B",
};

function FadeIn({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ number, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: COLORS.accent,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}>
        {number}
      </span>
      <div style={{ height: "1px", flex: 1, background: COLORS.border }} />
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: COLORS.textDim,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}>
        {label}
      </span>
    </div>
  );
}

function EvidenceCard({ brand, category, followers, revenueProof, detail, proofLevel }) {
  const proofColors = {
    strong: { bg: COLORS.greenDim, text: COLORS.green, label: "Revenue proof" },
    partial: { bg: COLORS.amberDim, text: COLORS.amber, label: "Engagement only" },
    none: { bg: COLORS.redDim, text: COLORS.red, label: "Logo only" },
  };
  const p = proofColors[proofLevel];
  return (
    <div style={{
      background: COLORS.bgCard,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "8px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 600, color: COLORS.text }}>
            {brand}
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: COLORS.textDim, marginTop: "4px" }}>
            {category} {followers && `· ${followers}`}
          </div>
        </div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: p.text,
          background: p.bg,
          padding: "4px 10px",
          borderRadius: "4px",
          whiteSpace: "nowrap",
        }}>
          {p.label}
        </span>
      </div>
      {revenueProof && (
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: COLORS.text, lineHeight: 1.5 }}>
          {revenueProof}
        </div>
      )}
      {detail && (
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: COLORS.textMuted, lineHeight: 1.5 }}>
          {detail}
        </div>
      )}
    </div>
  );
}

function ICPRow({ factor, question, signal, index }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "200px 1fr 1fr",
      gap: "16px",
      padding: "20px 0",
      borderBottom: `1px solid ${COLORS.border}`,
      alignItems: "start",
    }}>
      <div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: COLORS.accent,
          marginBottom: "6px",
          letterSpacing: "0.05em",
        }}>
          FACTOR {index + 1}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: COLORS.text }}>
          {factor}
        </div>
      </div>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: COLORS.textMuted, lineHeight: 1.6 }}>
        {question}
      </div>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: COLORS.textDim,
        lineHeight: 1.6,
        background: COLORS.bgCard,
        padding: "10px 14px",
        borderRadius: "6px",
        border: `1px solid ${COLORS.border}`,
      }}>
        {signal}
      </div>
    </div>
  );
}

function ActivationStep({ label, items, type, hasIntervention }) {
  const typeColors = {
    setup: COLORS.textDim,
    supporting: COLORS.amberDim,
    core: COLORS.accentDim,
    aha: COLORS.green,
  };
  return (
    <div style={{
      background: COLORS.bgCard,
      border: `1px solid ${hasIntervention ? COLORS.amber : COLORS.border}`,
      borderRadius: "8px",
      padding: "20px",
      position: "relative",
    }}>
      {hasIntervention && (
        <div style={{
          position: "absolute",
          top: "-10px",
          right: "16px",
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          color: COLORS.amber,
          background: COLORS.bg,
          padding: "2px 8px",
          border: `1px solid ${COLORS.amber}`,
          borderRadius: "4px",
          letterSpacing: "0.05em",
        }}>
          FOUNDER SLACK REQUIRED
        </div>
      )}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: type === "aha" ? COLORS.green : COLORS.accent,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "12px",
      }}>
        {label}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: COLORS.textMuted,
          padding: "6px 0",
          paddingLeft: "16px",
          borderLeft: `2px solid ${typeColors[type]}`,
          marginBottom: "4px",
          lineHeight: 1.5,
        }}>
          {item}
        </div>
      ))}
    </div>
  );
}

function SystemDiagram() {
  return (
    <div style={{ padding: "20px 0" }}>
      {/* Reinforcing Loop */}
      <div style={{
        border: `1px solid ${COLORS.accent}`,
        borderRadius: "12px",
        padding: "28px",
        marginBottom: "24px",
        background: COLORS.accentGlow,
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: COLORS.accent,
          letterSpacing: "0.1em",
          marginBottom: "20px",
        }}>
          WHAT SHOULD HAPPEN
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 2.2,
        }}>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            Revenue proof published
          </span>
          <span style={{ color: COLORS.accent }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            Stronger GTM positioning
          </span>
          <span style={{ color: COLORS.accent }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            Easier to close new brands
          </span>
          <span style={{ color: COLORS.accent }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            More brands reach first sale
          </span>
          <span style={{ color: COLORS.accent }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            More revenue proof
          </span>
          <span style={{ color: COLORS.accent }}>↻</span>
        </div>
      </div>

      {/* Balancing Constraint */}
      <div style={{
        border: `1px solid ${COLORS.red}`,
        borderRadius: "12px",
        padding: "28px",
        background: COLORS.redDim,
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: COLORS.red,
          letterSpacing: "0.1em",
          marginBottom: "20px",
        }}>
          WHAT ACTUALLY HAPPENS AT SCALE
        </div>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "8px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: COLORS.text,
          textAlign: "center",
          lineHeight: 2.2,
        }}>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            More brands onboarded
          </span>
          <span style={{ color: COLORS.red }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            More founder Slack support
          </span>
          <span style={{ color: COLORS.red }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            Founders stretched thin
          </span>
          <span style={{ color: COLORS.red }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            Activation quality drops
          </span>
          <span style={{ color: COLORS.red }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            Brands stall before revenue
          </span>
          <span style={{ color: COLORS.red }}>→</span>
          <span style={{ background: COLORS.bgCard, padding: "6px 14px", borderRadius: "6px", border: `1px solid ${COLORS.border}` }}>
            No case study produced
          </span>
        </div>
        <div style={{
          marginTop: "20px",
          padding: "14px 18px",
          background: COLORS.bgCard,
          borderRadius: "8px",
          border: `1px dashed ${COLORS.amber}`,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          color: COLORS.amber,
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          Not all founder Slack support is equal. The question is which parts actually drive the first sale, and which are just being helpful.
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ phase, title, items, metric }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: "20px",
      padding: "24px 0",
      borderBottom: `1px solid ${COLORS.border}`,
    }}>
      <div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: COLORS.accent,
          letterSpacing: "0.05em",
          marginBottom: "6px",
        }}>
          {phase}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, color: COLORS.text }}>
          {title}
        </div>
      </div>
      <div>
        {items.map((item, i) => (
          <div key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: COLORS.textMuted,
            padding: "4px 0",
            lineHeight: 1.6,
          }}>
            {item}
          </div>
        ))}
        {metric && (
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: COLORS.accent,
            marginTop: "10px",
            padding: "8px 12px",
            background: COLORS.accentGlow,
            borderRadius: "4px",
            display: "inline-block",
          }}>
            Metric: {metric}
          </div>
        )}
      </div>
    </div>
  );
}

function ParallelCard({ story, blueberry, muscle }) {
  return (
    <div style={{
      background: COLORS.bgCard,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "8px",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "11px",
        color: COLORS.accent,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}>
        {muscle}
      </div>
      <div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          color: COLORS.textMuted,
          lineHeight: 1.6,
          marginBottom: "12px",
        }}>
          <span style={{ color: COLORS.text, fontWeight: 600 }}>What I did: </span>
          {story}
        </div>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px",
          color: COLORS.textMuted,
          lineHeight: 1.6,
          paddingLeft: "14px",
          borderLeft: `2px solid ${COLORS.accent}`,
        }}>
          <span style={{ color: COLORS.text, fontWeight: 600 }}>Blueberry parallel: </span>
          {blueberry}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div style={{
      background: COLORS.bg,
      color: COLORS.text,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${COLORS.accent}; color: white; }
        @media (max-width: 768px) {
          .grid-icp { grid-template-columns: 1fr !important; }
          .grid-evidence { grid-template-columns: 1fr !important; }
          .grid-timeline { grid-template-columns: 1fr !important; }
          .grid-parallels { grid-template-columns: 1fr !important; }
          .grid-nowlater { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "80px 24px 120px" }}>

        {/* ===== HEADER ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              color: COLORS.textDim,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}>
              A GTM deliverable, not a cover letter
            </div>
            <h1 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: COLORS.text,
              marginBottom: "28px",
            }}>
              Which brands will make money{" "}
              <span style={{ color: COLORS.textDim }}>fast?</span>
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              maxWidth: "680px",
            }}>
              Blueberry promises every brand an answer to one question:{" "}
              <span style={{ color: COLORS.text, fontStyle: "italic" }}>did this make money?</span>{" "}
              But the speed at which that question gets answered depends on which brand is asking.
              This document maps the gap and what to build next.
            </p>
          </div>
        </FadeIn>

        {/* ===== SECTION 1: EVIDENCE GAP ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="01" label="The Evidence Map" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              One proof point carries the positioning
            </h2>
            <p style={{
              fontSize: "15px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "680px",
            }}>
              Blueberry positions as a revenue engine for B2C brands. The public evidence for that claim
              comes from one product category: impulse-purchase pet accessories at $48–$79 ARPU.
              Each new category with a revenue case study opens more GTM.
            </p>
            <div className="grid-evidence" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "24px",
            }}>
              <EvidenceCard
                brand="Impact Dog Crates"
                category="Pet accessories"
                followers="280K followers"
                revenueProof="10× ROI in two weeks. Switched from ManyChat entirely."
                detail='"Dog crates can be impulse purchases. People want to buy in the moment." — Dyllan Barnes'
                proofLevel="strong"
              />
              <EvidenceCard
                brand="immi"
                category="Healthy ramen"
                followers="300K followers"
                revenueProof={null}
                detail="100% comment coverage in first week. Still preparing to launch DM conversion. Hasn't activated the revenue side yet."
                proofLevel="partial"
              />
            </div>
            <div className="grid-evidence" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              marginBottom: "32px",
            }}>
              {[
                { brand: "Mellow", category: "Sleep / mattresses" },
                { brand: "alice", category: "Beauty / wellness" },
                { brand: "Chaos Audio", category: "Guitar pedals" },
              ].map((b, i) => (
                <EvidenceCard key={i} brand={b.brand} category={b.category} proofLevel="none" />
              ))}
            </div>
            <div style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "8px",
              padding: "20px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: COLORS.textDim, letterSpacing: "0.05em" }}>
                AGGREGATE CLAIM ON HOMEPAGE
              </div>
              <div style={{ fontSize: "15px", color: COLORS.textMuted, lineHeight: 1.6 }}>
                "$2M+ revenue attributed in &lt;2 months." No methodology shown. Could be
                concentrated in Impact Dog Crates, could be spread across all brands. The number
                is probably real. The distribution is unknown.
              </div>
            </div>
            <div style={{
              marginTop: "28px",
              padding: "18px 24px",
              borderLeft: `3px solid ${COLORS.accent}`,
              background: COLORS.accentGlow,
              borderRadius: "0 8px 8px 0",
              fontSize: "14px",
              color: COLORS.text,
              lineHeight: 1.7,
            }}>
              <strong>The upside:</strong> The evidence map is also the growth roadmap.
              The question for every qualification call:{" "}
              <em>which brand category produces the next revenue proof point fastest?</em>
            </div>
          </div>
        </FadeIn>

        {/* ===== SECTION 2: ICP FRAMEWORK ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="02" label="ICP Qualification" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              What predicts fast time-to-revenue?
            </h2>
            <p style={{
              fontSize: "15px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              marginBottom: "20px",
              maxWidth: "680px",
            }}>
              Six questions for qualification calls, based on the one brand
              with visible revenue data. These are questions to ask during demos, not scores to assign.
            </p>
            <p style={{
              fontSize: "13px",
              color: COLORS.textDim,
              lineHeight: 1.6,
              marginBottom: "8px",
              maxWidth: "680px",
            }}>
              These predict whether the DM channel will produce revenue for that brand. They don't predict whether the brand will sign the contract. That's a different question.
            </p>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              color: COLORS.textDim,
              marginBottom: "32px",
            }}>
              Built from one public data point. With internal data across 10+ brands, replace guesses with patterns.
            </p>
            <div className="grid-icp">
              {[
                {
                  factor: "Purchase impulsivity",
                  question: "Can a personalized DM with a discount close the sale in one touch? Or does the buyer need to compare options and think it over?",
                  signal: 'Impact signal: "Dog crates can be impulse purchases. People want to buy in the moment."',
                },
                {
                  factor: "ARPU sweet spot",
                  question: "Is the product priced low enough for impulse ($30–$150) but high enough that each conversion moves the revenue needle for the brand?",
                  signal: "Impact signal: $48–$79 product range. Low enough for impulse, high enough for 10× ROI math to work.",
                },
                {
                  factor: "Offer readiness",
                  question: "Does the brand already have discount codes, a Shopify catalog, and landing pages ready to go? Or does that need to be set up first?",
                  signal: "Impact signal: Switched from ManyChat. Discount codes, catalog, and landing pages were already set up. Took <20 minutes.",
                },
                {
                  factor: "Engagement volume",
                  question: "Does the brand get enough comments and story reactions to give Blueberry a steady stream of people to DM?",
                  signal: "Impact signal: 280K followers. 270K+ reached with personalized conversations. High comment volume per post.",
                },
                {
                  factor: "Posting frequency",
                  question: "Does the brand post often enough to give the AI a steady stream of new conversation surfaces?",
                  signal: "Impact signal: Impact Dog Crates posts frequently. A 280K-follower brand posting twice a month gives fewer at-bats than a 100K brand posting daily.",
                },
                {
                  factor: "Brand voice trainability",
                  question: "Does the brand have a distinct, consistent voice that Blueberry's LLM can learn quickly? Or is the voice all over the place?",
                  signal: 'Impact signal: "Blueberry captured most of their brand tone in the first week." Mentions customer\'s dog by name.',
                },
              ].map((row, i) => (
                <ICPRow key={i} {...row} index={i} />
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ===== SECTION 3: MANYCHAT DISPLACEMENT ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="03" label="The Named Segment" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              Brands that already outgrew ManyChat
            </h2>
            <p style={{
              fontSize: "15px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              marginBottom: "32px",
              maxWidth: "680px",
            }}>
              Impact Dog Crates switched from ManyChat because "it was obvious it was automated."
              That's not a one-off complaint. ManyChat's own community and review sites surface
              the same friction patterns that Blueberry solves by design.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  pain: "Repeat messaging",
                  detail: "ManyChat's community forum has users building workarounds to stop DMing the same person every time they comment. One thread: \"Right now, sending a DM every time someone comments starts to feel spammy — so looking for a smarter way to handle this.\"",
                  blueberry: "Blueberry handles deduplication natively. The AI knows who it's already talked to.",
                },
                {
                  pain: "Personalization ceiling",
                  detail: "ManyChat sends templated flows. You can customize paths, but the messages still read like a bot following a script. ManyChat's own blog post is titled \"How to Personalize Your Automated Replies (So They Sound Like YOU, Not a Robot).\"",
                  blueberry: "Blueberry's LLM writes each DM individually. It mentions the customer's dog by name. It adapts when you make small edits.",
                },
                {
                  pain: "Pricing punishes growth",
                  detail: "ManyChat charges per contact — including anyone who follows you, even if they never interact with an automation. Trustpilot reviews call this out repeatedly. A brand with 280K followers pays significantly more than one with 10K.",
                  blueberry: "If Blueberry's pricing isn't tied to follower count, that's a direct switching argument in outbound.",
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: COLORS.bgCard,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: "8px",
                  padding: "20px",
                }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "12px",
                    color: COLORS.amber,
                    letterSpacing: "0.05em",
                    marginBottom: "10px",
                  }}>
                    {item.pain}
                  </div>
                  <div style={{
                    fontSize: "14px",
                    color: COLORS.textMuted,
                    lineHeight: 1.6,
                    marginBottom: "12px",
                  }}>
                    {item.detail}
                  </div>
                  <div style={{
                    fontSize: "13px",
                    color: COLORS.text,
                    lineHeight: 1.6,
                    paddingLeft: "14px",
                    borderLeft: `2px solid ${COLORS.accent}`,
                  }}>
                    {item.blueberry}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: "24px",
              padding: "18px 24px",
              borderLeft: `3px solid ${COLORS.accent}`,
              background: COLORS.accentGlow,
              borderRadius: "0 8px 8px 0",
              fontSize: "14px",
              color: COLORS.text,
              lineHeight: 1.7,
            }}>
              Brands graduating off ManyChat have already self-identified the problem Blueberry solves.
              They don't need to be convinced that DM automation matters. They need to be convinced
              that Blueberry's version is different enough to switch.
            </div>
          </div>
        </FadeIn>

        {/* ===== SECTION 4: ACTIVATION MAP ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="04" label="Getting Brands to Revenue" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              What has to happen before a brand sees its first sale
            </h2>
            <p style={{
              fontSize: "15px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "680px",
            }}>
              Blueberry's onboarding mapped step by step.
              Amber borders mark where founders are personally driving the outcome via Slack right now.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <ActivationStep
                label="Connect"
                type="setup"
                hasIntervention={false}
                items={[
                  "Connect social channels (Instagram, Facebook, TikTok, YouTube)",
                  "Upload brand voice guidelines and product catalog",
                  "Connect Shopify integration",
                ]}
              />
              <div style={{ textAlign: "center", color: COLORS.textDim, fontSize: "20px" }}>↓</div>
              <ActivationStep
                label="Configure"
                type="supporting"
                hasIntervention={true}
                items={[
                  "Set up the Rules Engine so the brand controls which interactions get automated",
                  "Turn on comment moderation: hide spam, flag trolls, prioritize real questions",
                  "Load offers: discount codes, product recs, follow-up sequences",
                  "Review period: brand reads and corrects AI replies before going full autopilot",
                ]}
              />
              <div style={{ textAlign: "center", color: COLORS.textDim, fontSize: "20px" }}>↓</div>
              <ActivationStep
                label="First DMs Go Out"
                type="core"
                hasIntervention={true}
                items={[
                  "Blueberry sends the first batch of personalized DMs to engaged followers",
                  "Each DM uses follower profile research + brand voice + product catalog",
                ]}
              />
              <div style={{ textAlign: "center", color: COLORS.textDim, fontSize: "20px" }}>↓</div>
              <ActivationStep
                label="First Attributed Sale"
                type="aha"
                hasIntervention={false}
                items={[
                  "Revenue shows up in the dashboard, traced back to a specific DM from a specific post",
                  "The brand can see exactly which conversation drove which purchase",
                ]}
              />
            </div>
            <div style={{
              marginTop: "32px",
              padding: "18px 24px",
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "8px",
            }}>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: COLORS.accent,
                marginBottom: "8px",
                letterSpacing: "0.05em",
              }}>
                METRIC TO TRACK
              </div>
              <div style={{ fontSize: "15px", color: COLORS.text, lineHeight: 1.7, marginBottom: "20px" }}>
                <strong>Days to first attributed sale.</strong>{" "}
                Impact Dog Crates hit it in about 14 days.{" "}
                Track this for every brand onboarded.
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: COLORS.textDim,
                letterSpacing: "0.05em",
                marginBottom: "14px",
              }}>
                WHEN A BRAND STALLS, THE REASON MATTERS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  {
                    where: "Stuck in Configure",
                    what: "Brand connected channels but never sent its first DMs. Usually means the Rules Engine or offer setup is too complex, or the brand doesn't have discount codes ready.",
                    color: COLORS.amber,
                  },
                  {
                    where: "DMs sent, no sales",
                    what: "Blueberry is sending DMs but nothing converts. Either the offer isn't compelling, the product isn't impulse-friendly, or the brand voice doesn't land.",
                    color: COLORS.red,
                  },
                  {
                    where: "First sale, then stops",
                    what: "Brand saw a conversion but didn't keep going. Might not trust the ROI yet, might need help expanding to more posts or platforms, might not know what to do next.",
                    color: COLORS.textDim,
                  },
                ].map((mode, i) => (
                  <div key={i} style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "16px",
                    padding: "12px 0",
                    borderBottom: i < 2 ? `1px solid ${COLORS.border}` : "none",
                    alignItems: "start",
                  }}>
                    <div style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: mode.color,
                    }}>
                      {mode.where}
                    </div>
                    <div style={{
                      fontSize: "13px",
                      color: COLORS.textMuted,
                      lineHeight: 1.6,
                    }}>
                      {mode.what}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop: "16px",
                fontSize: "13px",
                color: COLORS.textMuted,
                lineHeight: 1.6,
                fontStyle: "italic",
              }}>
                Month 1 diagnostic interviews should be sorted by failure type. Talking to a brand stuck in Configure and a brand whose DMs aren't converting will surface different problems.
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ===== SECTION 5: HOW IT COMPOUNDS ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="05" label="How It Compounds" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              The loop that works{" "}
              <span style={{ color: COLORS.textDim }}>and the constraint that breaks it</span>
            </h2>
            <p style={{
              fontSize: "15px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "680px",
            }}>
              Mackenzie's storytelling will drive pipeline. Impact Dog Crates proved the AI works.
              The part that hasn't been written down yet is what happens between
              "brand signs up" and "brand produces a case study."
            </p>
            <SystemDiagram />
          </div>
        </FadeIn>

        {/* ===== SECTION 6: THE PLAN ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="06" label="The Plan" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              What to build now,{" "}
              <span style={{ color: COLORS.textDim }}>what to build later</span>
            </h2>

            <div className="grid-nowlater" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginTop: "40px",
            }}>
              {/* NOW */}
              <div style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.accent}`,
                borderRadius: "12px",
                padding: "28px",
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: COLORS.accent,
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}>
                  NOW — INTERN SCOPE
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: COLORS.textDim,
                  marginBottom: "20px",
                }}>
                  5 people · 7–10 brands · Post-stealth
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <TimelineItem
                    phase="MONTH 1"
                    title="Diagnose"
                    items={[
                      "Interview 3–5 current brands, sorted by where they stalled: stuck in configure, DMs sent but no sale, or first sale then stopped. Each failure type surfaces different problems.",
                      "Start tracking days-to-first-sale across all active brands",
                      "Figure out which brand characteristics predict fast revenue. Test the six factors above against real data.",
                    ]}
                    metric="Days-to-first-sale tracked and baselined"
                  />
                  <TimelineItem
                    phase="MONTH 2"
                    title="Build"
                    items={[
                      "Figure out which founder Slack behaviors actually drive first sales vs. which are just helpful. Turn the high-leverage ones into a repeatable onboarding sequence.",
                      "Split onboarding into two tracks: brands that should see revenue fast (impulse products, high engagement) vs. brands that need more ramp time",
                      "Draft outbound targeting brands currently on ManyChat who've outgrown it",
                    ]}
                    metric="Playbook tested with 2–3 new brand onboardings"
                  />
                  <TimelineItem
                    phase="MONTH 3"
                    title="Prove"
                    items={[
                      "Get 1–2 new case studies from categories that aren't pet accessories (food, beauty, audio — whoever hits revenue first)",
                      "Compare how long onboarding takes with the playbook vs. without it",
                      "Hand off a documented, repeatable system",
                    ]}
                    metric="New category with published revenue proof"
                  />
                </div>
              </div>

              {/* LATER */}
              <div style={{
                background: COLORS.bgCard,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "12px",
                padding: "28px",
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: COLORS.textDim,
                  letterSpacing: "0.1em",
                  marginBottom: "8px",
                }}>
                  LATER — FT SCOPE
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: COLORS.textDim,
                  marginBottom: "20px",
                }}>
                  10+ people · 30–50 brands · Scaling
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {[
                    {
                      title: "Know which brands are thriving vs. coasting",
                      desc: "Some brands will use Blueberry for comment moderation and never turn on DMs. Some will run DMs and see revenue. Some will go all-in with influencer whitelisting and multi-platform. Tracking which bucket each brand is in tells you where to focus.",
                    },
                    {
                      title: "Catch brands before they churn",
                      desc: "When a brand stops sending DMs or stops checking their attribution dashboard, that's an early signal. Flag it before they cancel.",
                    },
                    {
                      title: "Help good brands use more of the product",
                      desc: "A brand seeing revenue from Instagram DMs should be trying influencer whitelisting, adding TikTok, running multi-touch sequences. Build the playbook for graduating brands to the next level.",
                    },
                    {
                      title: "Move onboarding into the product",
                      desc: "Right now, founders drive onboarding over Slack. Study those Slack patterns now so the product team can eventually build onboarding flows that do the same job.",
                    },
                    {
                      title: "Make the cost of leaving concrete",
                      desc: "Every month a brand uses Blueberry, it accumulates voice training data, audience enrichment, conversation history, and attribution data that doesn't port anywhere else. Quantify that.",
                    },
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: COLORS.text,
                        marginBottom: "6px",
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        color: COLORS.textMuted,
                        lineHeight: 1.6,
                      }}>
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ===== SECTION 7: WHY ME ===== */}
        <FadeIn>
          <div style={{ marginBottom: "100px" }}>
            <SectionLabel number="07" label="Why Me" />
            <h2 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 400,
              marginBottom: "16px",
              lineHeight: 1.2,
            }}>
              I've done this{" "}
              <span style={{ color: COLORS.textDim }}>twice</span>
            </h2>
            <p style={{
              fontSize: "15px",
              color: COLORS.textMuted,
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "680px",
            }}>
              I'm looking for a summer GTM internship. 4 years of B2B product management,
              same pattern each time: product works but GTM can't convert consistently.
              Talk to customers, find what predicts success, write it down
              so it works without the founders in the room.
            </p>
            <div className="grid-parallels" style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
            }}>
              <ParallelCard
                muscle="Figuring out why some customers convert and others don't"
                story="Sales couldn't close blockchain curriculum at universities. Interviewed 10+ experts in 3 days, found the gap (curriculum built for professionals, not students), rebuilt the offering. 6 partnerships closed."
                blueberry="Same question here: why does Impact Dog Crates hit 10× ROI in two weeks while other brands stall? Talk to the brands, find the pattern, write it down."
              />
              <ParallelCard
                muscle="Build Systems That Replace Founder Time"
                story="AI course had strong demand but weak conversion. Found that sales reps couldn't confidently explain the courses. Built expert videos so the instructors did the convincing instead of the reps. 14% lift, $200K revenue."
                blueberry="Blueberry's onboarding runs through founder Slack channels. That works at 10 brands. At 30, someone needs to figure out which parts of that Slack support actually move the needle and make those parts repeatable."
              />
              <ParallelCard
                muscle="Finding the right customers from scratch"
                story="Built Interview Kickstart's first B2B product. Found the segment where the learner's personal incentive and the company's business need were the same thing (IT services where upskilling wins client contracts). 3 enterprise clients, 14% above target."
                blueberry="Blueberry needs to figure out which types of brands see revenue fastest. Same work: find where the product clicks immediately, then go get more of those."
              />
            </div>
          </div>
        </FadeIn>

        {/* ===== FOOTER ===== */}
        <FadeIn>
          <div style={{
            borderTop: `1px solid ${COLORS.border}`,
            paddingTop: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            <div style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "24px",
              color: COLORS.text,
              lineHeight: 1.4,
            }}>
              Built from what's publicly visible.{" "}
              <span style={{ color: COLORS.textMuted }}>
                Imagine what I build with a summer inside the building.
              </span>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: COLORS.textMuted,
            }}>
              <span>
                <span style={{ color: COLORS.text }}>Sidharth Sundaram</span>{" "}
                · MS Engineering Management, Purdue University (May 2027)
              </span>
              <span>
                4 years B2B product management · Looking for a summer 2026 GTM internship
              </span>
              <span>
                Authorized to work via CPT (standard cooperation letter, no sponsorship)
              </span>
              <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                <a href="https://linkedin.com/in/sidharthsundaram" target="_blank" rel="noopener noreferrer"
                  style={{ color: COLORS.accent, textDecoration: "none", fontSize: "13px" }}>
                  LinkedIn ↗
                </a>
                <a href="https://sidharthsundaram.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: COLORS.accent, textDecoration: "none", fontSize: "13px" }}>
                  Portfolio ↗
                </a>
                <a href="mailto:sundar84@purdue.edu"
                  style={{ color: COLORS.accent, textDecoration: "none", fontSize: "13px" }}>
                  sundar84@purdue.edu
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
