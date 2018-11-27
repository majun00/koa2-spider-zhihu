const http = require("http")
const superagent = require("superagent")
const cheerio = require("cheerio")
module.exports = (url) => {
    return new Promise((resolve, reject) => {
        superagent
            .get(url)
            .end((err, res) => {
                if (err) {
                    reject(err)
                }
                // resolve(res.text)
                resolve(cheerio.load(res.text))
            })
    })
}