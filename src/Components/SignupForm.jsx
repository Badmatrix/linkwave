import { Card, Input, Spinner, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { IoIosLock } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import Button from "./Button";
import UseSignUp from "../Hooks/UseSignUp";

function SignupForm() {
  const { mutate, isPending, formData } = UseSignUp();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = formData
  
  function handleSignUp({ email, password, confirmPassword }) {
    mutate({ email, password, confirmPassword });
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
        Create account
      </Typography>
      <Typography
        color="gray"
        className="mt-1 text-sm font-normal md:text-base"
      >
        Let&apos;s get you started sharing your links!
      </Typography>
      <form
        className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
        onClick={handleSubmit(handleSignUp)}
      >
        <fieldset disabled={isPending}>
          <main className="mb-10 flex flex-col gap-7">
            <div className="space-y-1">
              <Typography variant="h6" color="blue-gray">
                Email address
              </Typography>
              <Input
                label="Email"
                size="lg"
                icon={<IoMail className="text-xl" />}
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
            <div className="space-y-1">
              <Typography variant="h6" color="blue-gray">
                Create Password
              </Typography>
              <Input
                type="password"
                label="password"
                size="lg"
                icon={<IoIosLock className="text-xl" />}
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

            <div className="space-y-1">
              <Typography variant="h6" color="blue-gray">
                Confirm Password
              </Typography>
              <Input
                type="password"
                label="Confirm password"
                size="lg"
                icon={<IoIosLock className="text-xl" />}
                {...register("confirmPassword", {
                  required: "this field is required",
                  validate: (val) =>
                    val == getValues().password ||
                    "password must be equals to confirm password",
                })}
              />
              {errors.confirmPassword && (
                <Typography className="text-xs text-danger">
                  {errors.confirmPassword?.message}
                </Typography>
              )}
            </div>
          </main>

          <Button
            type="primary"
            className="flex w-full justify-center"
            disabled={isPending}
          >
            {isPending ? (
              <div className="flex justify-center items-center gap-2">
                <Spinner
                  className="text-center text-primary-200"
                  color="indigo"
                />
                <span>Creating...</span>
              </div>
            ) : (
              "Create new account"
            )}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary-300">
              Login
            </Link>
          </Typography>
        </fieldset>
      </form>
    </Card>
  );
}

export default SignupForm;
