-- Make sure you npm install -g mysql2 first before you run the sequelize command to initialize the database



DROP DATABASE IF EXISTS dogShare_db;
CREATE DATABASE dogShare_db;
USE dogShare_db;




-- run the following command to initialize the database
-- npx sequelize db:migrate 




-- Use the following code if the seed data doesn't have createdAt or updatedAt

ALTER TABLE `dogShare` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `dogShare` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();


SELECT * FROM dogShare;
use dogShare_db;

INSERT INTO dogShare(name, photoUrl, size, breed,age, profile, available, card_color,createdAt,updatedAt);
