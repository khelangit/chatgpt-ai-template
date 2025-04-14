import { useState } from 'react';
import { queryOllama } from '../services/ollama';

const [loading, setLoading] = useState(false);
const [messages, setMessages] = useState<Array<{
  content: string;
  role: 'user' | 'assistant';
}>>([]);

async function handleSendMessage(message: string) {
  try {
    // Set loading state
    setIsLoading(true);
    
    const response = await queryOllama('llama2', message);
    
    // Process response
    postMessage((prev: any) => [...prev, {
      content: response,
      role: 'assistant'
    }]);
    
  } catch (error) {
    console.error('Chat error:', error);
    postMessage((prev: any) => [...prev, {
      content: 'Sorry, I encountered an error. Please try again.',
      role: 'assistant'
    }]);
  } finally {
    setIsLoading(false);
  }
}

function setIsLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}
