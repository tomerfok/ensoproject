import { dbConnection } from '../../db';

const create = async(image) => {
    try {
        const { collection, client } = await dbConnection();

        const findResult = await collection.find({ $or: [{ id: image.id }, { repository: image.repository }] }).toArray();
        if (findResult.length > 0)
            throw new Error("Image already exists in db with similar id or repository");

        image.updatedAt = new Date();
        const insertResult = await collection.insertOne(image);
        client.close();

        return insertResult;
    } catch (err) {
        throw (err);
    }
}

const update = async(image) => {
    try {
        const { collection, client } = await dbConnection();

        const findResult = await collection.find({ id: image.id }).toArray();
        if (findResult.length === 0)
            throw new Error("Image to update does not exist");

        const updateResult = await collection.updateOne({ id: image.id }, {
            $set: {
                repository: image.repository,
                version: image.version,
                metadata: image.metadata,
                updatedAt: image.updatedAt
            }
        });
        client.close();

        return updateResult;
    } catch (err) {
        throw (err);
    }
}

const get = async(id) => {
    try {
        const { collection, client } = await dbConnection();

        const findResult = await collection.find({ id: id }).toArray();
        client.close();

        if (findResult.length === 0)
            throw new Error("No image found by id: " + id);

        return findResult;
    } catch (err) {
        throw (err);
    }
}

const getAllByPage = async(page) => {
    try {
        const { collection, client } = await dbConnection();

        const findResults = await collection.find({ repository: { $exists: true } }).skip((page - 1) * 5).limit(5).sort({ updatedAt: -1 }).toArray();
        client.close();

        return findResults;
    } catch (err) {
        throw (err);
    }
}

const getAll = async() => {
    try {
        const { collection, client } = await dbConnection();

        const findResults = await collection.find({ repository: { $exists: true } }).toArray();
        client.close();

        if (findResults.length === 0)
            throw new Error("No images found");

        return findResults;
    } catch (err) {
        throw (err);
    }
}

export {
    create,
    update,
    get,
    getAllByPage,
    getAll
}