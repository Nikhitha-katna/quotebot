
import React, { useState } from "react";
import { motion } from "framer-motion";
import { generateCaptions } from "../components/CaptionGenerator";
import DescriptionInput from "../components/DescriptionInput"; // Import the component

const Home = () => {
  const [description, setDescription] = useState("");
  const [tone, setTone] = useState("default");
  const [captions, setCaptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleGenerateCaptions = async () => {
    if (!description) return;
    setLoading(true);
    try {
      const generatedCaptions = await generateCaptions({ description, tone });
      setCaptions(generatedCaptions);
      setDescription(""); // Clear input after generating
    } catch (error) {
      console.error("Error generating captions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (caption, index) => {
    navigator.clipboard.writeText(caption);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <motion.h1
        className="text-purple-500 text-3xl md:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Every Moment Deserves the Perfect Words.
      </motion.h1>

      <h3 className="text-white text-base md:text-lg mb-6 text-center">
        Enter your thoughts and let <span className="font-bold">QuoteBot</span> create the perfect captions!
      </h3>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6">
        {/* Left - Description Input */}
        <DescriptionInput 
          description={description}
          setDescription={setDescription}
          tone={tone} 
          setTone={setTone}
          onGenerateCaption={handleGenerateCaptions}
        />

        {/* Right - Generated Captions */}
        <div className="flex flex-col bg-[#121416] p-6 rounded-xl shadow-md flex-1 min-h-[300px]">
          <h2 className="text-white text-lg font-semibold mb-2">Generated Captions</h2>

          {loading ? (
            <p className="text-gray-300">Generating captions...</p>
          ) : captions.length > 0 ? (
            <div className="flex flex-col gap-3 overflow-y-auto">
              {captions.map((caption, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#1d2226] p-3 rounded-lg"
                >
                  <span className="text-gray-300 text-sm">{caption}</span>
                  <button
                    onClick={() => handleCopy(caption, index)}
                    className={`text-sm px-3 py-1 rounded-md ${
                      copiedIndex === index
                        ? "bg-blue-500 text-white"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                  >
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No captions generated yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
