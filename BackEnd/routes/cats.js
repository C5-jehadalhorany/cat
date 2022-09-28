const express = require("express");

// Import articles controllers
const {
  getCats,
  getCatId,
  AddCat,
  updateCatId,
  deleteCatId
} = require("../controllers/cats");
 

 

// Create articles router
const CatsRouter = express.Router();

CatsRouter.get("/", getCats);
CatsRouter.get("/:id", getCatId);
CatsRouter.post("/addnewcat", AddCat);
CatsRouter.put("/:id", updateCatId);
CatsRouter.delete("/:id", deleteCatId);


module.exports = CatsRouter;
