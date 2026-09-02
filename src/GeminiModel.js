const API_URL = "https://azzichaymae-github-kaq69ve5k-chaymae.vercel.app/api/chat";


export const sendChatMessage = async (question, history, systemPrompt) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, history, systemPrompt }),
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data.response;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};