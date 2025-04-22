import { Link, Outlet } from 'react-router-dom';
import Area from './Area.jsx';

function About() {
  return (
    <div>
      <h1>소개 페이지</h1>
      <p>리액트 라우터를 사용하여 About 으로 이동한 페이지</p>

      <Link to={'/'}>Home 으로 이동</Link>

      <Area />

      <Outlet />
    </div>
  );
}

export default About;