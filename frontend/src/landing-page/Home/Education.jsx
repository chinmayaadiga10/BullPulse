const Education = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <img src="/media/images/education.svg" alt="varsity logo" />
        </div>
        <div className="col-6">
          <h2 className="mb-5">Free and open market education</h2>
          <div>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="">
              Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-5">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="">
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
