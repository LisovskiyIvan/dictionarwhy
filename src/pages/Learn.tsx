import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { StartLearn } from "../components/StartLearn";

export function Learn() {
  const [langs, setLangs] = useState(false);
  const [menu, setMenu] = useState(true);
  const [learnMode, setLearnMode] = useState("");
  return (
    <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] h-auto font-[Poppins] min-h-screen">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-white relative shadow-md rounded-md w-[90%] sm:w-[80%] lg:w-[55%] 2xl:w-[40%] p-5  min-h-[400px] mt-[14%] 2xl:mt-[10%] flex flex-col 2xl:flex-row justify-center items-center text-xl">
          {menu && (
            <>
              <button
                onClick={() => {
                  setLangs(!langs);
                  setMenu(!menu);
                  setLearnMode("all");
                }}
                type="button"
                className="w-44 2xl:mr-10 h-12 mb-16 2xl:mb-8 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
              >
                See words lists
              </button>
              <button
                onClick={() => {
                  setMenu(!menu);
                  setLangs(!langs);
                  setLearnMode("cards");
                }}
                type="button"
                className="w-44 h-12 mb-8 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
              >
                Learn words
              </button>
            </>
          )}

          {langs && <StartLearn mode={learnMode} />}
          {!menu && (
            <div
              onClick={() => {
                setLangs(false);
                setMenu(true);
              }}
              className="text-xl absolute bottom-[5%] left-[5%]  hover:scale-110 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
            >
              Go back
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
