'use strict';

const Schema = require('mongoose').Schema;

const ProductSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  price : {
    type : Number,
    required : true
  },
  notes : {
    type : [Number] // array qui n'accepte que des chiffres
  },
  user : {
    type : Schema.Users.ObjectId,
    ref : 'ProductSchema'
  }
});
