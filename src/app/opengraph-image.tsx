import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aeopic - AI Software Development Houston";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F1226",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(114, 106, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(114, 106, 255, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            AEOPIC
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "#726AFF",
            }}
          >
            AI Software Development
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Custom Web Apps | AI Tools | Marketing | eCommerce
          </div>
        </div>

        {/* Location Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginTop: 48,
            padding: "12px 24px",
            backgroundColor: "rgba(114, 106, 255, 0.15)",
            borderRadius: 50,
            border: "1px solid rgba(114, 106, 255, 0.3)",
          }}
        >
          <div
            style={{
              fontSize: 20,
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Houston, TX
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
