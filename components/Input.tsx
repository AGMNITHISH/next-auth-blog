import React from "react";
import { inputInterface } from "@/utils/Interfaces";
const Input = ({
  label,
  placeholder,
  name,
  value,
  className,
}: inputInterface) => {
  return (
    <div className={`${className} mb-5 `}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        required={true}
        name={name}
        defaultValue={value || ""}
        id="large-input"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Input;
