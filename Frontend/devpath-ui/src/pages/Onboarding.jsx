import { useState } from "react";
import { FiCheckCircle, FiTarget } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Onboarding({ careerPathOptions, onComplete }) {
  const [selectedCareerPathId, setSelectedCareerPathId] = useState(
    careerPathOptions[0].id
  );
  const [completedModuleIds, setCompletedModuleIds] = useState([]);

  const navigate = useNavigate();

  const selectedCareerPath = careerPathOptions.find(
    (careerPath) => careerPath.id === selectedCareerPathId
  );

  const curriculum = selectedCareerPath.curriculum;

  function handleCareerPathChange(careerPathId) {
    setSelectedCareerPathId(careerPathId);
    setCompletedModuleIds([]);
  }

  function toggleModule(moduleId) {
    setCompletedModuleIds((currentIds) => {
      if (currentIds.includes(moduleId)) {
        return currentIds.filter((id) => id !== moduleId);
      }

      return [...currentIds, moduleId];
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onComplete(selectedCareerPathId, completedModuleIds);
    navigate("/app");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-xl font-bold text-slate-900">
          Dev<span className="text-indigo-600">Path</span>
        </p>

        <header className="mt-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Build your path
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Start with your career goal.
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            Choose where you want to go, then tell DevPath what you already
            know. We will build the next steps around you.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiTarget size={20} />
              </span>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  What do you want to become?
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Your goal decides which learning path DevPath creates.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {careerPathOptions.map((careerPath) => {
                const isSelected = careerPath.id === selectedCareerPathId;

                return (
                  <label
                    key={careerPath.id}
                    className={`cursor-pointer rounded-xl border p-4 transition ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="career-path"
                      value={careerPath.id}
                      checked={isSelected}
                      onChange={() => handleCareerPathChange(careerPath.id)}
                      className="sr-only"
                    />

                    <span className="block font-semibold text-slate-900">
                      {careerPath.title}
                    </span>

                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {careerPath.description}
                    </span>
                  </label>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiCheckCircle size={20} />
              </span>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Skills you already know
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Select completed topics in order. DevPath uses prerequisites
                  to keep your learning path realistic.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {curriculum.map((module, index) => {
                const isSelected = completedModuleIds.includes(module.id);
                const previousModule = curriculum[index - 1];

                const canSelectModule =
                  index === 0 ||
                  completedModuleIds.includes(previousModule.id);

                return (
                  <label
                    key={module.id}
                    className={`flex items-start gap-4 rounded-xl border p-4 transition ${
                      canSelectModule
                        ? "cursor-pointer"
                        : "cursor-not-allowed opacity-50"
                    } ${
                      isSelected
                        ? "border-indigo-300 bg-indigo-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      disabled={!canSelectModule}
                      onChange={() => toggleModule(module.id)}
                      className="mt-1 h-4 w-4 accent-indigo-600"
                    />

                    <span>
                      <span className="block font-semibold text-slate-900">
                        {module.title}
                      </span>

                      <span className="mt-1 block text-sm text-slate-600">
                        {module.description}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Generate my roadmap
          </button>
        </form>
      </div>
    </main>
  );
}

export default Onboarding;