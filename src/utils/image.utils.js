const checkImageFields = async(image) => {
    try {
        if (!(image.id && image.repository && image.version))
            throw new Error("Image doesn't have required fields to be created: Id, Repository, Version");

        if (typeof image.id !== 'string' ||
            typeof image.repository !== 'string' ||
            typeof image.version !== 'string')
            throw new Error("Image fields don't match the correct field type");
    } catch (err) {
        throw (err);
    }
};

export { checkImageFields };