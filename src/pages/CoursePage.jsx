import Button from "../components/Button";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import PageShell from "../components/PageShell";
import ProgressBar from "../components/ProgressBar";
import { modules } from "../data/mockData";

function CoursePage() {
  return (
    <>
      <Navbar />
      <PageShell className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Card>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-hack-green-soft">Course Path</p>
            <h1 className="mt-4 text-4xl font-bold text-white">Operator Roadmap</h1>
            <p className="mt-4 text-sm leading-7 text-hack-muted">
              Structured modules help you move from foundational recon to exploit development and payout-ready reporting.
            </p>
            <div className="mt-8 space-y-4">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-[24px] border border-white/6 bg-black/35 p-5 transition hover:border-hack-green/30 hover:bg-black/45"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-white">{module.title}</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-hack-muted">{module.description}</p>
                    </div>
                    <Button>Start</Button>
                  </div>
                  <div className="mt-5">
                    <ProgressBar value={module.progress} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="overflow-hidden">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-hack-green-soft">Video Placeholder</p>
              <div className="mt-5 flex min-h-[320px] items-center justify-center rounded-[28px] border border-hack-border bg-[radial-gradient(circle_at_top,rgba(32,255,127,0.12),rgba(0,0,0,0.7))] p-6">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-hack-green/35 bg-black/35 text-3xl text-hack-green">
                    ▶
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-white">Module Video Stream</h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-hack-muted">
                    Secure player area for walkthroughs, attack demos, and exploit validation breakdowns.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-hack-green-soft">Progress Tracking UI</p>
              <h2 className="mt-4 text-2xl font-bold text-white">Current Track Completion</h2>
              <div className="mt-6">
                <ProgressBar value={58} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  ["Modules completed", "7"],
                  ["Labs solved", "11"],
                  ["Reports drafted", "3"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/6 bg-black/35 p-4">
                    <p className="text-3xl font-bold text-hack-green">{value}</p>
                    <p className="mt-2 text-sm text-hack-muted">{label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </PageShell>
    </>
  );
}

export default CoursePage;
