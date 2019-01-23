const router = require('koa-router')()
const homeController = require('../controller/home')
const zhihuController = require('../controller/zhihu')

// router.prefix('/api')

// router.get('/home', homeController.getHomeList)
router.post('/', zhihuController.getZhihuList)
router.get('/img', zhihuController.getRefer)
router.get('/test', zhihuController.test)

module.exports = router