const db = require("../../database/dbConfig");

module.exports = {
  getOrganization,
  getOrganizationById,
  getOrganizationByIdPump,
  addOrganization,
  updateOrganization,
  removeOrganization
};

// [METHOD] GET
// [ROUTE] /organization
// [MODULE] getOrganization
// [DESCRIPTION] To retrieve a list of organizations.
// [TABLE] OrganizationTable

// [METHOD] GET
// [ROUTE] /organization/:id
// [MODULE] getOrganizationById
// [DESCRIPTION] To retrieve a organization.
// [TABLE] OrganizationTable

// [METHOD] GET
// [ROUTE] /organization/:id/pump
// [MODULE] getOrganizationByIdPump
// [DESCRIPTION] To retrieve a organization with pumps.
// [TABLE] PumpTable, SiteTable, StatusTable, OrganizationTable

// [METHOD] POST
// [ROUTE] /organization
// [MODULE] addOrganization
// [DESCRIPTION] To create a new organization.
// [TABLE] OrganizationTable

// [METHOD] PATCH
// [ROUTE] /organization/:id
// [MODULE] updateOrganization
// [DESCRIPTION] To modify an existing organization.
// [TABLE] OrganizationTable

// [METHOD] DELETE
// [ROUTE] /organization/:id
// [MODULE] removeOrganization
// [DESCRIPTION] To remove a organization.
// [TABLE] OrganizationTable
