import { useState } from "react";
import { AllWords } from "../model";

export function LearnCards(data: any) {
  let words: AllWords = data;
  const [animationStyles, setAnimationStyles] = useState("");
  const [word, setWord] = useState("");
  const [index, setIndex] = useState(0);
  const len = Object.keys(words).length;
  const handleClick = () => {
    setAnimationStyles(
      "animate-rotate-y animate-once animate-duration-500 animate-delay-0 animate-ease-linear animate-normal animate-fill-forwards"
    );
    setTimeout(() => {
      setWord(words[index].word);
      setAnimationStyles("");
      setIndex(index + 1);
    }, 500);
  };
  const nextWord = () => {
    setWord(words[index].translation);
  };
  return (
    <>
      <div className="flex-col min-w-[100%] min-h-[100%] flex justify-center items-center">

            <div
              className="min-w-[30%] h-40 bg-slate-300  flex text-2xl flex-col justify-center items-center rounded-lg hover:scale-110 duration-300"
              onClick={handleClick}
            >
              <div className={animationStyles}>
                {word || words[index].translation}
              </div>
            </div>
            <div className="m-5">
              {index} of {len}
            </div>
            <button
              className=" p-2 border flex justify-center border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg text-3xl"
              onClick={nextWord}
            >
              next
            </button>
      </div>
    </>
  );
}
