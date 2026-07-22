import Card from "../common/Card";
import Badge from "../common/Badge";
import ProgressBar from "../common/ProgressBar";

function ProgressCard() {
  return (
    <Card>
      <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
        Where You Are Today
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-slate-500 mb-2">
            Current Role
          </p>

          <Badge>Explorer</Badge>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-2">
            Current Focus
          </p>

          <Badge>HTML & CSS</Badge>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-2">
            Progress
          </p>

          <ProgressBar progress={33} />

          <p className="text-sm mt-2 text-slate-600">
            You're 33% closer to your goal.
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-2">
            Next Milestone
          </p>

          <Badge>React Fundamentals</Badge>
        </div>
      </div>
    </Card>
  );
}

export default ProgressCard;