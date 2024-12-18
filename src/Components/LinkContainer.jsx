/* eslint-disable react/prop-types */

import { useLinks } from "../Context/UsersActiveLinksProvider";
import LinkContainerList from "./LinkContainerList";

function LinkContainer({ handleRemoveLink,register,errors }) {
  const { userLinks } = useLinks();
  return (
    <ul className="no-scrollbar h-[400px] space-y-3 overflow-y-scroll">
      {userLinks.map((item, index) => (
        <LinkContainerList
          index={index}
          key={item.name}
          item={item}
          register={register}
          errors={errors}
          handleRemoveLink={handleRemoveLink}
        />
      ))}
    </ul>
  );
}

export default LinkContainer;
