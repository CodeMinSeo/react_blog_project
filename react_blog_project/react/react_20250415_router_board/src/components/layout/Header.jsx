import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className={'navbar navbar-expand-sm navbar-dark bg-dark'}>
      <div className={'container-fluid'}>
        <Link className="navbar-brand" to="/home">MyBlog</Link>

        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/board">Board</Link>
          </li>
        </ul>

        <div className={'ms-auto'}>
          <button className={'btn btn-success'}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;