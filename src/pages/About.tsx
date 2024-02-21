import { Navigation } from "../components/Navigation";

export function About() {
  return (
    <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] h-auto font-[Poppins] min-h-screen">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-md w-[90%] 2xl:w-[60%] min-h-[400px] mt-10 2xl:mt-44 flex justify-center items-center">
          <div className="text-xl p-4 2xl:p-8">
            Hi, my name is Ivan and I`m a junior frontend developer. This
            project was written in React on frontend, ElysiaJs with bun on
            backend and sqlite for database. If you interested you can see my
            other projects on github or contact me in telegram
          </div>
        </div>
      </div>
    </div>
  );
}
