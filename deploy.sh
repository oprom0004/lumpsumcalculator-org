#!/bin/bash

echo "🚀 部署 Lumpsum Calculator..."

# 检查环境
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ $? -eq 0 ]; then
    echo "✅ 构建成功!"
else
    echo "❌ 构建失败"
    exit 1
fi

# 启动应用
echo "🌟 启动应用..."
npm start

echo "🎉 部署完成! 访问 http://localhost:3000"