const BusinessPlan = () => {
  return (
    <div class="section" id="businessplan">
      <div class="jumbotron">
        <h1 class="display-4">Business Plan: Who are we, what do we do?</h1>
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
              Business Plan Info
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://docs.google.com/presentation/d/1Sg3D4J3PCpDYQNzmPhmJHqdsG3PBifpsVnUeKmpRdYE/edit?usp=sharing"
                >
                  Business Plan EN
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
    </div>
  );
};

export default BusinessPlan;
