import React, { useState } from "react";
import ImageButton from "../components/ImageButton";
export default function Game() {
  const [taste] = useState("");

  // 클릭할 때마다 쿼리스트링에 배열 데이터를 추가하는 함수
  function handleAddTaste(taste) {
    const params = new URLSearchParams();
    params.set("taste", taste);
    const queryString = params.toString();
    window.history.pushState(null, "", `?${queryString}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-24rem">
        <ImageButton
          handler={handleAddTaste}
          taste={taste}
          srcLink={"/vercel.svg"}
        />
      </div>
      <div className="max-w-24rem">
        <ImageButton
          handler={handleAddTaste}
          taste={taste}
          srcLink={"/logo.png"}
        />
      </div>
    </div>
  );
}
