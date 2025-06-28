import style from "../styels/RandomCat.module.css";
import useAxiosInstance from "@/hooks/useAxios";
import React, { useEffect, useReducer } from "react";
import reducer from "@/hooks/reducer";

function RandomCat() {
  const axiosInstance = useAxiosInstance();
  const initCatState = { items: [], loading: false, error: null };
  const [state, dispatch] = useReducer(reducer, initCatState);

  const axiosCatList = async () => {
    console.log("API로딩 시작");
    dispatch({ type: "FETCH_INIT" }); // 로딩 상태만 설정

    try {
      const res = await axiosInstance.get("/search?delay=1000");
      console.log("데이터 받아오기", res);

      // 받은 데이터를 상태에 저장
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      console.log("데이터 저장 완료:", res.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      dispatch({ type: "FETCH_FAILURE", payload: errorMessage });
      alert("고양이 불러오기에 실패했습니다.");
    }
    console.log("API로딩 종료");
  };

  const itemList = state.items.map((item) => (
    <li key={item.id}>
      <img src={item.url} alt={item.id} />
    </li>
  ));

  // 추가 고양이 불러오기 (기존 데이터에 추가)
  const addCatList = async () => {
    try {
      const res = await axiosInstance.get("/search");
      dispatch({ type: "FETCH_MORE_SUCCESS", payload: res.data });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      dispatch({ type: "FETCH_FAILURE", payload: errorMessage });
    }
  };

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
          <button className={style.button} onClick={addCatList} disabled={state.loading}>
            {state.loading ? "로딩중..." : "불러오기"}
          </button>
          <button className={style.button} onClick={clearCatList}>
            초기화 하기
          </button>
        </div>
        <div className={`${style["RandomCat-content"]}`}>
          {state.loading && <p>로딩 중...</p>}
          {state.error && <p>에러: {state.error}</p>}
          <ul>{itemList}</ul>
        </div>
      </div>
    </section>
  );
}

export default React.memo(RandomCat);
