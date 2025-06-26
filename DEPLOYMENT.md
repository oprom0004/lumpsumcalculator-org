# Lumpsum Calculator 部署指南

## 🚀 部署选项

### 1. Vercel 部署 (推荐)

**优势**: 零配置、自动HTTPS、全球CDN、免费SSL证书

#### 步骤：
1. **推送代码到GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Vercel部署**:
   - 访问 [vercel.com](https://vercel.com)
   - 连接GitHub账户
   - 导入项目
   - 配置域名: `lumpsumcalculator.org`

3. **环境变量设置**:
   ```
   NODE_ENV=production
   ```

#### 成本: 免费 (包含自定义域名)

---

### 2. Netlify 部署

**优势**: 简单部署、免费SSL、表单处理

#### 步骤：
1. 构建项目: `npm run build`
2. 上传到Netlify或连接Git仓库
3. 构建设置:
   - Build command: `npm run build`
   - Publish directory: `.next`

#### 成本: 免费

---

### 3. Docker + VPS 部署

**优势**: 完全控制、可扩展、适合高流量

#### 步骤：
1. **购买VPS** (推荐: DigitalOcean, Vultr, Linode)
2. **Docker部署**:
   ```bash
   # 构建镜像
   docker build -t lumpsumcalculator .
   
   # 运行容器
   docker run -d -p 3000:3000 lumpsumcalculator
   ```

3. **Nginx + SSL设置**:
   ```bash
   # 使用docker-compose
   docker-compose up -d
   
   # 获取SSL证书
   sudo certbot --nginx -d lumpsumcalculator.org
   ```

#### 成本: $5-20/月

---

## 🌐 域名配置

### DNS设置 (lumpsumcalculator.org):

**Vercel/Netlify**:
```
A记录: @ → Vercel/Netlify IP
CNAME: www → lumpsumcalculator.org
```

**VPS部署**:
```
A记录: @ → 您的服务器IP
A记录: www → 您的服务器IP
```

---

## 🔧 性能优化

### 已启用的优化:
- ✅ 静态生成 (SSG)
- ✅ 图片优化
- ✅ 代码分割
- ✅ Gzip压缩
- ✅ 安全Headers

### CDN建议:
- Cloudflare (免费)
- Amazon CloudFront
- Google Cloud CDN

---

## 📊 监控建议

### 分析工具:
1. **Google Analytics 4**
2. **Google Search Console**
3. **Bing Webmaster Tools**

### 性能监控:
1. **Google PageSpeed Insights**
2. **GTmetrix**
3. **Lighthouse CI**

---

## 🔒 安全检查

### SSL证书:
- ✅ HTTPS重定向
- ✅ 安全Headers
- ✅ HSTS启用

### 定期更新:
```bash
# 更新依赖
npm audit fix
npm update

# 重新部署
npm run build
```

---

## 🚀 快速部署命令

### Vercel:
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Docker:
```bash
docker build -t lumpsumcalculator .
docker run -d -p 80:3000 lumpsumcalculator
```

---

## 📈 SEO检查清单

部署后验证:
- [ ] robots.txt 可访问
- [ ] sitemap.xml 提交到搜索引擎
- [ ] 所有页面返回200状态码
- [ ] 移动端友好测试
- [ ] 页面加载速度 < 3秒
- [ ] 结构化数据验证

---

## 🎯 部署建议

**初始部署**: 选择 Vercel (简单、免费、可靠)
**高流量**: 考虑 VPS + CDN
**预算充足**: AWS/Google Cloud + CDN

部署成功后，网站将在 `https://lumpsumcalculator.org` 上线！