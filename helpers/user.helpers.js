
module.exports = (hbs) => {
  hbs.registerHelper('isAdmin', (user, options) => {
    if (user.role === 'ADMIN') {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  })
}