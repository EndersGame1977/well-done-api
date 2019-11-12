exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("HistoryTable")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("HistoryTable").insert([
        {
          id: 1,
          date: "2001-01-01",
          count: 1,
          total: 1,
          percent: 1.1
        },
        {
          id: 2,
          date: "2002-02-02",
          count: 2,
          total: 2,
          percent: 2.2
        },
        {
          id: 3,
          date: "2003-03-03",
          count: 3,
          total: 3,
          percent: 3.3
        },
        {
          id: 4,
          date: "2004-04-04",
          count: 4,
          total: 4,
          percent: 4.4
        }
      ]);
    });
};
