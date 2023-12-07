import React, { useState } from "react";
import Table from "../../Components/Table/Table";

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("users");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h2 className="font-bold text-2xl">
        Popis {selectedOption == "users" ? "korisnika" : "poslova"}
      </h2>
      <div className="flex gap-4 mt-8">
        <label
          className={`cursor-pointer p-2 border border-yellow-dark rounded w-32 text-center ${
            selectedOption === "users"
              ? "bg-yellow-light text-white"
              : "text-yellow-dark"
          }`}
        >
          <input
            type="radio"
            value="users"
            checked={selectedOption === "users"}
            onChange={() => handleOptionChange("users")}
            className="hidden"
          />
          Korisnici
        </label>

        <label
          className={`cursor-pointer p-2 border border-yellow-light rounded w-32 text-center ${
            selectedOption === "jobs"
              ? "bg-yellow-light text-white"
              : "text-yellow-light"
          }`}
        >
          <input
            type="radio"
            value="jobs"
            checked={selectedOption === "jobs"}
            onChange={() => handleOptionChange("jobs")}
            className="hidden"
          />
          Poslovi
        </label>
      </div>
      <Table selectedOption={selectedOption} />
    </div>
  );
};

export default Dashboard;
