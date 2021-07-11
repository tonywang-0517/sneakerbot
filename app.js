const express = require('express');
const pg = require('pg');
const cors = require('cors');
const app = express();
const routes = require('./routes');
require('dotenv-flow').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/v1', routes);

const { types } = pg;
// Return numerics as Float (parsed from String)
types.setTypeParser(1700, (val) => parseFloat(val));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening at port ${port}`));
