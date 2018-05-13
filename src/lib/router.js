const Express = require('express');

class RouteManager {
	constructor() {
		this.expressRouter = Express.Router();
	}
	add(r) {
		async function wrapper(req, res) {
			try {
				const result = await r.handler(req);
				res.json(result);
			}
			catch(e) {
				if(e.isJoi) {   // Request arguments error
					res.status(400).json({success: false, message: e.details[0].message})
				}
				else {
					res.status(500).json({success: false, message: 'Unexcepted Error'});
					console.error(e);
				}
			}
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
module.exports = RouteManager;
