const apiRouter = require("express").Router();
const mLocation = require("../Controller/locationController");

apiRouter.get("/", (request, response) => {
  response.send("hello, its express js");
});

apiRouter.post("/save-user", (request, response) => {
  var user = request.body;
  response.send({ user });
});

apiRouter.get("/location-list", mLocation.getLocation);
apiRouter.get("/restaurant-list/:city", mLocation.getRestaurant);

module.exports = apiRouter;
