import { useState } from "react";

export function Textarea(props: any) {
  const [word, setWord] = useState("");
  const handleChange = (e: any) => {
    setWord(e.target.value);
    props.onChange(e);
  };

  return (
    <div className="w-100 mt-8 sm:mt-10 xl:mt-12 h-auto flex justify-center">
      <div className="flex w-100 sm:w-10/12 xl:w-7/12 p-3 items-center flex-col bg-white shadow-md rounded-md">
        <h5 className="text-2xl">Explore new words with us</h5>
        <input
          value={word}
          onChange={handleChange}
          placeholder="Type a word here"
          className="w-11/12 mx-6  my-5 rounded-md border-solid border-2 px-4 py-2 focus:border-gray-500 outline-none"
        />
      </div>
    </div>
  );
}
