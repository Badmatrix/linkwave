/* eslint-disable react/prop-types */
import LinkContainerList from "./LinkContainerList";

function LinkContainer({ selectPlatform, handleRemoveLink }) {
  return (
    <ul className="space-y-5">
      {selectPlatform.map((item, index) => (
        <LinkContainerList
          key={index}
          item={item}
          index={index}
          handleRemoveLink={handleRemoveLink}
        />
      ))}
    </ul>
  );
}

export default LinkContainer;
