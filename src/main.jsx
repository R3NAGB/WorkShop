import React from 'react';
import ReactDOM from 'react-dom/client'; // Only use this for React 18+
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';
import './index.css';

// Get the publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key. Please set VITE_CLERK_PUBLISHABLE_KEY in your .env file.");
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
     signInFallbackRedirectUrl='/'
     signUpFallbackRedirectUrl='/'
    afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
