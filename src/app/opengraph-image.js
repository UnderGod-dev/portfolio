import { ImageResponse } from "next/og";
import BrandMark from "@/components/brand/BrandMark";

export const alt = "Adekunle — Cloud, DevOps & Observability";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#151b18",
          color: "#edf0e5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <BrandMark
              width={74}
              height={52}
              viewBox="6 10 120 84"
              color="#edf0e5"
            />
            <span>ADEKUNLE</span>
          </div>
          <span style={{ color: "#b5d58b" }}>
            CLOUD / DEVOPS / OBSERVABILITY
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            letterSpacing: "-4px",
            lineHeight: 1.08,
          }}
        >
          <span>Good ideas.</span>
          <span>Intelligent systems.</span>
          <span style={{ color: "#b5d58b" }}>Solid foundations.</span>
        </div>
        <div style={{ display: "flex", fontSize: 18, color: "#a3afa0" }}>
          adekunle.cloud · AWS Certified Solutions Architect
        </div>
      </div>
    ),
    size,
  );
}
