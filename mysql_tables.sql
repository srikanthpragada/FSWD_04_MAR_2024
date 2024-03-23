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


select *
from employees
where fullname like 'S%'

select *
from employees
where fullname like '_t%'

select *
from employees
where fullname like '%t%'

select  fullname, dept_name
from employees join departments 
using(dept_id)

select  fullname, dept_name, salary
from employees join departments 
using(dept_id)
where salary < 500000

select date_add(curdate(),interval 1 month)

select datediff(curdate(),'2024-1-1')

select date_format(curdate(),'%d-%m-%Y')

select fullname,  left(fullname, instr(fullname,' '))
from employees

select fullname,  mid(fullname, instr(fullname,' ') + 1)
from employees

select  sum(salary)
from employees

select sum(salary)
from employees
where dept_id = 'sa'





