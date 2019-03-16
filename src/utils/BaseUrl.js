const BaseURL = () => {
  const { API_HOST, API_PORT } = process.env;
  return `${API_HOST}${API_PORT ? `:${API_PORT}` : ''}/api`;
};

export default BaseURL;
