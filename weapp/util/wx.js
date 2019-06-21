"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(3));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var wxUtil = {
  wxSwitchTab: function wxSwitchTab(url) {
    wx.switchTab({
      url: url
    });
  },
  wxNavigateTo: function wxNavigateTo(url) {
    wx.navigateTo({
      url: url
    });
  },
  wxShowToast: function wxShowToast(title) {
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
    wx.showToast({
      title: title,
      icon: icon,
      duration: duration
    });
  },
  wxHideToast: function wxHideToast() {
    wx.hideToast();
  },
  wxShowLoading: function wxShowLoading(title) {
    wx.showLoading({
      title: title
    });
  },
  wxHideLoading: function wxHideLoading() {
    wx.hideLoading();
  },
  wxRequest: function () {
    var _wxRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(url) {
      var data,
          method,
          header,
          dataType,
          responseType,
          response,
          _args = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';
              header = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};
              dataType = _args.length > 4 && _args[4] !== undefined ? _args[4] : 'json';
              responseType = _args.length > 5 && _args[5] !== undefined ? _args[5] : 'text';
              wxUtil.wxShowLoading('加载中...');

              if (header instanceof Object && Object.keys(header).length > 0) {
                if (header['content-type'] === undefined || !header['content-type']) {
                  header['content-type'] = 'application/json';
                }
              } else {
                header = {
                  'content-type': 'application/json'
                };
              }

              console.log({
                url: url,
                data: data,
                method: method,
                header: header,
                dataType: dataType,
                responseType: responseType
              });
              _context.next = 10;
              return new Promise(function (resolve, reject) {
                // resolve表示将状态变成成功完成
                // reject表示将状态变成失败完成
                wx.request({
                  url: url,
                  data: data,
                  method: method,
                  header: header,
                  dataType: dataType,
                  responseType: responseType,
                  success: function success(data) {
                    resolve(data);
                  },
                  fail: function fail(data) {
                    reject(data);
                  }
                });
              });

            case 10:
              response = _context.sent;
              wxUtil.wxHideLoading();
              console.log(response);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function wxRequest(_x) {
      return _wxRequest.apply(this, arguments);
    }

    return wxRequest;
  }(),
  wxPostRequest: function () {
    var _wxPostRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2(url, data) {
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.wxRequest(url, data, 'POST');

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function wxPostRequest(_x2, _x3) {
      return _wxPostRequest.apply(this, arguments);
    }

    return wxPostRequest;
  }(),
  wxPutRequest: function wxPutRequest(url, data) {
    _this.wxRequest(url, data, 'PUT');
  },
  wxPatchRequest: function wxPatchRequest(url, data) {
    _this.wxRequest(url, data, 'PATCH');
  },
  wxDeleteRequest: function wxDeleteRequest(url, data) {
    _this.wxRequest(url, data, 'DELETE');
  }
};
var _default = wxUtil;
exports["default"] = _default;