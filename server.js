import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

/* FACT API */
app.get("/fact", async (req, res) => {
  const r = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const d = await r.json();

  res.json({
    fact: d.text
  });
});

/* ADVICE API (fact API'yi kullanır) */
app.get("/advice", async (req, res) => {
  const factRes = await fetch("http://localhost:3000/fact");
  const fact = await factRes.json();

  const adviceRes = await fetch("https://api.adviceslip.com/advice");
  const advice = await adviceRes.json();

  res.json({
    based_on_fact: fact.fact,
    advice: advice.slip.advice
  });
});

app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});
