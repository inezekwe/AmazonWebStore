const express = require('express')
var bodyParser = require('body-parser')

const app = express();
const bcrypt = require('bcrypt');
//Used for adding extra security
const saltRounds = 10;

const promise = require('bluebird');
const port = process.env.PORT || 4000;

// pg-promise initialization options:
const initOptions = {
    // Use a custom promise library, instead of the default ES6 Promise:
    promiseLib: promise, 
};

const config = {
    host: 'localhost',
    port: 5432,
    database: 'web_store',
    user: 'web',
    password: 'web'
    
};

// Load and initialize pg-promise:
const pgp = require('pg-promise')(initOptions);

// Create the database instance:
const db = pgp(config);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Web-store app listening at http://localhost:${port}`)
  })

//Get all items in inventory
app.get('/inventory', (req, res) => {
    db.query('SELECT * FROM inventory')
        .then(results => {
            res.json(results);
        })
})

//Delete item from inventory
app.delete('/inventory:id', (req, res) => {
    let id = req.params.id;
    db.query(`DELETE FROM inventory WHERE id=${id}`)
        .then(results => {
            console.log(results);
            res.json(results);
        })
})

//Update item info in inventory
app.put('/inventory/:id', (req, res) => {
    let id = req.params.id;
    db.query(`UPDATE FROM inventory WHERE id=${id}`)
        .then(results => {
            console.log(results);
            res.json(results);
        })
})

//Post new item to inventory
app.post('/inventory', (req, res) => {
    let { product_name, description, product_photo, price, quantity } = req.body;

    db.query(`INSERT INTO inventory (product_name, description, product_photo, price, quantity)
        VALUES ($1, $2, $3, $4, $5) RETURNING product_name, price`, [product_name, description, product_photo, price, quantity])
        .then(results => {
            console.log(results);
            res.send('Success');
        })
        .catch(err => {
            console.log(err);
            res.send("Error");
        })
})

//Get individual item from inventory
app.get('/inventory/:id', (req, res) => {
    let id = req.params.id;
    db.query('SELECT * FROM inventory WHERE id=$1', [id])
        .then(results => {
            res.json(results);
        })
})