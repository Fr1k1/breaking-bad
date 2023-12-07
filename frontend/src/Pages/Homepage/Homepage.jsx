import JobItem from "../../Components/JobItem/JobItem";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto smh">
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
      <JobItem />
    </div>
  );
};

export default Homepage;
