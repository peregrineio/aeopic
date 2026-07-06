import { ImageResponse } from "next/og";

/**
 * Shared Open Graph image system.
 * All cards share the dark editorial identity: #08080F base, grid texture,
 * Syne display type, per-context accent color.
 */

export const OG_SIZE = { width: 1200, height: 630 };

export async function loadOgFonts() {
  const [syneBold, dmSansRegular] = await Promise.all([
    fetch(
      "https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVxsWxjBZRjr0FKM_04uT6kR47NCV5Z.ttf"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTg.ttf"
    ).then((res) => res.arrayBuffer()),
  ]);

  return [
    { name: "Syne", data: syneBold, weight: 700 as const },
    { name: "DM Sans", data: dmSansRegular, weight: 400 as const },
  ];
}

/** Grid texture shared by every card */
export const OG_GRID = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
};

interface IndustryOgConfig {
  title: string;
  color: string;
  tagline: string;
  index: number;
}

export const INDUSTRY_OG: Record<string, IndustryOgConfig> = {
  hvac: {
    title: "HVAC & Home Services",
    color: "#F59E0B",
    tagline: "Dispatch, booking & customer portals",
    index: 1,
  },
  "plumbing-electrical": {
    title: "Plumbing & Electrical",
    color: "#3B82F6",
    tagline: "Local SEO, scheduling & reviews",
    index: 2,
  },
  contractors: {
    title: "Contractors & Remodeling",
    color: "#726AFF",
    tagline: "Portfolio sites, CRM & lead tracking",
    index: 3,
  },
  "lawn-care": {
    title: "Lawn Care & Landscaping",
    color: "#22C55E",
    tagline: "Route optimization & customer management",
    index: 4,
  },
  medical: {
    title: "Medical & Dental",
    color: "#EF4444",
    tagline: "Patient portals & appointment booking",
    index: 5,
  },
  restaurants: {
    title: "Restaurants",
    color: "#F97316",
    tagline: "Online ordering & reservations",
    index: 6,
  },
  law: {
    title: "Law Offices",
    color: "#5B84B1",
    tagline: "Client portals & case management",
    index: 7,
  },
  auto: {
    title: "Auto & Detailing",
    color: "#0EA5E9",
    tagline: "Booking & service notifications",
    index: 8,
  },
  cleaning: {
    title: "Cleaning & Pest Control",
    color: "#10B981",
    tagline: "Recurring service & review generation",
    index: 9,
  },
  "chambers-of-commerce": {
    title: "Chambers of Commerce",
    color: "#7C3AED",
    tagline: "Member management, events & analytics",
    index: 10,
  },
  "oil-gas": {
    title: "Oil & Gas",
    color: "#38BDF8",
    tagline: "Production dashboards, AFE tracking & compliance",
    index: 11,
  },
  "oilfield-services": {
    title: "Oilfield Services",
    color: "#FBBF24",
    tagline: "Field tickets, dispatch & job costing",
    index: 12,
  },
  "pipeline-operations": {
    title: "Pipeline Operations",
    color: "#94A3B8",
    tagline: "Integrity management & PHMSA compliance",
    index: 13,
  },
  "industrial-contracting": {
    title: "Industrial Contracting",
    color: "#FB923C",
    tagline: "Turnaround management & safety compliance",
    index: 14,
  },
  "energy-infrastructure": {
    title: "Energy Infrastructure",
    color: "#2DD4BF",
    tagline: "Grid operations, renewables & asset management",
    index: 15,
  },
  manufacturing: {
    title: "Manufacturing",
    color: "#D97706",
    tagline: "Shop floor scheduling, MES & quality",
    index: 16,
  },
  logistics: {
    title: "Logistics & Supply Chain",
    color: "#22D3EE",
    tagline: "Freight management & shipment visibility",
    index: 17,
  },
  "enterprise-smb": {
    title: "Enterprise SMB",
    color: "#A78BFA",
    tagline: "Unified platforms for growing businesses",
    index: 18,
  },
};

/**
 * Dynamic industry card — stamped with the sector's color, index and tagline.
 * One renderer covers all 18 industry routes.
 */
export async function renderIndustryOg(slug: string) {
  const config = INDUSTRY_OG[slug];
  const fonts = await loadOgFonts();

  if (!config) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#08080F",
            fontSize: 64,
            fontFamily: "Syne",
            color: "white",
          }}
        >
          AEOPIC
        </div>
      ),
      { ...OG_SIZE, fonts }
    );
  }

  const { title, color, tagline, index } = config;
  const sector = String(index).padStart(2, "0");

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
        {/* Color glow */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 700,
            height: 700,
            display: "flex",
            borderRadius: 9999,
            backgroundImage: `radial-gradient(circle, ${color}38 0%, transparent 65%)`,
          }}
        />
        {/* Ghost sector numeral */}
        <div
          style={{
            position: "absolute",
            right: 30,
            bottom: -110,
            display: "flex",
            fontSize: 440,
            fontFamily: "Syne",
            fontWeight: 700,
            color: `${color}14`,
            lineHeight: 1,
          }}
        >
          {sector}
        </div>
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 10,
            display: "flex",
            backgroundColor: color,
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
            <div style={{ display: "flex", color }}>SECTOR {sector}</div>
          </div>

          {/* Title block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                fontFamily: "Syne",
                fontWeight: 700,
                fontSize: title.length > 20 ? 76 : 92,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                maxWidth: 950,
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 48,
                  height: 4,
                  backgroundColor: color,
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontFamily: "DM Sans",
                  fontSize: 30,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {tagline}
              </div>
            </div>
          </div>

          {/* Footer */}
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
                fontFamily: "DM Sans",
                fontSize: 24,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Custom software built for your industry
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "DM Sans",
                fontSize: 24,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 12,
                  height: 12,
                  borderRadius: 9999,
                  backgroundColor: color,
                }}
              />
              aeopic.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
