const { Engineer } = require("../lib/engineer");

test("Generates engineer", () => {
    const employee = new Engineer("Graham Purnell", 1234, "g.purnell15@gmail.com", "GrahamP98");

    expect(employee.name).toBe("Graham Purnell");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
});

test("Checks the methods for engineer's class", () => {
    const employee = new Engineer("Graham Purnell", 1234, "g.purnell15@gmail.com", "GrahamP98");

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe("Engineer");
});