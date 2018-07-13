const hbs = require('hbs');
const path = require('path');
const helpers = require('handlebars-helpers')();

hbs.registerPartials(path.join(__dirname, '../views/partials'));
require('../helpers/user.helpers')(hbs);
