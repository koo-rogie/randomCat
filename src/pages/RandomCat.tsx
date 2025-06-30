import style from "../styels/RandomCat.module.css";
import useAxiosInstance from "@/hooks/useAxios";
import React, { useEffect, useReducer, useState } from "react";
import reducer from "@/hooks/reducer";

function RandomCat() {
  const axiosInstance = useAxiosInstance();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [cats, dispatch] = useReducer(reducer, []);

  const axiosCatList = async () => {
    console.log("API로딩 시작");

    try {
      const res = await axiosInstance.get("/search?delay=1000");
      console.log("데이터 받아오기", res);

      // 받은 데이터를 상태에 저장
      dispatch({ type: "SUCCESS", payload: res.data });
      setLoading(true);
      console.log("데이터 저장 완료:", res.data);
    } catch (err) {
      setError(err as Error);
      alert("고양이 불러오기에 실패했습니다.");
    }
    console.log("API로딩 종료");
  };

  const itemList = cats.map((item) => (
    <li key={item.id}>
      <img src={item.url} alt={item.id} />
    </li>
  ));

  // 고양이 목록 초기화
  const clearCatList = () => {
    dispatch({ type: "CLEAR_ITEMS" });
    console.log("고양이 목록 초기화 완료");
  };

  useEffect(() => {
    axiosCatList();
  }, []);

  return (
    <section>
      <div className="inner">
        <div className={`${style["RandomCat-header"]}`}>
          <p className={`${style["RandomCat-header-title"]}`}>렌덤 고양이 화면입니다</p>
          <button className={style.button} onClick={axiosCatList} disabled={loading}>
            {loading ? "로딩중..." : "불러오기"}
          </button>
          <button className={style.button} onClick={clearCatList}>
            초기화 하기
          </button>
        </div>
        <div className={`${style["RandomCat-content"]}`}>
          {loading && <p>로딩 중...</p>}
          {error && <p>에러: {error.message}</p>}
          <ul>{itemList}</ul>
        </div>
      </div>
    </section>
  );
}

export default React.memo(RandomCat);
