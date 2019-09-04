# egg-aliyun-openai

> eggjs plugin for invoke aliyun openapi, wrapper of [OpenAPI POP core SDK for Node.js](https://github.com/aliyun/openapi-core-nodejs-sdk)

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-aliyun-openapi.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-aliyun-openapi)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-aliyun-openapi/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-aliyun-openapi)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-aliyun-openapi.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-aliyun-openapi
[david-image]: https://img.shields.io/david/jeff-tian/egg-aliyun-openapi.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-aliyun-openapi
[snyk-image]: https://snyk.io/test/npm/egg-aliyun-openapi/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-aliyun-openapi
[download-image]: https://img.shields.io/npm/dm/egg-aliyun-openapi.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-aliyun-openapi

<!--
Description here.
-->

## Example

Open [https://uniheart.herokuapp.com/](https://uniheart.herokuapp.com/) to see the result.

## Install

```bash
$ npm i egg-aliyun-openapi --save
```

## Usage

```js
// {app_root}/config/plugin.[t|j]s
exports.aliyunOpenApi = {
  enable: true,
  package: "egg-aliyun-openapi"
};
```

## Configuration

```js
// {app_root}/config/config.default.[t|j]s
exports.aliyunOpenApi = {
  key: "your access key id",
  secret: "your secret access key",
  regionId: 'cn-shanghai',
  apiVersion: '2017-03-21'
};
```

see [config/config.default.ts](config/config.default.ts) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:
