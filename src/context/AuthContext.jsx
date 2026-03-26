import { createContext, useContext, useEffect, useState } from "react";
import { authApi } from "../api/api";

const TOKEN_KEY = "hacklearn_token";
const AuthContext = createContext(null);

function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

function extractToken(data) {
  return data?.token || data?.accessToken || data?.jwt || null;
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getStoredToken());
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(Boolean(getStoredToken()));

  const persistToken = (nextToken) => {
    if (nextToken) {
      localStorage.setItem(TOKEN_KEY, nextToken);
      setToken(nextToken);
      return;
    }

    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  };

  const fetchUser = async () => {
    const response = await authApi.getUser();
    const nextUser = response.data?.user || response.data;
    setUser(nextUser);
    return nextUser;
  };

  useEffect(() => {
    let active = true;

    async function bootstrapAuth() {
      if (!token) {
        setAuthLoading(false);
        return;
      }

      try {
        const response = await authApi.getUser();

        if (!active) {
          return;
        }

        setUser(response.data?.user || response.data);
      } catch (error) {
        if (!active) {
          return;
        }

        persistToken(null);
        setUser(null);
      } finally {
        if (active) {
          setAuthLoading(false);
        }
      }
    }

    bootstrapAuth();

    return () => {
      active = false;
    };
  }, [token]);

  const login = async (credentials) => {
    const response = await authApi.login(credentials);
    const nextToken = extractToken(response.data);

    if (!nextToken) {
      throw new Error("Login succeeded but no token was returned.");
    }

    persistToken(nextToken);
    const nextUser = response.data?.user || (await fetchUser());
    setUser(nextUser);
    return nextUser;
  };

  const signup = async (payload) => {
    const response = await authApi.register(payload);
    const nextToken = extractToken(response.data);

    if (nextToken) {
      persistToken(nextToken);
      const nextUser = response.data?.user || (await fetchUser());
      setUser(nextUser);
      return { user: nextUser, authenticated: true };
    }

    return { user: response.data?.user || null, authenticated: false };
  };

  const logout = () => {
    persistToken(null);
    setUser(null);
    setAuthLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        authLoading,
        fetchUser,
        isAuthenticated: Boolean(token),
        login,
        logout,
        signup,
        token,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
