import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getResult from "../apis/getResult";
export default function Result() {
  const location = useLocation();
  const [result, setResult] = useState("");
  useEffect(() => {
    console.log(location.state.tastes);
    // getQuery().then((json) => {
    //   setQuery(json.query);
    // });
    getResult(location.state.tastes).then((result) => {
      setResult(result);
    });
  }, [location]);
  return <>"결과 화면" {result}</>;
}
