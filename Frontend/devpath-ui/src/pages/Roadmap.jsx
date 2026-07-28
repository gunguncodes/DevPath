import RoadmapNode from "../components/roadmap/RoadmapNode";
import MainLayout from "../layouts/MainLayout";

function Roadmap({ roadmap }) {
  const currentMilestone = roadmap.find(
    (milestone) => milestone.status === "current"
  );

  return (
    <MainLayout>
      <div className="mx-auto max-w-6xl pb-10">
        <header className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Your roadmap
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            See how far you&apos;ve come.
          </h1>

          <p className="mt-3 text-slate-600">
            Each milestone builds on the last one. Keep moving forward, one
            focused lesson at a time.
          </p>
        </header>

        {currentMilestone && (
          <p className="mb-8 text-sm text-slate-600">
            You are currently building your skills in{" "}
            <span className="font-semibold text-slate-900">
              {currentMilestone.title}
            </span>
            .
          </p>
        )}

        <section
          aria-label="Frontend developer learning roadmap"
          className="overflow-x-auto pb-6"
        >
          <div className="relative flex min-w-[760px] items-start justify-between px-6 py-4">
            <span className="absolute left-16 right-16 top-13 h-0.5 bg-slate-200" />

            {roadmap.map((milestone) => (
              <RoadmapNode key={milestone.id} milestone={milestone} />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Roadmap;