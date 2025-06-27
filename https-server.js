const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 9443;
const PROJECT_DIR = '/home/dministrator/my-app/my-appnpx/my-app';
const PUBLIC_DIR = path.join(PROJECT_DIR, 'out');

// 生成自签名证书的函数
function generateSelfSignedCert() {
  const { exec } = require('child_process');
  
  return new Promise((resolve, reject) => {
    const cmd = `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/C=US/ST=State/L=City/O=LumpsumCalculator/CN=localhost"`;
    
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// 检查证书是否存在
async function ensureCertificates() {
  const keyPath = path.join(PROJECT_DIR, 'key.pem');
  const certPath = path.join(PROJECT_DIR, 'cert.pem');
  
  if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
    console.log('生成SSL证书...');
    try {
      await generateSelfSignedCert();
      console.log('SSL证书生成成功!');
    } catch (error) {
      console.error('证书生成失败:', error.message);
      process.exit(1);
    }
  }
}

const server = https.createServer({
  key: fs.readFileSync(path.join(PROJECT_DIR, 'key.pem')),
  cert: fs.readFileSync(path.join(PROJECT_DIR, 'cert.pem'))
}, (req, res) => {
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
  
  console.log(`HTTPS Request: ${req.url} -> ${filePath}`);
  
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
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon',
      '.woff2': 'font/woff2'
    }[ext] || 'text/plain';
    
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(data);
  });
});

async function startServer() {
  await ensureCertificates();
  
  server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 HTTPS服务器已启动!`);
    console.log(`\n📱 访问地址:`);
    console.log(`   🌐 https://localhost:${PORT}/ (English)`);
    console.log(`   🇮🇳 https://localhost:${PORT}/hi/ (हिंदी)`);
    console.log(`   🇮🇳 https://localhost:${PORT}/te/ (తెలుగు)`);
    console.log(`   🇮🇳 https://localhost:${PORT}/ta/ (தமிழ்)`);
    console.log(`   🇮🇳 https://localhost:${PORT}/gu/ (ગુજરાતી)`);
    console.log(`\n⚠️  注意: 第一次访问时浏览器会显示安全警告，点击"高级"→"继续访问"即可`);
    console.log(`\n🛑 按 Ctrl+C 停止服务器\n`);
  });
}

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🛑 正在关闭HTTPS服务器...');
  server.close(() => {
    console.log('✅ 服务器已关闭');
    process.exit(0);
  });
});

startServer().catch(console.error);