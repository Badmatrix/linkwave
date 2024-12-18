/* eslint-disable react/prop-types */
import {
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineLink } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { platformLinks } from "../Select/SelectPlatform";
import { useState } from "react";
import { useLinks } from "../Context/UsersActiveLinksProvider";

function LinkContainerList({
  item,
  index,
  handleRemoveLink,
  register,
  errors,
}) {
  const id = index + 1;
  const [selectLink, setSelectLink] = useState(item.name);
  const { userLinks, setUserLinks } = useLinks();
  const activeLinks = userLinks.find((link) => link.name === selectLink);

  function replaceItemAtIndex(arr, index, newItem) {
    const newArray = [...arr];

    if (index >= 0 && index < newArray.length) {
      newArray.splice(index, 1, newItem);
      setUserLinks(newArray);
    } else {
      console.error("Index is out of bounds.");
      return arr; // Return original array if index is invalid
    }
  }

  function handleChangePlatform(e) {
    const newLink = platformLinks.find((link) => link.name === e);
    replaceItemAtIndex(userLinks, index, newLink);
  }

  function handleSetUrl(e) {
    const newLink = userLinks.map((link) => {
      return link.name === selectLink ? { ...link, url: e.target.value } : link;
    });

    setUserLinks(newLink);
  }

  return (
    <Card className="bg-dark-200/30 px-5 py-5 shadow-none">
      <div>
        <header className="mb-3 flex items-center justify-between text-lg font-medium">
          <span className="flex items-center gap-2">
            <GiHamburgerMenu className="text-xl" />
            <h2>Link {id}</h2>
          </span>
          <div
            className="cursor-pointer font-normal"
            onClick={() => handleRemoveLink(id)}
          >
            Remove
          </div>
        </header>
        <main className="space-y-5">
          <div className="space-y-2">
            <Typography className="font-normal">platform</Typography>
            <Select
              menuProps={{ className: "h-54 px-0" }}
              value={selectLink}
              onChange={handleChangePlatform}
            >
              {platformLinks.map((link) => (
                <Option
                  key={link.name}
                  value={link.name}
                  className="border-b-2 text-lg capitalize hover:bg-transparent hover:text-primary-200 focus:text-primary-300"
                >
                  <div className="flex items-center gap-x-3">
                    <link.icon />
                    {link.name}
                  </div>
                </Option>
              ))}
            </Select>
          </div>
          <div className="space-y-2">
            <Typography className="font-normal">Link</Typography>

            <Input
              {...register(`${activeLinks.name}Url`, {
                required: "Url cannot be empty field is required",
                validate: (value) => {
                  return (
                    activeLinks.validatePattern.some((pattern) =>
                      new RegExp(pattern).test(value),
                    ) || `Please enter a valid ${activeLinks.name} URL`
                  );
                },
              })}
              icon={<AiOutlineLink className="text-2xl" />}
              placeholder={activeLinks?.placeholder}
              className="text-lg text-dark-300 ring-4 ring-dark-200 ring-transparent placeholder:lowercase placeholder:text-gray-500 placeholder:opacity-100 hover:border hover:border-primary-300 hover:bg-primary-200/10 hover:shadow-lg hover:shadow-primary-200"
              labelProps={{
                className: "before:content-none",
              }}
              value={activeLinks?.url}
              onChange={handleSetUrl}
            />
            {errors && (
              <div className="text-xs text-danger">
                {errors[`${activeLinks.name}Url`]?.message}
              </div>
            )}
          </div>
        </main>
      </div>
    </Card>
  );
}

export default LinkContainerList;
