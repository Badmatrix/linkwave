/* eslint-disable react/prop-types */

import { Avatar, Card, Typography } from "@material-tailwind/react";
import { getAuthUserData } from "../Services/apiUsers";
import { useQuery } from "@tanstack/react-query";
import Error from "./Error";
import PreviewLinkList from "./PreviewLinkList";
import EmptyUserProfile from "./EmptyUserProfile";
import LinkListLoader from "./LinkListLoader";

export default function Preview({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["getData"],
    queryFn: () => getAuthUserData(userId),
  });
  if (error) return <Error />;
  return (
    <Card className="mx-0 my-3 w-full items-center rounded-none bg-transparent py-10 text-center shadow-none sm:w-3/4 sm:rounded-lg sm:bg-white sm:shadow-lg md:w-2/5 md:rounded-xl xl:w-[30%]">
      <main className="space-y-5">
        {!isLoading && data ? (
          <div>
            <Avatar
              size="xl"
              alt="avatar"
              src={`https://ui-avatars.com/api/?name=${data?.firstname} ${data?.lastname} `}
              className="border border-primary-300 ring-2 ring-primary-300"
            />
            <div className="space-y-0">
              <Typography className="text-lg font-semibold capitalize text-dark-400">{`${data?.firstname} ${data?.lastname}`}</Typography>
              <Typography>{data?.email}</Typography>
            </div>
          </div>
        ) : (
          <EmptyUserProfile />
        )}

        {!isLoading && data ? (
          <ul className="">
            {data?.links.map((link) => (
              <PreviewLinkList key={link.name} link={link} />
            ))}
          </ul>
        ) : (
          <LinkListLoader />
        )}
      </main>
    </Card>
  );
}
