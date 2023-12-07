import { Link } from "react-router-dom";

const JobItem = () => {
  return (
    <Link to="/posao/id" className="text-decoration-none">
      <div className="w-full bg-white-custom rounded-lg shadow-md p-4 hover:shadow-md hover:shadow-yellow-light transition duration-300 ease-in-out border border-yellow-light border-2">
        <h2 className="text-xl font-bold text-grey-custom">Job Title</h2>
        <p className="text-gray-600">Job Description</p>
        <p className="text-sm text-grey-custom">Creator: Ivan</p>
      </div>
    </Link>
  );
};

export default JobItem;
