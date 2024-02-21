import { useState } from "react";
import { useToken } from "../hooks/useToken";
import { AllWords } from "../model";
import { Delete } from "./Cancel";
import { baseURL } from "../api";

export function WordList(data: any) {
  let words = data as AllWords;
  const [updated, setUpdated] = useState<AllWords>();
  const [error, setError] = useState(false);
  const handleClick = async (word: string, lang: string) => {
    const token = useToken();
    const resp = await fetch(`${baseURL}/words/delete`, {
      method: "DELETE",
      body: JSON.stringify({
        word: word,
        lang: lang,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
    if (resp[0].error == "No words found") setError(true);
    else setUpdated(resp);
  };

  return (
    <>
      {error ? (
        <div className="text-2xl">
          Now you deleted all your words. What`s next?
        </div>
      ) : (
        <div className="flex flex-col mb-10">
          {!updated
            ? Object.keys(words).map((item, index) => (
                <div className="" key={item}>
                  <span className="mb-1 text-2xl">
                    {words[index].word} - {words[index].translation}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleClick(words[index].word, words[index].language)
                    }
                    className="ml-6 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] hover:scale-105 transition duration-200 rounded-md"
                  >
                    <Delete />
                  </button>
                </div>
              ))
            : updated.map((item, index) => (
                <div className="" key={item.id}>
                  <span className="mb-1 text-2xl">
                    {words[index].word} - {words[index].translation}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleClick(words[index].word, words[index].language)
                    }
                    className="ml-6 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] hover:scale-105 transition duration-200 rounded-md"
                  >
                    <Delete />
                  </button>
                </div>
              ))}
        </div>
      )}
    </>
  );
}
