const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
    res.render("index")
})

app.listen(process.env.PORT || 3000, process.env.IP, (err) => {
    if(err) console.log("ERROR: " + err.message);
    else {
        console.log("Portfolio has started!");
    }
});
