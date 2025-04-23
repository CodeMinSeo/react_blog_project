import { FaBeer } from 'react-icons/fa';

function Home() {
  return (
    <>



      {/* Masthead */}
      <header className="masthead">
        <div className="container d-flex align-items-center flex-column">
          <img className="mb-5" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="Avatar" width="200" />
          <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>

    </>
  );
}

export default Home;