const Employee = require("../roles/employee");

test("Generates employee", () => {
    const employee = new Employee("Graham Purnell", 0123, "g.purnell15@gmail.com");

    expect(employee.name).toBe("Graham Purnell");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("Checks all methods for employee class", () => {
    const employee = new Employee("Graham Purnell", 0123, "g.purnell15@gmail.com");

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe("Employee");
})