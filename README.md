# ExperimentFlow リポジトリ利用ガイド（GitHub + ブランチ運用）

このドキュメントでは、当プロジェクトにおける環境構築・Git/GitHubの使い方・ブランチの切り方・共同作業の進め方について記載します。

---

## 🔧 環境構築手順（npm・Node.js）

### 1. Node.jsとnpmのインストール
- 公式サイトからインストール：[https://nodejs.org/ja/](https://nodejs.org/ja/)

### 2. インストール確認
- PowerShell で：
  ```bash
  node -v
  ```
- コマンドプロンプトで：
  ```bash
  npm -v
  ```
※それぞれバージョンが表示されればインストール完了です。

---

## 💻 プロジェクトのクローンと初期設定

### 1. 任意の保存先ディレクトリへ移動
```bash
cd 自分の保存したいディレクトリ
```

### 2. GitHubからクローン
```bash
git clone https://github.com/YukiMiyazaki13120/ExperimentFlow.git
cd ExperimentFlow
```

---

## 🌿 ブランチの使い方と作業の流れ

### 1. 最新のリモート情報を取得
```bash
git fetch
```

### 2. ベースブランチ（例：feature/experiment）に切り替え
```bash
git checkout feature/experiment
```

### 3. ベースブランチを最新に更新
```bash
git pull origin feature/experiment
```

### 4. 作業用のブランチを作成
```bash
git checkout -b feature/experiment/add-step-ui
```
※「add-step-ui」は目的に応じて名前を変えてください。

### 5. 作業後に変更をGitHubへ反映
```bash
git add .
git commit -m "ステップUIを追加"
git push origin feature/experiment/add-step-ui
```

---

## 🔁 Pull Request（PR）フロー

1. GitHubにアクセス
2. `feature/experiment/add-step-ui` ブランチに対応した Pull Request を作成
   - **base**：`feature/experiment`
   - **compare**：`feature/experiment/add-step-ui`
3. 他の作業者が内容を確認し、問題なければマージ

---

## 🚀 アプリの起動コマンド（初回）

```bash
cd ExperimentFlow
npm install  # 初回のみ必要
npm start    # アプリ起動（http://localhost:3000）
```

### VS Codeで開く
```bash
code .
```

---

## 📌 ブランチ命名規則（推奨）

| 種別 | 命名例 | 用途 |
|------|--------|------|
| 機能追加 | `feature/experiment/add-〇〇` | 新機能・画面の追加 |
| 不具合修正 | `bugfix/experiment/fix-〇〇` | バグ修正系の作業 |
| ドキュメント | `docs/update-readme` | READMEやWikiの更新 |

---

## 📩 よくあるGitコマンドまとめ

| コマンド | 説明 |
|----------|------|
| `git status` | 変更状況の確認 |
| `git branch` | 現在のブランチ確認 |
| `git fetch` | リモート更新の取得（マージなし） |
| `git pull` | リモート更新の取得＆反映 |
| `git push origin <ブランチ名>` | ブランチの変更をGitHubへ反映 |

---

何か分からないことがあれば、チーム内で気軽に相談してください！

