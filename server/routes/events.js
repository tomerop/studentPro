const express = require ("express");
const { Event, validateEvent } = require("../models/events");
const {Users}=require('../models/users')
const router = express.Router();
const auth = require("../middlewares/auth");

router.get('/',async (req,res)=>{ //by name
          let event = await Event.find();
          if (!event) return res.status(400).send("No Events")
          else res.status(200).send(event)
      });


router.post('/:userId', async (req,res)=>{ //new user //autg
    let user= await Users.findOne({_id:req.params.userId})
    if(!user.isTeacher) return res.status(400).send('no access')
    if (user.isTeacher){
      console.log(req.body)
          const { error } = validateEvent(req.body);
          if (error) return res.status(400).send(error.details[0].message);
          let event = await Event.findOne({_id:req.params.userId});
          if (event) return res.status(400).send("Event Allready Exist");
          event = new Event(req.body);
          try {
            event = await event.save();
            res.status(200).send(event+'succsess')
          } catch (err) {
            res.status(500).send("somethong went wrong");
          }
          console.log(user);
  }})

  router.delete('/:userId',async (req,res)=>{ //delete by name
    let user= await Users.findOne({_id:req.params.userId})
    if(!user.isTeacher) return res.status(400).send('no access')
    if (user.isTeacher){
      let eventName=req.body.eventName
      const filter = {eventName}
      
      try {
          let event = await Event.findOneAndDelete(filter);
            res.status(200).send(event)
        } catch (err) {
          res.status(500).send("somethong went wrong");
        }
      }})


  module.exports=router