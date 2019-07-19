const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// apply the routes to the application
app.use('/todos', todoRoutes);

// run server
app.listen(PORT, () => {
  console.log('now listening for requests on port ', PORT);
});
