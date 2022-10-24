create database productsdb if not exist;
use productsdb;

create table product(

    id int not null auto_increment primary key,
    name varchar(255) not null,
    description varchar(400) not null,
    price decimal,
    createdAT timestamp default current_timestamp
);

describe product;