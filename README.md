# Software Dev Chatbot 🤖💻

A chatbot designed for **software developers** that uses OpenAI's GPT-3.5-turbo API to answer coding questions, provide explanations, and help with programming tasks.

---

## Features

- Answer coding and software development questions
- Provide explanations for algorithms, syntax, and best practices
- Node.js backend for handling API requests
- Lightweight and easy to extend
- Supports real-time chatting

---

## API Key Configuration

This chatbot requires an OpenAI API key to function.

1. Open the existing `config.js` file in the project root.
2. Make sure it contains your API key in this format:

```js
module.exports = {
  OpenAIAPIKey: "YOUR_OPENAI_API_KEY",
};
```
