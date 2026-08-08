import { useState } from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

function Settings({ studentProfile, onSave }) {
  const [displayName, setDisplayName] = useState(
    studentProfile.displayName
  );
  const [learningGoal, setLearningGoal] = useState(
    studentProfile.learningGoal
  );
  const [isSaved, setIsSaved] = useState(false);

  const navigate = useNavigate();

  function handleRebuildLearningPath() {
    navigate("/onboarding");
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSave({
      displayName: displayName.trim(),
      learningGoal: learningGoal.trim(),
    });

    setIsSaved(true);
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-3xl pb-10">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Settings
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Personalize your learning space.
          </h1>

          <p className="mt-3 text-slate-600">
            Update the details DevPath uses to personalize your experience.
          </p>
        </header>

        <Card>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="display-name"
                className="text-sm font-semibold text-slate-700"
              >
                Display name
              </label>

              <input
                id="display-name"
                type="text"
                value={displayName}
                onChange={(event) => {
                  setDisplayName(event.target.value);
                  setIsSaved(false);
                }}
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="learning-goal"
                className="text-sm font-semibold text-slate-700"
              >
                Learning goal
              </label>

              <textarea
                id="learning-goal"
                value={learningGoal}
                onChange={(event) => {
                  setLearningGoal(event.target.value);
                  setIsSaved(false);
                }}
                required
                rows="4"
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mt-8 max-w-xs">
              <Button type="submit">Save changes</Button>
            </div>

            {isSaved && (
              <p className="mt-4 text-sm font-medium text-emerald-700">
                Settings saved successfully.
              </p>
            )}
          </form>
        </Card>

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Learning path
        </p>

        <h2 className="mt-3 text-xl font-bold text-slate-900">
          Rebuild your learning path
        </h2>

        <p className="mt-2 max-w-xl leading-7 text-slate-600">
          Change your career goal or update the skills you already know. Your new
          answers will create a fresh roadmap.
        </p>

        <button
        type="button"
        onClick={handleRebuildLearningPath}
        className="mt-5 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Update my learning path
        </button>
      </section>
    </div>  
    </MainLayout>
  );
}

export default Settings;