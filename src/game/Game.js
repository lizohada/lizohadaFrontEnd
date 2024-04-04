import React, { useEffect, useState } from "react";
import getQuery from "../apis/getQuery";
import SelectOneQuery from "../components/SelectOneQuery";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const [query, setQuery] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  // 페이지 번호 세팅
  function handlePage() {
    if (page < query.length - 1) {
      setPage(page + 1);
    } else {
      navigate("/result", { state: { tastes: tastes } });
    }
  }
  // 클릭할 때마다 쿼리스트링에 배열 데이터를 추가하는 함수
  function handleAddTaste(taste) {
    setTastes([...tastes, taste]);
    handlePage();
  }

  // 쿼리 데이터를 받아옵니다.
  useEffect(() => {
    getQuery().then((json) => {
      setQuery(json.query);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {query.length === 0 ? (
        <div>질문지 받아오는 중</div>
      ) : (
        <SelectOneQuery array={query[page]} handle={handleAddTaste} />
      )}
    </div>
  );
}
