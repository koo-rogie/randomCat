import styles from "../styels/Sam.module.css";

export default function Sam() {
  return (
    <div className={styles.coutainer}>
      <h1>고양이 이미지 불러오기</h1>
      <ul>
        <li>useEffect에서 서버 연동하고</li>
        <li>useState로 이미지 목록 관리</li>
        <li>상태 관리는 useReducer에 전담</li>
        <li>검색 기능도 추가하고 (useRef로 검색창 포커스지정)</li>
        <li>필터링 기능도 만들어 보고(고양이 API에서 제공)</li>
      </ul>
    </div>
  );
}
