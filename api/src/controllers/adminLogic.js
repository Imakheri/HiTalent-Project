const {Users,Posts}=require("../db")

async function getUsers(req,res,next){
    var users=await Users.findAll()
    res.json(users)
}
async function getPosts(req,res,next){
    var posts=await Posts.findAll()
    res.json(posts)
}



module.exports={
    getUsers,
    getPosts
}