function NextMilestone({ milestone }) {
  if (!milestone) {
    return (
      <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Learning path complete
        </p>

        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          You&apos;ve completed every milestone.
        </h2>

        <p className="mt-4 text-slate-600">
          Great work. Your next step is to build a project using what you learned.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
        Next milestone
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-900">
        {milestone.title}
      </h2>

      <p className="mt-4 text-slate-600">
        {milestone.description}
      </p>
    </section>
  );
}

export default NextMilestone;