function ProgressCard() {
  return (
    <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mt-8">
      <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
        Where You Are Today
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="text-sm text-slate-500">
            Current Role
          </p>

          <h3 className="text-xl font-semibold">
            Explorer
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Current Focus
          </p>

          <h3 className="text-xl font-semibold">
            HTML & CSS
          </h3>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Progress
          </p>

          <div className="w-full bg-slate-200 rounded-full h-3 mt-2">
            <div className="bg-indigo-600 h-3 rounded-full w-1/3"></div>
          </div>

          <p className="text-sm mt-2 text-slate-600">
            You're 33% closer to your goal.
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Next Milestone
          </p>

          <h3 className="text-xl font-semibold">
            React Fundamentals
          </h3>
        </div>
      </div>
    </section>
  );
}

export default ProgressCard;