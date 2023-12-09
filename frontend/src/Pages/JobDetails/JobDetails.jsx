import { useEffect, useState } from "react";
import "./JobDetails.scss"; // If you have additional styles
import { getJobById, reserveJob } from "../../api/jobs";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [job, setJob] = useState({ job: {}, creator: {} });

  const fetchData = async () => {
    try {
      const response = await getJobById(id);
      setJob(response);
      console.log("Posao je", response);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const handleReserve = async () => {
    const cookie = getCookie("data");
    console.log(cookie);

    const employeeId = JSON.parse(cookie).id;
    console.log(employeeId);

    try {
      const response = await reserveJob(employeeId, id);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.error("Error while creating reservation:", error);
    }
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="bg-white-custom text-grey-custom p-8 rounded-lg shadow-lg max-w-7xl mx-auto">
      {job && job.job && job.creator ? (
        <>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mb-8 text-grey-custom">
              {job.job.title}
            </h1>
            <p className="text-grey-custom font-medium text-lg">
              Opis: {job.job.description}
            </p>

            <p className="text-grey-custom">
              Datum održavanja: {job.job.start_date}
            </p>
            <p className="text-grey-custom">
              Vrijeme trajanja: {job.job.duration} minuta
            </p>
            <p className="text-grey-custom">
              Kreirao: {job.creator.first_name} {job.creator.last_name}
            </p>
          </div>
          <button
            className="bg-yellow-light hover:bg-yellow-dark text-white  font-bold text-xl py-2 px-8 mt-8 rounded"
            onClick={handleReserve}
          >
            Rezerviraj
          </button>
        </>
      ) : (
        <p className="text-grey-custom">Loading...</p>
      )}
    </div>
  );
};

export default JobDetails;
