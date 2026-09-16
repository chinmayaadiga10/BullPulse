const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 pb-5">
      <div className="row">
        <div className="col-6  mt-3">
          <h3 className="mb-3 pt-3">{productName}</h3>
          <p>{productDescription}</p>
          <div className="d-flex justify-content-space-around">
            <a href={learnMore} className="">
              Learn More <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt=""
                className="me-3"
              />{" "}
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />{" "}
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
