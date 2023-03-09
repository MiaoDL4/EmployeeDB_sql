const mainMenu = {
    menu: [{
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Departments",
            "View All Roles",
            "Add an Employee",
            "Add a Department",
            "Add a Role",
            // "Remove an Employee",
            // "Remove a Department",
            // "Remove a Role",
            "Update an Employee Role",
            // "Get Combined Salary",
            "Exit",
        ],
    }]
}

module.exports = mainMenu;