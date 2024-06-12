import { textAreaInterface } from "@/utils/Interfaces";
import React from "react";

const FileUpload = ({ label, name, placeholder }: textAreaInterface) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        required={true}
        name={name}
        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="multiple_files"
        placeholder={placeholder}
        type="file"
        multiple={false}
      />
    </div>
  );
};

export default FileUpload;
