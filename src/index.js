const express = require("express");
const { PORT } = require("./config/index");
const bodyparser = require("body-parser")
const apiRoutes = require("./routes/index");

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at PORT: ${PORT}`);
    })
}   

setupAndStartServer();