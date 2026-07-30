import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";

function SignIn() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/app");
  }

  return (
    <AuthLayout
      title="Welcome back"
      description="Continue your learning journey from where you left off."
      footerText="New to DevPath?"
      footerLinkText="Create an account"
      footerLinkTo="/sign-up"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
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
            placeholder="Enter your password"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Sign in
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          Demo mode: submitting this form opens the learning dashboard. Real
          authentication will be added with the backend.
        </p>
      </form>
    </AuthLayout>
  );
}

export default SignIn;