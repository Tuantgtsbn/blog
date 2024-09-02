const path = require('path');
const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routes');
// static file
app.use(express.static(path.join(__dirname, 'public')));
// middleware support post data
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// init routes
routes(app);

// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);