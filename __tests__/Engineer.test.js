const Engineer = require("../lib/Engineer.js");

test("Creates engineer object", () => {
  const engineer = new Engineer("Jessica", 2, "jessica@email.com", "github_username");

  expect(engineer.name).toEqual("Jessica");
  expect(engineer.id).toEqual(2);
  expect(engineer.email).toEqual("jessica@email.com");
  expect(engineer.github).toEqual("github_username");
});

test("Gets engineer's GitHub username", () => {
  const engineer = new Engineer("Jessica", 2, "jessica@email.com", "github_username");

  expect(engineer.getGithub()).toEqual(engineer.github);
});

test("Gets engineer's role", () => {
  const engineer = new Engineer("Jessica", 2, "jessica@email.com", "github_username");

  expect(engineer.getRole()).toEqual("Engineer");
});