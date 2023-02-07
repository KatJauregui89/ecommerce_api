const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const swaggerDocs = require('../swagger');

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    swaggerDocs(app, PORT)
})