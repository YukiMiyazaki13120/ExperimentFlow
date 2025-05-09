const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
 //もし本番環境に移したいのであれば、httpだと80にする
const port = 3001;

app.use(cors());
app.use(express.json());

// DB接続
const connection = mysql.createConnection({
  host: 'localhost', //もし本番環境に移したいのであれば、AWS RDSなどのリンクを貼る
  user: 'root',         // ← MySQLのユーザー名
  password: 'bsys', // ← パスワード
  database: 'tactile_db'
});

connection.connect(err => {
  if (err) {
    console.error('DB接続エラー:', err);
    return;
  }
  console.log('MySQL接続成功');
});

// POST受信
app.post('/api/submit', (req, res) => {
  const { username, gender, age, pertex_number, material_type, item, value } = req.body;
  const query = `
    INSERT INTO tactile_results 
    (username, gender, age, pertex_number, material_type, item, value) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  connection.query(
    query,
    [username, gender, age, pertex_number, material_type, item, value],
    (err, results) => {
      if (err) {
        console.error('INSERT失敗:', err);
        res.status(500).send('DBエラー');
        return;
      }
      res.status(200).send('保存成功');
    }
  );
});

app.listen(port, () => {
  console.log(`Expressサーバー起動中: http://localhost:${port}`);
});
