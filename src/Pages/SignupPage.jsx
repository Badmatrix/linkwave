import Logo from "../Components/Logo";
import SignupForm from "../Components/SignupForm";

function SignupPage() {
  return (
    <div className="flex max-w-full items-center justify-center align-middle">
      <div className="space-y-3">
        <Logo />
        <SignupForm />
      </div>
    </div>
  );
}

export default SignupPage;
