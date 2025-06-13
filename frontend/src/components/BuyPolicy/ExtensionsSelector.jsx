import React from "react";

const ExtensionsSelector = ({ extensions, handleExtensionChange }) => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    <div className="flex flex-col gap-2.5">
      <label className="text-stone-900 text-xs font-normal h-[32px] label-custom-blue">
        Extensions
      </label>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="owndamage"
            checked={extensions.owndamage}
            onChange={handleExtensionChange}
            className="form-checkbox h-4 w-4 text-blue-900 border-neutral-200 rounded focus:ring-blue-900"
          />
          <span className="text-zinc-500 text-xs">Own Damages</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="theft"
            checked={extensions.theft}
            onChange={handleExtensionChange}
            className="form-checkbox h-4 w-4 text-blue-900 border-neutral-200 rounded focus:ring-blue-900"
          />
          <span className="text-zinc-500 text-xs">Theft Coverage</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="fire"
            checked={extensions.fire}
            onChange={handleExtensionChange}
            className="form-checkbox h-4 w-4 text-blue-900 border-neutral-200 rounded focus:ring-blue-900"
          />
          <span className="text-zinc-500 text-xs">Fire Coverage</span>
        </label>
      </div>
    </div>
  </div>
);

export default ExtensionsSelector;