const OpenAIAPIKey = process.env.OPENAI_API_KEY;

class OpenAIAPI {
  /**
   * Generates a response from OpenAI Chat API
   * @param {string} userMessage - The user's message
   * @returns {Promise<string>} AI response
   */
  static async generateResponse(userMessage) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OpenAIAPIKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
          max_tokens: 150,
        }),
      });

      const data = await res.json();
      console.log("OpenAI API response:", data);

      const message = data?.choices?.[0]?.message?.content?.trim();
      if (message) return message;

      console.error("Error: No valid response from OpenAI API");
      return "Sorry, I couldn't understand that.";
    } catch (err) {
      console.error("OpenAI API request failed:", err);
      return "Sorry, there was an error connecting to the AI.";
    }
  }
}

module.exports = { OpenAIAPI };
