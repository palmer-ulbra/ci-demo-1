import { expect, test } from "vitest";
import { cumprePreRequisito } from "../src/regras.js";

const bd2 = { codigo: "BD-II", pre_requisito: "BD-I" };

test("aprovada em BD-I, Marina pode cursar BD-II", async () => {
  let pode;
  cumprePreRequisito("marina", bd2).then((r) => (pode = r));

  await new Promise((resolve) => setTimeout(resolve, 50)); // dá tempo do histórico responder
  expect(pode).toBe(true);
});

test("sem BD-I, João não pode cursar BD-II", async () => {
  expect(await cumprePreRequisito("joao", bd2)).toBe(false);
});
