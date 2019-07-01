"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(0));

var _core = _interopRequireDefault(require('../../vendor.js')(1));

var _x = require('../../vendor.js')(2);

var _store = _interopRequireDefault(require('../../store/index.js'));

var _wx = _interopRequireDefault(require('../../util/wx.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {},
  computed: _objectSpread({}, (0, _x.mapState)(['me'])),
  onShow: function () {
    var _onShow = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee() {
      var me;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$store.dispatch('getMe');

            case 2:
              me = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onShow() {
      return _onShow.apply(this, arguments);
    }

    return onShow;
  }(),
  methods: {
    getuserinfo: function () {
      var _getuserinfo = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var response;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _wx["default"].authorization();

              case 2:
                response = _context2.sent;

                if (!response) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return this.$store.dispatch('getMe');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getuserinfo() {
        return _getuserinfo.apply(this, arguments);
      }

      return getuserinfo;
    }()
  }
}, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'10-0': {"getuserinfo": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getuserinfo()
      })();
    
  }}}, models: {} });