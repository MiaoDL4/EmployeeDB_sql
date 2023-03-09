const inquirer = require("inquirer");
const mysql = require("mysql2");

const menu = require("./src/menu");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Theoceanisblue2@",
    database: "employee_db"
});

var roles = [];
var departments = [];
var employees = [];

function getRoles() {
    db.query("SELECT id, title FROM role", function (err, res) {
        roles = [];
        res.forEach((item) => {
            if (roles.indexOf(item.title) === -1) {
                roles.push(item.title);
            }
        });
    });
};

function getDept() {
    db.query("SELECT id, department_name FROM department", function (err, res) {
        departments = [];
        res.forEach((item) => {
            departments.push(item.department_name);
        });
    });
};

function getEmp() {
    db.query("SELECT id, first_name, last_name FROM employee", function (err, res) {
        employees = [];
        res.forEach((item) => {
            var name = `${item.first_name} ${item.last_name}`;
            employees.push(name);
        });
    });
};

function init() {
    getRoles();
    getDept();
    getEmp();
    inquirer
        .prompt(menu.menu).then(data => {
            switch (data.mainMenu) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "View All Departments":
                    viewDepartments();
                    break;
                case "View All Roles":
                    viewRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                // case "Remove an Employee":
                //     console.log("7") DELETE FROM employee WHERE ?
                //     break;
                // case "Remove a Department":
                //     console.log("8") DELETE FROM role WHERE ?
                //     break;
                // case "Remove a Role":
                //     console.log("9") DELETE FROM department WHERE ?
                //     break;
                case "Update an Employee Role":
                    updateEmployee();
                    break;
                // case "Get Combined Salary":
                //     console.log("11")
                //     break;
                default:
                    console.log("exit");
                    break;
            };
        });
};

function viewAllEmployees() {
    const query = `
    SELECT 
    employee.id,
    CONCAT(employee.first_name," ", employee.last_name) AS employee,
    role.title,
    department.department_name AS department,
    role.salary, 
    CONCAT(manager.first_name," ", manager.last_name) AS manager FROM employee
    JOIN role ON employee.role_id = role.id
    JOIN department ON role.department_id = department.id 
    LEFT JOIN employee manager ON employee.manager_id = manager.id
    ORDER BY employee.id`;
    db.query(query, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    });
};
function viewDepartments() {
    const query = `
    SELECT 
    id,
    department_name FROM department`;
    db.query(query, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    });
};
function viewRole() {
    const query = `
    SELECT 
    role.id,
    role.title, 
    department.department_name AS department,
    role.salary
    FROM role 
    JOIN department ON role.department_id = department.id`;
    db.query(query, function (err, results) {
        if (err) throw err;
        console.table(results);
        init();
    });
}

function addEmployee() {
    inquirer
        .prompt([{
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
            type: "list",
            name: "role",
            message: "What is the role of the employee?",
            choices: roles,
        }])
        .then(data => {
            let index = (a) => a == data.role;
            let roleID = roles.findIndex(index);
            roleID++;
            db.query("INSERT INTO employee SET ?",
                {
                    first_name: data.firstName,
                    last_name: data.lastName,
                    role_id: roleID,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("update successful");
                    init();
                }
            );
        });
};

function addDepartment() {
    inquirer
        .prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the department?"
        }])
        .then(data => {
            db.query(
                "INSERT INTO department SET ?", { department_name: data.name },
                function (err, res) {
                    if (err) throw err;
                    console.log("update successful");
                    init();
                }
            );
        });
};

function addRole() {
    inquirer
        .prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the role?",
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salery of the role?",
        },
        {
            type: "list",
            name: "department",
            message: "What department does the role come under?",
            choices: departments,
        }])
        .then(data => {
            let index = (a) => a == data.department;
            let DepartmentID = departments.findIndex(index);
            DepartmentID++;
            db.query(
                "INSERT INTO role SET ?",
                {
                    title: data.name,
                    salary: data.salary,
                    department_id: DepartmentID,
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("update successful");
                    init();
                }
            );
        });
};

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "name",
                message: "Which employee would you like to update?",
                choices: employees,
            },
            {
                type: "list",
                name: "role",
                message: "What is their new role?",
                choices: roles,
            }])
        .then(data => {
            let employeeIndex = (a) => a == data.name;
            let employeeID = employees.findIndex(employeeIndex);
            employeeID++;

            let roleIndex = (b) => b == data.role;
            let roleID = roles.findIndex(roleIndex);
            roleID++;
            // console.log(roleID);
            // console.log(employeeID);
            db.query(
                "UPDATE employee SET ? WHERE ?",
                [{ role_id: roleID }, { id: employeeID }],
                function (err, res) {
                    if (err) throw err;
                    console.log("update successful");
                    init();
                }
            );
            init()
        });

};



init();