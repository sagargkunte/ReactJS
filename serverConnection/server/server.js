import express from 'express'
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse JSON bodies

// Simple GET route
app.get('/api/message', (req, res) => {
    console.log('server has reached')
  res.json({ message: 'Hello from Express server!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


