/* eslint-disable react/prop-types */

function SelectComponent({ options, register, name, className }) {
  //   const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="mb-4">
      <select
        {...register(name)}
        // value={selectedOption}
        className={className}
      >
        {options.map((option) => (
          <option
            key={option.name}
            value={option.name}
            className="border-b-2 text-lg capitalize hover:bg-transparent hover:text-primary-200 focus:text-primary-300"
          >
            <div className="flex items-center gap-x-2">
              <option.icon />
              {option.name}
            </div>
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;
