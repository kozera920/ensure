import { Icon } from "@iconify/react/dist/iconify.js"; 
import { Link } from "react-router";

export default function FileExternalClaimCard() {
    return (
        <div class="bg-white rounded-xl shadow-md p-6 flex items-center gap-4">

            <Link 
                to="/claims/file_external_claim"
                className="px-6 py-[10px] rounded-[50px] outline outline-2 text-white bg-custom-blue inline-flex justify-center items-center gap-2"
            >
                <Icon icon="mynaui:plus" width="24" height="24" />
                <div className="justify-start text-sm font-normal font-['Open_Sans']">File an external Claim</div>
            </Link>

            <p class="text-md text-gray-500 mt-2">
                Only applicable to bodly injuries, material damages, and transfer letter claims
            </p>
        </div>
    );
}