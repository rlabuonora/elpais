import slug from "slug";
import cheerio from 'cheerio'

const url = process.argv[2]

import superagent from 'superagent'
import proxy from 'superagent-proxy'

proxy(superagent)

const ps = superagent
  .get(url)
  .proxy(process.env.http_proxy)
  .end((err, res) => {
    console.log(cheerio.load(res.text)('.content-modules p.paragraph').text())
  })
  





