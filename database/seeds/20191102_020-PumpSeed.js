exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("PumpTable")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("PumpTable").insert([
        {
          id: 1,
          sensorID: 1,
          constructed: "2015-05-05",
          depth: 1,
          yield: 1,
          static: 1,
          levelDynamic: 1,
          currentStatus: 1,
          latitude: 1.1,
          longitude: 1.1,
          village: "VillageOne",
          commune: "CommuneOne",
          district: "DistrictOne",
          province: "ProvinceOne"
        },
        {
          id: 2,
          sensorID: 2,
          constructed: "2015-05-05",
          depth: 2,
          yield: 2,
          static: 2,
          levelDynamic: 2,
          currentStatus: 2,
          latitude: 2.2,
          longitude: 2.2,
          village: "VillageTwo",
          commune: "CommuneTwo",
          district: "DistrictTwo",
          province: "ProvinceTwo"
        },
        {
          id: 3,
          sensorID: 3,
          constructed: "2015-05-05",
          depth: 3,
          yield: 3,
          static: 3,
          levelDynamic: 3,
          currentStatus: 3,
          latitude: 3.3,
          longitude: 3.3,
          village: "VillageThree",
          commune: "CommuneThree",
          district: "DistrictThree",
          province: "ProvinceThree"
        },
        {
          id: 4,
          sensorID: 4,
          constructed: "2015-05-05",
          depth: 4,
          yield: 4,
          static: 4,
          levelDynamic: 4,
          currentStatus: 4,
          latitude: 4.4,
          longitude: 4.4,
          village: "VillageFour",
          commune: "CommuneFour",
          district: "DistrictFour",
          province: "ProvinceFour"
        }
      ]);
    });
};
