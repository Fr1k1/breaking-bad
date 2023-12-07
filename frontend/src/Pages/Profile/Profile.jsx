import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-full ">
      <form className="flex flex-col justify-center p-4 bg-yellow-light rounded-lg gap-6 w-96 items-center ">
        <Input label={"First name"} />
        <Input label={"Last name"} />
        <Input label={"Username"} />
        <Input label={"Password"} />
        <div className="flex justify-center items-start">
          <Button>Change profile data</Button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
