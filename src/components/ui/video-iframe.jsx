import React from "react";

export function VideoIframe({
  className = "",
  src,
  title = "Video",
  ...props
}) {
  return (
    <iframe
      className={`w-full h-full rounded-lg ${className}`}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    />
  );
}
