import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx';
import App3 from './App3.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import BoardList from './components/board/BoardList.jsx';
import BoardDetail from './components/board/BoardDetail.jsx';
import BoardErrorPage from './components/board/BoardErrorPage.jsx';
import BoardWrite from './components/board/BoardWrite.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/login/Signup.jsx';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/board'}>
          <Route index element={<BoardList />} />
          <Route path={'boardDetail/:boardIdx'} element={<BoardDetail />} />
        </Route>
        <Route path={'/board/boardWrite'} element={<BoardWrite />} />

        <Route path={'/login'}>
          <Route path={'login'} element={<Login />} />
          <Route path={'signup'} element={<Signup />} />
        </Route>

        <Route path={'*'} element={<BoardErrorPage />} />
      </Routes>
    </BrowserRouter>



    <Footer />
  </StrictMode>
)


// <Header />
// <BrowserRouter>
// <Routes>
// <Route path={'/board'}>
//   <Route index element={<BoardList />} />
// <Route path={'boardDetail/:boardIdx'} element={<BoardDetail />} />
// </Route>
// <Route path={'/board/boardWrite'} element={<BoardWrite />} />
// <Route path={'*'} element={<BoardErrorPage />} />
//
// <Route path={'/login'}>
//   <Route path={'login'} element={<Login />} />
//   <Route path={'signup'} element={<Signup />} />
// </Route>
// </Routes>
// </BrowserRouter>