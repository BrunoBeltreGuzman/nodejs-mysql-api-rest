const connection = require("../../lib/connectionMySQL/connnectionMySQL");

module.exports = {
       /*
              Insert Users
       */
       async insert(name, email, password, response) {
              await connection.query(
                     {
                            sql:
                                   "INSERT INTO users (name, email, password) VALUES (?,?,?)",
                            values: [name, email, password],
                     },
                     function (error, results, fields) {
                            if (error) {
                                   response(error);
                                   throw error;
                            } else {
                                   response(results);
                            }
                     }
              );
       },

       /*
              Update Users
       */
       async update(id, name, email, password, response) {
              await connection.query(
                     {
                            sql:
                                   "UPDATE  users SET name = ?, email = ?, password = ? WHERE id = ?",
                            values: [name, email, password, id],
                     },
                     function (error, results, fields) {
                            if (error) {
                                   response(error);
                                   throw error;
                            } else {
                                   response(results);
                            }
                     }
              );
       },

       /*
              Delete Users
       */
       async delete(id, response) {
              await connection.query(
                     {
                            sql: "DELETE FROM users WHERE id = ?",
                            values: [id],
                     },
                     function (error, results, fields) {
                            if (error) {
                                   response(error);
                                   throw error;
                            } else {
                                   response(results);
                            }
                     }
              );
       },

       async findAll(response) {
              await connection.query(
                     {
                            sql: "SELECT * FROM users",
                     },
                     function (error, results, fields) {
                            if (error) {
                                   response(error);
                                   throw error;
                            } else {
                                   response(results);
                            }
                     }
              );
       },

       async findById(id, response) {
              if (connection) {
                     await connection.query(
                            {
                                   sql: "SELECT * FROM users WHERE id = ?",
                                   values: [id],
                            },
                            function (error, results, fields) {
                                   if (error) {
                                          response(error);
                                          throw error;
                                   } else {
                                          response(results);
                                   }
                            }
                     );
              }
       },
};
