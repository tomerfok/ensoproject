import { Router } from 'express';
const router = Router();
import { createImage, updateImage } from './image.controller';

// router.post('/', middlewarehandler, async(req,res,next) =>)

router.post('/', async(req, res, next) => {
    try {
        const result = await createImage(req.body);
        res.status(200).send({ message: "Image created", image: req.body });
    } catch (err) {
        next(err);
    }
});

router.patch('/', async(req, res, next) => {
    try {
        const result = await updateImage(req.body);
        res.status(200).send({ message: "Image updated", image: req.body });
    } catch (err) {
        next(err);
    }
});

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