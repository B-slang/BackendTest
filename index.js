const express = require("express");

const app = express();
const port = 3000;

const admin = (req, res) => {
    return res.send("homieee");
};

const isAdmin = (req, res, next) => {
    console.log("isAdmin is running");
    next();
};


const isloggedIn = (req, res, next) => {
    console.log("isloggedIn is running");
    next();
};


app.get("/admin", isloggedIn ,isAdmin, admin);



app.get("/login", (req, res) => {
    return res.send ("HEllooow")
});
app.get("/sign", (req, res) => {
    return res.send ("signnnn")
});

app.get("/signout", (req, res) => {
    return res.send ("signnnn")
});


app.get("/out", function (req, res) {
        return res.send("signnnn");
    });

app.listen(port, () => {
    console.log("Server is up");
});