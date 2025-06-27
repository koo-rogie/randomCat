import { NavLink } from "react-router";
import styles from "../styels/header.module.css";

export default function Header() {
  return (
    <header>
      <div className={`${styles.header} inner`}>
        <h1>고양이 사진 불러오기</h1>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? `${styles["active"]}` : `${styles["deactivate"]}`)} to="/">
              홈
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? `${styles["active"]}` : `${styles["deactivate"]}`)} to="/randomcat">
              렌덤으로 사진 불러오기
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
