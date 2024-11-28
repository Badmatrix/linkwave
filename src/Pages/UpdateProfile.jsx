import { Card, Input, Spinner, Typography } from "@material-tailwind/react";
import { PiImage } from "react-icons/pi";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthProvider";
import { useAuthUserData } from "../Hooks/UserDataProvider";
import Error from "../Components/Error";
import UseProfileUpdate from "../Hooks/UseProfileUpdate";

function UpdateProfile() {
  const authUser = useAuth();
  const { email, uid } = authUser;
  const { data, error, isLoading } = useAuthUserData();
  const { mutate, isPending} = UseProfileUpdate();
  // console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
      userId: uid,
    },
  });

  function setProfile({ firstname, lastname, userId }) {
    mutate({ firstname, lastname, userId });
  }
  if (isLoading) return null;
  if (!isLoading && !data) return <Error />;
  return (
    <Card className="basis-3/5 px-4 md:px-7">
      <form>
        <fieldset disabled={isPending} className="space-y-5 py-5 lg:space-y-7">
          <header className="space-y-1">
            <Typography
              variant="h4"
              color="black"
              className="text-lg first-letter:capitalize lg:text-2xl"
            >
              Profile Details
            </Typography>
            <Typography className="-mt-2 text-sm text-dark-300">
              Add your details to create a personal touch to your profile.
            </Typography>
          </header>
          <Card className="grid items-center justify-center gap-5 bg-dark-100 px-3 py-5 sm:grid-cols-3">
            <Typography className="text-sm">Profile picture</Typography>
            <Card className="flex items-center justify-center space-y-2 bg-primary-100 py-4 text-center align-middle">
              <div className=" ">
                <PiImage className="text-4xl text-primary-300 md:text-5xl" />
              </div>
              <span className="text-sm">+ upload image</span>
            </Card>
            <Typography className="text-xs md:text-[10px]">
              Image must be below 1024x1024px. Use PNG or JPG format.
            </Typography>
          </Card>

          <Card className="space-y-7 bg-dark-100 px-3 py-5 sm:px-5">
            <div className="items-center justify-between space-y-2 sm:flex md:space-y-0">
              <input type="hidden" {...register("userId")} />
              <Typography className="w-full text-sm">Firstname*</Typography>
              <Input
                className={
                  errors.firstname && "bg-danger/10 outline-1 outline-danger"
                }
                label="firstname"
                size="md"
                placeholder="John"
                defaultValue={data?.firstname}
                {...register("firstname", {
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "input a valid name",
                  },
                })}
              />
            </div>
            <div className="items-center justify-between space-y-2 sm:flex md:space-y-0">
              <Typography className="w-full text-sm">Lastname*</Typography>
              <Input
                className={
                  errors.firstname && "bg-danger/10 outline-1 outline-danger"
                }
                label="Lastname"
                size="md"
                defaultValue={data?.lastname}
                placeholder="Doe"
                {...register("lastname", {
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "input a valid name",
                  },
                })}
              />
            </div>
            <div className="items-center justify-between space-y-2 pb-7 sm:flex md:space-y-0">
              <Typography className="w-full text-sm">Email*</Typography>
              <Input
                disabled
                label="Email"
                size="md"
                placeholder="name@mail.com"
                {...register("email")}
              />
            </div>

            {(errors.firstname || errors.lastname) && (
              <Typography className="w-full text-center text-sm italic text-danger">
                {errors.firstname?.message || errors.lastname?.message}
              </Typography>
            )}
          </Card>
          <div className="-mt-10 flex justify-end">
            <Button
              onClick={handleSubmit(setProfile)}
              disabled={errors.firstname || errors.lastname || isPending}
              type="primary"
              className="flex w-full justify-center sm:w-32"
            >
              {isPending ? <Spinner className="text-primary-100" /> : "save"}
            </Button>
          </div>
        </fieldset>
      </form>
    </Card>
  );
}

export default UpdateProfile;
