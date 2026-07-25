import React, { useState } from "react";
import { FiCheck, FiLock, FiMapPin, FiX } from "react-icons/fi";

// Swap this for the student's real progress data later.
// milestone status: "completed" | "current" | "locked"
// subtopic done: true | false (order = the order they're learned in)
const roadmap = [
  {
    id: "html",
    topic: "HTML & CSS",
    title: "HTML Explorer",
    status: "completed",
    subtopics: [
      { name: "Semantic Tags", done: true },
      { name: "Flexbox", done: true },
      { name: "Grid", done: true },
    ],
  },
  {
    id: "js",
    topic: "JavaScript",
    title: "JavaScript Explorer",
    status: "completed",
    subtopics: [
      { name: "Functions", done: true },
      { name: "Arrays", done: true },
      { name: "Async/Await", done: true },
    ],
  },
  {
    id: "react",
    topic: "React",
    title: "React Explorer",
    status: "current",
    subtopics: [
      { name: "Components", done: true },
      { name: "Props", done: true },
      { name: "useState", done: false },
      { name: "useEffect", done: false },
    ],
  },
  {
    id: "router",
    topic: "Routing",
    title: "Routing Explorer",
    status: "locked",
    subtopics: [
      { name: "React Router", done: false },
      { name: "Dynamic Routes", done: false },
    ],
  },
  {
    id: "state",
    topic: "State Management",
    title: "State Explorer",
    status: "locked",
    subtopics: [
      { name: "Context API", done: false },
      { name: "Redux / Zustand", done: false },
    ],
  },
];

// --- reusable winding-path geometry -----------------------------------

function buildRoute(count, { canvasW, gap, topPad, spread }) {
  const x = (i) => (i % 2 === 0 ? canvasW * (0.5 - spread) : canvasW * (0.5 + spread));
  const y = (i) => topPad + i * gap;
  const pts = Array.from({ length: count }, (_, i) => [x(i), y(i)]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    const midY = (y0 + y1) / 2;
    d += ` C ${x0} ${midY}, ${x1} ${midY}, ${x1} ${y1}`;
  }
  return { d, x, y };
}

// --- main journey path ---------------------------------------------

const MAIN_CANVAS_W = 400;
const MAIN_GAP = 230;
const MAIN_TOP_PAD = 90;

function MainNode({ milestone, index, x, y, canvasW, onOpen }) {
  const leftPct = (x(index) / canvasW) * 100;
  const isRight = index % 2 !== 0;
  const isLocked = milestone.status === "locked";
  const isCurrent = milestone.status === "current";
  const isDone = milestone.status === "completed";

  return (
    <div
      className="absolute"
      style={{ left: `${leftPct}%`, top: y(index), transform: "translate(-50%, -50%)" }}
    >
      <div className={`flex items-center gap-2 ${isRight ? "flex-row" : "flex-row-reverse"}`}>
        <div className="relative shrink-0">
          {isCurrent && (
            <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-30 animate-ping" />
          )}
          <button
            onClick={() => !isLocked && onOpen(milestone)}
            disabled={isLocked}
            className={`relative w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-4 transition ${
              isDone
                ? "bg-emerald-500 border-emerald-100 text-white hover:scale-105"
                : isCurrent
                ? "bg-linear-to-br from-indigo-600 to-violet-600 border-indigo-100 text-white hover:scale-105"
                : "bg-white border-slate-200 text-slate-400 cursor-not-allowed"
            }`}
          >
            {isDone ? (
              <FiCheck size={22} strokeWidth={3} />
            ) : isLocked ? (
              <FiLock size={18} />
            ) : (
              milestone.topic.slice(0, 2).toUpperCase()
            )}
          </button>
          {isCurrent && (
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[11px] font-semibold text-indigo-600 whitespace-nowrap">
              <FiMapPin size={12} />
              You are here
            </div>
          )}
        </div>

        <button
          onClick={() => !isLocked && onOpen(milestone)}
          disabled={isLocked}
          className={`w-40 text-left rounded-2xl border p-3 shadow-sm transition ${
            isLocked
              ? "bg-white/60 border-slate-200 cursor-not-allowed"
              : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md"
          }`}
        >
          <p className={`text-[15px] font-bold leading-tight ${isLocked ? "text-slate-400" : "text-slate-900"}`}>
            {milestone.title}
          </p>
          <p className="text-[11px] text-slate-500 mb-1">{milestone.topic}</p>
          {!isLocked && (
            <p className="text-[11px] font-medium text-indigo-600">
              {milestone.subtopics.filter((s) => s.done).length}/{milestone.subtopics.length} topics · tap to open
            </p>
          )}
        </button>
      </div>
    </div>
  );
}

// --- mini map modal (subtopics of one milestone) --------------------

const MINI_CANVAS_W = 260;
const MINI_GAP = 130;
const MINI_TOP_PAD = 60;

function subtopicStatus(subtopics, i) {
  if (subtopics[i].done) return "completed";
  const firstNotDone = subtopics.findIndex((s) => !s.done);
  return i === firstNotDone ? "current" : "locked";
}

