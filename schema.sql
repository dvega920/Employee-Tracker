DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee
(
    id INT
    AUTO_INCREMENT NOT NULL,
    first_name VARCHAR
    (255) NULL, 
    last_name VARCHAR
    (255) NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY
    (id),
    CONSTRAINT fk_employeeRole
    FOREIGN KEY
    (role_id)
    CONSTRAINT fk_employeeMgr 
    FOREIGN KEY
    (manager_id);
    -- Need a 'REFERENCES' query
);

    CREATE TABLE role
    (
        id INT
        AUTO_INCREMENT NOT NULL,
    title VARCHAR
        (255),
    salary DECIMAL NULL,
    department_id INT NULL,
    CONSTRAINT fk_employeeDept
    FOREIGN KEY
        (department_id);
        -- NEED A 'REFERENCES' query
);

        CREATE TABLE department
        (
            id INT
            AUTO_INCREMENT,
    name VARCHAR
            (255) NOT NULL,
    PRIMARY KEY
            (id);
)

