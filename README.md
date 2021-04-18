# Developer Pool

A MERN stack application where software developers can create their digital resumes, connect with other
fellow developers and let recruiters know about their skills for the perfect job, with user authentication.

![GitHub](https://img.shields.io/apm/l/vim-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/ShraxO1/DevPool?style=flat-square) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


## Prerequisites and Dependencies
* [Install BcryptJS](https://www.npmjs.com/package/bcryptjs)
* [Install body-parser](https://www.npmjs.com/package/body-parser)
* [Install Concurrently](https://www.npmjs.com/package/concurrently)
* [Install Express](https://www.npmjs.com/package/express)
* [Install Gravatar](https://www.npmjs.com/package/gravatar)
* [Install JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
* [Install Mongoose](https://www.npmjs.com/package/mongoose)
* [Install Passport](https://www.npmjs.com/package/passport)
* [Install Passport-JWT](https://www.npmjs.com/package/passport-jwt)
* [Install Validator](https://www.npmjs.com/package/validator)

## Getting Started

-   Fork this repo and run the `git clone <forked repo>` command from your terminal/bash
-   Cd into the directories and `npm install`
-   Server will run at PORT 5000    
-   React server will run at PORT 3000
-   `npm run dev`

## Demo

The app has been hosted on heroku [here](https://developerpool.herokuapp.com/).
P.S: You might have to wait for a few seconds for the heroku site to respond.

<p align="center">

![GitHub Logo](/client/src/img/1.png)
![GitHub Logo](/client/src/img/2.png)
![GitHub Logo](/client/src/img/3.png)
![GitHub Logo](/client/src/img/4.png)
![GitHub Logo](/client/src/img/5.png)

</p>

## Info

-   This is a Social media application exclusively for software developers where they can create portfolios and connect with other developers.
-   There is no exploitation of data, as the app only requires access to your accounts to fetch your unique ID for authentication/authorization purposes, and no personal details(except your registred user name on the social account) is used by the application.
-   The frontend of the app is built using React and I have used Bootstrap classes for styling the components in addition to my local CSS styles.
-   It has been deployed using Heroku's free tier and the Mongodb Atlas's cloud service is used for the database service. The access to the database is restricted to only 1 authorised user, and as mentioned earlier, there is no personal user data stored in it.

Any suggestions are always welcome in the PRs!

## Technologies Used

Some of the technologies used in the development of this web application are:

-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): It provides a free cloud service to store MongoDB collections.
-   [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Node.js](https://nodejs.org/en/): A runtime environment to help build fast server applications using JS.
-   [Express.js](https://expressjs.com/): A popular Node.js framework to build scalable server-side for web applications.
-   [Mongoose](https://mongoosejs.com/): An ODM(Object Data Modelling)library for MongoDB and Node.js
-   [Heroku](http://heroku.com/): A platform(PaaS) to deploy full stack web applications for free.
-   [JSON Web Tokens or JWTs](https://jwt.io/): A standard to securely authenticate HTTP requests
-   [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/): A popular frontend framework.



## Want to Contribute?

To start contributing, follow the below guidelines: 

**1.**  Fork [this](git@github.com:ShraxO1/DevPool.git) repository.

**2.**  Clone your forked copy of the project.

     $ git clone https://github.com/<your_user_name>/DevPool.git

     
**3.** Checkout into a new branch 

     $ git checkout -b <branch_name>

**4.** Make your changes

**5.** Add and commit your changes

     $ git add . && git commit -m "<your_message>"
     
**6.** Push Code to Github under your branch 

     $ git push origin <branch_name>   
