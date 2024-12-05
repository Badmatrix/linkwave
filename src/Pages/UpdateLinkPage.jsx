import { Card, Spinner, Typography } from "@material-tailwind/react";
import Button from "../Components/Button";
import { IoMdAdd } from "react-icons/io";
import EmptyLink from "../Components/EmptyLink";
import { platformLinks } from "../Select/SelectPlatform";
import LinkContainer from "../Components/LinkContainer";
import { useLinks } from "../Context/UserInputtedLinkProvider";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthProvider";
import { updateUserLinks } from "../Services/apiUsers";
import toast from "react-hot-toast";
import { useState } from "react";

function UpdateLinkPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userLinks, setUserLinks } = useLinks();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuth();
  const { uid } = authUser;
  const index = userLinks.length;

  function handleAddNewSelect() {
    setUserLinks((prevData) => [...prevData, platformLinks[index]]);
  }

  function handleRemoveLink(id) {
    const newSelectPlatform = userLinks.filter((_, index) => index + 1 !== id);
    setUserLinks(newSelectPlatform);
  }

  async function onSubmit() {
    setIsLoading(true);
    const res = await updateUserLinks(uid, userLinks);
    setIsLoading(false);
    toast.success(res);
  }
  return (
    <Card className="basis-3/5">
      <main className="flex flex-col space-y-7 overflow-hidden px-5 py-3">
        <header className="space-y-2">
          <Typography
            variant="h4"
            color="black"
            className="text-base first-letter:capitalize sm:text-lg lg:text-2xl"
          >
            customize your links
          </Typography>
          <Typography className="-mt-2 text-xs sm:text-sm">
            Add /edit/remove links below and then share all your profiles with
            the world!
          </Typography>
          <Button
            className="flex w-full justify-center gap-x-2 outline"
            type="secondary"
            onClick={handleAddNewSelect}
          >
            <IoMdAdd className="text-xl font-bold" /> add new link
          </Button>
        </header>

        {!index ? (
          <div className="">
            <EmptyLink />
          </div>
        ) : (
          <LinkContainer
            handleRemoveLink={handleRemoveLink}
            register={register}
            errors={errors}
          />
        )}
        <div className="flex w-full justify-end border-t py-2">
          <Button
            disabled={isLoading}
            type="primary"
            className="mx-5 flex w-full justify-center sm:w-32 lg:mx-0 lg:mr-5"
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? (
              <Spinner
                className="text-center text-primary-200"
                color="indigo"
              />
            ) : (
              "save"
            )}
          </Button>
        </div>
      </main>
    </Card>
  );
}

export default UpdateLinkPage;
