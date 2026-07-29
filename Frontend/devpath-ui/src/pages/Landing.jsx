import { FiArrowRight, FiCheckCircle, FiCompass, FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";
import FeatureCard from "../components/landing/FeatureCard";
import PublicNavbar from "../components/landing/PublicNavbar";

function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PublicNavbar />

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              A clear path for CS students
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Always know what to learn next.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              DevPath turns a large frontend learning journey into focused,
              achievable next steps.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/app"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
              >
                Explore the demo
                <FiArrowRight size={18} />
              </Link>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-white"
              >
                See features
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Your next lesson
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Learn useState
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Understand how React components remember and update information.
            </p>

            <div className="mt-7">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Frontend foundations
                </span>

                <span className="font-semibold text-slate-900">64%</span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[64%] rounded-full bg-indigo-600" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Built for momentum
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Less confusion. More progress.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <FeatureCard
                icon={<FiCompass size={22} />}
                title="Clear next steps"
                description="See the one lesson that matters most right now."
              />

              <FeatureCard
                icon={<FiTarget size={22} />}
                title="Focused learning path"
                description="Follow a structured sequence instead of guessing what to learn."
              />

              <FeatureCard
                icon={<FiCheckCircle size={22} />}
                title="Visible progress"
                description="Track completed lessons and see the milestones ahead."
              />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            How it works
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-3xl font-bold text-indigo-600">01</p>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Choose your path
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Start with a guided path built for frontend development.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-indigo-600">02</p>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Complete focused lessons
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Learn one concept at a time with clear outcomes and practice.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-indigo-600">03</p>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                Keep moving forward
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Your progress updates so you always know what comes next.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          DevPath — guided learning for frontend developers.
        </div>
      </footer>
    </div>
  );
}

export default Landing;