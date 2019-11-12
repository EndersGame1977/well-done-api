exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("PadCountTable")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("PadCountTable").insert([
        {
          id: 1,
          countOne: 1,
          countTwo: 1,
          countThree: 1,
          countFour: 1
        },
        {
          id: 2,
          countOne: 2,
          countTwo: 2,
          countThree: 2,
          countFour: 2
        },
        {
          id: 3,
          countOne: 3,
          countTwo: 3,
          countThree: 3,
          countFour: 3
        },
        {
          id: 4,
          countOne: 4,
          countTwo: 4,
          countThree: 4,
          countFour: 4
        }
      ]);
    });
};
