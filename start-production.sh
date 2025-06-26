#!/bin/bash

echo "🚀 启动 Lumpsum Calculator 生产环境..."

# 设置环境变量
export NODE_ENV=production
export PORT=${PORT:-3000}

# 检查构建文件
if [ ! -d ".next" ]; then
    echo "📦 未找到构建文件，开始构建..."
    npm run build
fi

# 启动应用
echo "🌟 启动应用在端口 $PORT..."
npm start

echo "✅ 应用已启动！访问 http://localhost:$PORT"