/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
const express = require('express');
const app = express();
//const user=require('./model').User;
//const bodyParser=require('body-parser');
app.use('/users', require('./api/user'));
/*
app.get('/', (req, res) => res.send('Hello World!'))

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



app.get('/users/:id', (req, res) => {
  const id=parseInt(req.params.id, 10);
  if(!id) return res.status(400).json({error:'Incorrect ID'});
  let user=users.filter(user => {
    return user.id===id;
  })[0];
  if(!user) return res.status(400).json({error:'Unknown Error'});
  return res.json(user);
});

app.delete('/users/:id',(req,res) => {
  const id=parseInt(req.params.id, 10);
  if(!id) return res.status(400).json({error: 'Incorrect ID'});
  const userIdx = users.findIndex(user => user.id === id);
  if (userIdx === -1) return res.status(404).json({error: 'Unknown user'});
  users.splice(userIdx,1);
  res.status(204).send();
});
*/
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
/*
app.post('/users',(req,res)=>{
  const name=req.body.name || '';
  if(!name.length) return res.status(400).json({error:'incorrect name'});
  const id=users.reduce((maxId,user)=>user.id>maxId?user.id:maxId,0)+1;
  const newUser={
    id : id,
    name : name
  };
  users.push(newUser);
  return res.status(201).json(newUser);
});
*/
/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  require('./model').sequelize.sync({force:true}).then(()=>console.log('Datebase sync'));
});
*/
module.exports=app;