import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './utils/ErrorBoundary';
import { config } from './utils/config';

// Validate environment on app start
try {
  config.validate();
} catch (error) {
  console.error('Configuration validation failed:', error);
  if (config.app.isProduction) {
    // In production, show a user-friendly error
    document.body.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background-color: #0a0a0a; color: white; font-family: system-ui, -apple-system, sans-serif; text-align: center;">
        <div>
          <h1>Application Error</h1>
          <p>The application encountered a configuration error. Please refresh the page.</p>
        </div>
      </div>
    `;
    throw error;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);