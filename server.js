const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
mongoose.connect(process.env.MONGODB_URI || "mongodb://yoloko:Godisgreat@44@ads125871.mlab.com:25871/heroku_0xn0jnk7"
);

// Start the API server
//if (process.env.NODE_ENV === "production"){
  //app.use(express.static("client/build"));

//}
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
