import { useState } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router";
import { LoginUser } from "../../api/users";
import { Link } from "react-router-dom";

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
    const response = await LoginUser({
      username: userData.username,
      password: userData.password,
    });

    if (response) {
      console.log(response);

      document.cookie = `data=${JSON.stringify(response.user)};`;
      localStorage.setItem("is-admin", response.user.admin);
      localStorage.setItem("user_id", response.user.id);

      navigate("/");
    } else {
      //console.log("Neuspjesni login");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-white-custom">
      <form
        className="flex flex-col justify-center p-8 bg-white-custom rounded-lg shadow-xl border-2 border-yellow-light w-96"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-yellow-dark mb-6 text-center">
          Login
        </h1>
        <Input
          label="Korisničko ime"
          value={userData.username}
          onChange={handleUsernameChange}
          placeholder="Unesi korisničko ime"
        />
        <Input
          label="Lozinka"
          value={userData.password}
          onChange={handlePasswordChange}
          placeholder="Unesi lozinku"
        />
        <Button type="submit">Login</Button>
        <Link
          to="/register"
          className="text-center pt-4 text-yellow-dark font-medium"
        >
          Nemaš račun?
        </Link>
      </form>
    </div>
  );
};

export default Login;
