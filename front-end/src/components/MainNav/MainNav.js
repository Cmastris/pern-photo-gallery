import { NavLink } from "react-router-dom";


export default function MainNav() {

  function renderNavItem(path, anchor) {
    return (
      <li>
        <NavLink to={path}>{anchor}</NavLink>
      </li>
    );
  }

  return (
    <nav>
      <ul>
        {renderNavItem("/", "Home")}
        {renderNavItem("/collections/landscapes", "Landscapes")}
        {renderNavItem("/collections/waterscapes", "Waterscapes")}
        {renderNavItem("/collections/wildlife", "Wildlife")}
      </ul>
    </nav>
  );
}
