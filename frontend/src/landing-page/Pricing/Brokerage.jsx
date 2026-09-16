const Brokerage = () => {
  return (
    <div className="container border-top pt-5 pb-5">
      <div className="d-flex justify-content-around">
        <a className="">Brokerage calculator</a>
        <a className="">List of charges</a>
      </div>
      <div className="row mt-5">
        <div className="col">
          <ul className="text-muted" style={{ lineHeight: "2.0" }}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of 50 +
              GST per order
            </li>
            <li>Digital contract notes will be sent via e-mail</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non - PIS), 0.5% or 100 per executed order for
              equity (whichever is lower)
            </li>
            <li>
              For NRI account (PIS), 0.5% or 200 per executed order for equity
              (whichever is lower)
            </li>
            <li>
              If the account is in debit balance , any order placed will be
              charged 40 per executed order instead of 20 per executed order
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
