const express = require('express');
const cors = require('cors');
const taskRoutes = require('./src/routes/tasks');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Todo API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});