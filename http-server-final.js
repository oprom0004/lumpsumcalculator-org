const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const PROJECT_DIR = '/home/dministrator/my-app/my-appnpx/my-app';
const PUBLIC_DIR = path.join(PROJECT_DIR, 'out');

const server = http.createServer((req, res) => {
  const originalUrl = req.url;
  
  // 允许的路径（根据middleware.ts的逻辑）
  const validPaths = ['/', '/hi', '/te', '/ta', '/gu', '/404'];
  
  // 处理带斜杠的语言路径 - 重定向到不带斜杠的版本（SEO最佳实践）
  const langPaths = ['/hi/', '/te/', '/ta/', '/gu/'];
  if (langPaths.includes(originalUrl)) {
    const redirectTo = originalUrl.slice(0, -1); // 移除末尾的斜杠
    console.log(`Trailing slash redirect: ${originalUrl} -> ${redirectTo}`);
    res.writeHead(301, { 'Location': redirectTo }); // 301永久重定向
    res.end();
    return;
  }
  
  // 允许静态文件
  if (
    originalUrl.startsWith('/_next/') ||
    originalUrl.startsWith('/api/') ||
    originalUrl === '/favicon.ico' ||
    originalUrl === '/robots.txt' ||
    originalUrl === '/sitemap.xml' ||
    originalUrl.includes('.') || // 允许所有包含点的文件（如字体、图片等）
    validPaths.includes(originalUrl)
  ) {
    // 正常处理这些路径
    let urlPath = originalUrl === '/' ? '/index.html' : originalUrl;
    
    // Handle language routes
    if (urlPath.endsWith('/') && urlPath !== '/') {
      urlPath += 'index.html';
    }
    
    // If no extension, try adding .html
    if (!path.extname(urlPath) && urlPath !== '/index.html') {
      urlPath += '/index.html';
    }
    
    const filePath = path.join(PUBLIC_DIR, urlPath);
    
    console.log(`HTTP Request: ${originalUrl} -> ${filePath}`);
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(`404: ${filePath} - Redirecting to /404`);
        // 重定向到404页面
        res.writeHead(302, { 'Location': '/404' });
        res.end();
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
        '.woff2': 'font/woff2',
        '.txt': 'text/plain'
      }[ext] || 'text/plain';
      
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    });
  } else {
    // 所有无效路径重定向到 /404（根据middleware.ts的逻辑）
    console.log(`Invalid path: ${originalUrl} - Redirecting to /404`);
    res.writeHead(302, { 'Location': '/404' });
    res.end();
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 HTTP服务器已启动 (包含SEO优化)!`);
  console.log(`\n📱 访问地址:`);
  console.log(`   🌐 http://localhost:${PORT}/ (English)`);
  console.log(`   🌐 http://172.19.37.1:${PORT}/ (English - WSL IP)`);
  console.log(`   🇮🇳 http://localhost:${PORT}/hi (हिंदी)`);
  console.log(`   🇮🇳 http://localhost:${PORT}/te (తెలుగు)`);
  console.log(`   🇮🇳 http://localhost:${PORT}/ta (தமிழ்)`);
  console.log(`   🇮🇳 http://localhost:${PORT}/gu (ગુજરાતી)`);
  console.log(`\n✅ SEO优化功能:`);
  console.log(`   - 带斜杠的URL重定向到不带斜杠版本 (301)`);
  console.log(`   - 所有无效路径重定向到 /404`);
  console.log(`   - 统一404错误处理`);
  console.log(`   - 保留静态资源访问`);
  console.log(`\n🛑 按 Ctrl+C 停止服务器\n`);
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🛑 正在关闭HTTP服务器...');
  server.close(() => {
    console.log('✅ 服务器已关闭');
    process.exit(0);
  });
});