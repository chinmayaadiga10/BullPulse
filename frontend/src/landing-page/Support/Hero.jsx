import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="container-fluid text-light mb-5"
      style={{ backgroundColor: "rgb(56,126,209)", minHeight: "40vh" }}
    >
      <div className="container">
        <h3 className="p-4">Support Portal</h3>
        <div className="row">
          <div className="col-6">
            <h3 className="p-4">
              Search for an answer or browse help topics <br /> to create a
              ticket
            </h3>
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected?"
              name=""
              id="support-search"
              className="ms-4"
            />
            <br />
            <div className="p-4">
              <a
                href=""
                className="text-light me-2"
                style={{ lineHeight: "1.9" }}
              >
                Track account opening
              </a>
              <a
                href=""
                className="text-light me-2"
                style={{ lineHeight: "1.9" }}
              >
                Track segmentation activity
              </a>
              <a
                href=""
                className="text-light me-2"
                style={{ lineHeight: "1.9" }}
              >
                Intraday
              </a>
              <br />
              <a
                href=""
                className="text-light me-2"
                style={{ lineHeight: "1.9" }}
              >
                Margins
              </a>
              <a
                href=""
                className="text-light me-2"
                style={{ lineHeight: "1.9" }}
              >
                Kite User Manual
              </a>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col">
            <h1 className="p-4">Featured</h1>
            <a href="" className="text-light p-2" style={{ lineHeight: "1.9" }}>
              1. Current takeovers and Delisting - January 2024
            </a>
            <br />
            <a href="" className="text-light p-2" style={{ lineHeight: "1.9" }}>
              2. Latest intraday leverages - MIS & CO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
