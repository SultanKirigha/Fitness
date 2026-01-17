// src/components/common/ImageOverlay.jsx
function ImageOverlay({ position = "bottom", strength = "strong" }) {
  // position: "bottom" | "top" | "full"
  // strength: "soft" | "strong"

  const base =
    "pointer-events-none absolute inset-0";

  const gradients = {
    bottom: strength === "strong"
      ? "bg-gradient-to-t from-black/85 via-black/35 to-transparent"
      : "bg-gradient-to-t from-black/65 via-black/25 to-transparent",

    top: strength === "strong"
      ? "bg-gradient-to-b from-black/80 via-black/30 to-transparent"
      : "bg-gradient-to-b from-black/55 via-black/20 to-transparent",

    full: strength === "strong"
      ? "bg-black/45"
      : "bg-black/25",
  };

  return <div className={`${base} ${gradients[position]}`} />;
}

export default ImageOverlay;
