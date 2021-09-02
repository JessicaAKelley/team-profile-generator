const Manager = require("../lib/Manager.js");

test("Creates manager object", () => {
    const manager = new Manager("Jessica", 2, "jessica@email.com", 999);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("Gets manager's office number", () => {
    const manager = new Manager("Jessica", 2, "jessica@email.com", 999);

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test("Gets manager's role", () => {
    const manager = new Manager("Jessica", 2, "jessica@email.com", 999);

    expect(manager.getRole()).toEqual("Manager");
});