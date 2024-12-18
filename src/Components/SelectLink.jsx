import { Option, Select } from "@material-tailwind/react";
import { platformLinks } from "../Select/SelectPlatform";

function SelectLink() {
  return (
    <div className="w-full">
      <Select
        className="text-lg"
        menuProps={{ className: "h-54 px-0" }}
        size="lg"
        label="Select platform"
      >
        {platformLinks.map((link) => (
          <Option
            key={link.name}
            value={link}
            className="border-b-2 text-lg capitalize hover:bg-transparent hover:text-primary-200 focus:text-primary-300"
          >
            <span className="flex items-center gap-3">
              <link.icon />
              {link.name}
            </span>
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default SelectLink;

