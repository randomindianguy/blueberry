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
  muted: "#B0B0BE",
  dim: "#8585A0",
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
          I spent a week looking at Blueberry{" "}
          <span style={{ color: C.muted }}>
            the way your customers see it.
          </span>
        </h1>

        <p style={{
          fontSize: "16px",
          color: C.muted,
          lineHeight: 1.7,
          marginBottom: "48px",
          maxWidth: "620px",
        }}>
          I audited every brand on your homepage. Checked their Instagram, their Shopify stores,
          their DM triggers. Then I DM'd two of them myself to see what a customer actually receives.
          This is the kind of outside-in investigation that's hard to do when you're also
          running pipeline, demos, and onboarding. I'd like to do it full-time this summer.
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

          {/* Argument 1: The brand audit — real data, real prediction */}
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
            }}>WHAT I FOUND</div>
            <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
              I looked up every brand on your homepage. Here's what's visible from outside.
            </div>
            <div style={{ fontSize: "13px", color: C.dim, lineHeight: 1.5, marginBottom: "16px" }}>
              Public Instagram data + Shopify stores, checked this week. Some of this might be wrong. That's the point — you can verify in 10 seconds.
            </div>

            {/* Scorecard */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {[
                {
                  brand: "Impact Dog Crates",
                  ig: "187K",
                  posts: "4,931",
                  arpu: "$200–$800",
                  cat: "Pet accessories",
                  dm: false,
                  prediction: "Loves Blueberry",
                  predColor: C.green,
                  predBg: C.greenDim,
                  note: "Only brand with published revenue. Posts constantly. Switched from ManyChat.",
                },
                {
                  brand: "immi",
                  ig: "225K",
                  posts: "928",
                  arpu: "$10–$30",
                  cat: "Healthy ramen",
                  dm: true,
                  dmText: "\"DM us RAMEN for info\"",
                  prediction: "Probably loves it",
                  predColor: C.green,
                  predBg: C.greenDim,
                  note: "Active DM automation with brry.io attribution tracking. DM'd \"RAMEN\" and received a personalized response with product card and tracked purchase link within 60 seconds.",
                },
                {
                  brand: "Mellow Sleep",
                  ig: "60.7K",
                  posts: "121",
                  arpu: "$29–$99",
                  cat: "Pillows & bedding",
                  dm: true,
                  dmText: "\"DM us MOM for a special offer\"",
                  prediction: "Probably loves it",
                  predColor: C.green,
                  predBg: C.greenDim,
                  note: "Active DM automation with brry.io attribution tracking. Running a Mother's Day campaign with discount code LOVEMOM via Blueberry. Only 121 posts though — fewer conversation surfaces than Impact or immi.",
                },
                {
                  brand: "alice mushrooms",
                  ig: "120K",
                  posts: "361",
                  arpu: "$30–$60",
                  cat: "Vitamins & supplements",
                  dm: false,
                  prediction: "Platform risk",
                  predColor: C.red,
                  predBg: C.redDim,
                  note: "Instagram has taken down their account 10+ times. Meta flags mushroom brands as potential psychedelic violations. Hard to run DM automation when your account keeps disappearing.",
                },
                {
                  brand: "Chaos Audio",
                  ig: "18.9K",
                  posts: "602",
                  arpu: "$379",
                  cat: "Guitar pedals",
                  dm: false,
                  prediction: "Probably not",
                  predColor: C.red,
                  predBg: C.redDim,
                  note: "Tiny audience. Niche hobby. $379 is a considered purchase — a DM with a discount probably doesn't close this.",
                },
                {
                  brand: "OpusClip",
                  ig: "134K",
                  posts: "278",
                  arpu: "SaaS sub",
                  cat: "AI video clipping for creators",
                  dm: false,
                  prediction: "Different motion",
                  predColor: C.amber,
                  predBg: C.amberDim,
                  note: "B2C creator tool with 16M+ users, not a DTC product brand. No Shopify catalog to connect. A DM with a discount works differently for a software subscription than for a physical product.",
                },
              ].map((b, i) => (
                <div key={i} style={{
                  padding: "14px 16px",
                  border: `1px solid ${C.border}`,
                  borderRadius: "6px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <div>
                      <span style={{ fontSize: "14px", fontWeight: 600, color: C.text }}>{b.brand}</span>
                      <span style={{ fontSize: "12px", color: C.dim, marginLeft: "8px" }}>{b.cat}</span>
                    </div>
                    <Tag color={b.predColor} bg={b.predBg}>{b.prediction}</Tag>
                  </div>
                  <div style={{ display: "flex", gap: "16px", marginBottom: "8px", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: C.dim }}>IG: {b.ig}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: C.dim }}>Posts: {b.posts}</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: C.dim }}>ARPU: {b.arpu}</span>
                    {b.dm && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: C.accent }}>DM trigger active</span>}
                  </div>
                  {b.dm && b.dmText && (
                    <div style={{ fontSize: "12px", color: C.accent, marginBottom: "6px" }}>
                      Bio: {b.dmText}
                    </div>
                  )}
                  <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>{b.note}</div>
                </div>
              ))}
            </div>

            <div style={{
              padding: "14px 18px",
              borderLeft: `3px solid ${C.accent}`,
              background: C.accentGlow,
              borderRadius: "0 6px 6px 0",
              fontSize: "13px",
              color: C.text,
              lineHeight: 1.6,
            }}>
              <strong>My prediction:</strong> Impact, immi, and Mellow are your strongest brands — I DM'd "RAMEN" and "MOM" to immi and Mellow this week and both responded with personalized Blueberry DMs via brry.io tracking links. alice has a real platform risk problem. Chaos Audio is too niche. OpusClip is a creator SaaS tool, not a DTC product brand — the DM-to-purchase motion is fundamentally different there.
              You can check this against your internal data in about 10 seconds.
            </div>
          </div>

          {/* Evidence: DM screenshots */}
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
            }}>WHAT I GOT BACK</div>
            <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>
              I DM'd two of your brands as a stranger. Both responded in under 60 seconds.
            </div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6, marginBottom: "20px" }}>
              brry.io tracking links, personalized messages with my name, product cards with specific recommendations.
              This is what your product looks like from the customer side. It works.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: C.dim,
                  marginBottom: "8px",
                }}>SENT "RAMEN" TO @IMMIEATS</div>
                <img
                  src="/evidence/immi-dm.png"
                  alt="immi Blueberry DM response"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: `1px solid ${C.border}`,
                  }}
                />
                <div style={{ fontSize: "12px", color: C.muted, marginTop: "8px", lineHeight: 1.5 }}>
                  "Hey Sid!" + Variety Vol. 1 product card + brry.io/immi-variety-pack?bb= tracking link
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: C.dim,
                  marginBottom: "8px",
                }}>SENT "MOM" TO @MELLOW.SLEEP</div>
                <img
                  src="/evidence/mellow-dm.png"
                  alt="Mellow Blueberry DM response"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: `1px solid ${C.border}`,
                  }}
                />
                <div style={{ fontSize: "12px", color: C.muted, marginTop: "8px", lineHeight: 1.5 }}>
                  "Hey Sid!" + Mother's Day offer (code LOVEMOM, 20% off) + brry.io/mellowsleep tracking link
                </div>
              </div>
            </div>
          </div>

          {/* Argument 2: The diagnostic question */}
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
            }}>THE QUESTION THAT CONFIRMS OR DISPROVES THIS</div>
            <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px" }}>
              Which of your current brands would be "very disappointed" if Blueberry went away?
            </div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6, marginBottom: "16px" }}>
              My prediction is built from public data and two DMs I sent myself. The real answer is in your usage and churn numbers.
              If I'm right that Impact, immi, and Mellow are your strongest, the question becomes: what do they share that
              Chaos Audio and alice don't? That answer shapes everything else:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{
                padding: "12px 16px",
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
              }}>
                <div style={{ fontSize: "14px", color: C.text, fontWeight: 600, marginBottom: "4px" }}>
                  If only Impact-like brands love you
                </div>
                <div style={{ fontSize: "13px", color: C.muted, lineHeight: 1.5 }}>
                  The ICP is clear but narrow: impulse-purchase, high-engagement DTC. The job becomes
                  finding 10 more brands that look like Impact and producing case studies from that segment.
                </div>
              </div>
              <div style={{
                padding: "12px 16px",
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
              }}>
                <div style={{ fontSize: "14px", color: C.text, fontWeight: 600, marginBottom: "4px" }}>
                  If brands across multiple categories love you
                </div>
                <div style={{ fontSize: "13px", color: C.muted, lineHeight: 1.5 }}>
                  The segmentation thesis is wrong in a good way. The product works broadly.
                  The job becomes producing proof from each category and figuring out why
                  some brands in each category stall while others don't.
                </div>
              </div>
              <div style={{
                padding: "12px 16px",
                border: `1px solid ${C.border}`,
                borderRadius: "6px",
              }}>
                <div style={{ fontSize: "14px", color: C.text, fontWeight: 600, marginBottom: "4px" }}>
                  If nobody would be very disappointed
                </div>
                <div style={{ fontSize: "13px", color: C.muted, lineHeight: 1.5 }}>
                  Then the issue isn't GTM. It's product. I'd say so, shift the work
                  to user research feeding the product team, and figure out what's missing.
                </div>
              </div>
            </div>
            <div style={{
              marginTop: "16px",
              fontSize: "13px",
              color: C.dim,
              lineHeight: 1.6,
              fontStyle: "italic",
            }}>
              Months 2–3 depend on the answer to month 1. Anyone who gives you a 90-day plan
              before doing the diagnostic is guessing. The detailed plan for each path is in the appendix.
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
            }}>I'VE RUN THIS DIAGNOSTIC BEFORE</div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6, marginBottom: "14px" }}>
              <strong style={{ color: C.text }}>Found the right customers when we had zero to start with.</strong>{" "}
              Interview Kickstart wanted to sell B2B corporate training. We had no customers and no idea
              who'd buy. I talked to a bunch of companies and found one segment where the pitch was easy:
              IT services companies, because their engineers get interviewed by clients before contracts are signed.
              Upskilling wasn't a nice-to-have — it directly helped them win revenue. Focused there.
              3 enterprise clients, 14% above target, 4.6/5 satisfaction.
            </div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6, marginBottom: "14px" }}>
              <strong style={{ color: C.text }}>Made the sales process work without the best person in the room.</strong>{" "}
              Our AI courses had strong demand but people weren't buying. Turned out sales reps
              couldn't explain the courses confidently enough, and when someone's spending real money
              on education, that hesitation kills the deal. So I got the instructors to record short videos
              explaining what you'd actually learn, and put those in the follow-up emails.
              14% more people bought. $200K in revenue.
            </div>
            <div style={{ fontSize: "14px", color: C.muted, lineHeight: 1.6 }}>
              <strong style={{ color: C.text }}>Killed my own thesis when it wasn't working.</strong>{" "}
              Built a real-time coaching tool for TikTok creators who freeze on camera. Tested it.
              Reactions were lukewarm. Instead of tweaking the UI, I went back to the users and realized
              the real problem was 30 seconds before recording — they hadn't organized their thoughts yet.
              Threw away V1 and rebuilt around pre-recording prep. V2 worked.
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

          <Expand title="What I'd do in each scenario (month-by-month)">
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.accent, marginBottom: "8px" }}>MONTH 1 — SAME IN ALL SCENARIOS</div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>
                Survey existing brands on satisfaction. Interview 3–5, sorted by where they stalled (stuck in configure, DMs sent but no sales, converted once and stopped).
                Start tracking days-to-first-sale. Profile the brands that love Blueberry vs. the ones that don't. The answer shapes months 2–3.
              </div>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.amber, marginBottom: "8px" }}>IF ONLY IMPACT-LIKE BRANDS LOVE YOU</div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5, marginBottom: "6px" }}>
                Month 2: Build qualification criteria from Impact's profile. Draft outbound targeting brands that match (impulse DTC, high engagement, ManyChat users hitting the ceiling).
              </div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>
                Month 3: Onboard 2–3 new Impact-like brands using the criteria. Produce case studies. Quantify whether the criteria predicted fast revenue.
              </div>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.green, marginBottom: "8px" }}>IF MULTIPLE CATEGORIES LOVE YOU</div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5, marginBottom: "6px" }}>
                Month 2: Figure out what the successful brands across categories share (might be engagement volume, not product type). Build onboarding playbook from what founders do in Slack for these brands.
              </div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>
                Month 3: Produce case studies from 2–3 different categories. The positioning shifts from "works for DTC pet brands" to "works for X type of brand across categories."
              </div>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: C.red, marginBottom: "8px" }}>IF NOBODY WOULD BE VERY DISAPPOINTED</div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5, marginBottom: "6px" }}>
                Month 2: Shift to user research. Interview brands about what's missing. Feed findings to the product team. Figure out whether the gap is in the AI quality, the attribution, the onboarding, or something else.
              </div>
              <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.5 }}>
                Month 3: Document the product gaps with evidence. Recommend whether to fix the product for current segments or find a different segment entirely.
              </div>
            </div>
          </Expand>

          <Expand title="What this looks like at scale (FT scope)">
            <div style={{ fontSize: "13px", color: C.dim, lineHeight: 1.5, marginBottom: "12px" }}>
              If the summer works, here's what the role grows into.
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

          <Expand title="Full evidence map with sources">
            <p style={{ fontSize: "12px", color: C.dim, lineHeight: 1.5, marginBottom: "12px" }}>
              All data from public Instagram profiles and Shopify stores, checked week of May 5, 2026.
              "$2M+ revenue attributed in &lt;2 months" is the aggregate claim on the homepage — no methodology shown.
            </p>
            <div style={{ fontSize: "12px", color: C.muted, lineHeight: 1.6 }}>
              <strong style={{ color: C.text }}>Key correction from this audit:</strong> Mellow is not a mattress company.
              It sells pillows ($49), comforters ($99), and bedding accessories ($20–$44). This changes the ARPU calculation —
              Mellow's products are impulse-friendly, not considered purchases.
            </div>
            <div style={{ marginTop: "10px", fontSize: "12px", color: C.muted, lineHeight: 1.6 }}>
              <strong style={{ color: C.text }}>Unexpected finding:</strong> alice mushrooms has had their Instagram account
              taken down by Meta 10+ times for alleged community guidelines violations around mushroom content.
              The brand sells functional (non-psychoactive) mushroom supplements, but Meta's automated systems
              flag mushroom brands broadly. Any DM automation strategy for alice operates under this platform risk.
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
            Built from public data and a few days of research.{" "}
            <span style={{ color: C.muted }}>
              Imagine what I find with a summer inside the building.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
