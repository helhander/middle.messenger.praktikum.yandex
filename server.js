const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));
app.get('*');
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
