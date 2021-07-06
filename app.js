
const express = require("express");
const bodyParser = require("body-parser");

// require module located locally at this directory
const date = require(__dirname + "/date.js");

// equal to whatever we exported out of the module - passes the getDate function
//console.log(date());

const app = express();

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.getDate(); //calling the date module which runs the getDate() function
  res.render("list", {listTitle: day, newListItems: items});
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/", function(req, res) {
  item = req.body.newItem;

  // check if post req was from work list or reg list, redirect appropriately
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");    // when post req triggered on home route, save new item val, redirect to home route, triggering the render
  }

});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);
  redirect("/work");
});

app.listen(3000, function() {
  console.log("Server started on port 3000")
});
