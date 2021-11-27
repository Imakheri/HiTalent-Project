const server = require('./src/app.js');
const { conn,Users,Posts,Categories,Review,Orders,Favorites,Payments,Question } = require('./src/db.js');



// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async() => {
    var testuser=Users.create({
      name:"pepe",
      username:"pepe123",
      password:"123",
      birthdate:"2016-06-21",
      lastName:"honguito",
      email:"pepehonguito@gmail.com",

    })
    var testpost=Posts.create({
      title:"algo",
      description:"clases de algo",
      cost:12
    })
    var testcategory=Categories.create({
      title:"canto"
    })
    var testreview=Review.create({
      rating:3,
      description:"ta buena"
    })
    Promise.all([testpost,testuser,testcategory,testreview]).then(res=>{
      res[0].setUser(res[1])
      res[0].setCategory(res[2])
      res[3].setUser(res[1])      //le seteo el usuario q creo la review
      res[3].setPost(res[0])      // y la publicacion sobre la cual la hizo
      

      //console.log(res[3].toJSON())
    })
    //------------------------------------------------------------------------------
    var testpost1=await Posts.create({ //creo post 1
      title:"canto",
      description:"clases de canto",
      cost:12
    })
    var testpost2=await Posts.create({ //creo post 2
      title:"guitarra",
      description:"clases de guitarra",
      cost:24
    })
    var testuser1= await Users.create({ //creo usuario test1
      name:"pepe",
      username:"pepe1234",
      password:"1234",
      birthdate:"2016-06-21",
      lastName:"honguito2",
      email:"pepehon1guito@gmail.com"
    })

    await testpost1.setUser(testuser1) //le vinculo los 2 post al usuario test
    await testpost2.setUser(testuser1)

    var testorden=await Orders.create({}) // creo una orden vacia
    await testorden.setUser(testuser1) //le vinculo un usuario
    await testorden.setPost(testpost2) // le vinculo un post
    
    console.log(testorden.toJSON()) //la muestro y anda C:

    //-------------------------------------------------------------------------

    var testpayment=await Payments.create({  //creo un medio de pago 
          name:"visa",
          number:"522154869522",
          code:160
    })
    await testorden.setPayment(testpayment) //lo seteo a la orden de pago
    //console.log(testorden.toJSON())   //lo muestro , deberia estar bindeado al usuario?????

    //--------------------------------------------------------------------------
    var testuser3=await Users.create({ //usuario test 3
      name:"Hernan",
      lastName:"Lastname",
      username:"hernan1234",
      password:"1234",
      birthdate:"1994-10-10",
      email:"hernan@gmail.com"
    })
    var testfavoritos1=await Favorites.create({ //una lista favoritos
      description:"favoritos de hernan"
    })
    var testfavoritos2=await Favorites.create({description:"favoritos de hernan publicacion 2"}) //lista  favoritos 2
    await testfavoritos2.setUser(testuser3)
    await testfavoritos2.setPost(testpost2)   //les bindeo un usuario y un post a cada lista favorito
    await testfavoritos1.setUser(testuser3)
    await testfavoritos1.setPost(testpost1)
    //console.log(testfavoritos2.toJSON())
    let aux=await Favorites.findAll({raw:true})  //busco todo lo de la tabla favoritos
    //console.log(aux)  //las muestro

    //-----------------------------------------------
    var testquestion= await Question.create({  //creo una pregunta 
      title:"titulo de la pregunta",
      question:"probando pregunta??????"
    })
    await testquestion.setUser(testuser3)  //la bindeo a un usuario , q seria quien la pregunto
    console.log(testquestion.toJSON()) //la muestro
    testquestion.answer="la respondo"
    testquestion.save()
    //console.log(testquestion.toJSON())
    
    var userToDelete=await Users.create({     //test delete
      id:"f30e3325-2dbe-4bd3-82a4-d9e827380f20",
      name:"meborran",
      lastName:"apellidomeborran",
      username:"hola",
      password:"lala",
      email:"hola@gmail.com"
    })
    


    console.log('%s listening at 3001 ahi va!!!!'); // eslint-disable-line no-console
  });
});
