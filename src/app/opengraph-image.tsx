import { ImageResponse } from "next/og";

export const alt = "Vallamdas Akhil, AI Engineer & Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: 80, background: "#F7F4ED", color: "#252525",
        }}
      >
        <div style={{ fontSize: 104, fontWeight: 600, lineHeight: 1, fontFamily: "Georgia, serif" }}>Vallamdas Akhil</div>
        <div style={{ fontSize: 40, marginTop: 28, color: "#2B4A73" }}>AI Engineer & Software Developer</div>
        <div style={{ fontSize: 28, marginTop: 20, color: "#5B584F" }}>Bhongir, Telangana, India</div>
      </div>
    ),
    size,
  );
}
