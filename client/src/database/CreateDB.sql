show databases;
use users;

-- USE E15142Lab04;
CREATE TABLE STUDENT (
    Student_ID INTEGER NOT NULL AUTO_INCREMENT,
    FName VARCHAR(50) NOT NULL,
    LName VARCHAR(50) NOT NULL,
    PRIMARY KEY(Student_ID)
);

ALTER TABLE MOVIE AUTO_INCREMENT = 1;

INSERT INTO STUDENT(FName, LName) VALUES("Saman", "Kumara");
INSERT INTO STUDENT(FName, LName) VALUES("Dasun", "Wickramasinghe");
INSERT INTO STUDENT(FName, LName) VALUES("Sanuka", "Wickramasinghe");
