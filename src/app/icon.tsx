import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1f3d2b",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "-0.5px",
            lineHeight: 1,
            fontFamily: "serif",
          }}
        >
          p
        </span>
      </div>
    ),
    { ...size }
  );
}
