exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("NoteTable")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("NoteTable").insert([
        {
          id: 1,
          text: "TextOne"
        },
        {
          id: 2,
          text: "TextTwo"
        },
        {
          id: 3,
          text: "TextThree"
        },
        {
          id: 4,
          text: "TextFour"
        }
      ]);
    });
};
