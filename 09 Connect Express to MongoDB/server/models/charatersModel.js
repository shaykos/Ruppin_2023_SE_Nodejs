//import
const DB = require('../utils/db');

class CharacterModel {

    charater_name
    age
    actor


    constructor(charater_name = undefined, age = undefined, actor = undefined) {
        this.charater_name = charater_name;
        this.actor = actor;
        this.age = age;
    }

    static async  FindAllCharacter(){
        return new DB().FindAll('characters');    
    }

    static async FindCharacter(id){
        return new DB().FindByID('characters', id);  
    }
}

//export
module.exports = CharacterModel;