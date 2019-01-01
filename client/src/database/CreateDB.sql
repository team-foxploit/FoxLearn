show databases;
use users;

-- USE E15142Lab04;
CREATE TABLE STUDENT (
    Student_ID INTEGER NOT NULL AUTO_INCREMENT,
    FName VARCHAR(50) NOT NULL,
    LName VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    PSWRD VARCHAR(50) NOT NULL,
    PRIMARY KEY(Student_ID)
);
SELECT PSWRD FROM student WHERE Username = 'hello';

ALTER TABLE STUDENT AUTO_INCREMENT = 1;

INSERT INTO STUDENT(FName, LName, Email, Username, PSWRD) VALUES("Saman", "Kumara", "1@dsjuvhn", "SK","abc123");
INSERT INTO STUDENT(FName, LName, Email, Username, PSWRD) VALUES("Dasun", "Wickramasinghe", "1@ddsgsd", "hello","asdvfb");
INSERT INTO STUDENT(FName, LName, Email, Username, PSWRD) VALUES("Sanuka", "Wickramasinghe", "1@dn", "new user","aaaa");

CREATE TABLE TEACHER (
    Teacher_ID INTEGER NOT NULL AUTO_INCREMENT,
    FName VARCHAR(50) NOT NULL,
    LName VARCHAR(50) NOT NULL,
    PRIMARY KEY(Teacher_ID)
);

ALTER TABLE TEACHER AUTO_INCREMENT = 1;
use users; show tables; select * from student;

CREATE TABLE users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);
drop database users;
drop table student;
select * from users.users;

