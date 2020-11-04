const express = require("express");
var bodyParser = require("body-parser");
var pg = require("pg");
const app = express();
const bcrypt = require("bcrypt");
//Used for adding extra security
const saltRounds = 10;

const promise = require("bluebird");
const port = process.env.PORT || 3000;

// pg-promise initialization options:
const initOptions = {
  promiseLib: promise,
};

const config = {
  host: "lallah.db.elephantsql.com",
  port: 5432,
  database: "kcugdqzt",
  user: "kcugdqzt",
  password: "VK60MmMxP_kxDzgAOpINtghq4P64ATaK",
  url:
    "postgres://kcugdqzt:VK60MmMxP_kxDzgAOpINtghq4P64ATaK@lallah.db.elephantsql.com:5432/kcugdqzt",
};

// Load and initialize pg-promise:
const pgp = require("pg-promise")(initOptions);

// Create the database instance:
const db = pgp(config);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Web-store app listening at http://localhost:${port}`);
});

//Get all items in inventory
app.get("/inventory", (req, res) => {
  db.query("SELECT * FROM inventory").then((results) => {
    res.json(results);
  });
});

//Delete item from inventory
app.delete("/inventory/:id", (req, res) => {
  let id = req.params.id;
  db.query(`DELETE FROM inventory WHERE id=${id}`).then((results) => {
    console.log(results);
    res.json(results);
  });
});

//Update item info in inventory
app.post("/inventory/:id", (req, res) => {
  let id = req.params.id;
  db.query(`UPDATE FROM inventory WHERE id=${id}`).then((results) => {
    console.log(results);
    res.json(results);
  });
});

//Post new item to inventory
app.post("/inventory", (req, res) => {
  let { product_name, description, product_photo, price, quantity } = req.body;

  db.query(
    `INSERT INTO inventory (product_name, description, product_photo, price, quantity)
        VALUES ($1, $2, $3, $4, $5) RETURNING product_name, price`,
    [product_name, description, product_photo, price, quantity]
  )
    .then((results) => {
      console.log(results);
      res.json({ status: "Item added to inventory" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ status: "Item not added" });
    });
});

//Get individual item from inventory
app.get("/inventory/:id", (req, res) => {
  let id = req.params.id;
  db.query("SELECT * FROM inventory WHERE id=$1", [id]).then((results) => {
    res.json(results);
  });
});

//Retrieves order history from one user
app.get("/order-history/:users_id", (req, res) => {
  let users_id = req.params.users_id;
  db.query("SELECT * FROM order_history WHERE users_id=$1", [users_id]).then(
    (results) => {
      res.json(results);
    }
  );
});

//Retrieves specific order from one user
app.get("/order-history/:users_id/:id", (req, res) => {
  let { users_id, id } = req.params;
  db.query("SELECT * FROM order_history WHERE users_id=$1 AND id=$2", [
    users_id,
    id,
  ]).then((results) => {
    res.json(results);
  });
});

//Payment
app.post("/payment/");

//Creates new user for web store
app.post("/register", (req, res) => {
  console.log("endpoint works!")
  let { email, password, age } = req.body;
  
  if (email == "" || password == "" || age =="") {
    res.status(404).send("Please enter email and/or password")
  } 
  else 
  {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      db.query("INSERT INTO users (email, password, age) VALUES ($1, $2, $3)", 
      [
        email,
        hash,
        age
      ])
        .then((result) => {
          res.json({ status: "User successfully registered" });
          console.log(result);
        })
        .catch((err) => {
          res.status(404).send("Email already exists");
          console.log(err.detail);
        })
        });
    }
      res.send("THIS IS WORKING!")
  });

  //Updates user info
  app.post("/update-user/:id", (req, res) => {
    let id = req.params.id;
    let {
      credit_card,
      street_address,
      apt_number,
      city,
      state,
      zip,
    } = req.body;

    db.query(
      "UPDATE users SET credit_card=$1, street_address=$2, apt_number=$3, city=$4, state=$5, zip=$6 FROM users WHERE id=$7",
      [credit_card, street_address, apt_number, city, state, zip, id]
    )
      .then((result) => {
        console.log(result);
        res.json({ status: "User info updated" });
      })
      .catch((err) => {
        res.json({ status: "User not updated" });
        console.log(err);
      });
  });

  //POST YOUR LOGIN CREDENTIALS
  app.post("/login", (req, res) => {
    let { email, password } = req.body;
    if(!email || !password || email == '' || password == '') {
      res.status(404).send("Please enter email and/or password");
    }
    else {
      db.query(`SELECT email, password FROM users WHERE email=$1`, [email])
      .then(result => {
        console.log(result);
        if(result.length == 0) {
            res.status(404).send("User does not exist in database");
        }
        else {
            var stored_password = result[0].password;
            bcrypt.compare(password, stored_password, function(err, result) {
                // result == true
                if(result == true) {
                    res.json({status : "User has successfully logged in"});
                } else {
                    res.status(404).send("Email/Password combination did not match");
                }
            });
        }
      });
    }
  })
