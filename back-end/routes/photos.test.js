const request = require("supertest");
const { api, server } = require("../index");

// https://github.com/ladjs/supertest
// https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

test("GET /photos returns a 404 status code", async () => {
   const res = await request(api).get("/photos");
   expect(res.statusCode).toBe(404);
  
});

afterAll(() => {
  // https://stackoverflow.com/q/8659011/11262798
  server.close();
});
