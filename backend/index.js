const express = require('express');
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/vibe';

app.get('/records', async (req, res) => {
  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    const db = client.db();
    const records = await db.collection('records').find().toArray();
    res.json(records);
  } finally {
    await client.close();
  }
});

app.get('/jsdocdocs', (req, res) => {
  const docsDir = path.join(__dirname, 'jsdocdocs');
  fs.readdir(docsDir, (err, files) => {
    if (err) return res.status(500).json({ error: err.message });
    const result = files.map(f => ({
      name: f,
      content: fs.readFileSync(path.join(docsDir, f), 'utf8')
    }));
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
