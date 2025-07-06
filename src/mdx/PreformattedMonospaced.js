import React from "react";

export default function PreformattedMonospaced({ children, lineHeight = 1.0 }) {
  return (
    <div
      className="monospaced"
      style={{
        fontFamily: "monospace",
        whiteSpace: "pre",
        fontSize: "1rem",
        lineHeight: lineHeight
      }}
    >
      {children}
    </div>
  );
}
