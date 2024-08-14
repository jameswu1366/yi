const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');


// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Import and use routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);






app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong! We are working on fixing it.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});