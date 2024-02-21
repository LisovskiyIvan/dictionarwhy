import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import {Signup} from "./pages/Singup"
import { AddWords } from "./pages/AddWords";
import { Learn } from "./pages/Learn";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/addwords" element={ <AddWords />} />
        <Route path="/learn" element={ <Learn />} />
      </Routes>
    </BrowserRouter>
  );
}
