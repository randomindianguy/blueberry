import { useState, useRef, useEffect } from "react";

const C = {
  bg: "#0A0A0F",
  card: "#12121A",
  border: "#1E1E2E",
  accent: "#4F7BF7",
  accentGlow: "rgba(79, 123, 247, 0.12)",
  red: "#E05252",
  redDim: "rgba(224, 82, 82, 0.12)",
  green: "#4ADE80",
  greenDim: "rgba(74, 222, 128, 0.12)",
  amber: "#FBBF24",
  amberDim: "rgba(251, 191, 36, 0.12)",
  text: "#E8E8EE",
  muted: "#9898AA",
  dim: "#6B6B7B",
};

function Expand({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <div style={{
      border: `1px solid ${C.border}`,
      borderRadius: "8px",
      overflow: "hidden",
      background: C.card,
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 20px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          color: C.text,
          textAlign: "left",
        }}
      >
        {title}
        <span style={{
          color: C.dim,
          fontSize: "18px",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
        }}>+</span>
      </button>
      <div style={{
        maxHeight: open ? `${height}px` : "0px",
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}>
        <div ref={contentRef} style={{ padding: "0 20px 20px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Tag({ color, bg, children }) {
  return (
    <span style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: "11px",
      color,
      background: bg,
      padding: "3px 8px",
      borderRadius: "4px",
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}

export default function App() {
  return (
    <div style={{
      background: C.bg,
      color: C.text,
      minHeight: "100vh",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::selection { background: ${C.accent}; color: white; }
      `}</style>

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px 100px" }}>

        {/* ===== THE RECOMMENDATION ===== */}
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: C.dim,
          letterSpacing: "0.1em",
          marginBottom: "20px",
        }}>
          A GTM DELIVERABLE, NOT A COVER LETTER
        </div>

        <h1 style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(30px, 4.5vw, 44px)",
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: "24px",
        }}>
          I looked at Blueberry's public GTM surface{" "}
          <span style={{ color: C.muted }}>
            and found three things worth investigating.
          </span>
        </h1>

        <p style={{
          fontSize: "16px",
          color: C.muted,
          lineHeight: 1.7,
          marginBottom: "48px",
          maxWidth: "620px",
        }}>
          I don't know what Blueberry looks like from the inside. What follows is built
          entirely from public sources. Some of it might be wrong. But if even one of these
          is a real problem, I'd like to be the person who works on it this summer.
        </p>

        <div style={{
          padding: "16px 20px",
          background: C.accentGlow,
          borderLeft: `3px solid ${C.accent}`,
          borderRadius: "0 8px 8px 0",
          marginBottom: "48px",
          fontSize: "15px",
          color: C.text,
          lineHeight: 1.6,
        }}>
          I'm Sidharth Sundaram. 4 years B2B product management, MS Engineering Management at Purdue.
          Looking for a summer GTM internship. CPT authorized, no sponsorship needed.
        </div>

        {/* ===== THREE ARGUMENTS ===== */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "48px" }}>

          {/* Argument 1: What's about to break */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: "8px",
            padding: "24px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: C.accent,
              letterSpacing: "0.06em",
              marginBottom: "10px",
            }}>WHAT I NOTICED</div>
            <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
              Blueberry's revenue proof comes from one brand category.
            </div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6, marginBottom: "14px" }}>
              Impact Dog Crates: 10× ROI, impulse-purchase pet accessories, $48–$79 ARPU.
              The six other logos on the homepage have no published revenue numbers.
              immi has 100% comment coverage but hasn't activated DM conversion yet.
              Mellow, alice, Chaos Audio, OpusClip — logo only.
            </div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
              That might be intentional — you might be waiting to publish until numbers are bigger.
              But from the outside, every sales conversation with a brand that isn't impulse-purchase
              pet accessories has to overcome the question: "will this work for us?"
              Each new category with a revenue case study makes that conversation easier.
            </div>
          </div>

          {/* Argument 2: What I'd do */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: "8px",
            padding: "24px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: C.accent,
              letterSpacing: "0.06em",
              marginBottom: "10px",
            }}>WHAT I'D INVESTIGATE</div>
            <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px" }}>
              Three things I'd want to test with access to real data.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Month 1 — What predicts fast revenue?</strong>{" "}
                I'd interview 3–5 current brands, sorted by where they stalled: stuck in configure, DMs sent but no sales, or converted once and stopped.
                Each failure type would surface different problems. I'd start tracking days-to-first-sale across all brands to see if a pattern exists.
              </div>
              <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Month 2 — What's actually driving onboarding success?</strong>{" "}
                From outside, it looks like founders are heavily involved in onboarding via Slack. If that's true,
                I'd figure out which parts of that involvement actually drive first sales vs. which are just being helpful.
                The high-leverage parts become a repeatable sequence. I'd also draft outbound targeting brands that have outgrown ManyChat.
              </div>
              <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Month 3 — Produce new proof.</strong>{" "}
                Get 1–2 case studies from categories that aren't pet accessories. Compare onboarding time
                with whatever playbook exists by then vs. without. Hand off a documented system.
              </div>
            </div>
          </div>

          {/* Argument 3: Why I can do this */}
          <div style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: "8px",
            padding: "24px",
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: C.accent,
              letterSpacing: "0.06em",
              marginBottom: "10px",
            }}>WHY I CAN DO THIS</div>
            <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px" }}>
              I've done this exact job twice. Both times, the pattern was the same.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Diagnosed why some customers convert and others don't.</strong>{" "}
                Sales couldn't close blockchain curriculum at universities. I interviewed 10+ experts in 3 days,
                found the gap (built for professionals, not students), rebuilt the offering. 6 partnerships closed.
              </div>
              <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Built systems that replaced founder time.</strong>{" "}
                AI course had strong demand but weak conversion. Sales reps couldn't confidently explain the courses.
                I built expert videos so instructors did the convincing instead of reps. 14% conversion lift, $200K revenue.
              </div>
              <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
                <strong style={{ color: C.text }}>Found the right customers from scratch.</strong>{" "}
                Built Interview Kickstart's first B2B product. Found the segment where the learner's incentive
                and the company's business need were the same thing. 3 enterprise clients, 14% above revenue target.
              </div>
            </div>
          </div>
        </div>

        {/* ===== THE ASK ===== */}
        <div style={{
          padding: "24px",
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: "8px",
          marginBottom: "64px",
        }}>
          <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
            <strong style={{ color: C.text }}>Sidharth Sundaram</strong> · MS Engineering Management, Purdue (May 2027)
          </div>
          <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6, marginTop: "4px" }}>
            Three months. CPT authorized, no sponsorship. If the thesis is wrong, it ends naturally in August. If it's right, you'll know by then.
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: "12px" }}>
            <a href="https://linkedin.com/in/sidharthsundaram" target="_blank" rel="noopener noreferrer"
              style={{ color: C.accent, textDecoration: "none", fontSize: "13px" }}>LinkedIn ↗</a>
            <a href="https://sidharthsundaram.com" target="_blank" rel="noopener noreferrer"
              style={{ color: C.accent, textDecoration: "none", fontSize: "13px" }}>Portfolio ↗</a>
            <a href="mailto:sundar84@purdue.edu"
              style={{ color: C.accent, textDecoration: "none", fontSize: "13px" }}>sundar84@purdue.edu</a>
          </div>
        </div>

        {/* ===== APPENDIX ===== */}
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          color: C.dim,
          letterSpacing: "0.1em",
          marginBottom: "16px",
        }}>
          APPENDIX — SUPPORTING DETAIL
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

          <Expand title="What predicts fast time-to-revenue? (6 factors)">
            <p style={{ fontSize: "13px", color: C.dim, lineHeight: 1.5, marginBottom: "14px" }}>
              These predict whether the DM channel will produce revenue for that brand. They don't predict whether the brand signs the contract. Built from one public data point.
            </p>
            {[
              ["Purchase impulsivity", "Can a DM with a discount close in one touch?", '"People want to buy in the moment."'],
              ["ARPU sweet spot", "Priced for impulse ($30–$150) but high enough to move the needle?", "$48–$79 product range"],
              ["Offer readiness", "Discount codes, Shopify catalog, landing pages ready to go?", "Switched from ManyChat. Infra existed. <20 min setup."],
              ["Engagement volume", "Enough comments/reactions for a steady DM pipeline?", "280K followers, 270K+ reached"],
              ["Posting frequency", "Posts often enough to give the AI new conversation surfaces?", "Impact posts frequently. 280K posting 2×/month < 100K posting daily."],
              ["Voice trainability", "Distinct brand voice Blueberry's LLM can learn fast?", "Captured brand tone in first week. Mentions dog by name."],
            ].map(([factor, q, signal], i) => (
              <div key={i} style={{ padding: "10px 0", borderBottom: i < 5 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: C.text, marginBottom: "4px" }}>{factor}</div>
                <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>{q}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: C.dim, marginTop: "4px" }}>{signal}</div>
              </div>
            ))}
          </Expand>

          <Expand title="ManyChat pain points (primary sources)">
            {[
              {
                pain: "Repeat messaging",
                source: "ManyChat community forum (April 2026)",
                quote: "\"Right now, sending a DM every time someone comments starts to feel spammy — so looking for a smarter way to handle this.\"",
                answer: "Blueberry handles deduplication natively.",
              },
              {
                pain: "Personalization ceiling",
                source: "ManyChat blog (October 2025)",
                quote: "Blog title: \"How to Personalize Your Automated Replies (So They Sound Like YOU, Not a Robot).\"",
                answer: "Blueberry's LLM writes each DM individually. Adapts when you make small edits.",
              },
              {
                pain: "Pricing punishes growth",
                source: "Trustpilot reviews",
                quote: "ManyChat charges per contact, including anyone who follows you. Brands with large audiences pay significantly more.",
                answer: "If Blueberry's pricing isn't tied to follower count, that's a direct switching argument.",
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: "10px 0", borderBottom: i < 2 ? `1px solid ${C.border}` : "none" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: C.text }}>{item.pain}</span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.dim }}>{item.source}</span>
                </div>
                <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5, marginBottom: "6px" }}>{item.quote}</div>
                <div style={{ fontSize: "12px", color: C.accent, lineHeight: 1.5 }}>{item.answer}</div>
              </div>
            ))}
          </Expand>

          <Expand title="How a brand gets to its first attributed sale">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { step: "Connect", items: "Social channels, brand voice, Shopify catalog", flag: false },
                { step: "Configure", items: "Rules Engine, moderation, offers, review period", flag: true },
                { step: "First DMs go out", items: "Personalized DMs sent to engaged followers", flag: true },
                { step: "First attributed sale", items: "Revenue in dashboard, traced to specific DM from specific post", flag: false },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "10px 14px",
                  border: `1px solid ${s.flag ? C.amber : C.border}`,
                  borderRadius: "6px",
                  position: "relative",
                }}>
                  {s.flag && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", color: C.amber, position: "absolute", top: "-8px", right: "10px", background: C.card, padding: "0 6px" }}>FOUNDER SLACK</span>}
                  <div style={{ fontSize: "13px", fontWeight: 600, color: C.text, marginBottom: "2px" }}>{s.step}</div>
                  <div style={{ fontSize: "12px", color: C.muted }}>{s.items}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "12px", fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>
              <strong style={{ color: C.text }}>Metric:</strong> Days to first attributed sale. Impact Dog Crates benchmark: ~14 days.
            </div>
          </Expand>

          <Expand title="How this compounds (and where it breaks)">
            <div style={{ marginBottom: "14px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.accent, marginBottom: "8px" }}>WHAT SHOULD HAPPEN</div>
              <div style={{ fontSize: "13px", color: C.muted, lineHeight: 1.8 }}>
                Revenue proof published → stronger positioning → easier closes → more brands reach first sale → more revenue proof → repeat.
              </div>
            </div>
            <div style={{ marginBottom: "14px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.red, marginBottom: "8px" }}>WHAT HAPPENS AT SCALE</div>
              <div style={{ fontSize: "13px", color: C.muted, lineHeight: 1.8 }}>
                More brands onboarded → more founder Slack support → founders stretched → activation quality drops → brands stall → no case study produced.
              </div>
            </div>
            <div style={{ fontSize: "12px", color: C.amber, fontStyle: "italic" }}>
              Not all founder Slack support is equal. The question is which parts actually drive the first sale, and which are just being helpful.
            </div>
          </Expand>

          <Expand title="What this looks like at scale (FT scope)">
            <div style={{ fontSize: "13px", color: C.dim, lineHeight: 1.5, marginBottom: "12px" }}>
              The 3-month intern plan is above. Here's what the work grows into if it works.
            </div>
            {[
              "Know which brands are thriving vs. coasting (and track transitions)",
              "Catch brands before they churn via behavior-change signals",
              "Help good brands use more of the product (influencer whitelisting, new platforms, multi-touch)",
              "Move onboarding into the product so it doesn't require Slack",
              "Make the cost of leaving concrete (voice data, audience enrichment, conversation history)",
            ].map((item, i) => (
              <div key={i} style={{ fontSize: "12px", color: C.muted, padding: "4px 0", lineHeight: 1.5 }}>{item}</div>
            ))}
          </Expand>

          <Expand title="Evidence map — all seven brands">
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { brand: "Impact Dog Crates", cat: "Pet accessories · 280K", proof: "strong", detail: "10× ROI in two weeks. Switched from ManyChat." },
                { brand: "immi", cat: "Healthy ramen · 300K", proof: "partial", detail: "100% comment coverage. Hasn't activated DM conversion yet." },
                { brand: "Mellow", cat: "Sleep / mattresses", proof: "none", detail: null },
                { brand: "alice", cat: "Beauty / wellness", proof: "none", detail: null },
                { brand: "Chaos Audio", cat: "Guitar pedals", proof: "none", detail: null },
                { brand: "OpusClip", cat: "AI video software", proof: "none", detail: null },
                { brand: "[unidentified]", cat: "Unknown", proof: "none", detail: null },
              ].map((b, i) => {
                const colors = {
                  strong: { c: C.green, bg: C.greenDim, l: "Revenue proof" },
                  partial: { c: C.amber, bg: C.amberDim, l: "Engagement only" },
                  none: { c: C.red, bg: C.redDim, l: "Logo only" },
                };
                const p = colors[b.proof];
                return (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "6px 0", borderBottom: i < 6 ? `1px solid ${C.border}` : "none" }}>
                    <div>
                      <span style={{ fontSize: "13px", color: C.text, fontWeight: 600 }}>{b.brand}</span>
                      <span style={{ fontSize: "11px", color: C.dim, marginLeft: "8px" }}>{b.cat}</span>
                      {b.detail && <div style={{ fontSize: "11px", color: C.muted, marginTop: "2px" }}>{b.detail}</div>}
                    </div>
                    <Tag color={p.c} bg={p.bg}>{p.l}</Tag>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: "12px", fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>
              "$2M+ revenue attributed in &lt;2 months." No methodology shown. Could be concentrated in Impact, could be spread. The number is probably real. The distribution is unknown.
            </div>
          </Expand>

        </div>

        {/* ===== FOOTER ===== */}
        <div style={{
          marginTop: "48px",
          paddingTop: "24px",
          borderTop: `1px solid ${C.border}`,
        }}>
          <div style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "20px",
            color: C.text,
            lineHeight: 1.4,
          }}>
            Built from what's publicly visible.{" "}
            <span style={{ color: C.muted }}>
              Imagine what I build with a summer inside the building.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
