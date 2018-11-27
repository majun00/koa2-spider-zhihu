const superagent = require('../utils/superagent')
module.exports = {
    async getZhihuList(options) {
        const photos = []
        const $ = await superagent(options)
        let answerList = $('img').each((i, element) => {
            let list = $(element).attr('data-original')
            if (list) {
                // 替换
                // list=list.replace(/https/, "http")
                photos.push(list)
            }
        });

        return photos
    }
}