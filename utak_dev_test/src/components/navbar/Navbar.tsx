import style from "./style.module.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <h1>Simple Crud Menu</h1>
      <div className={style.links}>
        <Link
          to="/"
          style={{
            color: "rgb(77,77,77)",
          }}
        >
          All Items
        </Link>
        <Link
          to="create"
          style={{
            color: "rgb(77,77,77)",
          }}
        >
          Create New Item
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
