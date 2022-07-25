import { Router } from 'express';
const router = Router();
import { createImage, updateImage, getImage, getSortedImagesByPage, getCombination } from './image.controller';

// router.post('/', middlewarehandler, async(req,res,next) =>)

router.post('/', async(req, res, next) => {
    try {
        const result = await createImage(req.body);
        res.status(200).send({ message: "Image created", image: result });
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

router.get('/', async(req, res, next) => {
    try {
        const image = await getImage(req.query.id);
        res.send({ message: "Image found", image });
    } catch (err) {
        next(err);
    }
});

router.get('/all', async(req, res, next) => {
    try {
        const images = await getSortedImagesByPage(+req.query.page);
        res.send({ message: "Images found", images });
    } catch (err) {
        next(err);
    }
});

router.get('/combinations', async(req, res, next) => {
    try {
        const combinations = await getCombination(+req.query.length);
        res.send({ message: "Combinations found", combinations });
    } catch (err) {
        next(err);
    }
});

export default router;