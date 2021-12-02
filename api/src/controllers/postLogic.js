const {Posts,Users,Categories, Review }=require("../db")

const getPosts= async(req,res,next)=>{
    if(req.query.filter)
    var post=await Posts.findAll({
        where: {
            oferta: req.query.filter
        },
        order: [['title', req.query.order]]
    })
    res.json(post)
}
const createPost= async(req,res,next)=>{
    
    let{title,description,category,duration,cost,username}=req.body
    let file=req.file
    let path = "http://localhost:3001/" + file.filename
    try{
        var [categoryDB,created]= await Categories.findOrCreate({where:{ title:category}})
        var post=await Posts.create({
            title,
            description,
            duration:Number(duration),
            cost:Number(cost),
            image:[path]

        })
        var user=await Users.findOne({where:{username}})
        if(!user)return res.status(500).json({
            message:"usuario invalido"
        })
        post.setCategory(categoryDB)
        post.setUser(user)
        res.json(post)
    }catch(e){
        res.status(500).json({
            message:"algo salio mal",
            error:e.message
        })
    }
}
const updatePost= async(req,res,next)=>{
    console.log("update post no imagen")
    let{title,description,duration,cost,id}=req.body
    try{
        var post=await Posts.findByPk(id)
        if(title)post.title=title
        if(description)post.description=description
        if(duration)post.duration=duration
        if(cost)post.cost=cost
        post.save()
        res.json(post)
    }catch(e){
        res.status(500).json({
            message:"algo salio mal",
            error:e.message
        })
    }
}
const deletePost= async(req,res,next)=>{
    let { id } = req.body;
    try {
      let existsInDB = await Posts.findByPk(id); // primero busca si existe el user en la DB. Si existe lo guarda en esta variable
      if (existsInDB) {
        await Posts.destroy({where: {id}});
        return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
      } else {
        throw new Error(
          "ERROR 500: El usuario no fue encontrado en la base de datos (UUID no existe)."
        );
      }
    } catch (err) {
      next(err);
    }
}

const addImage = async(req,res,next)=>{
    let {id}=req.body
    let file=req.file
    let path = "http://localhost:3001/" + file.filename
    var post=await Posts.findByPk(id)
    if(!post)res.status(500).json({
        message:"post no encontrado"
    })
    try{
        post.image=[...post.image,path]
        post.save()
        res.json(post)
    }catch(e){
        res.status(500).json({
            message:"algo salio mal",
            error:e.message})
    }

}
const deleteImage = async(req,res,next)=>{
    var {image,id}=req.body
    var post=await Posts.findByPk(id)
    try{
        
        post.image=post.image.filter(e=>e!=image)
        post.save()
        res.json(post)
    }catch(e){
        res.status(500).json({
            message:"algo salio mal",
            error:e.message
        })
    }

}

async function getPostId(req, res, next){
   let { id } = req.params;

         if (id && id.length === 36) { 
          try {
              let gotId = await Posts.findOne({
                  where: {
                      id: id
                  },
                  attributes: ['title', 'description', 'image', 'duration', 'oferta', 'cost'],
                  include: [{
                      model: Users,
                      attributes: ['id', 'username', 'score', 'country', 'image'],
                      //order: [['score', 'DESC'], ['createdAt', 'DESC'], ['username', 'ASC']]
                  },
                {
                     model: Categories,
                     attributes: ['id', 'title'],
                     //order: [['createdAt', 'DESC'], ['title', 'ASC']] 
                },
                {
                    model: Review,
                    attributes: ['rating', 'description'],
                    order: [['createdAt', 'DESC']]
                }]
              });
              if (gotId) res.json(gotId);
              else throw new Error('No se encontro el curso');
          } catch (error) {
              next(error)
          }
      };
      if (id && id.length !== 36) {
          try {
              throw new TypeError('id invalido')
          } catch (error) {
              next(error);
          }
      }
};



module.exports={
    getPosts,
    createPost,
    updatePost,
    deletePost,
    addImage,
    deleteImage,
    getPostId
};