
const express= require("express");
const path= require("path");
const routes= require("./routes");

const app= express();
app.set("port", 3000);

app.use("/add", routes);

const server= app.listen(app.get("port"), function() {
const port= server.address().port;
console.log("Listening to port "+ port);
});


