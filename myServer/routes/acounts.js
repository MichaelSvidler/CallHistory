var express = require('express');
var router = express.Router();
var db = require('../db-service/index');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',async function(req,res,next){
  let user = await db.Account.findOne({
    where:{
      username: req.body.username,
      password: req.body.password
    }
  });
  console.log("**********************");
  console.log(user);
  if (user === null) res.status(400).send()
  else return res.send(user);
}
  )


  router.post('/',async function(req,res,next){
    const user  = await userNamefinder(req.body.username);
    
   console.log(user);
    
   if(user === null){
     db.Account.create({
       username: req.body.username,
       password: req.body.password,
       phonenumber: req.body.phonenumber
     }).then((result) => res.send(result))
   }else res.status(400).send()
 });
 
 async function userNamefinder(newUsername){
 
   const  user = await db.Account.findOne({ where: { username: newUsername}});
   if (user === null) return null;
   else
   return 400;
 }

 router.get('/contacts/:id', async function(req,res,next){
   try {
        var contacts = await db.Contacts.findAll({
          where: {
            accountUserId: req.params.id
          }});
          return res.send(contacts)
   } catch (error){
      res.sendStatus(400)
   }
})

router.post('/contacts', async function(req,res,next){
      db.Contacts.create({
          name: req.body.name,
          phonenumber: req.body.phonenumber,
          accountUserId: req.body.accountUserId
      }).then((result)=> res.send(result))
      .catch((err)=> res.sendStatus(400))
})


router.delete('/contacts/:id', function(req,res,next){
  db.Contacts.destroy({
      where: {
        contact_id: req.params.id
      }
  }).then(()=>{
     return res.sendStatus(200)
  })
  .catch((err)=> res.send(err))
})

router.put('/contacts/:id', function(req,res,next){
  db.Contacts.update({name: req.body.name, phonenumber : req.body.phonenumber},{
      where:{
          contact_id: req.params.id
      }

  }).then((result)=>res.sendStatus(200))
  .catch((err)=> res.sendStatus(err))
})

router.post('/calls', async function(req,res,next){
  
  db.callHistory.create({
      calldate:new Date( req.body.calldate),
      accountUserId: req.body.accountUserId,
      contactContactId: req.body.contactContactId
  }).then((result)=> res.send(result))
  .catch((err)=> res.sendStatus(400))


})
 
router.get('/calls/:id', async function(req,res,next){
  try {
       var calls = await db.callHistory.findAll({
         where: {
           accountUserId: req.params.id
         }});
         return res.send(calls)
  } catch (error){
     res.sendStatus(400)
  }
})


module.exports = router;
