"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const egg_mock_1 = tslib_1.__importDefault(require("egg-mock"));
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const assert = require("assert");
const nock_1 = tslib_1.__importDefault(require("nock"));
describe('test/aliyun-openapi.test.ts', () => {
    let app;
    before(async () => {
        app = egg_mock_1.default.app({
            baseDir: 'apps/aliyun-openapi-test',
        });
        return app.ready();
    });
    after(() => app.close());
    afterEach(egg_mock_1.default.restore);
    it('should get /', () => {
        return supertest_1.default(app.callback())
            .get('/')
            .expect('hi, aliyunOpenApi')
            .expect(200);
    });
    it('should GET /vod play auth', async () => {
        nock_1.default('https://vod.cn-shanghai.aliyuncs.com').get(() => true).reply(200, {
            RequestId: '25818875-5F78-4A13-BEF6-D7393642CA58',
            VideoMeta: {
                VideoId: '93ab850b4f6f44eab54b6e91d24d81d4',
                Title: '阿里云VOD',
                Duration: 135.6,
                CoverURL: 'https://image.example.com/sample.jpg',
                Status: 'Normal',
            },
            PlayAuth: 'sstyYuew678999ew90000000xtt7TYUh',
        });
        const res = await app
            .httpRequest()
            .get('/vod?action=GetVideoPlayAuth&videoId=3ed5e388346447e59ad0f0b5773afcca')
            .expect(200);
        assert.deepStrictEqual(res.body.PlayAuth, 'sstyYuew678999ew90000000xtt7TYUh');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpeXVuLW9wZW5hcGktdm9kLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGl5dW4tb3BlbmFwaS12b2QudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnRUFBMkI7QUFDM0Isa0VBQStCO0FBQy9CLGlDQUFpQztBQUNqQyx3REFBdUI7QUFFdkIsUUFBUSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUN6QyxJQUFJLEdBQVEsQ0FBQTtJQUNaLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtRQUNkLEdBQUcsR0FBRyxrQkFBSSxDQUFDLEdBQUcsQ0FBQztZQUNYLE9BQU8sRUFBRSwwQkFBMEI7U0FDdEMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdEIsQ0FBQyxDQUFDLENBQUE7SUFFRixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7SUFFeEIsU0FBUyxDQUFDLGtCQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFdkIsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7UUFDcEIsT0FBTyxtQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN6QixHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ1IsTUFBTSxDQUFDLG1CQUFtQixDQUFDO2FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQixDQUFDLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2QyxjQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNwRSxTQUFTLEVBQUUsc0NBQXNDO1lBQ2pELFNBQVMsRUFBRTtnQkFDUCxPQUFPLEVBQUUsa0NBQWtDO2dCQUMzQyxLQUFLLEVBQUUsUUFBUTtnQkFDZixRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxNQUFNLEVBQUUsUUFBUTthQUNuQjtZQUNELFFBQVEsRUFBRSxrQ0FBa0M7U0FDL0MsQ0FBQyxDQUFBO1FBRUYsTUFBTSxHQUFHLEdBQUcsTUFBTSxHQUFHO2FBQ2hCLFdBQVcsRUFBRTthQUNiLEdBQUcsQ0FBQyx1RUFBdUUsQ0FBQzthQUM1RSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFaEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFBO0lBQ2pGLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==