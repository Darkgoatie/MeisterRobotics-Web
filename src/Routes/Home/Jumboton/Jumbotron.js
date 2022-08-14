import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="Carousel/IzmirOffSeason.jpg"
            className="d-block w-100 carouselImage"
            alt="..."
          />
          <div id="CarouselText" className="carousel-caption d-md-block">
            <a className="underlineOnHover">
              <span className="carouselCaption">Izmir Off-Season</span>
            </a>
            <p>
              <span className="carouselDescription">
                The Off-Season we competed in during 2021-2022 season.
              </span>
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="Carousel/AmericaSeason.jpg"
            className="d-block w-100 carouselImage"
            alt="..."
          />
          <div id="CarouselText" className="carousel-caption d-md-block">
            <a className="underlineOnHover">
              <span className="carouselCaption">South Florida Regional</span>
            </a>
            <p>
              <span className="carouselDescription">
                The Regional we competed in during 2021-2022 season.
              </span>
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Jumbotron;
