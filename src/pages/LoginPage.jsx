import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../sections/AuthForm";
import AuthLayout from "../layouts/AuthLayout";

function LoginPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to continue your labs, track your progress, and jump back into your active mission feed."
      altText="Need an account?"
      altLink="/signup"
      altLabel="Create one"
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}

export default LoginPage;
