import { Link } from "react-router";
import styles from "../styels/error.module.css";

export default function ErrorPage() {
  return (
    <div className={`${styles.Error} inner`}>
      <div className={ styles["top-center"]}>
        <p>잘못된 사이트 접근 입니다.</p>
        <p>홈 화면으로 돌아가주세요</p>
        <Link to="/">
          홈화면으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
