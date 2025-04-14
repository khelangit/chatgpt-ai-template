import { queryOllama } from '../services/ollama';

// ... existing code ...

async function handleSendMessage(message: string) {
  // ... existing code ...
  const response = await queryOllama('llama2', message);
  // ... process response ...
}