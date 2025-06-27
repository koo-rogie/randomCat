import style from "../styels/RandomCat.module.css";
import useAxiosInstance from "@/hooks/useAxios";
import React, { useEffect, useReducer } from "react";
import reducer from "@/hooks/reducer";

function RandomCat() {
  console.log("고양이 리스트 불러오기");
  const axiosInstance = useAxiosInstance();
  const [state, dispatch] = useReducer(reducer, { items: [], loading: false, error: null });

  const axiosCatList = async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const res = await axiosInstance.get("/search");
      console.log("데이터 받아오기", res);
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      console.log(res.data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      dispatch({ type: "FETCH_FAILURE", payload: errorMessage });
      alert("고양이 불러오기에 실패했습니다.");
    }
  };

  const itemList = state.items.map((item) => (
    <li key={item.id}>
      <img src={item.url} alt={item.id} />
    </li>
  ));

  const addItem = () => {
    console.log("클릭");
    axiosCatList();
  };

  useEffect(() => {
    addItem();
  }, []);

  return (
    <section>
      <div className="inner">
        <div className={`${style["RandomCat-header"]}`}>
          <p className={`${style["RandomCat-header-title"]}`}>렌덤 고양이 화면입니다</p>
          <button className={style.button} onClick={addItem}>
            버튼을 클릭하여 고양이 사진 불러오기
          </button>
        </div>
        <div className={`${style["RandomCat-content"]}`}>
          <ul>{itemList}</ul>
        </div>
      </div>
    </section>
  );
}

export default React.memo(RandomCat);
