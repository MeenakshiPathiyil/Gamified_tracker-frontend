const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/weatherapi',
        createProxyMiddleware({
            target: 'https://api.weatherapi.com', 
            changeOrigin: true,
        })
    );

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};
