import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { updateUser } from "../../api/users";

const Profile = () => {
  const [user, setUser] = useState({
    first_name: "-",
    last_name: "-",
    username: "-",
    password: "-",
  });

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const handleInputChange = (name, value) => {
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUsernameChange = (e) => {
    handleInputChange("username", e.target.value);
  };

  const handleFirstNameChange = (e) => {
    handleInputChange("first_name", e.target.value);
  };

  const handleLastNameChange = (e) => {
    handleInputChange("last_name", e.target.value);
  };

  const handlePasswordChange = (e) => {
    handleInputChange("password", e.target.value);
  };

  useEffect(() => {
    const data = getCookie("data");
    console.log(JSON.parse(data));

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, user);
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
          Profil
        </h1>
        <Input
          label="Korisničko ime"
          defaultValue={user.username}
          onChange={handleUsernameChange}
        />
        <Input
          label="Lozinka"
          defaultValue={user.password}
          onChange={handlePasswordChange}
        />
        <Input
          label="Ime"
          defaultValue={user.first_name}
          onChange={handleFirstNameChange}
        />
        <Input
          label="Prezime"
          defaultValue={user.last_name}
          onChange={handleLastNameChange}
        />

        <div className="flex justify-center items-start">
          <Button>Spremi promjene</Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
