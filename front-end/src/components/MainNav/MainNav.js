import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";


export default function MainNav() {

  function renderNavItem(path, anchor) {
    return (
      <li className={styles.listItem}>
        <NavLink
        to={path}
        className={styles.link}
        style={({ isActive }) => (isActive ? { color: "black", fontWeight: "600" } : null)}
        data-text={anchor}
        end
        >{anchor}</NavLink>
      </li>
    );
  }

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>
        {renderNavItem("/", "Home")}
        {renderNavItem("/collections/landscapes", "Landscapes")}
        {renderNavItem("/collections/waterscapes", "Waterscapes")}
        {renderNavItem("/collections/wildlife", "Wildlife")}
      </ul>
    </nav>
  );
}
