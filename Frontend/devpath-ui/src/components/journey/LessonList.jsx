import { FiCheck, FiLock, FiPlay } from "react-icons/fi";
import { Link } from "react-router-dom";

function getLessonStyles(status) {
  if (status === "completed") {
    return {
      icon: <FiCheck size={16} />,
      iconClassName: "bg-emerald-100 text-emerald-700",
      textClassName: "text-slate-700",
      label: "Completed",
    };
  }

  if (status === "current") {
    return {
      icon: <FiPlay size={15} />,
      iconClassName: "bg-indigo-600 text-white",
      textClassName: "font-semibold text-slate-900",
      label: "Continue",
    };
  }

  return {
    icon: <FiLock size={15} />,
    iconClassName: "bg-slate-100 text-slate-400",
    textClassName: "text-slate-400",
    label: "Locked",
  };
}

export default function LessonList({ lessons }) {
  return (
    <ul className="mt-4 space-y-3 border-t border-slate-100 pt-4">
      {lessons.map((lesson) => {
        const lessonStyles = getLessonStyles(lesson.status);
        const isCurrent = lesson.status === "current";

        return (
          <li
            key={lesson.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${lessonStyles.iconClassName}`}
              >
                {lessonStyles.icon}
              </span>

              <span className={`text-sm ${lessonStyles.textClassName}`}>
                {lesson.title}
              </span>
            </div>

            {isCurrent ? (
              <Link
                to={`/lessons/${lesson.id}`}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                {lessonStyles.label}
              </Link>
            ) : (
              <span className="text-xs font-medium text-slate-500">
                {lessonStyles.label}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}