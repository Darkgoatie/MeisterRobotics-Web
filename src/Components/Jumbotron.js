const Jumbotron = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="Carousel/IzmirOffSeason.jpg"
            class="d-block w-100 carouselImage"
            alt="..."
          />
          <div id="CarouselText" class="carousel-caption d-none d-md-block">
            <a className="underlineOnHover">Izmir Off-Season</a>
            <p>The Off-Season we competed in during 2021-2022 season.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="Carousel/AmericaSeason.jpg"
            class="d-block w-100 carouselImage"
            alt="..."
          />
          <div id="CarouselText" class="carousel-caption d-none d-md-block">
            <a className="underlineOnHover">South Florida Regional</a>
            <p>The Regional we competed in during 2021-2022 season.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Jumbotron;
