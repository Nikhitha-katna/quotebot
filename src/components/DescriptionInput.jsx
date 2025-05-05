import React, { useState } from "react";

const DescriptionInput = ({ onInputChange, onGenerateCaption }) => {
  const [description, setDescription] = useState("");

  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };


  const handleGenerateCaption = () => {
    if (description) {
      onGenerateCaption({ description });
    }
  };

  return (
    <div
      className="flex flex-col gap-1"
      style={{
        minHeight: "300px",
      }}
    >
      <h2 className="text-white text-lg font-semibold mx-auto mb-2 mt-0">Enter a Description</h2>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Type your description..."
        className="w-full h-full bg-[#121416] text-gray-300 p-3 rounded-lg border border-purple-600 focus:outline-none resize-none mb-1.5"
        style={{
          minHeight: "200px", 
        }}
      />
      <button
        onClick={handleGenerateCaption}
        disabled={!description}
        className="mt-0 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold mb-5.5"
      >
        Generate Caption
      </button>
    </div>
  );
};

export default DescriptionInput;
