const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
	res.send('hello from jenkins backend on windows');
});
app.listen(port, () => {
	console.log(`app running at http://localhost:${port}`);
});



