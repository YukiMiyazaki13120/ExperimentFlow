# ExperimentFlow 環境構築・運用ガイド

このドキュメントは、React + Node.js + MySQL を用いた「ExperimentFlow」プロジェクトの実行・開発環境の構築方法を解説します。

---

## ✅ 前提条件

* Windows 10 / 11 または macOS（M1 / M2 もOK）
* インターネット環境

---

## 1. GitHubからクローン

```bash
cd 任意の保存先ディレクトリ
git clone https://github.com/YukiMiyazaki13120/ExperimentFlow.git
cd ExperimentFlow
```

---

## 2. Node.jsとnpmとGitの導入

### インストール

* [公式サイト](https://nodejs.org/ja/)からダウンロードしてインストール

### 確認方法

#### Windows:

* PowerShell または コマンドプロンプト（どちらでも可）で以下を実行：

```bash
node -v
npm -v
```

※バージョンが表示されればOK

#### Gitのインストール:
* [公式サイト](https://git-scm.com/downloads/win)からダウンロードしてインストール
* Git for Windows/x64 Setup.をインストール後、デフォルトのまま登録

---

## 3. MySQLの導入（ローカル）

### Windows:

* [MySQL公式ページ](https://dev.mysql.com/downloads/installer/)から「353.7Mの方」をインストール

その後、パスワードは各自設定
そして以下にPATHを通す
```bash
C:\Program Files\MySQL\MySQL Server 8.0\bin
```

### 起動・ログイン

```bash
mysql -u root -p # パスワードは各自設定したものを入力
```

※初期設定でパスワードが未設定ならそのまま Enter でOK

### データベース作成

```sql
CREATE DATABASE tactile_db;
USE tactile_db;
CREATE TABLE tactile_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
  username VARCHAR(255),
  gender VARCHAR(255),
  age INT,
  pertex_number INT,
  material_type VARCHAR(255),
  item VARCHAR(255),
  value INT
);
```

---

## 4. Node.jsサーバーの構築（バックエンド）

```bash
cd server
npm init -y
npm install express mysql2 cors
```

### 起動

```bash
node index.js
```

---

## 5. Reactアプリの起動（フロントエンド）

```bash
cd ../
npm install  # 初回のみ
npm start    # http://localhost:3000 が開く
```

---

## 6. 実験結果の確認

```bash
mysql -u root -p # パスワードは各自設定したものを入力
USE tactile_db;
SELECT * FROM tactile_results;
```

---

## 🔁 ブランチ運用・Git操作（共同開発向け）

```bash
git fetch
git checkout feature/experiment
# 作業用ブランチ作成例
git checkout -b feature/experiment/add-ui
```

変更反映：

```bash
git add .
git commit -m "UI追加"
git push origin feature/experiment/add-ui
```

---

## 補足
* サーバが起動していないと React からPOSTしてもエラーになるので注意

---
