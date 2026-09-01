const API_URL = "https://azzichaymae-github-io.vercel.app/api/chat";

export const generateContent = async (prompt, question) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't generate a response.";
  }
};