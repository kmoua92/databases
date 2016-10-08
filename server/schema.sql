drop database if exists chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (username varchar(15), text varchar(150), room varchar(15), id integer(3) primary key);
  -- insert into messages values ('ker', 'hi whats up', 'lobby', 001);
  -- insert into messages values ('eric', 'hi whats up', 'hackreactor', 002);
  -- insert into messages values ('ker', 'yo', 'hackreactor', 003);
  -- insert into messages values ('ker', 'hi whats up', 'lobby', 004);
  -- insert into messages values ('eric', 'hi whats up', 'lobby', 005);
  -- insert into messages values ('ker', 'hi dude', 'lobby', 006);
  -- insert into messages values ('ker', 'hi whats up', 'lobby', 007);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

