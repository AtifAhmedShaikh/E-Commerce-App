import { useState } from "react";

const SelectTag = () => {
  const [choice, setChoice] = useState("");

  const handleChoice = (e) => {
    setChoice(e.target.value);
  }

  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-600 px-3 ml-2 py-1 rounded-md hover:bg-gray-200"
      onChange={handleChoice}
      value={choice}
    >
      <option value="" disabled hidden>
        Categories
      </option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
    </select>
  );
};

export default SelectTag;
