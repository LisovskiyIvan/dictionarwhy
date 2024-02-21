import { useState } from "react";
import { Definition } from "../components/Definition";
import { Navigation } from "../components/Navigation";
import { Textarea } from "../components/Textarea";
import { Typewriter } from "../components/Typewriter";


export function Home () {
    const [word, setWord] = useState("");
  const setData = (e: any) => {
    setWord(e.target.value)
  }
  return (
      <div className="bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] h-auto font-[Poppins] min-h-screen">
        <Navigation />
        <Typewriter />
        <Textarea onChange={setData}/>
        <Definition word={word}/>
      </div>
  );
}