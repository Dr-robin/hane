import Express from 'express';

const router: Express.Router = Express.Router();

router.get('/sign-in', (req: Express.Request, res: Express.Response) => {
    res.json({success: true});
});

export default router;