const Awards = () => {
  return (
    <div className="container mt-10 mb-5">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/largestBroker.svg"
            alt="largest broker in india"
          />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in :
          </p>
          <div className="row">
            <div className="col-6 p-2">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6 p-2">
              <ul>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <img
              src="media/images/pressLogos.png"
              alt="press logo"
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
