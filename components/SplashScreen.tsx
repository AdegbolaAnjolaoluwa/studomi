"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [stage, setStage] = useState<"visible" | "leaving" | "done">("visible");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setStage("done");
      return;
    }

    if (sessionStorage.getItem("studomi-splash-seen")) {
      setStage("done");
      return;
    }

    const leaveTimer = setTimeout(() => setStage("leaving"), 850);
    const doneTimer = setTimeout(() => {
      setStage("done");
      sessionStorage.setItem("studomi-splash-seen", "1");
    }, 1250);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-bg transition-opacity duration-300 ${
        stage === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div
        className={`transition-all duration-500 ease-out ${
          stage === "leaving" ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          animation: stage === "visible" ? "splash-pop 0.6s cubic-bezier(0.16,1,0.3,1)" : undefined,
        }}
      >
        <Image
          src="/brand/studomi-icon.png"
          alt="Studomi"
          width={72}
          height={72}
          className="rounded-[18px]"
          priority
        />
      </div>

      <style>{`
        @keyframes splash-pop {
          0% { opacity: 0; transform: scale(0.8); }
          60% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
