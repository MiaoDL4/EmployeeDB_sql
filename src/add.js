const add = {
    department: [{
        type: "input",
        name: "name",
        message: "What is the name of the department?"
    }],

    role: [{
        type: "input",
        name: "name",
        message: "What is the name of the role?",
    },
    {
        type: "input",
        name: "salery",
        message: "What is the salery of the role?",
    }],

    employee: [{
        type: "input",
        name: "firstName",
        message: "What is the first name of the employee?",
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the last name of the employee?",
    },
    {
        type: "input",
        name: "role",
        message: "What is the role of the employee?",
    }],

};

module.exports = add;
