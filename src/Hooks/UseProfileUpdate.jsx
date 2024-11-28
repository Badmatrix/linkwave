import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../Services/apiUsers";
import toast from "react-hot-toast";

function UseProfileUpdate() {
const { mutate, isPending,error } = useMutation({
    mutationKey: ["update-names"],
    mutationFn: updateUserProfile,
    onSuccess: () => {
      console.log("name updated successfully");
      toast.success("name updated successfully");
      
    },
    onError: (err) => {
      console.log(err)
      toast.error(`${err.name}: ${err.message.slice(17, -2)}`);
    },
  });
    return{mutate,isPending,error}
}

export default UseProfileUpdate