const {Posts,Users,Categories}=require("../db")

const getCategories= async(req,res,next)=>{
    var post=await Categories.findAll({
        order: [['createdAt', 'DESC'], ['title', 'ASC']]
    })
    res.json(post)
}
const createCategories= async(req,res,next)=>{
    
}
const updateCategories= async(req,res,next)=>{
    
}
const deleteCategories= async(req,res,next)=>{
    
}

module.exports={
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories
}