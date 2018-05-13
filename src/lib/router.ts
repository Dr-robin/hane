import Express from 'express';

export const enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export class RouteUtils {
    constructor() {
        
    }
}

export type Router = {
    url: string;
    method: HTTPMethod;
    handler(req: Express.Request, utils: RouteUtils): any;
}

export class RouteManager {
    private readonly expressRouter: Express.Router;
    constructor() {
        this.expressRouter = Express.Router();
    }
    add(r: Router) {
        async function wrapper(req: Express.Request, res: Express.Response) {
            const result: any = await r.handler(req, new RouteUtils());
            res.json(result);
        }
        switch(r.method) {
            case HTTPMethod.GET:
                this.expressRouter.get(r.url, wrapper);
                break;
            case HTTPMethod.POST:
                this.expressRouter.post(r.url, wrapper);
                break;
            case HTTPMethod.PUT:
                this.expressRouter.put(r.url, wrapper);
                break;
            case HTTPMethod.DELETE:
                this.expressRouter.delete(r.url, wrapper);
                break;
        }
    }
    get expressConnector(): Express.Router {
        return this.expressRouter;
    }
}
