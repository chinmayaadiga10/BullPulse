const Hero = () => {
  return (
    <div className="container p-5 text-center mb-5">
      <div className="row">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
        <button className="btn btn-primary p-2 col-2 fs-5 mx-auto mt-2 mb-5 ">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
