import { ChatGPTAPI } from 'chatgpt'
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

async function example() {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error('No API key given in env');
    }
    
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}
example();

export default example;