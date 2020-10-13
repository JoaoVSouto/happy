import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server listening on ${PORT}...`));
