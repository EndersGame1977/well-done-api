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
    // for (let i = 0; i < result.results.length; i++) {
    //   const element = result.results[i].uid;
    //   console.log("Sensor_PID |", element);
    //   sensor(element); //Provides sensorID to get status
    // }
    pump(result.results);
  } catch (error) {
    console.log("ERROR @ GET PUMP");
    console.log({ message: error.message });
  }
};
getPump();

// * GET STATUS *
const url =
  "https://dashboard.welldone.org/.netlify/functions/get_momo_status?id=";
async function getStatus(pidsensor) {
  const pid_sensor = [
    4724,
    4763,
    4728,
    4723,
    4755,
    4725,
    4727,
    4746,
    4764,
    //7418, not found
    4721,
    4747,
    4743,
    4734,
    4717,
    4750,
    4729,
    4749,
    4754,
    4719
  ];
  try {
    // * Loops through sensors
    for (let i = 0; i < pid_sensor.length; i++) {
      const response = await axios.get(`${url}${pid_sensor[i]}`);
      if (Object.keys(response.data).length > 3) {
        status(response.data, pid_sensor[i]);
        console.log("STATUSES", response.data.statuses);
        console.log("SENSOR", pid_sensor[i]);
        console.log("DATE", response.data.dates);
        // * Loops through statuses and dates
        for (let j = 0; j < response.data.dates.length; j++) {
          day(response.data.statuses[j], response.data.dates[j], pid_sensor[i]);
        }
      } else {
        // console.log("sensor failed length test", pid_sensor[i], response.data);
      }
    }
  } catch (err) {
    console.log({ GETSTATUS_message: err.message });
  }
}
getStatus();

// * SITE SEED *
const site = function(site) {
  for (let i = 0; i < site.length; i++) {
    let SiteSeed = {
      site_uid: site[i].id,
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
        console.log("AddSiteSeed |", res);
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
      pump_uid: pump[i].id,
      sensor_pid: pump[i].uid,
      site_uid: pump[i].data.village.id,
      constructed: pump[i].data.finish_construction,
      depth: pump[i].data.well_depth,
      yield: pump[i].data.yield,
      static: pump[i].data.static,
      level_dynamic: pump[i].data.level_dynamic,
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
        console.log("AddPumpSeed |", res);
      })
      .catch(error => {
        console.log("ERROR @ ADD PUMP SEED");
        console.log({ message: error.message });
      })
  );
}

// * STATUS SEED *
const status = function(response, pid_sensor) {
  //for (let i = 0; i < response.length; i++) {
  let StatusSeed = {
    pid_sensor: pid_sensor,
    //date: response.dates[i],
    status: response.status,
    count: response.reportCount,
    second: response.reportedSeconds,
    percent: response.reportedPercent,
    total_second: response.totalSeconds,
    unreported_second: response.unreportedSeconds,
    pad_second_one: response.padSeconds[0],
    pad_second_two: response.padSeconds[1],
    pad_second_three: response.padSeconds[2],
    pad_second_four: response.padSeconds[3],
    pad_count_one: response.padCounts[0],
    pad_count_two: response.padCounts[1],
    pad_count_three: response.padCounts[2],
    pad_count_four: response.padCounts[3]
  };
  console.log("StatusSeed |", StatusSeed);
  addStatusSeed(StatusSeed);
  //}
};

// * ADD STATUS SEED *
function addStatusSeed(StatusSeed) {
  return (
    db("StatusTable")
      .insert(StatusSeed)
      //.returning("id")
      .then(res => {
        console.log("AddStatusSeed |", res);
      })
      .catch(error => {
        console.log("ERROR @ ADD STATUS SEED");
        console.log({ message: error.message });
      })
  );
}

// * DAY SEED *
const day = function(response, date, pid_sensor) {
  console.log(response.count);
  let DaySeed = {
    sensor_pid: pid_sensor,
    date: date,
    count: response.count,
    total: response.total,
    status: response.status,
    percent: response.reportedPercent,
    pad_second_one: response.padSeconds[0],
    pad_second_two: response.padSeconds[1],
    pad_second_three: response.padSeconds[2],
    pad_second_four: response.padSeconds[3],
    pad_count_one: response.padCounts[0],
    pad_count_two: response.padCounts[1],
    pad_count_three: response.padCounts[2],
    pad_count_four: response.padCounts[3]
  };
  console.log("DaySeed |", DaySeed);
  addDateSeed(DaySeed);
};

// * ADD DATE SEED *
function addDateSeed(DateSeed) {
  return (
    db("DateTable")
      .insert(DateSeed)
      //.returning("id")
      .then(res => {
        console.log("AddDateSeed |", res);
      })
      .catch(error => {
        console.log("ERROR @ ADD STATUS SEED");
        console.log({ message: error.message });
      })
  );
}
