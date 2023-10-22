import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100  ">
      <form className="flex flex-col justify-center p-4 bg-blue-400 rounded-lg gap-6 w-96 items-center ">
        <Input label={"First name"} />
        <Input label={"Last name"} />
        <Input label={"Username"} />
        <Input label={"Password"} />
        <div className="flex justify-center items-start">
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
