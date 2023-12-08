import { useEffect, useState } from "react";
import "./JobDetails.scss";
import { getJobById } from "../../api/jobs";
import { useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJob] = useState({ job: {}, creator: {} }); //job has 2 objects in structure...
  const fetchData = async () => {
    try {
      const response = await getJobById(id);
      setJob(response);
      console.log("Posao je", response);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {job && job.job && job.creator ? (
        <>
          <h1>{job.job.title}</h1>
          <p>Opis: {job.job.description}</p>
          <p>
            Kreirao: {job.creator.first_name} {job.creator.last_name}
          </p>
          <p>Datum održavanja: {job.job.start_date}</p>
          <p>Vrijeme trajanja: {job.job.duration} minuta</p>
          <button>Rezerviraj</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default JobDetails;
