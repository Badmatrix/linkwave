import { Card, Typography, Input, Spinner } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Button from "./Button";
import UseLogin from "../Hooks/UseLogin";

function LoginForm() {
  const { mutate, isPending, formData } = UseLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formData;
  async function handleLogin({ email, password }) {
    mutate({ email, password });
  }

  return (
    <Card
      color="white"
      className="w-full max-w-full px-3 py-5 sm:mx-3 md:px-7 lg:px-10"
      shadow={false}
    >
      <Typography
        variant="h4"
        className="text-xl sm:text-2xl md:text-3xl"
        color="blue-gray"
      >
        Login
      </Typography>
      <Typography
        color="gray"
        className="mt-1 text-sm font-normal md:text-base"
      >
        Add your details below to get back into the app
      </Typography>
      <form
        className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
        onClick={handleSubmit(handleLogin)}
      >
        <div className="mb-7 flex flex-col gap-7">
          <div className="space-y-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              label="Email"
              placeholder="name@mail.com"
              size="lg"
              {...register("email", {
                required: "this field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ensure you enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <Typography className="text-xs text-danger">
                {errors.email?.message}
              </Typography>
            )}
          </div>
          <div className="space-y-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              label="password"
              placeholder="********"
              size="lg"
              {...register("password", {
                required: "this field is required",
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/,
                  message:
                    "Password must contain atleast one uppercase letter, no space, and it must be 8-16 characters long.",
                },
                minLength: {
                  value: 8,
                  message: "Password must contain atleast 8 characters ",
                },
              })}
            />
            {errors.password && (
              <Typography className="text-xs text-danger">
                {errors.password?.message}
              </Typography>
            )}
          </div>
        </div>

        <Button
          type="primary"
          className="flex w-full justify-center text-balance font-medium"
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex items-center justify-center gap-2">
              <Spinner
                className="text-center text-primary-200"
                color="indigo"
              />
              <span>Loading...</span>
            </div>
          ) : (
            "Login"
          )}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-medium text-primary-300">
            Create account
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

export default LoginForm;
