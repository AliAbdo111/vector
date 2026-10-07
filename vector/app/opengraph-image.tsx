import { ImageResponse } from "next/og";

export const alt = "VECTOR — We turn digital attention into measurable growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(60% 80% at 85% 20%, rgba(91,108,255,0.45), transparent 70%), radial-gradient(50% 60% at 10% 100%, rgba(139,92,246,0.35), transparent 70%)",
          backgroundColor: "#05060A",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, fontWeight: 600 }}>VECTOR</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#8E9AFF" }}>DIGITAL GROWTH AGENCY</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, marginTop: 20, letterSpacing: -3, maxWidth: 950 }}>
            We turn digital attention into measurable growth.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
