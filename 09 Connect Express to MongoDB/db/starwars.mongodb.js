
const database = 'StarWars';

// The current database to use.
use(database);

//create collection
db.createCollection('character');

db.character.find();

db.character.insertOne({
    charater_name: 'Luke Skywaker',
    age: 20,
    actor: 'Mark Hammil'
});

db.character.renameCollection('characters');

db.characters.insertOne({
    charater_name: 'Princess Leia',
    age: 20,
    actor: 'Carry Fisher'
});

db.characters.insertOne({
    charater_name: 'Han Solo',
    age: 26,
    actor: 'Harison Ford'
});

