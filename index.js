let addDays = require("date-fns/addDays");
function date(num) {
  const result = addDays(new Date("22, Aug, 2020"), num);
  return result;
}
module.exports = date;
