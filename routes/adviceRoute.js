import express from "express";
import { getFact } from "../services/factService.js";
import { getAdvice } from "../services/adviceService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const fact = await getFact();
  const advice = await getAdvice();

  res.json({
    based_on_fact: fact,
    advice
  });
});

export default router;
