import { FiCheck, FiLock, FiMapPin } from "react-icons/fi";

function getNodeStyle(status) {
  if (status === "completed") {
    return {
      icon: <FiCheck size={22} />,
      circleClassName: "bg-emerald-500 text-white",
      label: "Completed",
      labelClassName: "text-emerald-700",
    };
  }

  if (status === "current") {
    return {
      icon: <FiMapPin size={22} />,
      circleClassName: "bg-indigo-600 text-white",
      label: "You are here",
      labelClassName: "text-indigo-700",
    };
  }

  return {
    icon: <FiLock size={20} />,
    circleClassName: "bg-slate-100 text-slate-400",
    label: "Locked",
    labelClassName: "text-slate-400",
  };
}

function RoadmapNode({ milestone }) {
  const nodeStyle = getNodeStyle(milestone.status);
  const isCurrent = milestone.status === "current";

  return (
    <div className="relative z-10 flex w-32 shrink-0 flex-col items-center text-center">
      <div className="relative">
        {isCurrent && (
          <span className="absolute -inset-2 rounded-full bg-indigo-200 animate-pulse" />
        )}

        <span
          className={`relative flex h-18 w-18 items-center justify-center rounded-full border-4 border-slate-50 shadow-sm ${nodeStyle.circleClassName}`}
        >
          {nodeStyle.icon}
        </span>
      </div>

      <h2
        className={`mt-4 text-sm font-bold ${
          milestone.status === "locked"
            ? "text-slate-400"
            : "text-slate-900"
        }`}
      >
        {milestone.title}
      </h2>

      <p className={`mt-1 text-xs font-semibold ${nodeStyle.labelClassName}`}>
        {nodeStyle.label}
      </p>
    </div>
  );
}

export default RoadmapNode;