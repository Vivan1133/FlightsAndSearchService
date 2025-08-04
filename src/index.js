const express = require("express");
const { PORT } = require("./configs/index");
const bodyparser = require("body-parser")

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at PORT: ${PORT}`);
    })

}

setupAndStartServer();