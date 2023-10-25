const request = require("supertest");
const { api, server } = require("../index");

// https://github.com/ladjs/supertest
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

beforeAll(() => {
  // Use the test database defined in the `PGDATABASETEST` .env variable
  // https://node-postgres.com/features/connecting#environment-variables
  process.env.PGDATABASE = process.env.TESTPGDATABASE;
});


test("GET /collections/:slug with a valid slug returns a 200 status JSON response", async () => {
  const res = await request(api).get("/collections/wildlife");
  expect(res.statusCode).toBe(200);
  expect(res.headers["content-type"]).toMatch(/json/);
});

test("GET /collections/:slug JSON objects have the correct attributes", async () => {
  const res = await request(api).get("/collections/wildlife");
  const data = JSON.parse(res.text);

  const expectedAttributes = ["id", "name", "slug", "description"];
  expect(Object.keys(data)).toStrictEqual(expectedAttributes);
});

test("GET /collections/:slug with a non-existent slug returns a 404 status code", async () => {
  const res = await request(api).get("/collections/non-existent-slug");
  expect(res.statusCode).toBe(404);
});


afterAll(() => {
  // https://stackoverflow.com/q/8659011/11262798
  server.close();
});
