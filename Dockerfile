# ベースイメージを指定
FROM node:16-alpine

# 必要なパッケージをインストール
RUN apk add --no-cache \
    curl \
    gnupg \
    git

# ワーキングディレクトリを設定
WORKDIR /app

# Reactの依存パッケージをインストール
COPY package*.json .
RUN yarn install

# TypeScriptを使用するためのパッケージをインストール
RUN yarn add typescript @types/node @types/react @types/react-dom @types/jest

# react-scriptsをインストール
RUN yarn add react-scripts

# アプリケーションをコピー
COPY . .

# ポートを公開
EXPOSE 3000

# アプリケーションを起動
CMD ["yarn", "start"]