const SponsorshipInfo = () => {
  const links = require("../links.json");
  return (
    <div class="section dark" id="sponsorship">
      <div class="jumbotron">
        <h1 class="display-4">Sponsorships: Become our sponsor!</h1>
        <br />
        <p class="lead">
          <div class="dropdown">
            <button
              class="btn center-align btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sponsorship Info
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href={links.sponsorInfo.TR}
                >
                  Sponsorship TR
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href={links.sponsorInfo.EN}
                >
                  Sponsorship EN
                </a>
              </li>
            </ul>
          </div>
        </p>
        <p className="lead">
          To become our sponsor, contact us on{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/company/meister-robotics-team/"
            className="fa fa-linkedin"
          ></a>
          !
        </p>
      </div>
    </div>
  );
};

export default SponsorshipInfo;
