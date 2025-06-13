import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
const SummaryTab = () => {
  return (
    <form className="space-y-6 mt-6 file-claim-form">
      <p className="text-sm text-gray-600">
        <strong>Summary of all answers</strong>
      </p>

      <p className="text-sm text-custom-blue">
        <strong>Story Details</strong>
      </p>

      <table className="table-auto w-full">
        <thead className="bg-custom-blue text-white">
          <tr>
            <th className="px-4 py-2 text-left">
              <strong>Question</strong>
            </th>
            <th className="px-4 py-2 text-left">
              <strong>Answer</strong>
            </th>
            <th className="px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Question</td>
            <td className="px-4 py-2">No answer provided</td>
            <td className="px-4 py-2 text-right">
              <button>
                <Icon icon="tabler:edit" width="24" height="24" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default SummaryTab;
