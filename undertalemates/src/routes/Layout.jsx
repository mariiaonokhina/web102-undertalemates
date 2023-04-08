import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/undertalemates/">
              Home
            </Link>
          </li>

          <li className="create-link" key="create-button">
            <Link to="/create">
              Create an Undertale-mate!
            </Link>
          </li>

          <li className="galler-link" key="gallery-button">
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;