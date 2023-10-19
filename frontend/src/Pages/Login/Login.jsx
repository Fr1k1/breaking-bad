import Input from "../../Components/Input/Input";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-100  ">
      <form className="flex flex-col justify-center p-4 bg-red-400 rounded-lg gap-6 w-96 items-center ">
        <Input label={"Username"} />
        <Input label={"Password"} />
        <div className="flex justify-center items-start">
          <button className="p-2 bg-purple-300">Click me</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
