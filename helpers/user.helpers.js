const constants = require('../constants');

module.exports = (hbs) => {
  hbs.registerHelper('isAdmin', (user, options) => {
    if (user.role === constants.ROLE_ADMIN) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  })
}