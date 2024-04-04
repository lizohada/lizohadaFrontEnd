// import axios from "axios";

export default async function getQuery() {
  const tempJson = {
    query: [
      ["바다", "밥"],
      ["오름", "산"],
      ["박물관", "해변"],
      ["소나무", "서핑"],
      ["배", "턱걸이"],
      ["딸기축제", "낙엽"],
    ],
  };
  try {
    // const response = await axios.get("YOUR_API_ENDPOINT");
    return tempJson;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
