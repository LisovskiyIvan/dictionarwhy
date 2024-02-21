import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { useToken } from "../hooks/useToken";
import { baseURL } from "../api";

export function AddWords() {
  const [word, setWord] = useState("");
  const [toLang, setToLang] = useState("");
  const [fromLang, setFromLang] = useState("");
  const [succes, setSucces] = useState(false);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const token = useToken();
    const resp = await fetch(`${baseURL}/words`, {
      method: "POST",
      body: JSON.stringify({
        word: word,
        src: fromLang,
        dest: toLang,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
    setSucces(true);
    return resp;
  };

  return (
    <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] h-auto font-[Poppins] min-h-screen">
      <Navigation />
      <div className="flex justify-center">
        <div className="bg-white shadow-md rounded-md w-[90%] lg:w-[75%] 2xl:w-[60%] min-h-[300px] mt-8 sm:mt-12 lg:mt-20 2xl:mt-44 2xl:text-xl">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="mt-4 lg:mt-6 2xl:mt-8 font-bold text-xl 2xl:text-2xl">
              Lingua learn
            </div>
            <input
              value={word}
              onChange={(e) => {
                setWord(e.target.value);
                setSucces(false);
              }}
              placeholder="Type a word here"
              className="sm:w-8/12 2xl:w-6/12   my-5 rounded-md border-solid border-2 px-4 py-2 focus:border-gray-500 outline-none"
            />
            <div className="flex w-[100%]  2xl:w-7/12 justify-between">
              <select
                value={fromLang}
                onChange={(e) => setFromLang(e.target.value)}
                id="toLang"
                className="w-7/12 sm:w-5/12 lg:w-3/12 mx-2 sm:mx-12 lg:ml-20 2xl:w-11/12 text-sm flex justify-center bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 outline-none"
              >
                <option defaultValue={"ru"}>From language</option>
                <option value="ru">Russian</option>
                <option value="en">English</option>
                <option value="ko">Korean</option>
                <option value="ja">Japanese</option>
                <option value="zh">Chinese</option>
              </select>
              <select
                value={toLang}
                onChange={(e) => setToLang(e.target.value)}
                id="fromLang"
                className="w-7/12 sm:w-5/12 lg:w-3/12 mx-2 sm:mx-12 lg:mr-20 2xl:w-11/12 bg-gray-50 border flex justify-center border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 outline-none"
              >
                <option defaultValue={"en"}>To language</option>
                <option value="en">English</option>
                <option value="ko">Korean</option>
                <option value="ja">Japanese</option>
                <option value="zh">Chinese</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-24 2xl:w-44 mt-8 2xl:mt-24 h-12  2xl:mb-8 border border-black border-opacity-50 outline-none hover:border-[#a6c1ee] transition duration-200 rounded-lg"
            >
              Add word
            </button>
            {succes ? (
              <div className="mb-6">{word} was added to your words</div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
