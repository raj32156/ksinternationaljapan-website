import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../sections/AuthForm";
import AuthLayout from "../layouts/AuthLayout";

function SignupPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthLayout
      title="Create Your Access"
      subtitle="Join HackLearn to unlock structured training, hands-on labs, and your 30-day earning roadmap."
      altText="Already have an account?"
      altLink="/login"
      altLabel="Log in"
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}

export default SignupPage;
