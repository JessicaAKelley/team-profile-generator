const Intern = require("../lib/Intern.js");

test("Creates intern object", () => {
  const intern = new Intern("Jessica", 3, "jessica@email.com", "Loyola University Chicago");

  expect(intern.name).toEqual("Jessica");
  expect(intern.id).toEqual(3);
  expect(intern.email).toEqual("jessica@email.com");
  expect(intern.school).toEqual("Loyola University Chicago");
});

test("Gets intern's school", () => {
  const intern = new Intern("Jessica", 3, "jessica@email.com", "Loyola University Chicago");

  expect(intern.getSchool()).toEqual(intern.school);
});

test("Gets intern's role", () => {
  const intern = new Intern("Jessica", 3, "jessica@email.com", "Loyola University Chicago");

  expect(intern.getRole()).toEqual("Intern");
});
