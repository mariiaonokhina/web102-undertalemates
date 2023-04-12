import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="sidebar-container">
          <li className="home-link sidebar-item" key="home-button">
            <Link className='link-item' to="/undertalemates/">
              Home
            </Link>
          </li>

          <li className="create-link sidebar-item" key="create-button">
            <Link className='link-item' to="/undertalemates/create">
              Create an Undertale-mate!
            </Link>
          </li>

          <li className="gallery-link sidebar-item" key="gallery-button">
            <Link className='link-item' to="/undertalemates/gallery">
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