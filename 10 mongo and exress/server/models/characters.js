const DB = require('../utils/DB');

class Character {
    static collection = 'characters';

    charater_name;
    age;
    actor;

    constructor(charater_name, age, actor) {
        this.actor = actor;
        this.age = age;
        this.charater_name = charater_name;
    }

    static async FindAllCharacters() {
        return await new DB().FindAll(Character.collection);
    }

    static async FindById(id) {
        return await new DB().FindByID(Character.collection, id);
    }

    async InsertOne(){
        return await new DB().Insert(Character.collection, this);

    }

}


module.exports = Character;

