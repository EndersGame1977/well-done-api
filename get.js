const axios = require("axios");
const Prismic = require("prismic-javascript");
const db = require("./database/dbConfig");
const netlifyURL =
  "https://dashboard.welldone.org/.netlify/functions/get_momo_status?id=";
const prismicURL = "https://welldone-dashboard.cdn.prismic.io/api/v2";

// * GET SITE *
const getSite = async function() {
  try {
    const api = await Prismic.getApi(prismicURL);
    const result = await api.query([
      Prismic.Predicates.at("document.type", "village")
    ]);
    site(result.results);
  } catch (error) {
    console.log("ERROR @ GET SITE");
    console.log({ message: error.message });
  }
};
getSite();

// * GET PUMP *
const getPump = async function() {
  try {
    const api = await Prismic.getApi(prismicURL);
    const result = await api.query([
      Prismic.Predicates.at("document.type", "pump")
    ]);
    pump(result.results);
    sensor(result.results); //Provides sensorID to get status
    console.log("sensor: ", reult.results);
  } catch (error) {
    console.log("ERROR @ GET PUMP");
    console.log({ message: error.message });
  }
};
getPump();

// * GET STATUS *
const sensor = async function(sensor) {
  for (let i = 0; i < sensor.length; i++) {
    const sensorID = await sensor[i].uid;
    async function getStatus() {
      try {
        const response = await axios.get(`${netlifyURL}${sensorID}`, {
          timeout: 100000000
        });
        console.log("@ GET STATUS", response.data.statuses, sensorID);
        status(response.data, sensorID);
      } catch (error) {
        console.log("ERROR @ GET STATUS");
        console.log({ message: error.message });
      }
    }
    getStatus();
  }
};

// * SITE SEED *
const site = function(site) {
  for (let i = 0; i < site.length; i++) {
    let SiteSeed = {
      id: site[i].id,
      village: site[i].data.village,
      commune: site[i].data.commune,
      district: site[i].data.district,
      province: site[i].data.province
    };
    //console.log(SiteSeed);
    addSiteSeed(SiteSeed);
  }
};

// * ADD SITE SEED *
function addSiteSeed(SiteSeed) {
  return (
    db("SiteTable")
      .insert(SiteSeed)
      //.returning("id")
      .then(res => {
        console.log("AddSiteSeed: ", res);
      })
      .catch(error => {
        console.log("ERROR @ ADD SITE SEED");
        console.log({ message: error.message });
      })
  );
}

// * PUMP SEED *
const pump = function(pump) {
  for (let i = 0; i < pump.length; i++) {
    let PumpSeed = {
      id: pump[i].id,
      sensor: pump[i].uid,
      constructed: pump[i].data.finish_construction,
      depth: pump[i].data.well_depth,
      yield: pump[i].data.yield,
      static: pump[i].data.static,
      levelDynamic: pump[i].data.level_dynamic,
      latitude: pump[i].data.latitude,
      longitude: pump[i].data.longitude
    };
    //console.log("PumpSeed: ", PumpSeed);
    addPumpSeed(PumpSeed);
  }
};

// * ADD PUMP SEED *
function addPumpSeed(PumpSeed) {
  return (
    db("PumpTable")
      .insert(PumpSeed)
      //.returning("id")
      .then(res => {
        console.log("AddPumpSeed: ", res);
      })
      .catch(error => {
        console.log("ERROR @ ADD PUMP SEED");
        console.log({ message: error.message });
      })
  );
}

// * STATUS SEED *
const status = function(status, sensorID) {
  for (let i = 0; i < status.statuses.length; i++) {
    console.log(sensorID);
    let StatusSeed = {
      sensor: sensorID,
      date: status.dates[i],
      status: status.status,
      count: status.statuses[i].count,
      total: status.statuses[i].total,
      percent: status.statuses[i].reportedPercent,
      padSecondOne: status.statuses[i].padSeconds[0],
      padSecondTwo: status.statuses[i].padSeconds[1],
      padSecondThree: status.statuses[i].padSeconds[2],
      padSecondFour: status.statuses[i].padSeconds[3],
      padCountOne: status.statuses[i].padCounts[0],
      padCountTwo: status.statuses[i].padCounts[1],
      padCountThree: status.statuses[i].padCounts[2],
      padCountFour: status.statuses[i].padCounts[3]
    };
    //console.log(StatusSeed);
    addStatusSeed(StatusSeed);
  }
};

// * ADD STATUS SEED *
function addStatusSeed(StatusSeed) {
  return (
    db("StatusTable")
      .insert(StatusSeed)
      //.returning("id")
      .then(res => {
        console.log("AddStatusSeed: ", res);
      })
      .catch(error => {
        console.log("ERROR @ ADD STATUS SEED");
        console.log({ message: error.message });
      })
  );
}
