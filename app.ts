import {Application, Context} from 'egg'
import RPCClient from '@alicloud/pop-core'
// tslint:disable-next-line:no-var-requires
const ROAClient = require('@alicloud/pop-core').ROAClient
import uuidV1 = require('uuid/v1')

import assert = require('assert')

export default (app: Application) => {
    const config = app.config.aliyunOpenApi
    assert(config.key)
    assert(config.secret)
    assert(config.mount)

    Object.keys(config.mount).forEach(key => {
        if (key === 'vod') {
            app.get(config.mount[key], async (ctx: Context) => {
                const client = new RPCClient({
                    accessKeyId: config.key,
                    accessKeySecret: config.secret,
                    endpoint: `https://${key}.${config.regionId}.aliyuncs.com`,
                    apiVersion: config.apiVersion,
                })

                ctx.body = await client.request(ctx.query.action, {
                    VideoId: ctx.query.videoId,
                    PlayConfig: ctx.query.playConfig || (config.vod ? JSON.stringify(config.vod.playConfig) : undefined),
                })
            })
        } else {
            const subRouter = app.router.namespace(config.mount[key])

            subRouter.post('/text/scan', async (ctx: Context) => {
                const client = new ROAClient({
                    accessKeyId: config.key,
                    accessKeySecret: config.secret,
                    endpoint: `https://${key}.${config.regionId}.aliyuncs.com`,
                    apiVersion: config.apiVersion,
                })

                ctx.body = await client.request(ctx.method, '/green/text/scan', ctx.queries, JSON.stringify({
                    scenes: ['antispam'], ...ctx.request.body,
                    tasks: [...(ctx.request.body.tasks || []).map((t: { dataId?: string, content: string }) => ({
                        dataId: t.dataId || uuidV1(),
                        content: t.content,
                    }))],
                }), {
                    'Content-Type': 'application/json', ...ctx.headers,
                })
            })
        }
    })
}
