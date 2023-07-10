// apiConfig.ts
const api_url =
  process.env.NODE_ENV === "production"
    ? "https://kimochisns-backend.onrender.com/api/posts"
    : "http://localhost:5000/api/posts";

export default api_url;