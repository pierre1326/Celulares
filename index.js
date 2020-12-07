const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

values = require('./constants/values');

app.use(session({
  secret: 'sssshhhh',
  saveUninitialized: false,
  resave: false,
  cart: {products: [], total: 0}
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static("public"));

require('./routes/routes.js')(app)

app.listen(values['port'], function() {
  console.log('Servidor iniciado en el puerto: ' + values['port'])
})