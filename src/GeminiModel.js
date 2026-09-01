import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateContent = async (prompt, question) => {
  try {
    const result = await model.generateContent(prompt);
    const response =  result.response.text();
    return response;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't generate a response.";
  }
};