import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


function EmptyUserProfile() {
  return (
    <SkeletonTheme baseColor="#EFEBFF" highlightColor="#BEADFE">
      <Skeleton circle count={1} height="100px" width="100px" />
      <Skeleton borderRadius="100px" count={0.8} />
      <Skeleton borderRadius="100px" count={0.6} />
    </SkeletonTheme>
  );
}

export default EmptyUserProfile