import { FiArrowLeft, FiClock, FiCheckCircle } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Button from "../components/common/Button";
import MainLayout from "../layouts/MainLayout";

export default function Lesson({ roadmap, onLessonComplete }) {
  const { lessonId } = useParams();

  const milestone = roadmap.find((roadmapMilestone) =>
    roadmapMilestone.lessons.some((lesson) => lesson.id === lessonId)
  );

  const lesson = milestone?.lessons.find(
    (roadmapLesson) => roadmapLesson.id === lessonId
  );

  if (!milestone || !lesson) {
    return (
      <MainLayout>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900">
            Lesson not found
          </h1>

          <Link
            to="/journey"
            className="mt-4 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Return to your journey
          </Link>
        </div>
      </MainLayout>
    );
  }

  if (lesson.status === "locked") {
    return (
      <MainLayout>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Lesson locked
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Complete earlier lessons first.
          </h1>

          <p className="mt-3 text-slate-600">
            {lesson.title} will unlock when you reach it in your learning path.
          </p>

          <Link
            to="/journey"
            className="mt-6 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Return to your journey
          </Link>
        </div>
      </MainLayout>
    );
  }

  const isCurrentLesson = lesson.status === "current";

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl pb-10">
        <Link
          to="/journey"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
        >
          <FiArrowLeft size={16} />
          Back to journey
        </Link>

        <header className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            {milestone.title}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Learn {lesson.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {lesson.summary}
          </p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">
              Today&apos;s checklist
            </h2>

            <div className="mt-6 space-y-5">
              {lesson.steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-1 leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <FiClock size={18} />
              <span className="text-sm font-medium">Estimated time</span>
            </div>

            <p className="mt-2 text-2xl font-bold text-slate-900">
              {lesson.duration}
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-slate-600">
                <FiCheckCircle size={18} />
                <span className="text-sm font-medium">Why this matters</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {lesson.reason}
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {isCurrentLesson ? (
            <>
              <h2 className="text-xl font-bold text-slate-900">
                Ready to move on?
              </h2>

              <p className="mt-2 text-slate-600">
                Mark this lesson complete when you have finished the checklist.
              </p>

              <div className="mt-6">
                <Button onClick={() => onLessonComplete(lesson.id)}>
                  Mark lesson complete
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <FiCheckCircle size={22} className="text-emerald-600" />

              <div>
                <h2 className="font-semibold text-slate-900">
                  Lesson completed
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  Your learning path has been updated.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </MainLayout>
  );
}