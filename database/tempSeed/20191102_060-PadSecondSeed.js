exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("PadSecondTable")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("PadSecondTable").insert([
        {
          id: 1,
          secondOne: 1,
          secondTwo: 1,
          secondThree: 1,
          secondFour: 1
        },
        {
          id: 2,
          secondOne: 2,
          secondTwo: 2,
          secondThree: 2,
          secondFour: 2
        },
        {
          id: 3,
          secondOne: 3,
          secondTwo: 3,
          secondThree: 3,
          secondFour: 3
        },
        {
          id: 4,
          secondOne: 4,
          secondTwo: 4,
          secondThree: 4,
          secondFour: 4
        }
      ]);
    });
};
