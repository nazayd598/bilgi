import fetch from "node-fetch";

export async function getFact() {
  const r = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const d = await r.json();
  return d.text;
}
