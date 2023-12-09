import { useEffect, useState } from "react";
import JobItem from "../../Components/JobItem/JobItem";
import { getJobs } from "../../api/jobs";
import "./Homepage.scss";

const Homepage = () => {
  const [jobs, setJobs] = useState([]); //empty array!!!
  const fetchData = async () => {
    const response = await getJobs();
    setJobs(response);
    console.log("Dostupni poslovi su", jobs);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 max-w-screen-xl mx-auto smh">
      {jobs.length > 0 ? (
        jobs.map((job) =>
          job && !job.employee ? <JobItem key={job.id} job={job} /> : null
        )
      ) : (
        <div>Nema poslova</div>
      )}
    </div>
  );
};

export default Homepage;
