import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="text-xl font-bold text-slate-900">
          Dev<span className="text-indigo-600">Path</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="hover:text-slate-900">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-slate-900">
            How it works
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/sign-in"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            Sign in
          </Link>

          <Link
            to="/sign-up"
            className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default PublicNavbar;