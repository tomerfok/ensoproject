import { Router } from 'express';
const router = Router();
import { upsertImage } from './deployment.controller';

router.get('/', async(req, res, next) => {
    try {
        const image = await upsertImage();
        res.send({ message: "Work", image });
    } catch (err) {
        next(err);
    }
});

// router.get('/', async(req, res, next) => {
//     try {
//         const { index, limit } = req.query;
//         const posts = await getPosts(+index, +limit);
//         res.send({ message: `Posts ${index + 1} to ${posts.length}`, posts });
//     } catch (err) {
//         next(err);
//     }
// });

// router.get('/postsnumber', async(req, res, next) => {
//     try {
//         const postsAmount = await getPostsAmount();
//         res.send({ message: `Amount of posts: ${postsAmount}` });
//     } catch (err) {
//         next(err);
//     }
// });

// router.delete('/', async(req, res, next) => {
//     try {
//         const post = await deletePost(req.query);
//         res.send({ message: "Post deleted succefully" });
//     } catch (err) {
//         next(err);
//     }
// });

export default router;