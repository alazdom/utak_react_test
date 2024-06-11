import style from "./style.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <h3>Simple Crud Menu</h3>
      <div className={style.links}>
        <Link
          to="/"
        >
          All Items
        </Link>
        <Link
          to="create"
        >
          Create New Item
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
