import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sucess = await login(username, password);
    if (!sucess) {
      setError("Invalid credentials!");
    } else {
      setError("");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <>
        <div className="flex justify-center min-h-screen items-center bg-linear-to-bl from-sky-950 to-teal-950 flex-col">
          <p className="text-white text-3xl font-[Pirulen]">Login</p>
          <div className="mt-10 items-center flex">
            <form className=" flex flex-col w-70" onSubmit={handleSubmit}>
              <label
                htmlFor="username"
                className="font-[clash] text-md text-white mb-2"
              >
                Username
              </label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-white border-1 rounded-md text-lg w-70 text-white p-1"
              ></input>
              <label
                htmlFor="password"
                className="font-[clash] text-md text-white mb-2 mt-5"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-white border-1 rounded-md text-lg w-70 text-white p-1"
              ></input>

              <div className="flex justify-center items-center w-70 mt-5">
                <input
                  type="submit"
                  value={"Login"}
                  className=" text-white font-md p-1 bg-zinc-700 w-70 items-center rounded-sm hover:bg-zinc-600 cursor-pointer"
                ></input>
              </div>
              <Link
                to="/signup"
                className="text-sm text-white font-[clash] mt-5"
              >
                Don’t have an account yet? Register
              </Link>
              {error && (
                <p className="font-[clash] text-red-300 text-sm mt-4">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default LoginPage;
