const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 9000;
const PUBLIC_DIR = './out';

const server = http.createServer((req, res) => {
  // Handle URL with or without trailing slash
  let urlPath = req.url === '/' ? '/index.html' : req.url;
  
  // Handle language routes
  if (urlPath.endsWith('/')) {
    urlPath += 'index.html';
  }
  
  // If no extension, try adding .html
  if (!path.extname(urlPath) && urlPath !== '/index.html') {
    urlPath += '/index.html';
  }
  
  const filePath = path.join(PUBLIC_DIR, urlPath);
  
  console.log(`Request: ${req.url} -> ${filePath}`);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(`404: ${filePath}`);
      res.writeHead(404);
      res.end('Page not found');
      return;
    }
    
    // Set content type
    const ext = path.extname(filePath);
    const contentType = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml'
    }[ext] || 'text/plain';
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Available pages:`);
  console.log(`- http://localhost:${PORT}/ (English)`);
  console.log(`- http://localhost:${PORT}/hi/ (हिंदी)`);
  console.log(`- http://localhost:${PORT}/te/ (తెలుగు)`);
  console.log(`- http://localhost:${PORT}/ta/ (தமிழ்)`);
  console.log(`- http://localhost:${PORT}/gu/ (ગુજરાતી)`);
});