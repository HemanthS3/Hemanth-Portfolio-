// API configuration
const API_CONFIG = {
  // Base URL for API endpoints
  // In development, use localhost
  // In production, use relative URL for Vercel deployment
  BASE_URL: import.meta.env.PROD ? '' : (import.meta.env.VITE_API_URL || 'http://localhost:5000'),
  
  // Endpoints
  ENDPOINTS: {
    CONTACT: '/api/contact',
  },
  
  // Get full URL for an endpoint
  getUrl: function(endpoint) {
    return `${this.BASE_URL}${endpoint}`;
  }
};

export default API_CONFIG;