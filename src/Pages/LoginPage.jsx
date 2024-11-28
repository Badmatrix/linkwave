import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/LoginForm";
import Logo from "../Components/Logo";
import { useAuth } from "../Context/AuthProvider";
import { useEffect } from "react";

function LoginPage() {
  const currUser = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (currUser) navigate("/app");
    },
    [currUser, navigate],
  );
  // console.log(currUser);
  return (
    <div className="flex max-w-full items-center justify-center align-middle">
      <div className="space-y-5">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
