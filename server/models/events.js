const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");
const axios = require ('axios');

const schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    start:{
      type: Date,
      required: true,
      validate: {
          validator: function(value) {
            return value > Date.now();
          },
          message: 'The event date is in the past, please enter a valid date'
        }
  },

    end:{
      type: Date,
      required: true,
      validate: {
          validator: function(value) {
            return value > Date.now();
          },
          message: 'The event date is in the past, please enter a valid date'
        }
  }
});

function validateEvent(event) {
    const schema = {
      title: Joi.string().required(),  
      start: Joi.date().min(Date.now()) ,
      end: Joi.date().min(Date.now())
    };
    return Joi.validate(event, schema);
  };

  const Event = new mongoose.model('events', schema);

module.exports.Event = Event;
module.exports.validateEvent = validateEvent;