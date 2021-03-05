const express = require("express");
const app = express();
var env = process.env.PORT || 4000;

//! for serving static file
app.use("/static", express.static("static"));
app.use(express.urlencoded());


//! set templates which is called views in nodejs
app.set("view engine", "hbs");
app.engine("html", require("hbs").__express);

app.get("/" , (req,res) => {
    res.status(200).render("index");
})

app.get("/about" , (req,res) => {
    res.status(200).render("about");
})

app.get("/weath" , (req,res) => {
    res.status(200).render("weath");
})

app.get("*" , (req,res) => {
    res.status(404).render("ops");
})

app.listen(env , () => {
    console.log(`Server is run ${env}`)
})