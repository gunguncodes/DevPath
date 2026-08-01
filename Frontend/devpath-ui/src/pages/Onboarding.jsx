import { useState } from "react";
import { FiCheckCircle, FiTarget } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Onboarding({ curriculum, onComplete }) {
  const [completedModuleIds, setCompletedModuleIds] = useState([]);
  const navigate = useNavigate();

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

    onComplete(completedModuleIds);
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
            Tell us where you are starting.
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-slate-600">
            Select the topics you already feel comfortable with. DevPath will
            start you at the next logical step.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="mt-10 space-y-8">
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
                  Select topics in order. We use prerequisites to keep your
                  learning path realistic.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {curriculum.map((module,index) => {
                const previousModule = curriculum[index - 1];
                const canSelectedModule = 
                   index === 0 || completedModuleIds.includes(previousModule.id);
                const isSelected = completedModuleIds.includes(module.id);

                return (
                  <label
                    key={module.id}
                    className={`flex items-start gap-4 rounded-xl border p-4 transition ${
                        canSelectedModule
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
                      disabled={!canSelectedModule}
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

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <FiTarget size={20} />
              </span>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Your goal
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  This first DevPath version supports one focused goal.
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
              <p className="font-semibold text-slate-900">
                Become a Frontend Developer
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Learn HTML, CSS, JavaScript, React, routing, and state
                management in the right order.
              </p>
            </div>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800"
          >
            Generate my roadmap
          </button>
        </form>
      </div>
    </main>
  );
}

export default Onboarding;