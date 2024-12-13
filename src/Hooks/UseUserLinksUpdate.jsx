import { useMutation } from "@tanstack/react-query";
import { updateUserLinks} from "../Services/apiUsers";
import toast from "react-hot-toast";

function UseUserLinksUpdate() {
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["update-links"],
    mutationFn: updateUserLinks,
    onSuccess: () => {
      // console.log("links updated successfully");
      toast.success("you've added your links successfully");
    },
    onError: (err) => {
      // console.log(err);
      toast.error(`${err.name}: ${err.message.slice(17, -2)}`);
    },
  });
  return { mutate, isPending, error };
}

export default UseUserLinksUpdate;
