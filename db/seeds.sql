
-- Departments
INSERT INTO department (department_name) VALUES ('Sales');
INSERT INTO department (department_name) VALUES ('Engineering');
INSERT INTO department (department_name) VALUES ('Finance');
INSERT INTO department (department_name) VALUES ('legal');

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ('Sales Leed', 20000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Person', 30000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('lead Engineer', 40000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 10000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Accountant', 5500, 3);
INSERT INTO role (title, salary, department_id) VALUES ('lawyer', 70000, 4);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('john', 'doe', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('mike', 'chan', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Brad', 'Pitt', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('ashley', 'smith', 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('oliva', 'emmma', 6, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('charlotte', 'Dor.', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('liam', 'eeps', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('james', 'boond', 6, NULL);