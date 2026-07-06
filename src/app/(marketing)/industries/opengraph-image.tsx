import { ImageResponse } from "next/og";
import { loadOgFonts, OG_SIZE, OG_GRID, INDUSTRY_OG } from "@/lib/og";

export const runtime = "edge";

export const alt = "Industries We Serve | Aeopic";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();
  const colors = Object.values(INDUSTRY_OG).map((c) => c.color);

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
        {/* Multi-color glow */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -80,
            width: 650,
            height: 650,
            display: "flex",
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -60,
            width: 600,
            height: 600,
            display: "flex",
            borderRadius: 9999,
            backgroundImage:
              "radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 65%)",
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
            <div style={{ display: "flex" }}>INDUSTRIES</div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.25)" }}>
              ·
            </div>
            <div style={{ display: "flex", color: "#38BDF8" }}>
              18 SECTORS INDEXED
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontFamily: "Syne",
              fontWeight: 700,
              fontSize: 84,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            Software built for your industry.
          </div>

          {/* Footer — 18 sector color dots */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {colors.map((color, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    width: 18,
                    height: 18,
                    borderRadius: 9999,
                    backgroundColor: color,
                  }}
                />
              ))}
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
