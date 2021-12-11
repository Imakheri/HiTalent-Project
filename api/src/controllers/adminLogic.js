const {Users,Posts,Review}=require("../db")


async function getAll(req,res,next){
    var users=await Users.findAll()
    var posts=await Posts.findAll()
    var review=await Review.findAll()
    res.json({users,posts,review})
}
async function aprobar(req,res,next){
    let id=req.body.id
    let name=req.body.name
    if(name==="user"){
        var user=await Users.findByPk(id)
        if(!user)return res.status(400).json({message:"usuario no encontrado"})
        user.aprobado=true
        await user.save()
        res.json(user)
    }else if(name==="review"){
        var review=await Review.findByPk(Number(id))
        if(!review)return res.status(400).json({message:"review no encontrada"})
        review.aprobado=true
        await review.save()
        res.json(review)
    }else{
        var post=await Posts.findByPk(id)
        if(!post)return res.status(400).json({message:"post no encontrado"})
        post.aprobado=true
        await post.save()
        res.json(post)
    }
}
async function deleteNoAprobado(req,res,next){
    let id=req.body.id
    let name=req.body.name
    if(name==="user"){
        var user=await Users.findByPk(id)
        if(!user)return res.status(400).json({message:"usuario no encontrado"})
        await Posts.destroy({
          where:{user_id:id}
        })
        await Review.destroy({
          where:{user_id:id}
        })
        await Users.destroy({
            where: {id}
          });
        res.json(user)
    }else if(name==="review"){
        var review=await Review.findByPk(Number(id))
        if(!review)return res.status(400).json({message:"review no encontrada"})
        await Review.destroy({
            // de existir, lo destruye
            where: {
              id:Number(id),
            },
          });
        res.json(review)
    }else{
        var post=await Posts.findByPk(id)
        if(!post)return res.status(400).json({message:"post no encontrado"})
        await Posts.destroy({
            // de existir, lo destruye
            where: {
              id,
            },
          });
        res.json(post)
    }
}


module.exports={
    getAll,
    aprobar,
    deleteNoAprobado
}