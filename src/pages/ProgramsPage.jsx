import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { programs } from "../data/siteContent";

function ProgramsPage() {
  const [openProgram, setOpenProgram] = useState(programs[0]?.title ?? null);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageMeta
        title="Programs | KS International Japan"
        description="Discover cybersecurity learning paths including threat defense, SOC analyst training, blue team strategy, and enterprise workshops."
      />
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programs"
            title="Structured learning paths for individuals, teams, and enterprise security programs"
            description="These program cards now reflect cybersecurity education, practical readiness, and defense-focused upskilling."
            tone="light"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program, index) => (
            <Card key={program.title} className={index === 0 ? "lg:col-span-2" : ""}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-red-500">Program 0{index + 1}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{program.title}</h2>
                  {program.subtitle ? <p className="mt-3 text-base leading-7 text-[#475569]">{program.subtitle}</p> : null}
                  {program.overview ? <p className="mt-4 max-w-4xl text-sm leading-7 text-[#56565e]">{program.overview}</p> : null}
                </div>
                {program.syllabus ? (
                  <button
                    type="button"
                    onClick={() => setOpenProgram((current) => (current === program.title ? null : program.title))}
                    className="rounded-full border border-black/10 bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f2937]"
                  >
                    {openProgram === program.title ? "Hide Syllabus" : "View Syllabus"}
                  </button>
                ) : null}
              </div>

              <div className="mt-6 grid gap-4 rounded-[24px] bg-[#f4f4f5] p-5 text-sm text-[#34343a] sm:grid-cols-3">
                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-red-500">
                    {program.syllabus ? "Course Level" : "Duration"}
                  </p>
                  <p className="mt-2">{program.duration}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-red-500">
                    {program.focus ? "Security Focus" : "Benefits"}
                  </p>
                  <p className="mt-2">{program.focus ?? program.benefits}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-[0.18em] text-red-500">
                    {program.careerPath ? "Career Path" : "Eligibility"}
                  </p>
                  <p className="mt-2">{program.careerPath ?? program.eligibility}</p>
                </div>
              </div>

              {program.language ? (
                <div className="mt-4 rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-sm text-[#334155]">
                  <span className="font-semibold uppercase tracking-[0.18em] text-red-500">Language</span>
                  <span className="ml-3">{program.language}</span>
                </div>
              ) : null}

              <AnimatePresence initial={false}>
                {program.syllabus && openProgram === program.title ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#fbfcfe] p-6">
                      <div className="grid gap-4 rounded-[24px] bg-white p-5 text-sm text-[#334155] sm:grid-cols-4">
                        <div>
                          <p className="font-semibold uppercase tracking-[0.18em] text-red-500">Level</p>
                          <p className="mt-2">
                            {program.duration === "90 Hours" ? "Intermediate" : "Beginner to Intermediate"}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold uppercase tracking-[0.18em] text-red-500">Focus</p>
                          <p className="mt-2">{program.focus ?? "Threat Awareness & Defense"}</p>
                        </div>
                        <div>
                          <p className="font-semibold uppercase tracking-[0.18em] text-red-500">Career Path</p>
                          <p className="mt-2">{program.careerPath ?? "SOC / Blue Team / Analyst"}</p>
                        </div>
                        <div>
                          <p className="font-semibold uppercase tracking-[0.18em] text-red-500">Language</p>
                          <p className="mt-2">{program.language ?? "Japanese + English"}</p>
                        </div>
                      </div>

                      {program.prerequisites ? (
                        <div className="mt-6 rounded-[24px] border border-amber-100 bg-amber-50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                            Before You Start
                          </p>
                          <div className="mt-4 space-y-3">
                            {program.prerequisites.map((item) => (
                              <p key={item} className="text-sm leading-7 text-[#475569]">
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {program.outcome ? (
                        <div className="mt-6 rounded-[24px] border border-blue-100 bg-blue-50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">Outcome</p>
                          <p className="mt-3 text-sm leading-7 text-[#475569]">{program.outcome}</p>
                        </div>
                      ) : null}

                      <div className="mt-8 grid gap-5 lg:grid-cols-2">
                        {program.syllabus.map((module) => (
                          <div key={module.title} className="rounded-[24px] border border-slate-200 bg-white p-5">
                            <h3 className="text-lg font-semibold leading-7 text-[#111827]">{module.title}</h3>
                            <div className="mt-4 space-y-3">
                              {module.topics.map((topic) => (
                                <p key={topic} className="text-sm leading-7 text-[#475569]">
                                  {topic}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {program.nextSteps ? (
                        <div className="mt-6 rounded-[24px] border border-emerald-100 bg-emerald-50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                            Next Steps
                          </p>
                          <p className="mt-3 text-sm leading-7 text-[#475569]">{program.nextSteps}</p>
                        </div>
                      ) : null}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="mt-8">
                <Link to="/contact">
                  <Button>{program.syllabus ? "Contact Us About This Course" : "Apply for This Program"}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default ProgramsPage;
