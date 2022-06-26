// using Engineer constructor 
const Engineer = require('../library/engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Pie', 8991, 'pie@gmail.com', 'kattheswagger112298');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'kattheswagger112298');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Pie', 8991, 'pie@gmail.com', 'kattheswagger112298');

    expect(engineer.getRole()).toEqual("Engineer");
});