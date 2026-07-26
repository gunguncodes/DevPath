import { useNavigate } from "react-router-dom";
import Card from "../common/Card";
import Button from "../common/Button";

function MissionCard({ milestone, lesson }) {
  const navigate = useNavigate();
  return (
    <Card className="p-8 sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
        Current lesson
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
        Learn {lesson.title}
      </h2>

      <p className="mt-2 text-sm font-medium text-slate-500">
        {milestone.title}
      </p>

      <p className="mt-5 text-lg text-slate-600">
        {lesson.summary}
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Estimated time
          </p>

          <p className="text-xl font-semibold text-slate-900">
            {lesson.duration}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Why this matters
          </p>

          <p className="leading-7 text-slate-700">
            {lesson.reason}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <Button onClick={() => navigate(`/lessons/${lesson.id}`)}>
          Start {lesson.title}
        </Button>
      </div>
    </Card>
  );
}

export default MissionCard;