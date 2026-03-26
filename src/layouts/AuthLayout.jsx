import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

function AuthLayout({ title, subtitle, altText, altLink, altLabel, children }) {
  return (
    <PageShell className="grid min-h-screen place-items-center px-4 py-10">
      <div className="grid-overlay absolute inset-0" />
      <div className="glass-panel relative z-10 w-full max-w-md rounded-[32px] p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-hack-green-soft">
          Secure Access
        </p>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-hack-muted">{subtitle}</p>
        <div className="mt-8">{children}</div>
        <p className="mt-6 text-sm text-hack-muted">
          {altText}{" "}
          <Link to={altLink} className="text-hack-green-soft transition hover:text-hack-green">
            {altLabel}
          </Link>
        </p>
      </div>
    </PageShell>
  );
}

export default AuthLayout;
