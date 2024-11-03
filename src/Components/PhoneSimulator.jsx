import "react-loading-skeleton/dist/skeleton.css";
import UserProfile from "./UserProfile";
import LinkList from "./LinkList";

function PhoneSimulator() {
  return (
    <div className="hidden h-fit basis-2/5 justify-center rounded-xl bg-white px-7 pt-7 lg:flex">
      <div className="relative -mt-6 scale-90 rounded-[30px] border border-gray-600 p-4 sm:rounded-[40px] md:rounded-[55px]">
        <img
          src="/public/icons/Subtract.svg"
          className=""
          alt="phone simulator"
        />
        <div className="no-scrollbar absolute left-0 right-0 top-14 mx-auto my-7 h-4/5 w-4/5 scroll-m-4 space-y-8 overflow-y-scroll text-center">
          <UserProfile />
          <LinkList />
        </div>
      </div>
    </div>
  );
}

export default PhoneSimulator;
