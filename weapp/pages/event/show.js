"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(0));

var _core = _interopRequireDefault(require('../../vendor.js')(1));

var _x2 = require('../../vendor.js')(2);

var _store = _interopRequireDefault(require('../../store/index.js'));

var _wx = _interopRequireDefault(require('../../util/wx.js'));

var _wxParse = _interopRequireDefault(require('../../wxParse/wxParse.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 第一步：引入
_core["default"].page({
  store: _store["default"],
  data: {},
  computed: _objectSpread({}, (0, _x2.mapState)(['event'])),
  methods: {},
  onLoad: function () {
    var _onLoad = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(options) {
      var response, that;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$store.dispatch('getEvent', {
                id: options.id
              });

            case 2:
              response = _context.sent;
              //actions方法调用方法
              wx.setNavigationBarTitle({
                title: this.event.title
              });
              that = this;

              _wxParse["default"].wxParse('content', 'html', that.event.content, that, 5);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function onLoad(_x) {
      return _onLoad.apply(this, arguments);
    }

    return onLoad;
  }()
}, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {}, models: {} });