"use client";
import { useEffect } from "react";

export default function Test({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This effect is only run once, on mount
    console.log("Mounted!");
  }, []);

  return (
    <div>
      <div>hello</div>
    </div>
  );
}
