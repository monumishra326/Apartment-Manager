const express = require("express");
const ApiFeatures = require("../utils/apifeatures");
const Flat = require("../models/flat.model");
const router = express.Router();


router.post("", async (req, res) => {
  try {
    const user = await Flat.create(req.body);

    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

// router.get("", async (req, res) => {
//   try {
//     const resultPerPage = 24;
//     const flats = await Flat.find().lean().exec();
//     const flatsCount = await Flat.countDocuments();

//     return res.status(200).json({
//       flats,
//       flatsCount,
//       resultPerPage,
//     });
    
//   } catch (e) {
//     return res.status(500).json({ message: e.message, status: "Failed" });
//   }
// });

router.get('', async (req, res) => {

  try {
    const resultPerPage = 24;
    const flatsCount = await Flat.countDocuments();
  
    const apiFeature = new ApiFeatures(Flat.find(), req.query)
      .search()
      .filter().pagination(resultPerPage);
  
    let flats = await apiFeature.query;
  
    let filteredflatsCount = flats.length;
  
    return res.status(200).json({
      flats,
      flatsCount,
      resultPerPage,
      filteredflatsCount,
    });
    
  } catch (e) {
    return res.status(500).json({ status: 'Failled', message: e.message })
  }
})


router.get('/:id', async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id)
    return res.status(200).send(flat)
  } catch (e) {
    return res.status(500).json({ status: 'Failled', message: e.message })
  }
})



module.exports = router;
