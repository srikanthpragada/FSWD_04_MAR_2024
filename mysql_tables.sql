create database mar4;

use mar4;


create table departments
( dept_id  char(2) primary key,
  dept_name varchar(30) not null
 );


insert into departments values('it','Information Technology');
insert into departments values('sa','Sales');
insert into departments values('ac','Accounts');


create table employees
( 
  emp_id int auto_increment primary key,
  fullname varchar(30) not null,
  dept_id char(2) references departments(dept_id),
  salary int check(salary >=0)
);


insert into employees(fullname,dept_id,salary) values('Robert Iger','sa',400000);
insert into employees(fullname,dept_id,salary) values('Scott Peck','sa',500000);
insert into employees(fullname,dept_id,salary) values('Noah Harari','it',800000);
insert into employees(fullname,dept_id,salary) values('James Clear','it',550000);
insert into employees(fullname,dept_id,salary) values('Marc Randolph','ac',120000);
insert into employees(fullname,dept_id,salary) values('Malcolm Gladwell','sa',850000);
insert into employees(fullname,dept_id,salary) values('Clive Thompson','sa',500000);
insert into employees(fullname,dept_id,salary) values('Stephen King','it',780000);
insert into employees(fullname,dept_id,salary) values('Hans Rosling','ac',350000);
insert into employees(fullname,dept_id,salary) values('Peter Thiel','it',850000);