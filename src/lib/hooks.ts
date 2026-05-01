"use client";

import { useState, useEffect } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function useScramble(target: string, trigger: boolean, delay = 0) {
  const [text, setText] = useState(target);
  useEffect(() => {
    if (!trigger) return;
    let frame = 0;
    const totalFrames = 10;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        if (frame >= totalFrames) {
          setText(target);
          clearInterval(interval);
          return;
        }
        const revealUntil = Math.floor((frame / totalFrames) * target.length);
        setText(
          target
            .split("")
            .map((ch, i) => {
              if (i < revealUntil) return ch;
              if (ch === " ") return " ";
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join("")
        );
      }, 40);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [trigger, target, delay]);
  return text;
}

export function useCounter(target: number, trigger: boolean, delay = 0, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf = 0;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(target * eased);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setValue(target);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [trigger, target, delay, duration]);
  return value;
}
