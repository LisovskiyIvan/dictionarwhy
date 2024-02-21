import { Link } from "react-router-dom";
import { useToken } from "../hooks/useToken";
import { useEffect, useState } from "react";

export function Navigation() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const token = useToken();
    if (!token) setUser("");
    else setUser(atob(token).split(":")[0]);
  }, []);

  return (
    <header className="bg-white py-4 px-2 sm:px-4 lg:px-4 2xl:px-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center ">
          <Link to="/">
            <img
              className=" w-10 sm:w-12 lg:w-14 2xl:w-16 hover:scale-110 duration-300"
              src="img/language.png"
              alt=""
            />
          </Link>
          <Link
            className="text-sm sm:text-lg lg:text-xl 2xl:text-2xl ml-2 sm:ml-4 lg:ml-6 2xl:ml-8 relative hover:scale-110 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            to="/"
          >
            Dictionarwhy
          </Link>
          {user && (
            <>
              <Link
                className="ml-2 text-sm sm:text-lg lg:text-xl 2xl:text-2xl lg:ml-6 2xl:ml-8 relative hover:scale-110 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                to="/addwords"
              >
                Add
              </Link>
              <Link
                className="ml-2 text-sm sm:text-lg lg:text-xl 2xl:text-2xl lg:ml-6 2xl:ml-8 relative hover:scale-110 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                to="/learn"
              >
                Learn
              </Link>
            </>
          )}
          <Link
            className="ml-2 text-sm sm:text-lg lg:text-xl 2xl:text-2xl lg:ml-6 2xl:ml-8 relative hover:scale-110 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="flex items-center">
          {user ? (
            <div className="m-1 sm:mr-4 2xl:mr-6  text-sm sm:text-lg  lg:text-xl 2xl:text-2xl">
              {user}
            </div>
          ) : (
            <Link
              className="ml-2 text-sm sm:text-lg mr-6 lg:text-xl 2xl:text-2xl 2xl:ml-8 relative hover:scale-110 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
              to="/signup"
            >
              Sign up
            </Link>
          )}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/LisovskiyIvan"
          >
            <img
              className="mr-2 sm:mr-4 2xl:mr-10 w-6 sm:w-10 lg:w-12 2xl:w-14 transition ease-in-out delay-50  hover:scale-110  duration-300 cursor-pointer"
              src="img/logo.png"
              alt="github link"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/daymedead">
            <img
              className="sm:mr-4 2xl:mr-6  w-6 sm:w-10 lg:w-12 2xl:w-14 transition ease-in-out delay-50  hover:scale-110  duration-300 cursor-pointer"
              src="img/paper.png"
              alt="tg link"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
