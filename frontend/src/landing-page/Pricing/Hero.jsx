const Hero = () => {
  return (
    <div className="container text-center">
      <div className="border-bottom pb-5">
        <h2 className="mt-5 p-2">Pricing</h2>
        <p className="text-muted mt-3">
          Free equity investments and flat &#8377;20 intraday and F&O trades
        </p>
      </div>
      <div className="row mt-5 pt-5 pb-5">
        <div className="col">
          <img src="media/images/pricing0.svg" alt="zero price" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE,BSE), are absolutely free -
            &#8377;0 brokerage.
          </p>
        </div>
        <div className="col">
          <img src="media/images/intradayTrades.svg" alt="zero price" />

          <h2>Intraday and F&O trades</h2>
          <p>
            Flat &#8377;20 or 0.03%(whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col">
          <img src="media/images/pricing0.svg" alt="zero price" />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free - &#8377;0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
