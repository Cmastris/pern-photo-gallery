import { Link } from "react-router-dom";

import MainNav from "../MainNav/MainNav";
import styles from "./Header.module.css";


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logo}>Photo Gallery</Link>
      </div>
      <MainNav />
    </header>
  );
}
