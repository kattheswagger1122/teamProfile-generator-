
// using Manager constructor 
const Manager = require('../library/manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Kat', 1998, 'kat.shih@gmail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Kat', 1998, 'kat.shih@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 