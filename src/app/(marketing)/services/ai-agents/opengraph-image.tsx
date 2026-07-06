import { ImageResponse } from "next/og";
import { loadOgFonts, OG_SIZE } from "@/lib/og";

export const runtime = "edge";

export const alt = "Custom AI Agents | Aeopic";
export const size = OG_SIZE;
export const contentType = "image/png";

const NODES = [
  { x: 880, y: 90, r: 6 },
  { x: 1020, y: 180, r: 8 },
  { x: 940, y: 320, r: 5 },
  { x: 1110, y: 400, r: 7 },
  { x: 820, y: 470, r: 5 },
  { x: 1060, y: 545, r: 6 },
];

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#030712",
        }}
      >
        {/* Cyan grid */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Cyan glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 720,
            height: 720,
            display: "flex",
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(6,182,212,0.28) 0%, transparent 65%)",
          }}
        />
        {/* Constellation nodes */}
        {NODES.map((n, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: n.x,
              top: n.y,
              width: n.r * 2,
              height: n.r * 2,
              display: "flex",
              borderRadius: 9999,
              backgroundColor: "#06B6D4",
              opacity: 0.8,
            }}
          />
        ))}

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "DM Sans",
              fontSize: 24,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Syne",
                fontWeight: 700,
                color: "white",
                letterSpacing: "0.05em",
              }}
            >
              AEOPIC
            </div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.25)" }}>
              /
            </div>
            <div style={{ display: "flex", color: "#06B6D4" }}>
              CUSTOM AI AGENTS
            </div>
          </div>

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: 88,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Agents that run
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: 88,
                color: "#06B6D4",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              your operations.
            </div>
          </div>

          {/* Footer — proof stats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                fontFamily: "DM Sans",
                fontSize: 26,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              <div style={{ display: "flex", color: "#06B6D4" }}>
                $0.46/ticket
              </div>
              <div style={{ display: "flex", color: "rgba(255,255,255,0.2)" }}>
                ·
              </div>
              <div style={{ display: "flex" }}>24/7 coverage</div>
              <div style={{ display: "flex", color: "rgba(255,255,255,0.2)" }}>
                ·
              </div>
              <div style={{ display: "flex" }}>TRAIGA-ready</div>
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 24,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              aeopic.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
