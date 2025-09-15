import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (user) {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="flex justify-center min-h-screen items-center bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="flex flex-col items-center">
          <p className="text-white text-5xl font-[Pirulen]">
            Welcome to NeuroSync
          </p>
          <p className="text-white text-2xl font-[clash] mt-5">
            Basically Notion ... but without the clutter.
          </p>
          <div className="mt-10 ">
            <button
              className="text-white border-2 border-white rounded-sm p-1 px-3 mr-5 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="text-white border-2 border-white rounded-sm p-1 px-3 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
