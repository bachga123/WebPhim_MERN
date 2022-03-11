const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');

const path = require('path');
const req = require('express/lib/request');
const app = express();
const port = 3000;

const db = require('./config/db');


db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//morgan
app.use(morgan('combined'));
//midleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//handle bar
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//route init
route(app);

app.listen(port, () => {
    console.log(`App on port http://localhost:${port}`);
});
