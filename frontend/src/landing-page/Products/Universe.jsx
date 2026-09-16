const Universe = () => {
  return (
    <div className="container">
      <h4 className="text-center mb-5 p-5 fw-light">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </h4>
      <div className="text-center mt-5">
        <h2 className="pb-3">The Zerodha Universe</h2>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodha fund house image"
            className="w-50"
          />
          <p className="small text-muted pt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibull logo"
            style={{ width: "45%" }}
          />
          <p className="small text-muted pt-3">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/tijori.svg"
            alt="tijori image"
            className="w-25"
          />
          <p className="small text-muted pt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="streak logo"
            className="w-50"
          />
          <p className="small text-muted pt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="smallcase logo" />
          <p className="small text-muted pt-3">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks or ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/dittoLogo.png"
            alt="ditto logo"
            className="w-25"
          />
          <p className="small text-muted pt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>
      <div className="text-center p-3">
        <button className="btn btn-primary p-2 col-2 fs-5 mx-auto mt-5 mb-5 text-center">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
