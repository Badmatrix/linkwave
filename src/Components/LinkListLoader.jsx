import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function LinkListLoader() {
  return (
    <ul className="h space-y-7">
      <SkeletonTheme baseColor="#EFEBFF" highlightColor="#BEADFE">
        <Skeleton count={4} height="50px" borderRadius="10px" />
      </SkeletonTheme>
    </ul>
  );
}

export default LinkListLoader;
