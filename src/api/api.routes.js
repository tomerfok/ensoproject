import { Router } from 'express';
// import { preLogApi } from './middlewares';
import deploymentRouter from './deployment/deployment.router';
import imageRouter from './image/image.router';

const router = Router();
// router.use(preLogApi);

router.use('/deployment', deploymentRouter);
router.use('/image', imageRouter);

// router.use(clientErrorHandler);

export default router;