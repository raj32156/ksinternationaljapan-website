import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

function AuthForm({ mode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [values, setValues] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState(() =>
    mode === "login" && location.state?.successMessage
      ? { type: "success", text: location.state.successMessage }
      : null
  );

  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setServerMessage(null);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const from = location.state?.from || "/dashboard";

    async function submitAuth() {
      setLoading(true);

      try {
        if (mode === "login") {
          await login(values);
          navigate(from, { replace: true });
          return;
        }

        const result = await signup(values);

        if (result.authenticated) {
          navigate("/dashboard", { replace: true });
          return;
        }

        setServerMessage({
          type: "success",
          text: "Signup successful. You can now log in with your credentials.",
        });
        navigate("/login", {
          replace: true,
          state: {
            successMessage: "Signup successful. You can now log in with your credentials.",
          },
        });
      } catch (error) {
        setServerMessage({
          type: "error",
          text:
            error.response?.data?.message ||
            error.message ||
            "Something went wrong while contacting the server.",
        });
      } finally {
        setLoading(false);
      }
    }

    submitAuth();
  };

  const labels = {
    login: "Login",
    signup: "Signup",
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <label className="block">
        <span className="mb-2 block text-sm text-hack-green-soft">Email</span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="raj@hacklearn.ai"
          className="w-full rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-white outline-none transition placeholder:text-hack-muted focus:border-hack-green/40 focus:shadow-[0_0_0_1px_rgba(32,255,127,0.18)]"
        />
        {submitted && errors.email && <p className="mt-2 text-sm text-red-300">{errors.email}</p>}
      </label>

      <label className="block">
        <span className="mb-2 block text-sm text-hack-green-soft">Password</span>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Minimum 6 characters"
          className="w-full rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-white outline-none transition placeholder:text-hack-muted focus:border-hack-green/40 focus:shadow-[0_0_0_1px_rgba(32,255,127,0.18)]"
        />
        {submitted && errors.password && <p className="mt-2 text-sm text-red-300">{errors.password}</p>}
      </label>

      <Button className="w-full" type="submit" disabled={loading}>
        {loading ? "Please Wait" : labels[mode]}
      </Button>

      {serverMessage && <Alert type={serverMessage.type}>{serverMessage.text}</Alert>}
    </motion.form>
  );
}

export default AuthForm;
