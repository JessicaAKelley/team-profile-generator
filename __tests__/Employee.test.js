const Employee = require("../lib/Employee.js");

test("Creates employee object", () => {
  const employee = new Employee("Jessica", 1, "jessica@email.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Gets employee's name", () => {
  const employee = new Employee("Jessica", 1, "jessica@email.com");

  expect(employee.getName()).toEqual(employee.name);
});

test("Gets employee's id", () => {
  const employee = new Employee("Jessica", 1, "jessica@email.com");

  expect(employee.getId()).toEqual(employee.id);
});

test("Gets employee's email address", () => {
  const employee = new Employee("Jessica", 1, "jessica@email.com");

  expect(employee.getEmail()).toEqual(employee.email);
});

test("Gets employee's role", () => {
  const employee = new Employee("Jessica", 1, "jessica@email.com");

  expect(employee.getRole()).toEqual("Employee");
});
