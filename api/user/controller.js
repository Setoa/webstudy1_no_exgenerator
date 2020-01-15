const express=require('express');
const controller=express();
const bodyParser=require('body-parser');
const models=require('../../model');
controller.use(bodyParser.json());
controller.use(bodyParser.urlencoded({ extended: true }));
/*
let users=[
    {
      id:1,
      name:'alice'
    },
    {
      id:2,
      name:'bek'
    },
    {
      id:3,
      name:'chris'
    }
  ];
*/
exports.index=(req,res)=>{
    /*
    if(!users.length) return res.status(400).json({error : 'No User'});
    return res.json(users);
    */
   models.User.findAll().then(users=>res.json(users));
  };

exports.show=(req, res) => {
    const id=parseInt(req.params.id, 10);
    if(!id) return res.status(400).json({error:'Incorrect ID'});
    /*
    let user=users.filter(user => {
      return user.id===id;
    })[0];
    if(!user) return res.status(400).json({error:'Unknown Error'});
    */
    models.User.findOne({
      where:{
        id:id
      }
    }).then(user=>{
      if(!user) return res.status(404).json({error:'No User'});
      return res.json(user);
    })
    
  };

exports.destroy=(req,res) => {
    const id=parseInt(req.params.id, 10);
    if(!id) return res.status(400).json({error: 'Incorrect ID'});
    /*
    const userIdx = users.findIndex(user => user.id === id);
    if (userIdx === -1) return res.status(404).json({error: 'Unknown user'});
    users.splice(userIdx,1);
    res.status(204).send();
    */
    models.User.destroy({
      where:{
        id:id
      }
    }).then(()=>res.status(204).send());
  };

exports.create=(req,res)=>{
    const name=req.body.name || '';
    if(!name.length) return res.status(400).json({error:'incorrect name'});
    models.User.create({
      name:name
    }).then(user=>res.status(201).json(user))
    /*
    const id=users.reduce((maxId,user)=>user.id>maxId?user.id:maxId,0)+1;
    const newUser={
      id : id,
      name : name
    };
    users.push(newUser);
    return res.status(201).json(newUser);
    */
  };

  exports.update=(req,res)=>{
    res.send();
  }