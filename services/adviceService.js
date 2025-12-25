import fetch from "node-fetch";

export async function getAdvice() {
  const r = await fetch("https://api.adviceslip.com/advice");
  const d = await r.json();
  return d.slip.advice;
}
