
/*
run the following command to initialize the database

npx sequelize db:migrate 

*/


ALTER TABLE `dogs` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `dogs` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

INSERT INTO dogs (dog_name, image_url, size, age, dog_profile, available, card_color)
VALUES 
("Bruser", "images/dog-1.jpg", "Large", "Senior", "I am a calm dog who loves to go for walks on a leash.  I do not get along with other dogs.", 1, 3),
("Butch", "images/dog-2.jpg", "Medium", "Adult", "I have tons of energy and I love to run with my friends.  I like to play with other dogs, but I hate cats.", 1, 2),
("Gilley", "images/dog-3.jpg", "Small", "Puppy", "I get winded easily because I am a little fat.  I like to snuggle and play with toys.", 1, 1),
("Gladys", "images/dog-1.jpg", "Large", "Adult", "I like to walk and am good off-leash.  I can fetch, sit, and shake.  I love bones.", 1, 2),
("Jasper", "images/dog-2.jpg", "Large", "Puppy", "I like dogs and cats and love to play with toys.  I like to take long walks.", 1, 1),
("Kiki", "images/dog-3.jpg", "Small", "Senior", "I do not like other dogs because I am a diva.  I like to sit in your lap and look pretty.", 1, 3),
("Pickles", "images/dog-1.jpg", "Medium", "Adult", "I like to run around in circles and to go swimming. After that, a love a warm bath and a nap.", 1, 2);

SELECT * FROM doggie;