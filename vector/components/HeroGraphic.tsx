"use client";

import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, Activity, Target } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Isometric helpers                                                   */
/* ------------------------------------------------------------------ */

const S = 38; // pixels per world unit
const OX = 150;
const OY = 470;
const COS = 0.866;

type P3 = [number, number, number];

/** Project a world point (x, y-up, z) to SVG coordinates. */
function iso([x, y, z]: P3): [number, number] {
  return [OX + (x - z) * COS * S, OY + ((x + z) * 0.5 - y) * S];
}

function poly(points: P3[]) {
  return points.map((p) => iso(p).map((n) => n.toFixed(2)).join(",")).join(" ");
}

function facePaths(x0: number, z0: number, h: number) {
  const x1 = x0 + 1;
  const z1 = z0 + 1;
  return {
    top: poly([[x0, h, z0], [x1, h, z0], [x1, h, z1], [x0, h, z1]]),
    right: poly([[x1, 0, z0], [x1, h, z0], [x1, h, z1], [x1, 0, z1]]),
    left: poly([[x0, 0, z1], [x1, 0, z1], [x1, h, z1], [x0, h, z1]]),
  };
}

/** Smooth path through points (Catmull-Rom → cubic Bézier). */
function smoothPath(pts: [number, number][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(2)},${c1[1].toFixed(2)} ${c2[0].toFixed(2)},${c2[1].toFixed(2)} ${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
  }
  return d;
}

/* ------------------------------------------------------------------ */
/* Scene data                                                          */
/* ------------------------------------------------------------------ */

const HEIGHTS = [1.1, 1.8, 2.5, 3.5, 4.5, 5.7];
const STEP = 1.55;
const bars = HEIGHTS.map((h, i) => ({ h, x0: 0, z0: -i * STEP, i }));

const curvePoints: [number, number][] = [
  iso([0.5, 0.35, 1.6]),
  ...bars.map((b) => iso([b.x0 + 0.5, b.h + 0.55, b.z0 + 0.5])),
  iso([0.5, 7.4, -bars.length * STEP - 0.4]),
];
const CURVE = smoothPath(curvePoints);
const tip = curvePoints[curvePoints.length - 1];

const gridLines: { a: [number, number]; b: [number, number] }[] = [];
for (let x = -3; x <= 4; x++) gridLines.push({ a: iso([x, 0, -11]), b: iso([x, 0, 3]) });
for (let z = -11; z <= 3; z++) gridLines.push({ a: iso([-3, 0, z]), b: iso([4, 0, z]) });

/* ------------------------------------------------------------------ */
/* Components                                                          */
/* ------------------------------------------------------------------ */

