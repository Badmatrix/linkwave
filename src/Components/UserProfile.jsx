import { useAuth } from "../Context/AuthProvider";
import { Avatar, Typography } from "@material-tailwind/react";

function UserProfile() {
  const profile = useAuth();
  const { email, displayName, photoURL } = profile;
  return (
    <>
      <Avatar
        size="xl"
        alt="avatar"
        src={photoURL || `https://ui-avatars.com/api/?name=${displayName}`}
        className="border border-primary-300 ring-2 ring-primary-300"
      />

      <div className="space-y-1">
        <Typography variant="h4" className="capitalize text-dark-400">
          {displayName}
        </Typography>

        <Typography className="text-sm font-medium text-dark-300">
          {email}
        </Typography>
      </div>
    </>
  );
}

export default UserProfile;
