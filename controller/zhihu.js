const zhihuModel = require('../model/zhihu')
const request = require('request')

class zhihuController {
    constructor(props) {

    }

    async getZhihuList(ctx, next) {
        const body = ctx.request.body
        const options = body.url
        const pageIndex = body.pageIndex ? body.pageIndex : 1
        const result = await zhihuModel.getZhihuList(options, pageIndex)
        ctx.body = {
            list: result ? result : []
        }
    }

    async getRefer(ctx, next) {
        const url = ctx.query.url;
        var options = {
            method: "GET",
            url: url,
            headers: {
                "Referer": 'https://www.zhihu.com'
            }
        };
        const res = await request(options)
        ctx.body = res
    }
}


module.exports = new zhihuController()