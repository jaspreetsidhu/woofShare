# WoofShare

![landing](https://i.imgur.com/KAbv4da.jpg)

## Deployed App

Check out the app [here](https://polar-basin-98786.herokuapp.com/).

## Description

WoofShare provides innovative solutions dog lovers and dog owners.

## To use this app:

- Visit the link above.
- Sign in and set up an account using Google.
- View the dog gallery.
- Use the search function to narrow your view.
- Click each card for dog reviews and renter's favorites.
- Click Reserve Now to check out a dog.
- Select dates, consent to the rental agreement, and click Confirm.
- On your account page, you can manage each rental, leave a review, and see all previous views.

## Social Media

Visit us on [Twitter](https://twitter.com/woofshare) and [Facebook](https://www.facebook.com/WoofShare/?modal=admin_todo_tour).


### Local Installation
WoofShare requires [Node.js](https://nodejs.org/) v4+ to run.

Clone this repository to your local machine with 
```sh
git clone https://github.com/jaspreetsidhu/woofShare.git
```
Open config/config.json and update the development password to your local MySQL password
Install the dependencies and devDependencies and start the server.

```sh
$ cd woofshare
$ npm install -d
$ mysql
mysql> CREATE DATABASE dog_db;
mysql> QUIT
$ npm run migrate
$ npm run seed
$ node server.js
```

The application will be running at localhost:3000/


## Code Style

Developers of WoofShare took advantage of tools to help create code that is clean, consistent and easy to read including:

- eslint
- eslint-plugin-prettier
- prettier

## Technologies

WoofShare uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [jQuery] 
* [MySQL] Database/Sequelize ORM
* [Heroku]
* [sass-loader] node-sass webpack
* [Handlebars] - Server-Side Templating
* [Passport.js] - Google Authentication
* [Google API] - external autocomplete
* [Handlebar Helpers] - for custom formating
* [Multer] - Node.js middleware for handling `multipart/form-data`

### Application Dependencies

- body-parser
- connect-flash
- cookie-parser
- cookies
- dot-env
- express
- express-handlebars
- express-jwt
- express-session
- handlebars-helpers
- jsonwebtoken
- migrate
- moment
- multer
- mysql
- mysql2
- node-sass
- nodemon
- npm
- passport
- passport-google-oauth20
- seed
- sequelize
- sequelize-cli
- 
### Todos

 - Minor Bug fixes
 - Add roles based user credentials for renters owner
 - Clean up code
 - Better separation of client / server side file-structure
 - Increase mobile responsiveness
 - Deploy to custom domain



## Credits

WoofShare Development Team:

- [Trent Davis](https://github.com/trentdavis78)
- [Chandni Patel](https://github.com/chandnibpatel)
- [Jaspreet Sidhu](https://github.com/jaspreetsidhu)
- [Zach Selindh](https://github.com/ZachSelindh)
- [Penny Arnold](https://github.com/PennyArnold)



## License
© Copyright 2019
WoofShare, Co.
