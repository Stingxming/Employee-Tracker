USE employees_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE department_table (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);
CREATE TABLE role_table (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30)
  salary DECIMAL(10,2)
  department_id INT

  CONSTRAINT fk_department_table
  FOREIGN KEY (department_id)
  REFERENCES department_table(id)
  ON DELETE CASCADE

);
CREATE TABLE employee_table (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30)
  last_name VARCHAR(30)
  role_id INT
  manager_id INT

  CONSTRAINT fk_role_table
  FOREIGN KEY (role_id)
  REFERENCES role_table(id)
  ON DELETE CASCADE

  CONSTRAINT fk_employee_table
  FOREIGN KEY (manager_id)
  REFERENCES employee_table(id)
  ON DELETE SET NULL

);