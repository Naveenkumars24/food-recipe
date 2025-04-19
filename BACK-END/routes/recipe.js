const express = require('express')
const app = express()
const router = express.Router()
const {getRecipe,getRecipes,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe")

app.get("/",getRecipes)
app.get("/:id",getRecipe)
app.post("/",addRecipe)
app.put("/:id",editRecipe)
app.delete("/:id",deleteRecipe)

 module.exports = app