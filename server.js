const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));


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
  res.json({ result });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
