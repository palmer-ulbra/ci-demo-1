import { expect, test } from "vitest";
import { cumprePreRequisito } from "../src/regras.js";

const bd2 = { codigo: "BD-II", pre_requisito: "BD-I" };

test("aprovada em BD-I, Marina pode cursar BD-II", async () => {
  expect(await cumprePreRequisito("marina", bd2)).toBe(true);
}, 30); // o teste tem 30 ms para terminar

test("sem BD-I, João não pode cursar BD-II", async () => {
  expect(await cumprePreRequisito("joao", bd2)).toBe(false);
});
