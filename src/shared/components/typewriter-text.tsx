"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <span className="text-main">
      <Typewriter
        options={{
          strings: ["shine", "live", "stay", "glow", "sparkle", "radiate", "twinkle"],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 40,
        }}
      />
    </span>
  )
}