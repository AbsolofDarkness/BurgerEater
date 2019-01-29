USE i2rso3t1fepocf6g;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);