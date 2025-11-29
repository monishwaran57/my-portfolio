import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="header-menu">
      <Link to="/" className="header-menu-item">Home</Link>
      <Link to="/projects" className="header-menu-item">Projects</Link>
      <Link to="/blogs" className="header-menu-item">Blogs</Link>
    </nav>
  );
};

export default Menu;
