import express from "express";
import factRoute from "./routes/factRoute.js";
import adviceRoute from "./routes/adviceRoute.js";

const app = express();
const PORT = 3000;

app.use("/fact", factRoute);
app.use("/advice", adviceRoute);

app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});
