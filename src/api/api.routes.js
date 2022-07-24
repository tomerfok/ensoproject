import { Router } from 'express';
const router = Router();
import deploymentRouter from './deployment/deployment.router';
import imageRouter from './image/image.router';

// import { errorHandler } from './middlewares';
// router.use(errorHandler);

router.use('/deployment', deploymentRouter);
router.use('/image', imageRouter);

export default router;