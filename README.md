# Expressjs ,Ejs with sqlite DB
A simple startup project configuration using express js as the server, ejs for templating and sqlite3 as the database.


## Preliquisites
Requirements  
👉: node version 18.16.x  
👉: npm package manager is used in this case  
👉: sqlite3 chrome viewer extension    

## Usage and Installation
1 Clone this repo
```sh
 git clone https://github.com/Newton-Nganga/expressjs-ejs-sqlite.git
```
2 Install the required dependencies
```sh
cd expressjs-ejs-sqlite
npm install
```
3 Replace the credentials in the db.js file with your credentials if need be!
```js
const sqlite3 = require("sqlite3").verbose();

//try to make a connection

const db = new sqlite3.Database("./database.sqlite", (err) => {
  console.log('     Trying to connect to the database ...    ')
  if (err) {
    console.error(err.message);
    return;
  }
  console.log("     Success! You are Connected to the database.    ");
});



// export default db;
module.exports = db;
```
4 To run the project
```sh
npm start
```
## Folder structure
```sh
.
├── controllers
│   └── controller.js
├── database.sqlite
├── db.js
├── package.json
├── package-lock.json
├── public
│   └── images
│       └── bird.jpg
├── README.md
├── routers
│   └── routers.js
├── server.js
├── Utils
└── views
    ├── 404.ejs
    ├── add.ejs
    ├── delete.ejs
    ├── partials
    │   ├── form-fields.ejs
    │   ├── form-styling.ejs
    │   └── head.ejs
    ├── update.ejs
    └── users.ejs

```
📂: Controllers
At controllers we handle the route functions.An example of a function to respond to GET request from the "/" route function in the controller.js
```js
//import db instance
const db = require("../db");

............

//GET Requests
//A function to respond with all the users
const renderUsers = async (req, res) => {
 const querystring = "SELECT * FROM users";
 db.all(querystring, (err, results) => {
   if (err) {
     console.error(err.message);
     return res.status(500).send("Error retrieving users from database");
   }
   //render users.ejs and provide the fetched users as users:results
   res.status(200).render("users", { users: results });
 });
};

.........

module.exports= {renderUsers}

```

📂: in routers folder we handle our routes in there i.e  
```js
.....

// a GET request to the "/" home route
router.get('/',renderUsers)

....
module.exports = router;

```
## ScreenSnaps
![users](https://github.com/Newton-Nganga/expressjs-ejs-sqlite/assets/93589514/fc462608-63d2-4a7c-84c6-af95b086f32d)
![users-add](https://github.com/Newton-Nganga/expressjs-ejs-sqlite/assets/93589514/dc449c2a-03f7-4dbf-82b0-b9b876af3ba1)
![users-update](https://github.com/Newton-Nganga/expressjs-ejs-sqlite/assets/93589514/e64c371e-4db9-4f11-9030-145d991cfd70)


## Conributions
This project is enterly for use in starting a development server,Its open to contribution.  
Clone the repo and Boom! 🤯: 💥: 💥:  You can now mess up things .
