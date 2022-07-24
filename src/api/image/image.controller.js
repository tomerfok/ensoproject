// import { Post } from "../db/models/index.js";
// import postStore from "./post.store.js";
// import userStore from "../user/user.store.js";
import { create, update } from "./image.store";

const createImage = async(image) => {
    try {
        const result = await create(image);
        return result;
    } catch (err) {
        throw (err);
    }
};

const updateImage = async(image) => {
    try {
        const result = await update(image);
        return result;
    } catch (err) {
        throw (err);
    }
};

// const getPosts = async (index, limit) => {
//     try {
//         return await postStore.getPosts(index, limit);
//     } catch (err) {
//         throw (err);
//     }
// };

// const getPostsAmount = async () => {
//     try {
//         return await postStore.findAmount();
//     } catch (err) {
//         throw (err);
//     }
// };

// const deletePost = async ({ postId }) => {
//     try {
//         return await postStore.deletePost(postId);
//     } catch (err) {
//         throw (err);
//     }
// };

export {
    createImage,
    updateImage
    // getPosts,
    // getPostsAmount,
    // deletePost
};