function MiniMap({ milestone, onClose }) {
  const subtopics = milestone.subtopics;
  const { d: fullPath, x, y } = buildRoute(subtopics.length, {
    canvasW: MINI_CANVAS_W,
    gap: MINI_GAP,
    topPad: MINI_TOP_PAD,
    spread: 0.22,
  });
  const upTo = Math.max(
    0,
    subtopics.findIndex((s) => subtopicStatus(subtopics, subtopics.indexOf(s)) === "current")
  );
  const lastDoneIdx = (() => {
    let idx = -1;
    subtopics.forEach((s, i) => {
      if (subtopicStatus(subtopics, i) !== "locked") idx = i;
    });
    return idx;
  })();
  const { d: progressPath } = buildRoute(lastDoneIdx + 1 || 1, {
    canvasW: MINI_CANVAS_W,
    gap: MINI_GAP,
    topPad: MINI_TOP_PAD,
    spread: 0.22,
  });

  const height = MINI_TOP_PAD + (subtopics.length - 1) * MINI_GAP + 100;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-slate-50 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-slate-200 bg-white">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              {milestone.topic}
            </p>
            <h2 className="text-xl font-bold text-slate-900 mt-1">{milestone.title}</h2>
            <p className="text-sm text-slate-500 mt-1">
              {subtopics.filter((s) => s.done).length} of {subtopics.length} topics learned
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition text-slate-500"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="relative px-6 py-8" style={{ height }}>
          <svg
            viewBox={`0 0 ${MINI_CANVAS_W} ${height}`}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            className="absolute inset-0 left-6"
            style={{ width: "calc(100% - 48px)" }}
          >
            <defs>
              <linearGradient id="miniGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
            <path
              d={fullPath}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="1 12"
            />
            <path
              d={progressPath}
              fill="none"
              stroke="url(#miniGradient)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          {subtopics.map((s, i) => {
            const status = subtopicStatus(subtopics, i);
            const leftPct = (x(i) / MINI_CANVAS_W) * 100;
            const isRight = i % 2 !== 0;

            return (
              <div
                key={s.name}
                className="absolute"
                style={{ left: `${leftPct}%`, top: y(i), transform: "translate(-50%, -50%)" }}
              >
                <div className={`flex items-center gap-2 ${isRight ? "flex-row" : "flex-row-reverse"}`}>
                  <div className="relative shrink-0">
                    {status === "current" && (
                      <span className="absolute inset-0 rounded-full bg-indigo-500 opacity-30 animate-ping" />
                    )}
                    <div
                      className={`relative w-11 h-11 rounded-full flex items-center justify-center shadow-md border-[3px] ${
                        status === "completed"
                          ? "bg-emerald-500 border-emerald-100 text-white"
                          : status === "current"
                          ? "bg-linear-to-br from-indigo-600 to-violet-600 border-indigo-100 text-white"
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      {status === "completed" ? (
                        <FiCheck size={18} strokeWidth={3} />
                      ) : status === "locked" ? (
                        <FiLock size={14} />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-sm font-semibold px-3 py-1.5 rounded-xl bg-white border shadow-sm whitespace-nowrap ${
                      status === "locked" ? "text-slate-400 border-slate-200" : "text-slate-900 border-slate-200"
                    }`}
                  >
                    {s.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// --- page -------------------------------------------------------------

export default function Journey() {
  const [openMilestone, setOpenMilestone] = useState(null);

  const currentIndex = roadmap.findIndex((m) => m.status === "current");
  const upTo = currentIndex === -1 ? roadmap.length - 1 : currentIndex;
  const height = MAIN_TOP_PAD + (roadmap.length - 1) * MAIN_GAP + 140;

  const { d: fullPath, x, y } = buildRoute(roadmap.length, {
    canvasW: MAIN_CANVAS_W,
    gap: MAIN_GAP,
    topPad: MAIN_TOP_PAD,
    spread: 0.22,
  });
  const { d: progressPath } = buildRoute(upTo + 1, {
    canvasW: MAIN_CANVAS_W,
    gap: MAIN_GAP,
    topPad: MAIN_TOP_PAD,
    spread: 0.22,
  });

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 flex flex-col items-center">
      <div className="w-full max-w-md mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Your Journey
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 leading-tight">
          Every topic you've claimed.
        </h1>
        <p className="mt-2 text-slate-600">
          Tap any topic to see it broken down step by step.
        </p>
      </div>

      <div className="relative w-full max-w-md" style={{ height }}>
        <svg
          viewBox={`0 0 ${MAIN_CANVAS_W} ${height}`}
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <path
            d={fullPath}
            fill="none"
            stroke="#CBD5E1"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="1 14"
          />
          <path
            d={progressPath}
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>

        {roadmap.map((m, i) => (
          <MainNode
            key={m.id}
            milestone={m}
            index={i}
            x={x}
            y={y}
            canvasW={MAIN_CANVAS_W}
            onOpen={setOpenMilestone}
          />
        ))}
      </div>

      {openMilestone && (
        <MiniMap milestone={openMilestone} onClose={() => setOpenMilestone(null)} />
      )}
    </div>
  );
}