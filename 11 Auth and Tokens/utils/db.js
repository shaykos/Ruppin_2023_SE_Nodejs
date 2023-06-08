const { MongoClient, ObjectId } = require('mongodb');

class DB {
    client;
    db_name;

    constructor() {
        this.client = new MongoClient(process.env.DB_URI);
        this.db_name = process.env.DB_NAME;
    }

    //Create
    async Insert(collection, docs) {
        try {
            await this.client.connect();
            console.log(docs.length);
            if (docs.length)
                return await this.client.db(this.db_name).collection(collection).insertMany(docs);
            else
                return await this.client.db(this.db_name).collection(collection).insertOne(docs);
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }

    //Read
    async FindAll(collection, query = {}, project = {}) {
        try {

            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).find({ ...query, is_active: true }, project).toArray();
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }

    //Update
    async UpdateById(collection, id, doc) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).updateOne(
                { _id: new ObjectId(id) },
                { $set: { ...doc } }
            );
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }

    //Delete
    async Deactive(collection, id) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).updateOne(
                { _id: new ObjectId(id) },
                { $set: { is_active: false } }
            );
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }

    async Reactive(collection, id) {
        try {
            await this.client.connect();
            return await this.client.db(this.db_name).collection(collection).updateOne(
                { _id: new ObjectId(id) },
                { $set: { is_active: true } }
            );
        } catch (error) {
            return error;
        }
        finally {
            await this.client.close();
        }
    }

}

module.exports = DB;