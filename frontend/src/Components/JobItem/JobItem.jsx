import { Link } from "react-router-dom";

const JobItem = () => {
  return (
    <Link to="/posao/id">
      <div className="w-full bg-yellow-light rounded-lg h-fit flex flex-col gap-2 p-2">
        <h2>Job title</h2>
        <h3>Job description</h3>
        <h4>Creator: Ivan</h4>
      </div>
    </Link>
  );
};

export default JobItem;
