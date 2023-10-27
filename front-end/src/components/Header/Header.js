import { Link } from "react-router-dom";
import MainNav from "../MainNav/MainNav";


export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">Photo Gallery</Link>
      </div>
      <MainNav />
    </header>
  );
}
