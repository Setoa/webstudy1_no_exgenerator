const config=require('./config/environment');
const Sequelize=require('sequelize');
const sequelize=new Sequelize(config.mysql.database,config.mysql.username,config.mysql.password,{
    //username: 'root',
    //password: 'kaillika01!',
    //database: 'node_api_codelab',
    host:'localhost',
    dialect:'mysql'
});
const User=sequelize.define('user',{
    name : Sequelize.STRING
});

module.exports={
    sequelize:sequelize,
    User : User
};