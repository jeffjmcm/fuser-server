const express = require("express");
const bcrypt = require('bcrypt');
var app = express();

const users = [
    {
        username: "chuffrey",
        password: "TBD",
    }
];

async function register(req, res) {
    try {
        console.log("register request received!");
        const salt = await bcrypt.genSalt();
        
        const data = req.body;
        console.log(JSON.stringify(data));
        
        const hashedPW = await bcrypt.hash(data.password, salt);
        const newUser = {};
        
        newUser.username = data.username;
        newUser.password = hashedPW;
        
        users.push(newUser);
        
        console.log(salt);
        console.log(hashedPW);
    } catch(error) {
        console.log(error);
    }
}

async function login(res,req) {  
};

app.use(express.json()) // for parsing application/json

app.get("/", (req,res) => {
    res.redirect('/static/index.html');
});

app.use("/static", express.static("static"));

app.post("/user/register", register)
app.post("/user/login", login);

app.listen(3000, () => {
    console.log("listesning on port 3000...");
});