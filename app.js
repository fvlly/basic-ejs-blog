const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");
const date = require(__dirname + "/date.js");

const app = express();

const posts = [];

const homeContent =
  "Welcome, there really is not much to say to be very honest, this is a personal journal created to doucment my journey from a rookie web developer to the upper echelons, I do hope you find this domain helpful as well as the materials which would be constantly uploaded, without further ado, help yourselves out";

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const aboutContent = `The project newBie is aimed at helping new web developers connect,share ideas and team up on wonderful porjects in the short and long term, it's daunting entering into relatively untested waters, this platform hopes to ease the integration process for free.`;

const contactContent =
  "If you have got any questions oor feedback you would like to give, do reach me as follows :";

app.get("/", (req, res) => {
  let day = date();

  res.render("home", { homeContent: homeContent, posts: posts, day: day });
});
app.get("/about", (req, res) => {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contactContent: contactContent });
});
app.get("/compose", (req, res) => {
  res.render("compose", {});
});
app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName", (req, res) => {
  const requestedTitle = _.lowerCase(req.params.postName);
  let day = date();

  posts.forEach((post) => {
    // checking if the titles match
    const storedTitle = _.lowerCase(post.title);
    if (requestedTitle === storedTitle) {
      res.render("posts", {
        title: post.title,
        content: post.content,
        day: day,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Sever is up and running !!!");
});
