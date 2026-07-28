import Card from "../common/Card";
import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";

function ProgressCard({
  currentMilestone,
  completedLessons,
  totalLessons,
  percentage,
}) {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
        Your progress
      </p>

      <div className="mt-6 space-y-6">
        <div>
          <p className="mb-2 text-sm text-slate-500">Current focus</p>

          <Badge>
            {currentMilestone?.title ?? "Learning path complete"}
          </Badge>
        </div>

        <div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">Lessons completed</p>

            <p className="text-sm font-semibold text-slate-900">
              {completedLessons} of {totalLessons}
            </p>
          </div>

          <div className="mt-3">
            <ProgressBar progress={percentage} />
          </div>

          <p className="mt-3 text-sm text-slate-600">
            You&apos;re {percentage}% through your learning path.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default ProgressCard;