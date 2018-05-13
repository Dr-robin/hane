import {RouteManager, HTTPMethod} from "../lib/router";

const router: RouteManager = new RouteManager();
router.add({
    url: '/sign-in',
    method: HTTPMethod.GET,
    async handler() {
        return {success: true};
    }
});

export default router;
