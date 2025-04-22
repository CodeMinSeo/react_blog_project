import About from './About.jsx';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home 페이지</h1>
      <p>리액트 라우터를 사용하여 Home 으로 이동한 페이지</p>

      <Link to={'about'} >소개글</Link>
    </div>
  );
}

export default Home;