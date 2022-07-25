import { dbConnection } from '../../db';

const create = async(imageId) => {
    try {
        const { collection, client } = await dbConnection();

        const findResult = await collection.find({ id: imageId }).toArray();
        if (findResult.length === 0)
            throw new Error("No image with image id " + imageId + " exists");
        const createdAt = new Date();
        const insertResult = await collection.insertOne({ imageId, createdAt });
        client.close();

        return insertResult;
    } catch (err) {
        throw (err);
    }
}

const getAllByPage = async(page) => {
    try {
        const { collection, client } = await dbConnection();

        const findResults = await collection.find({ imageId: { $exists: true } }).skip((page - 1) * 5).limit(5).sort({ createdAt: -1 }).toArray();
        client.close();

        return findResults;
    } catch (err) {
        throw (err);
    }
}

export {
    create,
    getAllByPage
}