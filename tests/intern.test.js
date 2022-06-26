
// using Intern constructor 
const Intern = require('../library/intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Katerina', 8717, 'katerina@gmail.com', 'UCLA');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Katerina', 8717, 'katerina@gmail.com', 'UCLA');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Nicole', 90, 'nicole.elisaw@gmail.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
}); 