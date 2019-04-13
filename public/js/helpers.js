
var moment = require("moment");


var register = function (Handlebars) {
  var helpers = {
      format_date: function (date) {
        return moment(date).format("LL");//.toUpperCase()
        //  return moment(date).format(format);
      }
  };

  if (Handlebars && typeof Handlebars.registerHelper === "function") {
      for (var prop in helpers) {
          Handlebars.registerHelper(prop, helpers[prop]);
      }
  } else {
      return helpers;
  }
g
};

module.exports.register = register;
module.exports.helpers = register(null);