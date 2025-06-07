import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationIcon = () => {
  return (
    <div className="relative">
      <IoMdNotificationsOutline className="h-6 w-6 text-gray-500 cursor-pointer" />
      <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
    </div>
  );
};

export default NotificationIcon;