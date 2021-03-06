const express = require("express");
const app = express();
const apiRouter = require("./index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", apiRouter);

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.use((req, res, next) => {
    res.status(404).send({
        data: {
            error: 'Not found',
        },
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});