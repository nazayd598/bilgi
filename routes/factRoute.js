import express from "express";
import { getFact } from "../services/factService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const fact = await getFact();
  res.json({ fact });
});

export default router;
