'use strict';

const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
// 提示更新
alfredNotifier();

// http codes
const httpStatusCodes = require('./httpStatusCodes');
const results = alfy.matches(alfy.input, httpStatusCodes, 'code');

alfy.output(results.map(function (item) {
  return {
    title: item.code + ' - ' + item.message,
    subtitle: item.description,
    arg: item.link
  };
}));


// alfy.output(alfy.matches(alfy.input, keyCodes, (item, input) => item.subtitle === input));