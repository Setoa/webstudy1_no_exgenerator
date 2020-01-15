const models=require('../model');

module.exports=()=>{
    return models.sequelize.sync({force:true});
}