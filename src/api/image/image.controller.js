import { create, update, get, getAllByPage, getAll } from "./image.store";
import { checkImageFields } from "../../utils/image.utils";

const createImage = async(image) => {
    try {
        await checkImageFields(image);
        await create(image);
        return image;
    } catch (err) {
        throw (err);
    }
};

const updateImage = async(image) => {
    try {
        await checkImageFields(image);
        image.updatedAt = new Date();
        await update(image);
        return image;
    } catch (err) {
        throw (err);
    }
};

const getImage = async(id) => {
    try {
        const image = await get(id);
        return image;
    } catch (err) {
        throw (err);
    }
};

const getSortedImagesByPage = async(page) => {
    try {
        const images = await getAllByPage(page);
        return images;
    } catch (err) {
        throw (err);
    }
};

const getCombination = async(length) => {
    try {
        const images = await getAll();

        function combinationUtil(arr, data, start, end, index, r) {
            if (index == r) {
                for (let j = 0; j < r; j++) {
                    console.log(data[j])
                    console.log(j)
                }
                console.log("+++++++++++++++++")
                console.log("-----------------");
            }

            for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
                data[index] = arr[i];
                combinationUtil(arr, data, i + 1, end, index + 1, r);
            }
        }

        function printCombination(arr, n, r) {
            let data = new Array(r);
            combinationUtil(arr, data, 0, n - 1, 0, r);
        }

        printCombination(images, images.length, length);

        return "worked";
    } catch (err) {
        throw (err);
    }
};

export {
    createImage,
    updateImage,
    getImage,
    getSortedImagesByPage,
    getCombination
};