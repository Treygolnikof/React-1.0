"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employers =
/*#__PURE__*/
function () {
  function Employers() {
    _classCallCheck(this, Employers);

    for (var _len = arguments.length, employer = new Array(_len), _key = 0; _key < _len; _key++) {
      employer[_key] = arguments[_key];
    }

    this.employer = employer;
  }

  _createClass(Employers, [{
    key: "employersFilterMap",
    value: function employersFilterMap() {
      var emp = this.employer.filter(function (name) {
        return name.length > 0 && name.length != '';
      }).map(function (name) {
        return name.toLowerCase().trim();
      });
      return emp;
    }
  }]);

  return Employers;
}();

var employersConstr = new Employers('Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann');
var employersNames = employersConstr.employersFilterMap();
exports.employersNames = employersNames;