import { Router } from 'express';
const router = Router();
import { createDeployment, getSortedDeploymentsByPage, getTotalDeploymentsCount } from './deployment.controller';

router.post('/', async(req, res, next) => {
    try {
        await createDeployment(req.query.imageId);
        res.status(200).send({ message: "Deployment created" });
    } catch (err) {
        next(err);
    }
});

router.get('/all', async(req, res, next) => {
    try {
        const deployments = await getSortedDeploymentsByPage(+req.query.page);
        res.send({ message: "Deployments found", deployments });
    } catch (err) {
        next(err);
    }
});

router.get('/count', async(req, res, next) => {
    try {
        const totalCount = await getTotalDeploymentsCount();
        res.send({ message: "Deployments count", totalCount });
    } catch (err) {
        next(err);
    }
});

export default router;