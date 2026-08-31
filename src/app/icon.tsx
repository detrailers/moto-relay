import { ImageResponse } from "next/og";

// Simple temporary favicon: charcoal background, bold orange "MR" mark using
// the site's own brand colors. No invented logo artwork — just typography,
// generated at build time so no external image asset is needed.
export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0c",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: -1,
            color: "#ff6a13",
          }}
        >
          MR
        </span>
      </div>
    ),
    { ...size },
  );
}
