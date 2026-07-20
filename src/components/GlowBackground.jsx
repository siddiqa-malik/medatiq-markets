import React from "react";

const blobs = [
  {
    top: "8%",
    left: "12%",
    size: 320,
    color: "rgba(255,168,48,.18)",
  },
  {
    top: "18%",
    left: "42%",
    size: 260,
    color: "rgba(255,141,242,.15)",
  },
  {
    top: "12%",
    left: "82%",
    size: 300,
    color: "rgba(251,199,6,.16)",
  },
  {
    top: "38%",
    left: "22%",
    size: 340,
    color: "rgba(20,165,74,.13)",
  },
  {
    top: "48%",
    left: "68%",
    size: 360,
    color: "rgba(59,130,246,.13)",
  },
  {
    top: "72%",
    left: "10%",
    size: 300,
    color: "rgba(139,92,246,.13)",
  },
  {
    top: "82%",
    left: "48%",
    size: 340,
    color: "rgba(255,168,48,.14)",
  },
  {
    top: "78%",
    left: "84%",
    size: 300,
    color: "rgba(255,141,242,.13)",
  },
  {
    top: "30%",
    left: "90%",
    size: 240,
    color: "rgba(20,165,74,.12)",
  },
  {
    top: "60%",
    left: "40%",
    size: 280,
    color: "rgba(251,199,6,.12)",
  },
];

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "white",
        }}
      />

      {/* Large Radial Gradients */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 8% 8%, rgba(255,168,48,.20), transparent 28%),
            radial-gradient(circle at 95% 8%, rgba(251,199,6,.18), transparent 30%),
            radial-gradient(circle at 50% 45%, rgba(20,165,74,.12), transparent 35%),
            radial-gradient(circle at 95% 90%, rgba(59,130,246,.15), transparent 32%),
            radial-gradient(circle at 8% 90%, rgba(255,141,242,.14), transparent 30%)
          `,
        }}
      />

      {/* Glow Blobs */}

      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            filter: "blur(140px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}