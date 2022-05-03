const express = require('express');
const cors = require('cors');

const config = require('../config/config');
const Routes = require('../routes/Routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(Routes);
require('../config/mongoose')(app);

app.listen(config.PORT, () => console.log(`Server is runing on port ${config.PORT}`) );
