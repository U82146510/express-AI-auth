# 🧠 AI-Powered Payload Validator (Login Route)

This project demonstrates how to integrate OpenAI's Chat API (GPT models) into an Express.js-based backend to validate incoming data such as login payloads.

## 🚀 Why Use AI for Input Validation?

While traditional validation (e.g., Joi, Zod, Yup) works great, this project explores the potential of **AI-assisted validation**, especially useful when:

- You want a flexible and language-aware validation layer
- You deal with natural language or fuzzy/unstructured input
- You need descriptive validation feedback
- You're building bots, assistants, or interfaces where AI's contextual understanding adds value

---

## 🧪 How It Works

When a user attempts to log in or sends data from the UI, the backend:

1. Sends the input object (e.g. `{ name, email, password }`) to OpenAI's `chat.completions.create()` endpoint.
2. Asks the model (via a system prompt) to validate:
   - If `email` is in valid format
   - If `password` has at least 6 characters
   - If all fields are filled (non-empty)
3. Based on AI's response (`"1"` = valid, `"0"` = invalid), the backend continues or rejects the request.

---

## 📁 Project Structure

- `index.ts` — Main Express app setup
- `user.ts` — User login route and logic
- `openai.ts` — Utility for making OpenAI API calls
- `error_handler.ts` — Centralized error handling middleware

---

## 📦 Example AI Prompt

```ts
messages: [
  {
    role: "system",
    content: "You validate an object: {name, email, password}. Email must be in email format. Password must be at least 6 characters. None should be empty. Respond '1' for valid, '0' for invalid. If no input, say 'input object missing'."
  },
  {
    role: "user",
    content: `Check this: ${JSON.stringify(input)}`
  }
]

🛠️ Tech Stack

    Node.js

    Express.js

    TypeScript

    OpenAI (GPT-4 / GPT-3.5)
⚠️ Disclaimer

This is an experimental use case. For critical validation (e.g., authentication), always use traditional server-side validation alongside AI logic. AI should be an assistant, not a security layer.
