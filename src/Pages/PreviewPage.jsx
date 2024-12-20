import { useNavigate, useParams } from "react-router-dom";
import Button from "../Components/Button";
import Preview from "../Components/Preview";
import toast from "react-hot-toast";

function PreviewPage() {
  const navigate = useNavigate();
  const { userID } = useParams();
  const copyLink = () => {
    const url = window.location.href;
    navigator
      .share({
        title: document.title,
        text: "Share link with your friends!",
        url: url,
      })
      .then(() => {})
      .catch((error) => {
        toast.error("Error sharing:", error);
      });
  };
  return (
    <div className="">
      <div className="relative h-full bg-primary-300 pb-20 pt-1 sm:rounded-b-[28px] sm:pb-28 md:rounded-b-[32px] md:pb-36">
        <nav className="mt-3 flex justify-between rounded-none bg-white px-3 py-4 sm:mx-5 sm:rounded-lg md:shadow-sm">
          <Button
            type="primary"
            onClick={() => navigate(-1)}
            className="border-primary-300 text-xs sm:text-sm"
          >
            Back to editor
          </Button>
          <Button
            type="secondary"
            onClick={copyLink}
            className="border border-primary-300 shadow-none transition-all duration-200 ease-linear hover:shadow-sm hover:shadow-primary-300"
          >
            Share
          </Button>
        </nav>
      </div>
      <div className="absolute z-10 flex w-full items-center justify-center sm:top-24 md:top-28">
        <Preview userId={userID} />
      </div>
    </div>
  );
}

export default PreviewPage;
