// index.js - Node.js CRUD App with MongoDB
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();

const uri = process.env.MONGO_URI || 'mongodb://admin:password@mongo-svc:27017/?authSource=admin';
const client = new MongoClient(uri);

let db;

client.connect()
  .then(() => {
    db = client.db('appdb');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

// Create
app.post('/add', async (req, res) => {
  const result = await db.collection('items').insertOne(req.body);
  res.send(result);
});

// Read
app.get('/get', async (req, res) => {
  const items = await db.collection('items').find().toArray();
  res.send(items);
});

// Update
app.put('/update/:id', async (req, res) => {
  const result = await db.collection('items').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.send(result);
});

// Delete
app.delete('/delete/:id', async (req, res) => {
  const result = await db.collection('items').deleteOne({ _id: new ObjectId(req.params.id) });
  res.send(result);
});

app.listen(3000, () => console.log('CRUD app listening on port 3000'));
