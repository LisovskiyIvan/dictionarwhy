import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { User } from "../model";
import { Link } from "react-router-dom";
import {baseURL} from '../api'

async function auth(username: string, password: string) {
  const user = await fetch(`${baseURL}/signup`, {
    method: "POST",
    body: JSON.stringify({
      name: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return user;
}

function saveToken(user: User) {
  localStorage.setItem("token", btoa(`${user.name}:${user.password}`));
}

export function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [succes, setSucces] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!username || !password) {
      setError("All fields of the above is required");
    } else {
      setError("");
      const user: User = await auth(username, password);
      if (!user) setError("Some misatke happened");
      saveToken(user);
      setSucces(true);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] h-auto font-[Poppins] min-h-screen">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-md w-[90%] sm:w-[75%] lg:w-[50%] 2xl:w-[35%] min-h-[300px] mt-[20%] 2xl:mt-[10%] flex justify-center items-center">
          <div className="text-xl ">
            {succes ? (
              <div className="flex flex-col items-center">
                <p className="text-2xl sm:text-3xl mb-8">Welcome {username}!</p>
                <Link
                  to="/"
                  className="text-xl  w-16 h-12 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg flex items-center justify-center"
                >
                  Ok
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center flex-col"
              >
                <label className="relative my-10">
                  <input
                    className={
                      username
                        ? "h-10 px-2 text-xl border-2 rounded-lg border-opacity-50 outline-none border-[#a6c1ee] transition duration-200"
                        : "h-10 px-2 text-xl border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-[#a6c1ee] transition duration-200"
                    }
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <span
                    className={
                      username
                        ? "text-md text-opacity-80 absolute left-0 top-2 mx-2 px-0.1 transition duration-200 input-text -translate-y-6 -translate-x-3 scale-75 text-[#a6c1ee] bg-white"
                        : "text-md text-opacity-80 absolute left-0 top-2 mx-2 px-0.1 transition duration-200 input-text "
                    }
                  >
                    Username
                  </span>
                </label>
                <label className="relative mb-10">
                  <input
                    className={
                      password
                        ? "h-10 px-2 text-xl border-2 rounded-l border-opacity-50 outline-none border-[#a6c1ee] transition duration-200"
                        : "h-10 px-2 text-xl border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-[#a6c1ee] transition duration-200"
                    }
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className={
                      password
                        ? "text-md text-opacity-80 absolute left-0 top-2 mx-2 px-0.1 transition duration-200 input-password -translate-y-6 -translate-x-3 scale-75 text-[#a6c1ee] bg-white"
                        : "text-md text-opacity-80 absolute left-0 top-2 mx-2 px-0.1 transition duration-200 input-password "
                    }
                  >
                    Password
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-44 h-12 mb-8 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
                >
                  Sign up
                </button>
                {error && <p className="mb-10">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
