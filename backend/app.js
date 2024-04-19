



import express, { json } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import cors from 'cors';

const app = express();
const port = 3000;

// Create an Anthropic client instance
const anthropic = new Anthropic({
  apiKey:process.env.API_KEY ,
});

// Middleware to parse JSON request body
app.use(json());

// Enable CORS
app.use(cors());

// Route to handle chatbot requests
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    // Create a conversation with Claude
    const response = await anthropic.messages.create({
      max_tokens: 1024,
      messages: [{ role: 'user', content: message }],
      model: 'claude-3-opus-20240229',
    });

    res.json({ response: response.content });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});