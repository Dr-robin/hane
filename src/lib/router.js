import Express from 'express';

export default class RouteManager {
    constructor() {
        this.expressRouter = Express.Router();
    }
    add(r) {
        async function wrapper(req, res) {
            const result = await r.handler(req);
            res.json(result);
        }
        switch(r.method.toUpperCase()) {
            case 'GET':
                this.expressRouter.get(r.url, wrapper);
                break;
            case 'POST':
                this.expressRouter.post(r.url, wrapper);
                break;
            case 'PUT':
                this.expressRouter.put(r.url, wrapper);
                break;
            case 'DELETE':
                this.expressRouter.delete(r.url, wrapper);
                break;
        }
    }
}