function Bar({ x0, z0, h, i, reduce }: { x0: number; z0: number; h: number; i: number; reduce: boolean }) {
  const height = useMotionValue(reduce ? h : 0.02);

  useEffect(() => {
    if (reduce) {
      height.set(h);
      return;
    }
    const controls = animate(height, h, { duration: 1.3, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [h, i, reduce, height]);

  const top = useTransform(height, (v) => facePaths(x0, z0, v).top);
  const left = useTransform(height, (v) => facePaths(x0, z0, v).left);
  const right = useTransform(height, (v) => facePaths(x0, z0, v).right);
  const hot = i === bars.length - 1;

  return (
    <g>
      <Face points={left} fill={hot ? "url(#face-left-hot)" : "url(#face-left)"} />
      <Face points={right} fill={hot ? "url(#face-right-hot)" : "url(#face-right)"} />
      <Face points={top} fill={hot ? "url(#face-top-hot)" : "url(#face-top)"} stroke="rgba(199,205,255,0.55)" />
    </g>
  );
}

function Face({ points, fill, stroke = "rgba(142,154,255,0.28)" }: { points: MotionValue<string>; fill: string; stroke?: string }) {
  return <motion.polygon points={points} fill={fill} stroke={stroke} strokeWidth={0.8} strokeLinejoin="round" />;
}

function Chip({
  className,
  delay,
  icon,
  label,
  value,
  reduce,
}: {
  className: string;
  delay: number;
  icon: React.ReactNode;
  label: string;
  value: string;
  reduce: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute ${className}`}
    >
      <div
        className={`glass flex items-center gap-3 rounded-xl px-3.5 py-2.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] ${
          reduce ? "" : "animate-float"
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 text-accent-200">
          {icon}
        </span>
        <span className="leading-tight">
          <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{label}</span>
          <span className="block text-sm font-semibold text-white">{value}</span>
        </span>
      </div>
    </motion.div>
  );
}

export function HeroGraphic() {
  const reduce = !!useReducedMotion();

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-full max-w-[600px] select-none">
      {/* Ambient glow */}
      <div className="absolute inset-[12%] rounded-full bg-accent-500/25 blur-[90px]" />
      <div className="absolute right-[8%] top-[6%] h-40 w-40 rounded-full bg-violet-500/25 blur-[70px]" />

      <svg viewBox="0 0 600 600" className="relative h-full w-full overflow-visible">
        <defs>
          <linearGradient id="face-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3A4290" />
            <stop offset="1" stopColor="#252B5E" />
          </linearGradient>
          <linearGradient id="face-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1F2550" />
            <stop offset="1" stopColor="#0C0E1C" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="face-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#151935" />
            <stop offset="1" stopColor="#090A14" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="face-top-hot" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#B9C0FF" />
            <stop offset="1" stopColor="#7381FF" />
          </linearGradient>
          <linearGradient id="face-left-hot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5B6CFF" />
            <stop offset="1" stopColor="#2A2F7A" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="face-right-hot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#2B1C5C" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="curve" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#5B6CFF" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#8E9AFF" />
            <stop offset="1" stopColor="#2EE6C5" />
          </linearGradient>
          <radialGradient id="grid-fade" cx="0.5" cy="0.62" r="0.5">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="600" height="600" fill="url(#grid-fade)" />
          </mask>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Isometric floor grid */}
        <motion.g
          mask="url(#grid-mask)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          {gridLines.map(({ a, b }, i) => (
            <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="rgba(142,154,255,0.16)" strokeWidth={0.7} />
          ))}
        </motion.g>

        {/* Orbit ring on the floor */}
        <motion.ellipse
          cx={iso([0.5, 0, -4])[0]}
          cy={iso([0.5, 0, -4])[1]}
          rx={250}
          ry={125}
          fill="none"
          stroke="rgba(142,154,255,0.22)"
          strokeDasharray="2 7"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.3 }}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        />

        {/* Bars — drawn back to front */}
        {[...bars].reverse().map((b) => (
          <Bar key={b.i} {...b} reduce={reduce} />
        ))}

        {/* Growth vector */}
        <motion.path
          d={CURVE}
          fill="none"
          stroke="url(#curve)"
          strokeWidth={10}
          strokeLinecap="round"
          opacity={0.18}
          filter="url(#glow)"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 1.1, ease: [0.65, 0, 0.35, 1] }}
        />
        <motion.path
          id="growth-curve"
          d={CURVE}
          fill="none"
          stroke="url(#curve)"
          strokeWidth={2.4}
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 1.1, ease: [0.65, 0, 0.35, 1] }}
        />

        {/* Nodes on bar tops */}
        {curvePoints.slice(1, -1).map(([x, y], i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + i * 0.22, duration: 0.5 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          >
            {!reduce && (
              <circle cx={x} cy={y} r={4} fill="none" stroke="#8E9AFF" strokeOpacity={0.6}>
                <animate attributeName="r" values="4;14;4" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={x} cy={y} r={3.6} fill="#0A0B11" stroke="#C7CDFF" strokeWidth={1.6} />
          </motion.g>
        ))}

        {/* Arrow head */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.5 }}
          filter="url(#glow)"
        >
          <circle cx={tip[0]} cy={tip[1]} r={7} fill="#2EE6C5" />
          <circle cx={tip[0]} cy={tip[1]} r={14} fill="none" stroke="#2EE6C5" strokeOpacity={0.4} />
        </motion.g>

        {/* Signals travelling along the vector */}
        {!reduce &&
          [0, 1.4, 2.8].map((begin) => (
            <circle key={begin} r={2.6} fill="#fff" filter="url(#glow)" opacity={0}>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="4.2s" begin={`${3 + begin}s`} repeatCount="indefinite" />
              <animateMotion dur="4.2s" begin={`${3 + begin}s`} repeatCount="indefinite" rotate="auto">
                <mpath href="#growth-curve" />
              </animateMotion>
            </circle>
          ))}
      </svg>

      <Chip
        className="left-[0%] top-[22%] sm:left-[2%]"
        delay={1.6}
        icon={<Activity className="h-4 w-4" />}
        label="Signal"
        value="Intent ↑ 41%"
        reduce={reduce}
      />
      <Chip
        className="bottom-[10%] right-[0%] sm:right-[4%]"
        delay={2}
        icon={<Target className="h-4 w-4" />}
        label="CPA"
        value="−38% vs. target"
        reduce={reduce}
      />
      <Chip
        className="left-[22%] top-[1%] hidden sm:block"
        delay={2.6}
        icon={<ArrowUpRight className="h-4 w-4" />}
        label="Growth"
        value="Scaling"
        reduce={reduce}
      />
    </div>
  );
}
