import createMongoConnection from "./db/index";
const app = require("express")();
require("dotenv").config();
const bodyParser = require("body-parser");
const api = require("./routes");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

import { scheduler } from "./schedulers";
import { autoScrape } from "./scrapers/scraping/autoScrape";

// CONNECT TO MONGODB
createMongoConnection();

const port = process.env.PORT || 8000;

const corsOptions = {
  origin: function (origin: string, callback: any) {
    // Vérifiez si l'origine est une extension Chrome
    callback(null, true);
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 2000, // Limit each IP to 700 requests per `window` (here, per 5 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(cookieParser());

app.use(cors(corsOptions));

app.use(
  bodyParser.json({
    limit: "10mb",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use("/", apiLimiter, api);

// PREVENT CRASH
process.on("uncaughtException", (error) => {
  console.log("Alert! ERROR : ", error);
});
process.on("unhandledRejection", (error, promise) => {
  console.log("Alert! ERROR : ", error);
});
// CONNECT SERVER

const listener = app.listen(port, () => {
  console.log("Your app is listening on port" + listener.address().port);
});

// SCRAPING SCHEDULERS

scheduler();

/* TEST YOUR SCRAPING DIRECTLY */
autoScrape();
