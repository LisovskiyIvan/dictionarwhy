import { useState } from "react";
import { WordList } from "./WordList";
import { useToken } from "../hooks/useToken";
import { AllWords, Mode } from "../model";
import { LearnCards } from "../components/LearnCards";
import { baseURL } from "../api";

export function StartLearn({ mode }: Mode) {
  const [cards, setCards] = useState(false);
  const [lists, setLists] = useState(false);
  const [menu, setMenu] = useState(true);
  const [data, setData] = useState<AllWords>();
  const [error, setError] = useState(false);

  const handleClick = async (lang: string, mode: string) => {
    const token = useToken();
    const resp = await fetch(`${baseURL}/words/all`, {
      method: "POST",
      body: JSON.stringify({
        lang: lang,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
    if (mode === "all") {
      setCards(false);
      setLists(true);
    } else {
      setCards(true);
      setLists(false);
    }
    if (resp[0].error == "No words found") {
      setCards(false);
      setLists(false);
      setError(true);
    } else {
      setData(resp);
    }

    setMenu(false);
  };

  return (
    <>
      {menu && (
        <>
          <div className="2xl:mr-10">
            <div
              onClick={() => {
                handleClick("ko", mode);
              }}
              className="m-5 p-2 w-[120px] border flex justify-center border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
            >
              Korean
            </div>
            <div
              onClick={() => {
                handleClick("ja", mode);
              }}
              className="m-5 p-2 w-[120px] border flex justify-center border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
            >
              Japanese
            </div>
          </div>
          <div className="2xl:ml-10">
            <div
              onClick={() => {
                handleClick("en", mode);
              }}
              className="m-5 p-2 w-[120px] border flex justify-center border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
            >
              English
            </div>
            <div
              onClick={() => {
                handleClick("zh", mode);
              }}
              className="m-5 p-2 w-[120px]  border flex justify-center border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
            >
              Chinese
            </div>
          </div>
        </>
      )}

      {lists && <WordList {...data} />}
      {cards && <LearnCards {...data} />}
      {error && (
        <div className="p-5 text-2xl">
          Seems like you don`t have any words added
        </div>
      )}
    </>
  );
}
