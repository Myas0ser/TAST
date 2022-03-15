const { role } = require("../../middlewear/auth");

const endPoints = {
    postCrud: [role.Admin, role.User],
}
module.exports = { endPoints }