import styles from "../styels/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <p>안녕하세요</p>
        <p>고양이 렌덤 사진 불러오기 사이트에 오신것을 환영합니다!</p>
      </div>
    </footer>
  );
}
