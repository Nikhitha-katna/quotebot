import axios from "axios";

const OPENAI_API_URL = "https://openrouter.ai/api/v1/chat/completions"; 
const OPENAI_API_KEY = import.meta.env.VITE_OPEN_ROUTER_AI_API_KEY;
console.log("API Key", OPENAI_API_KEY);

export const generateCaptions = async ({  description }) => {
  if (!description) return [];

  const prompt =  `Generate 3 catchy and creative Instagram-style captions for the following description: "${description}". Keep them under 20 words.`
    
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: "openai/gpt-3.5-turbo", 
        messages: [{ role: "user", content: prompt }],
        max_tokens: 60,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "HTTP-Referer": "http://localhost:5173",    
          "X-Title": "QuoteBot",
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data?.choices?.[0]?.message?.content || "";

    const captions = result
      .split("\n")
      .filter(line => line.trim())
      .map(line => line.replace(/^\d+\.\s*/, "").trim());

    return captions.length > 0 ? captions : ["No captions generated. Try again."];
  } catch (error) {
    console.error("Error generating captions:", error?.response?.data || error.message);
    return ["Oops! Failed to generate captions. Try again."];
  }
};
