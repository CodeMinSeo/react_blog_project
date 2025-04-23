function Projects() {
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div className="divider-custom">
          <div className="divider-custom-line bg-secondary"></div>
          <div className="divider-custom-icon text-secondary"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line bg-secondary"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src="/public/img/portfolio/submarine.png" alt="Cabin" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src="/public/img/portfolio/submarine.png" alt="Cake" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src="/public/img/portfolio/submarine.png" alt="Circus" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src="/public/img/portfolio/submarine.png" alt="Controller" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src="/public/img/portfolio/submarine.png" alt="Safe" />
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <img className="img-fluid" src="/public/img/portfolio/submarine.png" alt="Submarine" />
          </div>
        </div>
      </div>
    </section>

  );
}

export default Projects;