import React from "react";

const DescriptionInput = ({ description, setDescription, tone, setTone, onGenerateCaption }) => {
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleToneChange = (e) => {
    setTone(e.target.value);
  };

  return (
    <div className="flex flex-col bg-[#121416] p-6 rounded-xl shadow-md flex-1 min-h-[300px]">
      <h2 className="text-white text-lg font-semibold mb-2">Enter a Description</h2>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Type your description..."
        className="w-full h-full bg-[#1d2226] text-gray-300 p-3 rounded-lg border border-purple-600 focus:outline-none resize-none flex-grow"
      />

      <label className="text-white text-sm mt-3 mb-1">Select Caption Tone</label>
      <select
        value={tone}
        onChange={handleToneChange}
        className="bg-[#1d2226] text-gray-300 p-2 rounded-md border border-purple-600 mb-3"
      >
        <option value="default">Default</option>
        <option value="funny">Funny</option>
        <option value="emotional">Emotional</option>
        <option value="inspirational">Inspirational</option>
        <option value="savage">Savage</option>
      </select>

      <button
        onClick={onGenerateCaption}
        disabled={!description}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold"
      >
        Generate Caption
      </button>
    </div>
  );
};

export default DescriptionInput;
