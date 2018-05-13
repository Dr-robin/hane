import RouteManager from '../lib/router';

const router = new RouteManager();
router.add({
    url: '/sign-in',
    method: 'GET',
    async handler() {
        return {success: true};
    }
});
router.add({
    url: '/sign-in',
    method: 'POST',
    async handler(req) {

    }
});

export default router;
