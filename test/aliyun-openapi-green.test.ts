import mock from 'egg-mock'
// import request from 'supertest'
import assert = require('assert')
import nock from 'nock'

describe('test/green.test.ts', () => {
    let app: any
    before(async () => {
        app = mock.app({
            baseDir: 'apps/aliyun-openapi-test',
        })

        return app.ready()
    })

    after(() => app.close())

    afterEach(mock.restore)

    it('should GET /green text scan', async () => {
        nock('https://green.cn-shanghai.aliyuncs.com').post(() => true).reply(200, {
            msg: 'OK',
            code: 200,
            data: [
                {
                    msg: 'OK',
                    code: 200,
                    dataId: 'xxxx$rdBjUC1C-1rd9Ah',
                    results: [
                        {
                            rate: 50.0,
                            suggestion: 'review',
                            details: [
                                {
                                    hintWords: [
                                        {
                                            context: '奥巴马',
                                        },
                                    ],
                                    contexts: [
                                        {
                                            libCode: '123456',
                                            libName: '您自定义的词库名称',
                                            context: '特朗普',
                                        },
                                    ],
                                    label: 'politics',
                                },
                            ],
                            label: 'politics',
                            scene: 'antispam',
                        },
                    ],
                    content: '奥巴马特朗普昨日在白宫进行了会面',
                    filteredContent: '***特朗普昨日在白宫进行了会面',
                    taskId: 'xxxxxxyyyyyy-xxxx',
                },
            ],
            requestId: 'yyyyyyyy-862F-4BAE-8B4E-xxxxxxx',
        })

        const res = await app
            .httpRequest()
            .post('/green/text/scan?_csrf=green')
            .set('Cookie', [`csrfToken=green`])
            .send({
                tasks: [{content: '123'}]
            })
            .expect(200)

        assert.deepStrictEqual(res.body.msg, 'OK')
    })
})
