import { ImageResponse } from "next/og";
import { loadOgFonts, OG_SIZE, OG_GRID } from "@/lib/og";

export const runtime = "edge";

export const alt = "Aeopic — AI Software Development Houston";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#08080F",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            ...OG_GRID,
          }}
        />
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: -250,
            left: 250,
            width: 800,
            height: 800,
            display: "flex",
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(114,106,255,0.30) 0%, transparent 65%)",
          }}
        />

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
              gap: 14,
              fontFamily: "DM Sans",
              fontSize: 24,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 12,
                height: 12,
                borderRadius: 9999,
                backgroundColor: "#726AFF",
              }}
            />
            <div style={{ display: "flex" }}>HOUSTON, TX</div>
          </div>

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: 130,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              AEOPIC
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 36,
                color: "#726AFF",
              }}
            >
              Custom software & AI systems, built for how you actually work.
            </div>
          </div>

          {/* Footer — service list */}
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
            <div style={{ display: "flex" }}>Custom Web Apps</div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.2)" }}>
              ·
            </div>
            <div style={{ display: "flex" }}>AI Agents</div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.2)" }}>
              ·
            </div>
            <div style={{ display: "flex" }}>AI Operating Systems</div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.2)" }}>
              ·
            </div>
            <div style={{ display: "flex" }}>Marketing</div>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
