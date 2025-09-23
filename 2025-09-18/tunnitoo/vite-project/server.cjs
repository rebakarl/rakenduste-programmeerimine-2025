const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// In-memory data for demonstration
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// CRUD Endpoints
// Create
app.post('/items', (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all
app.get('/items', (req, res) => {
  res.json(items);
});

// Read one
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) res.json(item);
  else res.status(404).json({ error: 'Item not found' });
});

// Update
app.put('/items/:id', (req, res) => {
  const idx = items.findIndex(i => i.id === parseInt(req.params.id));
  if (idx !== -1) {
    items[idx] = { ...items[idx], ...req.body };
    res.json(items[idx]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Delete
app.delete('/items/:id', (req, res) => {
  const idx = items.findIndex(i => i.id === parseInt(req.params.id));
  if (idx !== -1) {
    const deleted = items.splice(idx, 1);
    res.json(deleted[0]);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// Route parameters examples
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.json({ userId: req.params.userId, bookId: req.params.bookId });
});

app.get('/flights/:from-:to', (req, res) => {
  res.json({ from: req.params.from, to: req.params.to });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
