/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import LinkContainerList from "./LinkContainerList";
import Button from "./Button";

function LinkContainer({ selectPlatform, handleRemoveLink, }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  function onSubmit(data) {
    console.log(data)
  }
  // console.log(selectPlatform);
  return (
    <div className="space-y-7">
      <ul className="no-scrollbar h-[400px] space-y-3 overflow-y-scroll">
        {selectPlatform.map((item, index) => (
          <LinkContainerList
            key={index}
            item={item}
            index={index}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            handleRemoveLink={handleRemoveLink}
          />
        ))}
      </ul>
      <div className="flex w-full justify-end border-t py-2">
        <Button
          onClick={handleSubmit(onSubmit)}
          type="primary"
          className="mx-5 w-full sm:w-32 lg:mx-0 lg:mr-5"
        >
          save
        </Button>
      </div>
    </div>
  );
}

export default LinkContainer;
