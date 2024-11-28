/* eslint-disable react/prop-types */
import {
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { platformLinks } from "../Select/SelectPlatform";

function LinkContainerList({ handleRemoveLink, index, item }) {
  const id = index + 1;
  const [activePlatform, setActivePlatform] = useState(item);

  
  function handleActivePlatform(val) {
    const opt = platformLinks.find(obj => obj.name === val)
    setActivePlatform(opt);
  }


  // console.log(activePlatform);
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
              className="text-lg capitalize text-dark-300 ring-0 ring-dark-200 hover:border hover:border-primary-300 hover:bg-primary-200/10 hover:shadow-lg hover:shadow-primary-200"
              labelProps={{
                className: "before:content-none ",
              }}
              menuProps={{ className: "h-54 px-0" }}
              value={activePlatform?.name}
              onChange={handleActivePlatform}
            >
              {platformLinks.map((link) => (
                <Option
                  key={link.name}
                  value={link.name}
                  className="border-b-2 text-lg capitalize hover:bg-transparent hover:text-primary-200 focus:text-primary-300"
                >
                  <div className="flex items-center gap-x-2">
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
              icon={<AiOutlineLink className="text-2xl" />}
              placeholder={activePlatform?.placeholder}
              className="text-lg capitalize text-dark-300 ring-4 ring-dark-200 ring-transparent placeholder:lowercase placeholder:text-gray-500 placeholder:opacity-100 hover:border hover:border-primary-300 hover:bg-primary-200/10 hover:shadow-lg hover:shadow-primary-200"
              labelProps={{
                className: "before:content-none",
              }}
            />
          </div>
        </main>
      </div>
    </Card>
  );
}

export default LinkContainerList;
