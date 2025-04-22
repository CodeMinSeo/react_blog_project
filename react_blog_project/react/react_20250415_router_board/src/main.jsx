import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from './components/board/BoardList.jsx';
import BoardDetail from './components/board/BoardDetail.jsx';
import BoardErrorPage from './components/board/BoardErrorPage.jsx';
import BoardWrite from './components/board/BoardWrite.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/login/Signup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* zustand */}
    {/*<App />*/}

    {/* 리액트 라우터 */}
    {/*<App2 />*/}

    {/* 게시판 만들기 */}
    <Header />

    <BrowserRouter>
      <Routes>
        <Route path={'/board'}>
          <Route index element={<BoardList />} />
          <Route path={'boardDetail/:boardIdx'} element={<BoardDetail />} />
        </Route>
        <Route path={'/board/boardWrite'} element={<BoardWrite />} />
        <Route path={'*'} element={<BoardErrorPage />} />

        <Route path={'/login'}>
          <Route path={'login'} element={<Login />} />
          <Route path={'signup'} element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>



    <Footer />
  </StrictMode>
)
