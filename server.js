const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const db = new sqlite3.Database('history.db');

app.use(express.json());
app.use(express.static(__dirname));

// initialize database
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      expression TEXT,
      result REAL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  let result;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = b === 0 ? NaN : a / b;
      break;
    default:
      return res.status(400).json({ error: 'Operación no soportada' });
  }
  const expr = `${a} ${operation} ${b}`;
  db.run('INSERT INTO history (expression, result) VALUES (?, ?)', [expr, result]);
  res.json({ result });
});

app.get('/history', (req, res) => {
  db.all('SELECT id, expression, result, timestamp FROM history ORDER BY id DESC LIMIT 10', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener el historial' });
    }
    res.json(rows);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
