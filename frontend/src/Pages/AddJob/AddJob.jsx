import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import "./AddJob.scss";
import { addNewJob } from "../../api/jobs";

const AddJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    start_date: "",
    duration: "",
    creator_id: localStorage.getItem("user_id"),
  });

  const handleInputChange = (name, value) => {
    setJob((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTitleChange = (e) => {
    handleInputChange("title", e.target.value);
  };

  const handleDescriptionChange = (e) => {
    handleInputChange("description", e.target.value);
  };

  const handleDateChange = (e) => {
    handleInputChange("start_date", e.target.value);
  };

  const handleDurationChange = (e) => {
    handleInputChange("duration", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Novi posao je", job);
      await addNewJob(job);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="flex flex-col justify-center p-8 bg-white-custom rounded-lg shadow-xl border-2 border-yellow-light w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-yellow-dark mb-6 text-center">
          Dodaj posao
        </h1>
        <Input
          label="Naziv posla"
          placeholder="Unesi naziv posla"
          onChange={handleTitleChange}
          value={job.title}
        />
        <Input
          label="Opis"
          value={job.description}
          placeholder="Unesi opis posla"
          onChange={handleDescriptionChange}
        />
        <Input
          label="Datum početka"
          placeholder="Unesi datum početka posla"
          value={job.start_date}
          onChange={handleDateChange}
        />
        <Input
          label="Trajanje"
          placeholder="Unesi trajanje posla"
          value={job.duration}
          onChange={handleDurationChange}
        />

        <div className="flex justify-center items-start">
          <Button>Spremi promjene</Button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
