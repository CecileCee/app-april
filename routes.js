'use strict';

const express = require('express');
const api = require('./api'); //dossier appelé mais index.js sra détecté et automatiquement lu

const routes = new express.Router();

//localhost:3000/api
routes.use('/api', api);
//localhost:3000/profile > sera envoyé vers public ou le routeur de la single app prendra le relais
routes.use(express.static('./public'));

module.exports = routes;
