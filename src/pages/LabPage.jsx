import { useEffect, useState } from "react";
import { labApi } from "../api/api";
import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import PageShell from "../components/PageShell";

function LabPage() {
  const [labs, setLabs] = useState([]);
  const [selectedLabId, setSelectedLabId] = useState("");
  const [flag, setFlag] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadLabs() {
      setLoading(true);
      setError("");

      try {
        const response = await labApi.getLabs();
        const nextLabs = response.data?.labs || response.data || [];

        if (!active) {
          return;
        }

        const normalizedLabs = Array.isArray(nextLabs) ? nextLabs : [];
        setLabs(normalizedLabs);

        if (normalizedLabs[0]) {
          setSelectedLabId(normalizedLabs[0].id || normalizedLabs[0]._id || "");
        }
      } catch (requestError) {
        if (!active) {
          return;
        }

        setError(
          requestError.response?.data?.message ||
            "Unable to load lab inventory right now."
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadLabs();

    return () => {
      active = false;
    };
  }, []);

  const selectedLab =
    labs.find((lab) => String(lab.id || lab._id) === String(selectedLabId)) || labs[0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!flag.trim()) {
      setStatus({ type: "error", message: "Enter a flag before submitting." });
      return;
    }

    if (!selectedLab) {
      setStatus({ type: "error", message: "Select a lab before submitting a flag." });
      return;
    }

    setSubmitting(true);

    try {
      const response = await labApi.submitFlag({
        labId: selectedLab.id || selectedLab._id,
        flag,
      });

      setStatus({
        type: "success",
        message:
          response.data?.message || "Flag accepted. Lab completed successfully.",
      });
      setFlag("");
    } catch (requestError) {
      setStatus({
        type: "error",
        message:
          requestError.response?.data?.message ||
          "Incorrect flag. Review your enumeration path and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageShell className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-hack-green-soft">Lab Page</p>
          {loading && <LoadingSpinner label="Loading labs" />}
          {!loading && error && <Alert type="error">{error}</Alert>}
          {!loading && !error && selectedLab && (
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <div className="mb-6">
                  <label className="block">
                    <span className="mb-2 block text-sm text-hack-green-soft">Choose Lab</span>
                    <select
                      value={selectedLabId}
                      onChange={(event) => {
                        setSelectedLabId(event.target.value);
                        setStatus(null);
                      }}
                      className="w-full rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-white outline-none transition focus:border-hack-green/40 focus:shadow-[0_0_0_1px_rgba(32,255,127,0.18)]"
                    >
                      {labs.map((lab) => (
                        <option key={lab.id || lab._id || lab.title} value={lab.id || lab._id}>
                          {lab.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <h1 className="text-4xl font-bold text-white">{selectedLab.title}</h1>
                <p className="mt-4 text-sm leading-7 text-hack-muted">{selectedLab.description}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/6 bg-black/35 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-hack-muted">Target IP</p>
                    <p className="mt-3 text-xl font-semibold text-hack-green-soft">
                      {selectedLab.targetIp || selectedLab.targetIP || "192.168.56.21"}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/6 bg-black/35 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-hack-muted">Difficulty</p>
                    <p className="mt-3 text-xl font-semibold text-white">{selectedLab.difficulty || "Unknown"}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="rounded-[28px] border border-hack-border bg-black/40 p-6">
                <h2 className="text-2xl font-bold text-white">Enter Flag</h2>
                <p className="mt-3 text-sm leading-7 text-hack-muted">
                  Submit your proof string after obtaining user-to-root access within the lab environment.
                </p>
                <label className="mt-6 block">
                  <span className="mb-2 block text-sm text-hack-green-soft">Flag</span>
                  <input
                    value={flag}
                    onChange={(event) => setFlag(event.target.value)}
                    placeholder="HL{...}"
                    className="w-full rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-white outline-none transition placeholder:text-hack-muted focus:border-hack-green/40 focus:shadow-[0_0_0_1px_rgba(32,255,127,0.18)]"
                  />
                </label>

                <div className="mt-6">
                  <Button className="w-full" type="submit">
                    {submitting ? "Submitting" : "Submit Flag"}
                  </Button>
                </div>

                {status && (
                  <div className="mt-5">
                    <Alert type={status.type}>{status.message}</Alert>
                  </div>
                )}
              </form>
            </div>
          )}

          {!loading && !error && !selectedLab && (
            <div className="mt-5">
              <Alert type="info">No labs were returned by the backend yet.</Alert>
            </div>
          )}
        </Card>
      </PageShell>
    </>
  );
}

export default LabPage;
