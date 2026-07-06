import { renderIndustryOg } from "@/lib/og";
import { OG_SIZE } from "@/lib/og";

export const runtime = "edge";

export const alt = "Manufacturing Software | Aeopic";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderIndustryOg("manufacturing");
}
