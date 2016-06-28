'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
	
	name: String,
	password: String;
	email: String
});

mongoose.model('User', UserSchema);