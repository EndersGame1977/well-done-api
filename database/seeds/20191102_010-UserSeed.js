const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("UserTable")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("UserTable").insert([
          {
            id: 1,
            username: "james",
            password: bcrypt.hashSync("password", 10),
            email: "user1@gmail.com",
            organization: "OrgOne",
            sms: "555-555-5555",
            isAdmin: false
          },
          {
            id: 2,
            username: "dean",
            password: bcrypt.hashSync("password", 10),
            email: "user2@gmail.com",
            organization: "OrgOne",
            sms: "666-666-6666",
            isAdmin: false
          },
          {
            id: 3,
            username: "john",
            password: bcrypt.hashSync("password", 10),
            email: "user3@gmail.com",
            organization: "OrgTwo",
            sms: "777-777-7777",
            isAdmin: false
          },
          {
            id: 4,
            username: "Doe",
            password: bcrypt.hashSync("password", 10),
            email: "user4@gmail.com",
            organization: "OrgOne",
            sms: "888-888-8888",
            isAdmin: false
          }
        ]);
      })
  );
};
