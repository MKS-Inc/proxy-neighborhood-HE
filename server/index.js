const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 4000;

// neighborhood service
app.use('/api/neighborhood/:id', createProxyMiddleware({ target: 'http://ec2-3-101-23-93.us-west-1.compute.amazonaws.com:3000', changeOrigin: true }));
app.put('/api/neighborhood/:id', createProxyMiddleware({ target: 'http://ec2-3-101-23-93.us-west-1.compute.amazonaws.com:3000', changeOrigin: true }));
app.post('/api/likes/:user_id/:house', createProxyMiddleware({ target: 'http://ec2-3-101-23-93.us-west-1.compute.amazonaws.com:3000', changeOrigin: true }));
app.delete('/api/likes/:user_id/:house_id', createProxyMiddleware({ target: 'http://ec2-3-101-23-93.us-west-1.compute.amazonaws.com:3000', changeOrigin: true }));
app.put('/api/users/:user_name', createProxyMiddleware({ target: 'http://ec2-3-101-23-93.us-west-1.compute.amazonaws.com:3000', changeOrigin: true }));

// monthlyCost_rentalValue


// carousel




app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));