import Card from "../common/Card";
import Button from "../common/Button";

function MissionCard() {
  return (
    <Card className="p-10">
      <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
        One Step Today
      </p>

      <h2 className="text-3xl font-bold text-slate-900 mt-3 leading-tight">
        Build your first React Component
      </h2>

      <p className="text-slate-600 mt-5 text-lg">
        Today's goal isn't to finish React.
        It's to understand reusable components.
      </p>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Estimated Time
          </p>

          <p className="text-xl font-semibold text-slate-900">
            45 Minutes
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">
            Why This?
          </p>

          <p className="text-slate-700 leading-7">
            Components are the foundation of React.
            Once you understand them, every future topic becomes easier.
          </p>
        </div>
      </div>

      <Button>
        Start Today's Mission
      </Button>
    </Card>
  );
}

export default MissionCard;