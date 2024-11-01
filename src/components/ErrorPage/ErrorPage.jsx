import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-5">
      <h1 className="text-5xl">Page Not Found</h1>
      <Link to={'/'}>
        <button className="btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
