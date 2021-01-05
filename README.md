# Nodejs MySQL Api Rest
**API REST with Nodejs and MySQL for request http get, post, put and delete.**

# Structure:

**Simple and descriptive structure!**

```javascript
const express = require("express");
const controllers = require("./controllers");

const router = express.Router();

router.post("/insert", controllers.insert);

router.put("/update", controllers.update);

router.delete("/delete", controllers.delete);

router.get("/findAll", controllers.findAll);

router.get("/findById/:id", controllers.findById);

module.exports = router;
```

**The controller from the apis of the users table is imported in this example and each function corresponding to each request is passed as parameters.**

**Thus, in each controller it receives the `request` and` response` parameters and is responsible for receiving what the client sends and once it does this, well, it responds. And the model, each model is in charge of making its respective queries in the database.**

# Install

**Install**

```console
$ npm install
```

**Run**

```console
$ npm run dev

or

$ node src/index.js
```

**Dependencies**

```json
"dependencies": {
              "express": "^4.17.1",
              "morgan": "^1.10.0",
              "mysql": "^2.18.1"
},
"devDependencies": {
              "nodemon": "^2.0.6"
}
```

# Routers:

Fetch ALL Records

- `GET - http://localhost:2000/findAll`

Fetch Single Record

- `GET - http://localhost:2000/findById/{id}`

Create Record

- `POST - http://localhost:2000/insert`

Update Record

- `PUT - http://localhost:2000/update`

Remove Records

- `DELETE - http://localhost:2000/delete`
