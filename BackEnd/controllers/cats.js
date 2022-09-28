const catsModel = require("../models/cats");

// Add Cats 
const AddCat = (req, res) => {
  const { Name, Breed, Description, image } = req.body;
  const newCat = new catsModel({
    Name: Name, Breed: Breed, Description: Description, image: image
  });
  newCat
    .save()
    .then((cat) => {
      res.status(201).json({
        success: true,
        message: `Cat added`,
        article: cat,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// Git all Cat
const getCats = (req, res) => {
  catsModel
    .find({})
    .then((cats) => {
      if (cats.length) {
        res.status(200).json({
          success: true,
          message: `All the cats`,
          cats: cats,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `No Cats Yet`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// Update Cats
const updateCatId = (req, res) => {
  const _id = req.params.id;
  catsModel
    .findByIdAndUpdate(_id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Cat: ${_id} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `Cat updated`,
        cat: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// Get one cats 
const getCatId = (req, res) => {
  let id = req.params.id;
  catsModel
    .findById(id)
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The cat is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The cat ${id} `,
        Cats: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

// Delete Cats
const deleteCatId = (req, res) => {
  const id = req.params.id;
  catsModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Cat: ${id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `deleted Cat `,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  getCats,
  getCatId,
  AddCat,
  updateCatId,
  deleteCatId
};
