const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('hello from jenkins backend on windows');
});
app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ App running at http://0.0.0.0:${port}`);
});


