const {Categories}=require("../db")

const getCategories= async(req,res,next)=>{
    var post=await Categories.findAll()
    res.json(post)
}

module.exports={
    getCategories,
}