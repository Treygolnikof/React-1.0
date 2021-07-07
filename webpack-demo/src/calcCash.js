"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var cash = sponsors.cash;

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var everyCash = cash.concat(own);
  var total = everyCash.reduce(function (first, last) {
    return first + last;
  }, 0);
  return total;
}

var money = calcCash(null, cash);
exports.money = money;