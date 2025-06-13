import { FaBook, FaSearch } from "react-icons/fa";

export default function SearchClaimCard() {
    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Search Input */}
                <div className="flex flex-col w-full sm:w-1/2">
                    <div className="flex items-center w-full border border-gray-200 rounded-full px-4 py-2">
                        <input
                            type="text"
                            placeholder="Policy number"
                            className="flex-grow bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
                        />
                        <button className="text-custom-blue">
                            <FaSearch/>
                        </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        Insert and search policy number for the vehicle you are claiming <span className="font-medium">for</span>
                    </p>
                </div>

                {/* My Claims Button  */}
                <button className="flex items-center gap-2 custom-blue-border text-custom-blue px-4 py-2 rounded-full hover:bg-blue-50 whitespace-nowrap">
                    <FaBook/>
                    My Claims
                </button>
            </div>
        </div>
    );
}