import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router";
import { LoginUser } from "../../api/users";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Poslal budem", userData);

    const response = await LoginUser({
      username: userData.username,
      password: userData.password,
    });

    if (response) {
      navigate("/");
    } else {
      //console.log("Neuspjesni login");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen   ">
      <form
        className="flex flex-col justify-center p-4 bg-yellow-light rounded-lg gap-6 w-96 items-center "
        onSubmit={handleSubmit}
      >
        <Input
          label={"Username"}
          value={userData.username}
          onChange={handleUsernameChange}
          placeholder={"Unesi korisnicko ime"}
        />
        <Input
          label={"Password"}
          value={userData.password}
          onChange={handlePasswordChange}
          placeholder={"Unesi lozinku"}
        />
        <div className="flex justify-center items-start">
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
