import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Services/Auth";
import toast from "react-hot-toast";

function UseSignUp() {
  const navigate = useNavigate();
  const formData = useForm();
  const { reset } = formData;

  const { mutate, isPending } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/app");
      reset();
    },
    onError: (err) => {
      // console.log(err.message);
      toast.error(`${err.name}: ${err.message.slice(17, -2)}`);
    },
  });

  return { mutate, isPending, formData };
}

export default UseSignUp;
