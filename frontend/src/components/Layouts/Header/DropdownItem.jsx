import { Link } from "react-router-dom";

const DropdownItem = ({ image, text, to, onClick }) => {
  return (
    <Link
      to={to}
      className="px-3.5 py-3.5 border-b border-purple-100 flex items-center hover:bg-gray-50"
      onClick={onClick}
    >
      <div className="w-11 h-11 flex items-center justify-center bg-blue-400/20 rounded-lg">
        {image}
      </div>
      <div className="ml-5 text-stone-900 text-base">{text}</div>
    </Link>
  );
};

export default DropdownItem;