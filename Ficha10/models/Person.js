
module.exports = (sequelize, type) => {
    //Define Model
    return sequelize.define('persons',{
        //attributes
        firstName: type.TEXT,
        lastName: type.TEXT,
        profession: type.STRING,
        age: type.STRING,
    });
}

