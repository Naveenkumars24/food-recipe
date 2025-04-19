const recipeModel = require("../models/recipe")
const getRecipes = async (req,res) => {
    const recipe = await recipeModel.find()
    return res.json(recipe)
}

const getRecipe =async (req,res) => {
    const id = req.params.id
    const recipe = await recipeModel.findById(id)
    res.json(recipe)
}
const addRecipe = async (req,res) => {
    const {title,ingredients,instructions,time} = req.body

    if(!title || !ingredients || !instructions || !time)
    {
        res.join({message:"Required fields can't be empty"})
    }

    const newRecipe = await recipeModel.create({
        title,ingredients,instructions,time
    })
    return res.json(newRecipe)
}
const editRecipe = async (req,res) => {
    const id = req.params.id;
    const {title,ingredients,instructions,time} = req.body;
    let recipe = await recipeModel.findById(id)
    try{
    if(recipe){
        await recipeModel.findByIdAndUpdate(id,req.body,{new: true})
        res.json({title,ingredients,instructions,time})
      }
    }
    catch(err)
    {
       return res.status(404).json({message:"Recipe is not found in the DB"})
    }

}
const deleteRecipe = (req,res) => {
    
}

module.exports ={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}