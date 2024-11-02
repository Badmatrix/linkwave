import LoginForm from "../Components/LoginForm";
import Logo from "../Components/Logo";


function LoginPage() {
  return (
    <div className="flex max-w-full items-center justify-center align-middle">
      <div className="space-y-5 my-7">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage