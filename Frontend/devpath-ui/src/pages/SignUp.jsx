import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("onboarding");
  }

  return (
    <AuthLayout
      title="Create your account"
      description="Start a guided frontend learning path built around clear next steps."
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/sign-in"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-slate-700"
          >
            Name
          </label>

          <input
            id="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-700"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-semibold text-slate-700"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            required
            minLength="6"
            placeholder="At least 6 characters"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Create account
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Demo mode: creating an account opens the learning dashboard. Real
          account creation will be added with the backend.
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignUp;