import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div>
        <nav className={'navbar navbar-expand-sm navbar-dark bg-dark'}>
          <div className={'container-fluid'}>
            {/*<Link to={'/board/boardDetail'}>BBS</Link>*/}
            {/*<Link to={'/board'} clname={'navbar-brand'}>BBS</Link>*/}
            <ul className={'navbar nav'}>
              <li className={'nav-item'}>
                <a href="#" className={'nav-link'}>메뉴</a>
              </li>
            </ul>
            <div className={'ms-auto'}>
              <button className={'btn btn-success'}>Login</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;