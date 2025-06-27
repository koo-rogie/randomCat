import axios from "axios";

// API 서버 엔드포인트 주소 상수 정의
const API_SERVER = "https://api.thecatapi.com/v1/images";
axios.defaults.baseURL = API_SERVER;
axios.defaults.timeout = 1500;

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: API_SERVER, // 기본 URL
    timeout: 1000 * 5,
    headers: {
      "Content-Type": "application/json", // 요청 바디의 데이터 타입
      // 설정하지 않으면 크롬일 경우 "application/json, text/plain, */*"
      Accept: "application/json", // 응답 바디의 데이터 타입이 json이면 좋겠음
    },
  });

  return instance;
}

export default useAxiosInstance;
