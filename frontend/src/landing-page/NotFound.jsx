import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5 p-5">
      <h1>404 Not Found</h1>
      <p>We couldn’t find the page you were looking for.</p>
      <h4>
        Visit <Link to="/">Zerodha’s home page</Link>
      </h4>
    </div>
  );
};

export default NotFound;
