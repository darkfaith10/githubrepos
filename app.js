const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

const userRepos = [];

app.post("/repos", async function(req, res) {
  const username = req.body.username;
  const page = req.query.page || 1;
  const perPage = Math.min(req.query.perPage || 10, 100);

  try {
    const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        page: page,
        per_page: perPage
      }
    });
    const repos = reposResponse.data;

    userRepos.length = 0;
    repos.forEach(repo => {
      userRepos.push({
        name: repo.name,
        url: repo.html_url
      });
    });

    const userResponse = await axios.get(`https://api.github.com/users/${username}`);
    const user = userResponse.data;

    res.render("repos", {
      username: username,
      userRepos: userRepos,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      page: parseInt(page),
      perPage: perPage,
      url: "https://github.com/" + username
    });
  } catch (error) {
    console.error(error);
    res.render("error", { error: "User not found" });
  }
});

app.get("/repos", function(req, res) {
  res.render("repos", {
    username: '',
    repos: userRepos,
    avatarUrl: '',
    bio: ''
  });
});

app.listen(3000, () => {
  console.log("Server running on port: 3000");
});
