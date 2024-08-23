const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from Gabriel Lopez to the Office Hours in the terminal!");
  });
});
