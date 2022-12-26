const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
    fs.readFile(__dirname + "/accounts.json", "utf8", (err, data) => {
        if (err) throw err;

        const accounts = JSON.parse(data);
        const username = req.body.username;
        const password = req.body.password;

        for (const user of accounts.users) {
            if (user.username === username && user.password === password) {
                if (user.isAdmin) {
                    res.sendFile(__dirname + "/admin.html");
                } else {
                    res.sendFile(__dirname + "/user.html");
                }
                return;
            }
        }

        res.send("Sai tai khoan hoac mat khau");
    });
});

app.listen(3000, () => {
    console.log("Server: http://localhost:3000/");
});
