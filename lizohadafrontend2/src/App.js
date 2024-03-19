import React from "react";
import Home from "./home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./game/Game";
import Result from "./game/Result";
export default function Page() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
