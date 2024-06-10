# ベースイメージを指定
FROM node:16.15.0

# 作業ディレクトリを作成
WORKDIR /app

# アプリケーションの依存関係をインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# アプリケーションを起動
CMD ["npx", "serve", "-s", "build"]

