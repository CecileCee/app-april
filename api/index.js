'use strict';

// Router = express.Router
// import {Router} from 'express'
const Router = require('express').Router;
const bodyParser = require('body-parser'); // use URL restful et décoder body

const apiRoutes = new Router();
apiRoutes.use(bodyParser.urlencoded({extended: false}));
apiRoutes.use(bodyParser.json());

const userController = require('./controllers/users');
const userRoutes = new Router();
// Autre possibilité :
// // non fonctionnel car pas de méthode encore définie
// const userRoutes = new Router();
// //localhost:3000/users/
// userRoutes.get('/', users.methode);
// //localhost:3000/users/comments
// userRoutes.get('/comments', users.methode);
//
// // autres routes
// // apiRoutes.post
// apiRoutes.use('/users', userRoutes)

// apiRoutes.user('/users', users.nomdelamethode);
apiRoutes.get('/users', userController.find);
apiRoutes.post('/users', userController.create);

apiRoutes.get('/products', productController.find);

module.exports = apiRoutes;
