import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const JobItem = ({ job }) => {
  const { id, title, description } = job.job;

  return (
    <Link to={`/posao/${id}`} className="text-decoration-none">
      <div className="w-full bg-white-custom rounded-lg shadow-md p-4 hover:shadow-md hover:shadow-yellow-light transition duration-300 ease-in-out  border-yellow-light border-2">
        <h2 className="text-xl font-bold text-grey-custom">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-sm text-grey-custom">
          Creator: {job.creator.first_name + " " + job.creator.last_name}
        </p>
      </div>
    </Link>
  );
};

JobItem.propTypes = {
  job: PropTypes.shape({
    job: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    creator: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default JobItem;
