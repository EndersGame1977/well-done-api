// const db = require("../../database/dbConfig");

// module.exports = {
//   getPump,
//   getPumpById,
//   getPumpByIdDate,
//   addPump,
//   updatePump,
//   removePump
// };

// // [METHOD] GET
// // [ROUTE] /pump
// // [MODULE] getPump
// // [DESCRIPTION] To retrieve a list of pumps.
// // [TABLE] PumpTable, SiteTable, StatusTable, OrganizationTable

// const getPump = () => {
//   return db("PumpTable")
//     .join("StatusTable", "StatusTable.sensor_pid", "PumpTable.sensor_pid")
//     .join(
//       "OrganizationTable, OrganizationTable.id",
//       "PumpTable.Organization_id"
//     )
//     .join("SiteTable", "SiteTable.site_uid", "PumpTable.site_uid")
//     .join("StatusTable", "StatusTable.sensor_pid", "PumpTable.sensor_pid")
//     .select();
// };

// // [METHOD] GET
// // [ROUTE] /pump/:id
// // [MODULE] getPumpById
// // [DESCRIPTION] To retrieve a pump.
// // [TABLE] PumpTable, SiteTable, StatusTable, OrganizationTable

// // [METHOD] GET
// // [ROUTE] /pump/:id/date
// // [MODULE] getPumpByIdDate
// // [DESCRIPTION] To retrieve a pump with dates.
// // [TABLE] PumpTable, SiteTable, DateTable, OrganizationTable

// // [METHOD] POST
// // [ROUTE] /pump
// // [MODULE] addPump
// // [DESCRIPTION] To create a new pump.
// // [TABLE] PumpTable

// // [METHOD] PATCH
// // [ROUTE] /pump/:id
// // [MODULE] updatePump
// // [DESCRIPTION] To modify an existing pump.
// // [TABLE] PumpTable

// // [METHOD] DELETE
// // [ROUTE] /pump/:id
// // [MODULE] removePump
// // [DESCRIPTION] To remove a pump.
// // [TABLE] PumpTable
