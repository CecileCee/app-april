'use strict';

// Méthode permettant de définir des schémas
const Schema = require('mongoose').Schema;

const Users = new Schema({
  mail : {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  }
});

module.exports = Users;
