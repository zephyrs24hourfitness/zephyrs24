/**
 * Error boundary component for safe error handling
 * Prevents app crashes from being exposed to users
 */

import React, { ReactNode, ReactElement, Component, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactElement;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to external error tracking service in production
    // e.g., Sentry, LogRocket, etc.
    const isProduction = import.meta.env.MODE === 'production';
    if (isProduction) {
      console.error('Error caught by boundary:', error);
      // TODO: Send to error tracking service
    } else {
      console.error('Error details:', error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center text-white">
              <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
              <p className="text-gray-400 mb-6">We've logged this error and will investigate it.</p>
              <button
                onClick={() => {
                  window.location.href = '/';
                }}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white"
              >
                Go Home
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
