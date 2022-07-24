import { dbConnection } from '../../db';

const create = async(image) => {
    try {
        if (!(image.id && image.repository && image.version))
            throw new Error("Image doesn't have required fields to be created: Id, Repository, Version");

        if (typeof image.id !== 'string' ||
            typeof image.repository !== 'string' ||
            typeof image.version !== 'string')
            throw new Error("Image fields don't match the correct field type");

        const { collection, client } = await dbConnection();
        const findResult = await collection.find({ $or: [{ id: image.id }, { repository: image.repository }] }).toArray();

        if (findResult.length > 0)
            throw new Error("Image already exists in db with similar id or repository");

        const insertResult = await collection.insertOne(image);
        client.close();

        return insertResult;
    } catch (err) {
        throw (err);
    }
}

const update = async(image) => {
    try {

        if (!(image.id && image.repository && image.version))
            throw new Error("Image doesn't have required fields to be created: Id, Repository, Version");

        if (typeof image.id !== 'string' ||
            typeof image.repository !== 'string' ||
            typeof image.version !== 'string')
            throw new Error("Image fields don't match the correct field type");

        const { collection, client } = await dbConnection();

        const findResult = await collection.find({ id: image.id }).toArray();

        const updateResult = await collection.updateOne({ id: image.id }, { $set: {} }).toArray();

        const insertResult = await collection.insertOne(image);
        console.log('Inserted documents =>', insertResult);

        console.log('Found documents =>', findResult);

        if (findResult.length == 0)
            throw new Error("Didn't create image");
        client.close();
        return findResult;
    } catch (err) {
        throw (err);
    }
}

export {
    create,
    update
    // getById,
    // getAll
}