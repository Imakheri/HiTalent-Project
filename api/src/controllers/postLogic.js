const {Posts,Users,Category}=require("../db")

const getPosts= async(req,res,next)=>{
    var post=await Posts.findAll()
    res.json(post)
}
const createPost= async(req,res,next)=>{
    
}
const updatePost= async(req,res,next)=>{
    
}
const deletePost= async(req,res,next)=>{
    
}

module.exports={
    getPosts,
    createPost,
    updatePost,
    deletePost
}