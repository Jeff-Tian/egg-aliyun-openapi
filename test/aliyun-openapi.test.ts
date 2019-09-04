const mock = require("egg-mock");
const request = require("supertest");

describe("test/passport-citi.test.ts", () => {
    let app: any;
    before(async () => {
        app = mock.app({
            baseDir: "apps/aliyun-openapi-test"
        });

        return app.ready();
    });

    after(() => app.close());

    afterEach(mock.restore);

    it("should get /", () => {
        return request(app.callback())
            .get("/")
            .expect("hi, aliyunOpenApi")
            .expect(200);
    });

    it("should GET /vod play auth", async () => {
        return app
            .httpRequest()
            .get("/vod")
            .expect(200)
    });
});
