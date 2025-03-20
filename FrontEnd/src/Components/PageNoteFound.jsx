import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-2">Oops! Page Not Found.</p>
      
    </div>
  );
};

export default PageNotFound;
