const mainMenu = {
    menu: [{
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Roles",
            "Add anEmployee",
            "Add a Department",
            "Add a Role",
            "Remove an Employee",
            "Remove a Department",
            "Remove a Role",
            "Update an Employee Role",
            "Get Combined Salary",
            "Exit",
        ],
    }]
}

module.exports = mainMenu;