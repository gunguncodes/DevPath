import { FiCheck, FiLock, FiPlayCircle } from "react-icons/fi";
import LessonList from "./LessonList";

function getStatusDetails(status) {
  if (status === "completed") {
    return {
      icon: <FiCheck size={18} />,
      iconClassName: "bg-emerald-100 text-emerald-700",
      label: "Completed",
      labelClassName: "text-emerald-700",
    };
  }

  if (status === "current") {
    return {
      icon: <FiPlayCircle size={18} />,
      iconClassName: "bg-indigo-600 text-white",
      label: "In progress",
      labelClassName: "text-indigo-700",
    };
  }

  return {
    icon: <FiLock size={17} />,
    iconClassName: "bg-slate-100 text-slate-400",
    label: "Locked",
    labelClassName: "text-slate-400",
  };
}

export default function JourneyModule({ milestone }) {
  const statusDetails = getStatusDetails(milestone.status);
  const completedLessons = milestone.lessons.filter(
    (lesson) => lesson.status === "completed"
  ).length;

  const isCurrent = milestone.status === "current";
  const isLocked = milestone.status === "locked";

  return (
    <article
      className={`rounded-2xl border p-6 sm:p-7 ${
        isCurrent
          ? "border-indigo-200 bg-indigo-50/50 shadow-sm"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${statusDetails.iconClassName}`}
        >
          {statusDetails.icon}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2
                className={`text-base font-semibold ${
                  isLocked ? "text-slate-400" : "text-slate-900"
                }`}
              >
                {milestone.title}
              </h2>

              <p
                className={`mt-1 text-sm ${
                  isLocked ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {milestone.description}
              </p>
            </div>

            <span
              className={`shrink-0 text-xs font-semibold ${statusDetails.labelClassName}`}
            >
              {statusDetails.label}
            </span>
          </div>

          {!isLocked && (
            <p className="mt-3 text-sm text-slate-500">
              {completedLessons} of {milestone.lessons.length} lessons completed
            </p>
          )}

          {isCurrent && <LessonList lessons={milestone.lessons} />}

          {isLocked && (
            <p className="mt-3 text-sm text-slate-400">
              Complete the previous module to unlock this.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}