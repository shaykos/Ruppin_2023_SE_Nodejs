const { MongoClient, ObjectId } = require('mongodb');

class DB {

    client;
    dbName; // לא חובה

    constructor() {
        this.client = new MongoClient('');
        this.dbName = '';
    }


    async FindAll(collection, query = {}, projection = {}) {
        try {
            await this.client.connect();
            return await this.client.db(this.dbName).collection(collection).find(query, projection).toArray();
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }

    async FindByID(collection, id) {
        try {
            await this.client.connect();
            return await this.client.db(this.dbName).collection(collection).findOne({ _id: new ObjectId(id) });
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }


    async Insert(collection, doc) {
        try {
            await this.client.connect();
            return await this.client.db(this.dbName).collection(collection).insertOne(doc);
        } catch (error) {
            return error;
        } finally {
            await this.client.close();
        }
    }

    async InsertMany(collection, docs) {
        try {
            await this.client.connect();
            return await this.client.db(this.dbName).collection(collection).insertMany(docs);
        } catch (error) {
            return error;
        } finally {
            await this.client.close();
        }
    }



}

module.exports = DB;