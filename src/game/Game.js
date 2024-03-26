import React, { useEffect, useState } from "react";
import ImageButton from "../components/ImageButton";
import getQuery from "../apis/getQuery";

export default function Game() {
  const [query, setQuery] = useState([]);
  // 클릭할 때마다 쿼리스트링에 배열 데이터를 추가하는 함수
  function handleAddTaste(key) {
    const params = new URLSearchParams();
    params.set("key", key);
    const queryString = params.toString();
    window.history.pushState(null, "", `?${queryString}`);
  }

  // 쿼리 데이터를 받아옵니다.
  useEffect(() => {
    getQuery().then((json) => {
      setQuery(json.query);
    });
  }, []);
  function CreateImgComponent(array) {
    console.log(array.array);
    array.array.map((element, index) => console.log(element));
    return (
      <>
        {array.array.map((element, index) => (
          <div className="max-w-24rem">
            <ImageButton
              handler={handleAddTaste}
              keyword={element}
              srcLink={"/logo.png"}
            />
            <div className="py-4 px-4" />
          </div>
        ))}
      </>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {query.length === 0 ? (
        <div>질문지 받아오는 중</div>
      ) : (
        <CreateImgComponent array={query[0]} />
      )}
    </div>
  );
}
