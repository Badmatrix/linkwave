import { IoMdAdd } from "react-icons/io";
import { Card, Typography } from "@material-tailwind/react";
import Button from "../Components/Button";
import EmptyLink from "../Components/EmptyLink";
import LinkContainer from "../Components/LinkContainer";
import { useState } from "react";
import { platformLinks } from "../Select/SelectPlatform";

function UpdateLinkPage() {
  const [selectPlatform, setSelectPlatform] = useState([platformLinks.at(0)]);
  const index = selectPlatform.length;
  function handleAddNewSelect() {
    setSelectPlatform([...selectPlatform, platformLinks[index]]);
  }

   function handleRemoveLink(id) {
     const newSelectPlatform = selectPlatform.filter(
       (_, index) => index + 1 !== id,
     );
     setSelectPlatform(newSelectPlatform);
   }

  // console.log(selectPlatform)
  return (
    <Card className="basis-3/5">
      <form className="relative">
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

          {!selectPlatform.length ? (
            <div className="h-4/5 space-y-3">
              <EmptyLink />
            </div>
          ) : (
            <main className="no-scrollbar h-[400px] space-y-3 overflow-y-scroll">
              <LinkContainer
                selectPlatform={selectPlatform}
                handleRemoveLink={handleRemoveLink}
              />
            </main>
          )}
        </main>
        <div className="flex w-full justify-end border-t py-5">
          <Button
            type="primary"
            className="mx-5 w-full sm:w-32 lg:mx-0 lg:mr-5"
          >
            save
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default UpdateLinkPage;
