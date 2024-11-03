import EmptyUserProfile from "./EmptyUserProfile";
import { Avatar, Typography } from "@material-tailwind/react";
const profile = {};
function UserProfile() {
  if (!profile) return <EmptyUserProfile />;
  return (
    <>
      <Avatar
        size="xl"
        alt="avatar"
        src={`https://ui-avatars.com/api/?name=badmus hameed`}
        className="border border-primary-300 ring-2 ring-primary-300"
      />

      <div className="space-y-1">
        <Typography variant="h4" className="capitalize text-dark-400">
          display name
        </Typography>

        <Typography className="text-sm font-medium text-dark-300">
          email
        </Typography>
      </div>
    </>
  );
}

export default UserProfile;
