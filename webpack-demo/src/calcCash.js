"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;

var Calculator =
/*#__PURE__*/
function () {
  function Calculator() {
    var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Calculator);

    this.own = own;
    this.cash = cash;
  }

  _createClass(Calculator, [{
    key: "calcCash",
    value: function calcCash() {
      var everyCash = this.cash.concat(this.own);
      var total = everyCash.reduce(function (first, last) {
        return first + last;
      }, 0);
      return total;
    }
  }]);

  return Calculator;
}();

var calc = new Calculator(null, cash);
var money = calc.calcCash();
exports.money = money;