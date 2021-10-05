"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var miClase = /*#__PURE__*/function () {
  function miClase(x, y) {
    _classCallCheck(this, miClase);

    this.x = x;
    this.y = y;
  }

  _createClass(miClase, [{
    key: "muestraX",
    value: function muestraX() {
      console.log(this.x);
    }
  }, {
    key: "sumar",
    value: function sumar() {
      var suma = 0;

      for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
        valores[_key] = arguments[_key];
      }

      for (var i in valores) {
        suma += valores[i];
      }

      return suma;
    }
  }]);

  return miClase;
}();

var miObj = new miClase(2, 5);
miObj.muestraX();
console.log(miObj.sumar(2, 4, 5, 6));