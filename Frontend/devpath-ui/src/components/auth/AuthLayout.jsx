import { Link } from "react-router-dom";

function AuthLayout({
  title,
  description,
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-md flex-col justify-center">
        <Link to="/" className="text-xl font-bold text-slate-900">
          Dev<span className="text-indigo-600">Path</span>
        </Link>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>

          <p className="mt-3 leading-7 text-slate-600">{description}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-7 text-center text-sm text-slate-600">
            {footerText}{" "}
            <Link
              to={footerLinkTo}
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {footerLinkText}
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}

export default AuthLayout;