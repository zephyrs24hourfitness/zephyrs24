/**
 * Environment configuration with type safety
 * Ensures all required environment variables are present and valid
 */

const requiredEnvVars: string[] = [];

const validateEnvironment = (): void => {
  // Validation is optional - not all env vars are required
  if (requiredEnvVars.length > 0 && import.meta.env.MODE === 'production') {
    const missingVars = requiredEnvVars.filter(
      varName => !import.meta.env[varName]
    );
    if (missingVars.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missingVars.join(', ')}`
      );
    }
  }
};

export const config = {
  // API Configuration
  api: {
    geminiKey: (import.meta.env.VITE_GEMINI_API_KEY as string) || '',
    timeout: 30000,
  },

  // Security Configuration
  security: {
    enableStrictMode: true,
    enableErrorReporting: import.meta.env.MODE === 'production',
    cspEnabled: import.meta.env.MODE === 'production',
  },

  // Feature Flags
  features: {
    maintenance: (import.meta.env.VITE_MAINTENANCE_MODE as string) === 'true',
  },

  // Application Configuration
  app: {
    environment: import.meta.env.MODE || 'development',
    isDevelopment: import.meta.env.MODE === 'development',
    isProduction: import.meta.env.MODE === 'production',
  },

  // Validation function
  validate: validateEnvironment,
};

export default config;
