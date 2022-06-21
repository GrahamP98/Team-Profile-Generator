const { Intern } = require("../lib/intern");

test("Generates intern", () => {
    const employee = new Intern("Graham Purnell", 1234, "g.purnell15@gmail.com", "UNCC");

    expect(employee.name).toBe("Graham Purnell");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test("Checks the methods for intern's class", () => {
    const employee = new Intern("Graham Purnell", 1234, "g.purnell15@gmail.com", "UNCC");

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe("Intern");
});