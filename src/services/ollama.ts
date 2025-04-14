import axios from 'axios';

const OLLAMA_API = 'http://localhost:11434/api';

export async function queryOllama(model: string, prompt: string) {
  try {
    const response = await axios.post(`${OLLAMA_API}/generate`, {
      model,
      prompt,
      stream: false
    });
    return (response.data as { response: string }).response;
  } catch (error) {
    console.error('Ollama API error:', error);
    throw error;
  }
}