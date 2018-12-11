const superagent = require('../utils/superagent')
module.exports = {
    async getZhihuList(options, pageIndex) {
        const pageSize = 10
        const photos = []
        const $ = await superagent(options)
        let answerList = $('img').each((i, element) => {
            let list;
            if (options.indexOf('zhihu') != '-1') {
                list = $(element).attr('data-original')
            } else {
                list = $(element).attr('src')
            }
            if (list) {
                if (i > (pageIndex - 1) * pageSize && i < pageIndex * pageSize) {
                    photos.push(list)
                }
            }
        });

        return photos
    }
}