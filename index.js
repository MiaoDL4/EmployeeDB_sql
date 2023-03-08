const inquirer = require('inquirer');

const add = require('./src/add');
const remove = require('./src/remove');
const update = require('./src/update');
const menu = require('./src/menu');


function mainMenu() {
    inquirer
        .prompt(menu.menu).then(data => {
            console.log('work');
            switch (data.mainMenu) {
                case 'View All Employees':
                    console.log('1')
                break;
                case 'View All Employees by Department':
                    console.log('2')
                break;
                case 'View All Employees by Roles':
                    console.log('3')
                    break;
                case 'Add an Employee':
                    console.log('4')
                    break;
                case 'Add a Department':
                    console.log('5')
                    break;
                case 'Add a Role':
                    console.log('6')
                    break;
                case 'Remove an Employee':
                    console.log('7')
                    break;
                case 'Remove a Department':
                    console.log('8')
                    break;
                case 'Remove a Role':
                    console.log('9')
                    break;
                case 'Update an Employee Role':
                    console.log('10')
                    break;
                case 'Get Combined Salary':
                    console.log('11')
                    break;
                default:
                    console.log('exit');
            };
        });
};
mainMenu();
console.log('1')
