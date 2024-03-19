import React from "react";
import ImageButton from "../components/ImageButton";
import { Link } from "react-router-dom";
export default function Game() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-24rem">
        <Link to="/game">
          <ImageButton handler={() => {}} taste={""} srcLink={"/logo.png"} />
        </Link>
      </div>
    </div>
  );
}
