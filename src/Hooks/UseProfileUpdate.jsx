import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../Services/apiUsers";
import toast from "react-hot-toast";

function UseProfileUpdate() {
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["update-names"],
    mutationFn: updateUserProfile,
    onSuccess: () => {
      // console.log("name updated successfully");
      toast.success("name updated successfully");
    },
    onError: (err) => {
      console.log(err);
      toast.error(`error updating name try again`);
    },
  });
  return { mutate, isPending, error };
}

export default UseProfileUpdate;
