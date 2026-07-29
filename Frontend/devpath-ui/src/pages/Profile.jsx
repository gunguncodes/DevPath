import { useState } from "react";
import ConfirmDialog from "../components/common/ConfirmDialog";
import { FiBookOpen, FiRotateCcw, FiTarget } from "react-icons/fi";
import Button from "../components/common/Button";
import ProfileStat from "../components/profile/ProfileStat";
import Card from "../components/common/Card";
import MainLayout from "../layouts/MainLayout";
import { getLearningStats } from "../utils/learningStats";

function Profile({ roadmap, onResetProgress }) {
  const {
    completedLessons,
    totalLessons,
    percentage,
    currentMilestone,
  } = getLearningStats(roadmap);

  const completedMilestones = roadmap.filter(
    (milestone) => milestone.status === "completed"
  ).length;

  const[isResetDialogOpen, setIsResetDialogOpen] = useState(false);

  function handleReset() {
    onResetProgress();
    setIsResetDialogOpen(false);
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-4xl pb-10">
        <header className="flex flex-col gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-center">
          <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-indigo-600 text-2xl font-bold text-white">
            G
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Learning profile
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Gungun
            </h1>

            <p className="mt-2 text-slate-600">
              Building a frontend development foundation.
            </p>
          </div>
        </header>

        <section className="mt-8 grid gap-5 sm:grid-cols-3">
          <ProfileStat
            icon={<FiBookOpen size={18} />}
            label="Lessons completed"
            value={`${completedLessons} / ${totalLessons}`}
          />

          <ProfileStat
            icon={<FiTarget size={18} />}
            label="Overall progress"
            value={`${percentage}%`}
          />

          <ProfileStat
            icon={<FiBookOpen size={18} />}
            label="Milestones completed"
            value={`${completedMilestones} / ${roadmap.length}`}
          />
        </section>

        <section className="mt-8">
          <Card>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Current focus
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              {currentMilestone?.title ?? "Learning path complete"}
            </h2>

            <p className="mt-3 text-slate-600">
              {currentMilestone
                ? currentMilestone.description
                : "You have completed every milestone in this learning path."}
            </p>
          </Card>
        </section>

        <section className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Reset demo progress
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Reset your saved lesson progress and return to the first active lesson.
            Use this while testing DevPath.
          </p>

          <div className="mt-5 max-w-xs">
            <Button onClick={()=> setIsResetDialogOpen(true)}>
              <span className="flex items-center justify-center gap-2">
                <FiRotateCcw size={17} />
                Reset progress
              </span>
            </Button>
          </div>
        </section>
      </div>
      <ConfirmDialog
        isOpen={isResetDialogOpen}
        title="Reset all learning progress?"
        description={"This will return you to the first active lesson and cannot be undone."}
        confirmLabel="Reset Progress"
        onCancel={()=> setIsResetDialogOpen(false)}
        onConfirm={handleReset}
        />
    </MainLayout>
  );
}

export default Profile;