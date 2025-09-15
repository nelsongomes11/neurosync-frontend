import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center bg-linear-to-bl from-zinc-700 to-zinc-800 flex-col">
        <p className="text-white text-3xl font-[Pirulen]">Sign Up</p>
        <div className="mt-10 items-center flex">
          <form className=" flex flex-col w-70">
            <label
              htmlFor="username"
              className="font-[clash] text-md text-white mb-2"
            >
              Username
            </label>
            <input
              type="username"
              id="usernameS"
              className="border-white border-1 rounded-md text-lg w-70 text-white p-1"
              required
            ></input>
            <label
              htmlFor="email"
              className="font-[clash] text-md text-white mb-2 mt-5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-white border-1 rounded-md text-lg w-70 text-white p-1"
              required
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
              className="border-white border-1 rounded-md text-lg w-70 text-white p-1"
              required
            ></input>
            <div className="mt-5 flex items-center justify-center">
              <input
                type="checkbox"
                id="checkbox"
                className="text-lg mr-2 size-4 accent-gray-500"
              ></input>
              <label
                htmlFor="checkbox"
                className="text-white text-sm font-[clash]"
              >
                Send me email reminders when tasks are nearing their due date.
              </label>
            </div>
            <div className="flex justify-center items-center w-70 mt-5">
              <input
                type="submit"
                value={"Sign Up"}
                className=" text-white font-md p-1 bg-zinc-700 w-70 items-center rounded-sm hover:bg-zinc-600 cursor-pointer"
              ></input>
            </div>
            <Link to="/login" className="text-sm text-white font-[clash] mt-5">
              Already have an account ? Login
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
