import {Application, Context} from 'egg'

// const debug = require('debug')('egg-aliyun-openapi')
import assert = require('assert')

export default (app: Application) => {
    const config = app.config.aliyunOpenApi
    assert(config.key)
    assert(config.secret)
    assert(config.mount)

    Object.keys(config.mount).forEach(key => {
        app.get(config.mount[key], (ctx: Context) => {
            ctx.body = 'ok'
        })
    })
}
