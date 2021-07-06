// module for generating the date - this is a node.js thing

// date module now exports this string
//module.exports.getDate = getDate;   // no brackets - don't want to call the funtion yet

// compact way
exports.getDate = function() {
  // get date
  const today = new Date();
  // use to format the date when rendered
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  // options format the date string
  return today.toLocaleDateString("en-US", options);
}


// my preferred weekday
module.exports.getDay = getDay;

var getDay = function() {

  // get date
  const today = new Date();

  // use to format the date when rendered
  const options = {
    weekday: "long",
  };

  // options format the date string
  return today.toLocaleDateString("en-US", options);

}
