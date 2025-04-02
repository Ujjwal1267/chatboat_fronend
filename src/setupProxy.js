// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://chat-boat-k23b.onrender.com",  // Your backend server URL
      changeOrigin: true,
      secure: false, // Optional: set to false for development with self-signed certs
      logLevel: "debug", // Optional: enables logging for debugging
    })
  );
};
