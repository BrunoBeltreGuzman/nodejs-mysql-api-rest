const model = require("./model");

module.exports = {
       /*
              Insert Users
       */
       async insert(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              const password = request.body.password;

              const result = await model.insert(
                     name,
                     email,
                     password,
                     function (result) {
                            response.json(result);
                     }
              );
       },
       /*
              Update Users
       */
       async update(request, response) {
              const name = request.body.name;
              const email = request.body.email;
              const password = request.body.password;
              const id = request.body.id;

              const result = await model.update(
                     id,
                     name,
                     email,
                     password,
                     function (result) {
                            response.json(result);
                     }
              );
       },

       /*
              Delete Users
       */
       async delete(request, response) {
              const id = request.body.id;

              await model.delete(id, function (result) {
                     response.json(result);
              });
       },

       /*
              FindAll Users
       */
       async findAll(request, response) {
              await model.findAll(function (result) {
                     response.json(result);
              });
       },
       /*
              FindById Users
       */
       async findById(request, response) {
              const id = request.params.id;

              await model.findById(id, function (result) {
                     response.json(result);
              });
       },
};
