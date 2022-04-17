const express = require("express");

const Manager = require("../models/Manager.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {

    const user = await Manager.create(req.body);
    return res.status(201).send(user)

  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const manager = await Manager.find().lean().exec();

    return res.send({ manager });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("/:email/:password", async (req, res) => {
  try {
    const detail = await Manager.findOne({ email: req.params.email });
    const detail1 = await Manager.findOne({ password: req.params.password });
    if(!detail){
      return res.status(500).json({  message: "Email not present"})
    }else{
       if(detail1){
        return res.status(200).send(detail)
       }else{
        return res.status(500).json({  message: "Wrong Password"})
       }
    }
    // return res.status(200).send(detail)
  } catch (e) {
    return res.status(500).json({ status: 'Failled', message: e.message })
  }
});

module.exports = router;
