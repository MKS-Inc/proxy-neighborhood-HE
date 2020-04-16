const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 4000;

// neighborhood service
app.use('/api/neighborhood/:id', createProxyMiddleware({ target: 'http://ec2-3-101-23-93.us-west-1.compute.amazonaws.com:3000', changeOrigin: true }))

// monthlyCost_rentalValue


// carousel




app.listen(port, () => {
  console.log(`Proxy is listening on ${port}`);
});

app.use(express.static('./dist'));