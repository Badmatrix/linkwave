import { Card, Input, Spinner, Typography } from "@material-tailwind/react";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthProvider";
import { useAuthUserData } from "../Hooks/UserDataProvider";
import Error from "../Components/Error";
import UseProfileUpdate from "../Hooks/UseProfileUpdate";
import UploadImage from "../Components/UploadImage";
import { updateProfile } from "firebase/auth";

function UpdateProfile() {
  const authUser = useAuth();
  const { email, uid } = authUser;
  const { data, isLoading, isError } = useAuthUserData();
  const { mutate, isPending } = UseProfileUpdate();
  // console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
      userId: uid,
      firstname: data?.firstname,
      lastname: data?.lastname,
    },
  });

  function setProfile({ firstname, lastname, userId }) {
    mutate({ firstname, lastname, userId });
    updateProfile(authUser, {
      displayName: `${firstname} ${lastname} `,
    });
  }
  if (isLoading)
    return (
      <div className="my-7 flex items-center justify-center">
        <Spinner
          className="aspect-square h-24 w-24 text-primary-300"
          color="blue-gray"
        />
      </div>
    );
  if (isError) return <Error />;
  return (
    <Card className="basis-3/5 px-4 md:px-7">
      <form className="flex flex-col space-y-7 overflow-hidden px-5 py-3">
        <fieldset
          disabled={isLoading || isPending}
          className="space-y-5 py-5 lg:space-y-7"
        >
          <header className="space-y-2">
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
          <UploadImage />

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
          <div className="flex w-full justify-end border-t py-2">
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
