const express = require("express");

const app = express();
const port = 3000;

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