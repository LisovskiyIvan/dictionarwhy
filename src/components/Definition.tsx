import { useEffect, useState } from "react";
import { Meaning } from "../model";
import { baseURL } from "../api";

// export async function getData() {

//   const responseList = await fetch(
//     `https://api.dictionaryapi.dev/api/v2/entries/en/suck`
//   );
//   const response = await responseList.json();

//   return response[0].meanings;
// }
// const data: Meaning = await getData()

export function Definition({ word }: any) {
  const [def, setDef] = useState(
    [
      {
        definitions: [
          {
            definition: "",
          },
        ],
        partOfSpeech: "",
        synonyms: [""],
      },
    ] || undefined
  );
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}/search`, {
        method: "POST",
        body: JSON.stringify({
          data: word || "Dictionarwhy ",
        }),
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      if (response[0] !== undefined) {
        const res: Meaning = response[0].meanings;
        setToggle(true);
        setDef(res);
      } else {
        setToggle(false);
        setError(response.message);
      }
    };
    fetchData();
  }, [word]);
  return (
    <div className="w-100 mt-12 h-auto flex justify-center">
      <div className="w-10/12 sm:w-11/12 min-h-[400px] p-3 bg-white shadow-md rounded-md mb-10 sm:mb-12 xl:mb-32">
        <div className="py-2 px-2 xl:px-4 text-2xl font-bold">Definitions</div>
        {toggle ? (
          Object.keys(def).map((item, index) => (
            <div key={item}>
              <span className="px-2 xl:px-4 text-xl font-semibold">
                {def[index].partOfSpeech}
              </span>
              <ul className="text-xl" key={index}>
                {def[index].definitions.map((item, index) => (
                  <li className="px-4 xl:px-6 py-1" key={index}>
                    {index + 1}. {item.definition}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="px-4 py-4 text-xl ">{error} </div>
        )}
      </div>
    </div>
  );
}
