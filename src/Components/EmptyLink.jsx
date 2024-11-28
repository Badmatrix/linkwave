import { Card, Typography } from "@material-tailwind/react";

function EmptyLink() {
  return (
    <Card className="mx-auto flex items-center justify-center bg-dark-100 text-dark-400 py-7  xl:py-16">
      <div className="mx-2 w-full space-y-3 text-center sm:w-4/5 md:w-3/4 lg:mx-auto  lg:w-5/6">
        <div className="flex justify-center">
          <img src="/icons/Group 273.svg" alt="empty link" />
        </div>
        <Typography variant="h4" className="">
          Let&apos;s get started
        </Typography>
        <Typography className="text-sm">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </Typography>
      </div>
    </Card>
  );
}

export default EmptyLink;
