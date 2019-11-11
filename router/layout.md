//**\*\*\*\***OrganizationRouter**\*\*\*\***//
// [METHOD] GET
// [ROUTE] /organization
// [DESCRIPTION] To retrieve a list of organizations.
// [TABLE] OrganizationTable

// [METHOD] GET
// [ROUTE] /organization/:id
// [DESCRIPTION] To retrieve a organizations.
// [TABLE] OrganizationTable

// [METHOD] GET
// [ROUTE] /organization/:id/pump
// [DESCRIPTION] To retrieve a list of pumps for an organization.
// [TABLE] PumpTable, OrganizationTable

// [METHOD] POST
// [ROUTE] /organization
// [DESCRIPTION] To create a new organization.
// [TABLE] OrganizationTable

// [METHOD] PATCH
// [ROUTE] /organization/:id
// [DESCRIPTION] To modify an existing organization.
// [TABLE] OrganizationTable

// [METHOD] DELETE
// [ROUTE] /organization/:id
// [DESCRIPTION] To remove a organization.
// [TABLE] OrganizationTable

//**\*\*\*\***PumpRouter**\*\*\*\***//
// [METHOD] GET
// [ROUTE] /pump
// [DESCRIPTION] To retrieve a list of pumps.
// [TABLE] PumpTable, SiteTable, StatusTable, OrganizationTable

// [METHOD] GET
// [ROUTE] /pump/:id
// [DESCRIPTION] To retrieve a pump.
// [TABLE] PumpTable, SiteTable, StatusTable, OrganizationTable

// [METHOD] GET
// [ROUTE] /pump/:id/date
// [DESCRIPTION] To retrieve a pump with dates.
// [TABLE] PumpTable, SiteTable, DateTable, OrganizationTable

// [METHOD] POST
// [ROUTE] /pump
// [DESCRIPTION] To create a new pump.
// [TABLE] PumpTable

// [METHOD] PATCH
// [ROUTE] /pump/:id
// [DESCRIPTION] To modify an existing pump.
// [TABLE] PumpTable

// [METHOD] DELETE
// [ROUTE] /pump/:id
// [DESCRIPTION] To remove a pump.
// [TABLE] PumpTable

GET /user to retrieve a list of users,
GET /user/:id to retrieve a user,
POST /user or PUT /user:/id to create a new user,
PATCH /user/:id to modify an existing user record,
DELETE /user/:id to remove a user.
