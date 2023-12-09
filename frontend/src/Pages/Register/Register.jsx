import { useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useState } from "react";
import { addNewUser } from "../../api/users";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    oib: "",
  });

  const handleInputChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUsernameChange = (e) => {
    handleInputChange("username", e.target.value);
  };

  const handlePasswordChange = (e) => {
    handleInputChange("password", e.target.value);
  };

  const handleFirstnameChange = (e) => {
    handleInputChange("first_name", e.target.value);
  };

  const handleLastnameChange = (e) => {
    handleInputChange("last_name", e.target.value);
  };

  const handleOibChange = (e) => {
    handleInputChange("pin", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Novi user je", userData);
      await addNewUser(userData);
      console.log("Uspjesno dodan novi user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-white-custom">
      <form
        className="flex flex-col justify-center p-8 bg-white-custom rounded-lg shadow-xl border-2 border-yellow-light w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-yellow-dark mb-6 text-center">
          Registracija
        </h1>
        <Input
          label="Ime"
          value={userData.first_name}
          onChange={handleFirstnameChange}
          placeholder="Unesi ime"
        />
        <Input
          label="Prezime"
          value={userData.last_name}
          onChange={handleLastnameChange}
          placeholder="Unesi prezime"
        />
        <Input
          label="Korisničko ime"
          value={userData.username}
          onChange={handleUsernameChange}
          placeholder="Unesi korisničko ime"
        />
        <Input
          label="OIB"
          value={userData.oib}
          onChange={handleOibChange}
          placeholder="Unesi OIB"
        />
        <Input
          label="Lozinka"
          value={userData.password}
          onChange={handlePasswordChange}
          placeholder="Unesi lozinku"
        />
        <Button type="submit">Registriraj se</Button>
        <Link
          to="/login"
          className="text-center pt-4 text-yellow-dark font-medium"
        >
          Već imaš račun?
        </Link>
      </form>
    </div>
  );
};

export default Register;
