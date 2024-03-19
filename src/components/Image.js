import React from "react";

export default function ImageButton({ handler, taste, srcLink }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={srcLink} // 이미지 경로는 프로젝트에 맞게 수정하세요
        alt="프로젝트 메인 이미지"
        className="mb-8 w-8/12" // 이미지 아래 여백 추가
      />
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer w-8/12"
        onClick={() => handler(taste)}
      >
        시작하기
      </button>
    </div>
  );
}
