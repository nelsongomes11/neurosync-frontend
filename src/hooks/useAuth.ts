import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

axios.defaults.withCredentials = true;

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/me");
        setUser(res.data);
        navigate("/dashboard");
      } catch (err: any) {
        if (!err.response || err.response.status !== 401) {
          console.error(err);
        }
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (username: string, password: string) => {
    try {
      await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      const res = await axios.get("http://localhost:3000/users/me");
      setUser(res.data);
      console.log(res.data);

      return true;
    } catch (err) {
      console.error(err);
      setUser(null);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/auth/logout");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return { user, loading, login, logout };
};
