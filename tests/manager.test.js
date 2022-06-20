const { Manager } = require("../roles/manager");

test("Generates manager", () => {
    const employee = new Manager("Graham Purnell", 0123, "g.purnell15@gmail.com", "111");

    expect(employee.name).toBe("Graham Purnell");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test("Checks the methods for manager's class", () => {
    const employee = new Manager("Graham Purnell", 0123, "g.purnell15@gmail.com", "111");

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getofficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe("Manager");
});