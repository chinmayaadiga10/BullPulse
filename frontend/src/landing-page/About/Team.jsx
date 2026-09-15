const Team = () => {
  return (
    <div className="container border-top">
      <div className="row">
        <h1 className="text-center my-5">People</h1>
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="founder photo"
            className="w-50"
            style={{ borderRadius: "100%" }}
          />
          <h4 className="mt-2">Nithin Kamath</h4>
          <p className="text-,muted">Founder, CEO</p>
        </div>
        <div className="col-6 p-5 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
