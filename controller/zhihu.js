'use strict'
const zhihuModel = require('../model/zhihu')

class zhihuController {
    constructor(props) {

    }
    async getZhihuList(ctx, next) {
        const body = ctx.request.body
        console.log(body)
        const options = body.url ? body.url : 'https://www.zhihu.com/question/29024583'
        const result = await zhihuModel.getZhihuList(options)
        ctx.body = {
            list: result ? result : []
        }
    }
}


module.exports = new zhihuController()