const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');

const { connectMongoDb } = require("./connect");
const URL = require("./models/url");
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth")

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;

//connection
connectMongoDb("mongodb://127.0.0.1:27017/short-url")
    .then(() => console.log("MongoDb Connected"));

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

app.use(express.json())                     // we support json data
app.use(express.urlencoded({ extended: false }))        // form data ko parse karne ke liye
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/url/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))