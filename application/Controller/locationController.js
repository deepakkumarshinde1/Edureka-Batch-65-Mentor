let location = require("../Model/location.json");
let restaurant = require("../Model/restaurantdata.json");

module.exports.getLocation = (request, response) => {
  response.send({ status: true, location });
};

module.exports.getRestaurant = (request, response) => {
  let data = request.params;
  let result = restaurant.filter((rest) => {
    let city_name = rest.city_name.toLowerCase();
    data.city = data.city.toLowerCase();
    return city_name === data.city;
  });
  response.send({ status: true, result });
};
