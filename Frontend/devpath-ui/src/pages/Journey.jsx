import JourneyModule from "../components/journey/JourneyModule";
import MainLayout from "../layouts/MainLayout";
import { roadmap } from "../data/roadmap";

function getJourneyProgress(milestones) {
  let totalLessons = 0;
  let completedLessons = 0;

  milestones.forEach((milestone) => {
    milestone.lessons.forEach((lesson) => {
      totalLessons += 1;

      if (lesson.status === "completed") {
        completedLessons += 1;
      }
    });
  });

  return {
    completedLessons,
    totalLessons,
    percentage: Math.round((completedLessons / totalLessons) * 100),
  };
}

export default function Journey({roadmap}) {
  const progress = getJourneyProgress(roadmap);

  const currentMilestone = roadmap.find(
    (milestone) => milestone.status === "current"
  );

  const currentLesson = currentMilestone?.lessons.find(
    (lesson) => lesson.status === "current"
  );

  return (
    <MainLayout>
      <div className="w-full pb-10">
        <div className="mx-auto max-w-3xl">
          <header className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Your learning path
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Keep moving forward.
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Your path shows what you have finished, what to learn now, and what
              unlocks next.
            </p>
          </header>

          <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Overall progress
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {progress.percentage}% complete
                </p>
              </div>

              <p className="text-sm font-medium text-slate-600">
                {progress.completedLessons} of {progress.totalLessons} lessons
              </p>
            </div>

            <div
              className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"
              aria-label={`${progress.percentage}% of lessons completed`}
            >
              <div
                className="h-full rounded-full bg-indigo-600"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>

            {currentMilestone && currentLesson && (
              <p className="mt-4 text-sm text-slate-600">
                Up next:{" "}
                <span className="font-semibold text-slate-900">
                  {currentLesson.title}
                </span>{" "}
                in {currentMilestone.title}
              </p>
            )}
          </section>

          <section aria-label="Learning modules" className="space-y-5">
            {roadmap.map((milestone) => (
              <JourneyModule key={milestone.id} milestone={milestone} />
            ))}
          </section>
        </div>
      </div>
    </MainLayout>
  );
}