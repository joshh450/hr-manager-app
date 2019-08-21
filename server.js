const express = require('express')
const connectDB = require('./config/db')

const app = express();
app.use(express.json())

connectDB();

app.get('/', (req, res) => res.send('API running'))

app.use('/api/employees', require('./routes/api/employees'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))