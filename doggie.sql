DROP DATABASE IF EXISTS doggie_db;
CREATE DATABASE doggie_db;
USE doggie_db;

CREATE TABLE doggie (
    id INT NOT NULL AUTO_INCREMENT,
    dog_name VARCHAR(50) NOT NULL,
    image_url VARCHAR(2083),
    size VARCHAR(50) NOT NULL,
    age VARCHAR (40),
    dog_profile VARCHAR (450),
    available BOOLEAN,
    reviews VARCHAR(100),
    card_color INTEGER,
    PRIMARY KEY (id)
);
    
INSERT INTO doggie (dog_name, image_url, size, age, dog_profile, available, card_color)
VALUES 
("Bruser", "images/dog-1.jpg", "Large", "Senior", "I am a calm dog who loves to go for walks on a leash.  I do not get along with other dogs.", 1, 3),
("Butch", "images/dog-2.jpg", "Medium", "Adult", "I have tons of energy and I love to run with my friends.  I like to play with other dogs, but I hate cats.", 1, 2),
("Gilley", "images/dog-3.jpg", "Small", "Puppy", "I get winded easily because I am a little fat.  I like to snuggle and play with toys.", 1, 1),
("Gladys", "images/dog-1.jpg", "Large", "Adult", "I like to walk and am good off-leash.  I can fetch, sit, and shake.  I love bones.", 1, 2),
("Jasper", "images/dog-2.jpg", "Large", "Puppy", "I like dogs and cats and love to play with toys.  I like to take long walks.", 1, 1),
("Kiki", "images/dog-3.jpg", "Small", "Senior", "I do not like other dogs because I am a diva.  I like to sit in your lap and look pretty.", 1, 3),
("Pickles", "images/dog-1.jpg", "Medium", "Adult", "I like to run around in circles and to go swimming. After that, a love a warm bath and a nap.", 1, 2);

SELECT * FROM doggie;

use woofshare_db;

INSERT INTO dogs(name, photo_url, size, breed,age, profile, available, card_color,createdAt,updatedAt)
VALUES
("Bruser", "images/dog-1.jpg", "Large","TERRIER", "Senior", "I am a calm dog who loves to go for walks on a leash.  I do not get along with other dogs.", 1, 3,'2019-04-08 04:43:58', '2019-04-08 04:43:58'),
("Butch", "images/dog-2.jpg", "Medium","HOUND", "Adult", "I have tons of energy and I love to run with my friends.  I like to play with other dogs, but I hate cats.", 1, 2,'2019-04-08 04:43:58', '2019-04-08 04:43:58'),
("Gilley", "images/dog-3.jpg", "Small","HOUND", "Puppy", "I get winded easily because I am a little fat.  I like to snuggle and play with toys.", 1, 1,'2019-04-08 04:43:58', '2019-04-08 04:43:58'),
("Gladys", "images/dog-1.jpg", "Large","TERRIER", "Adult", "I like to walk and am good off-leash.  I can fetch, sit, and shake.  I love bones.", 1, 2,'2019-04-08 04:43:58', '2019-04-08 04:43:58'),
("Jasper", "images/dog-2.jpg", "Large", "HOUND","Puppy", "I like dogs and cats and love to play with toys.  I like to take long walks.", 1, 1,'2019-04-08 04:43:58', '2019-04-08 04:43:58'),
("Kiki", "images/dog-3.jpg", "Small", "TERRIER","Senior", "I do not like other dogs because I am a diva.  I like to sit in your lap and look pretty.", 1, 3,'2019-04-08 04:43:58', '2019-04-08 04:43:58'),
("Pickles", "images/dog-1.jpg", "Medium", "TERRIER","Adult", "I like to run around in circles and to go swimming. After that, a love a warm bath and a nap.", 1, 2,'2019-04-08 04:43:58', '2019-04-08 04:43:58');

SELECT * FROM dogs;

INSERT INTO `woofshare_db`.`ratings` (`id`, `score`, `review`, `userId`, `dogId`, `createdAt`, `updatedAt`) VALUES ('1', '3', 'Very good', '1', '1', '2019-04-08 04:43:50', '2019-04-08 04:43:50');