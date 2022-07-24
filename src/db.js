import { MongoClient } from 'mongodb';
const url = process.env.DBPORT || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'myProject';

async function dbConnection() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('documents');
    return { collection: collection, client: client };
}

export { dbConnection };