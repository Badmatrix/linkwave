import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../Services/Auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function UseLogin() {
  const navigate = useNavigate();
  const formData = useForm();
  const { reset } = formData;

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/app");
      reset();
    },
    onError: (err) => {
      toast.error(`${err.name}: ${err.message.slice(17, -2)}`);
      //  console.log(err)
    },
  });

  return { mutate, isPending, formData };
}

export default UseLogin;
