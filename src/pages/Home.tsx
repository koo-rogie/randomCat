import styles from "../styels/home.module.css";

export default function Home() {
  return (
    <div className={`${styles["home-inner"]} inner`}>
      <p>안녕하세요 고양이 랜덤 생성기 api 태스트입니다.</p>
    </div>
  );
}
