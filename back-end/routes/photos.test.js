const request = require("supertest");
const { api, server } = require("../index");

// https://github.com/ladjs/supertest
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

beforeAll(() => {
  // Use the test database defined in the `PGDATABASETEST` .env variable
  // https://node-postgres.com/features/connecting#environment-variables
  process.env.PGDATABASE = process.env.TESTPGDATABASE;
});


test("GET /photos returns a 200 status JSON response", async () => {
  const res = await request(api).get("/photos");
  expect(res.statusCode).toBe(200);
  expect(res.headers["content-type"]).toMatch(/json/);
});

test("GET /photos?collection_id=3 returns a 200 status JSON response", async () => {
  const res = await request(api).get("/photos?collection_id=3");
  expect(res.statusCode).toBe(200);
  expect(res.headers["content-type"]).toMatch(/json/);
});

test("GET /photos returns all photos", async () => {
  const res = await request(api).get("/photos");
  const data = JSON.parse(res.text);
  expect(data.length).toBe(6);  // 6 photos in the photos table
});

test("GET /photos?collection_id=3 returns photos filtered by category", async () => {
  const res = await request(api).get("/photos?collection_id=3");
  const data = JSON.parse(res.text);
  expect(data.length).toBe(2);  // 2 photos in the wildlife category
});

test("GET /photos JSON photo objects have the correct attributes", async () => {
  const res = await request(api).get("/photos");
  const data = JSON.parse(res.text);

  const expectedAttributes = ["id", "title", "slug", "summary_text", "detail_text", "location", "date_taken", "filename"];
  expect(Object.keys(data[0])).toStrictEqual(expectedAttributes);
  expect(Object.keys(data[5])).toStrictEqual(expectedAttributes);
});


test("GET /photos/:id with a valid ID returns a 200 status JSON response", async () => {
  const res = await request(api).get("/photos/3");
  expect(res.statusCode).toBe(200);
  expect(res.headers["content-type"]).toMatch(/json/);
});

test("GET /photos/:id JSON photo objects have the correct attributes", async () => {
  const res = await request(api).get("/photos/3");
  const data = JSON.parse(res.text);

  const expectedAttributes = ["id", "title", "slug", "summary_text", "detail_text", "location", "date_taken", "filename"];
  expect(Object.keys(data)).toStrictEqual(expectedAttributes);
});

test("GET /photos/:id with a non-existent ID returns a 404 status code", async () => {
  const res = await request(api).get("/photos/999");
  expect(res.statusCode).toBe(404);
});


afterAll(() => {
  // https://stackoverflow.com/q/8659011/11262798
  server.close();
});
