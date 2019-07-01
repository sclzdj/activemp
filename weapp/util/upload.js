"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(0));

var _wx = _interopRequireDefault(require('wx.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UPLOAD_API_DEMAIN = 'http://15233xe404.iask.in/api/upload';
var uploadUtil = {
  upload: function () {
    var _upload = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(tempFilePath) {
      var formData,
          handle,
          name,
          isShowLoading,
          response,
          _args = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              formData = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              handle = _args.length > 2 ? _args[2] : undefined;
              name = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'file';
              isShowLoading = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
              if (isShowLoading) _wx["default"].wxShowLoading('上传中...');
              _context.next = 7;
              return new Promise(function (resolve, reject) {
                var uploadTask = wx.uploadFile({
                  url: UPLOAD_API_DEMAIN,
                  filePath: tempFilePath,
                  name: name,
                  formData: formData,
                  success: function success(data) {
                    resolve(data);
                  },
                  fail: function fail(data) {
                    reject(data);
                  }
                });
                uploadTask.onProgressUpdate(function (res) {
                  handle(res.progress);
                });
              });

            case 7:
              response = _context.sent;
              if (isShowLoading) _wx["default"].wxHideLoading();
              response.data = JSON.parse(response.data);
              return _context.abrupt("return", response);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function upload(_x) {
      return _upload.apply(this, arguments);
    }

    return upload;
  }(),
  image: function () {
    var _image = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee2() {
      var sizeType,
          sourceType,
          res,
          _args2 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sizeType = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : ['original', 'compressed'];
              sourceType = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : ['album', 'camera'];
              _context2.next = 4;
              return new Promise(function (resolve, reject) {
                wx.chooseImage({
                  count: 1,
                  sizeType: sizeType,
                  sourceType: sourceType,
                  success: function success(data) {
                    resolve(data);
                  },
                  fail: function fail(data) {
                    reject(data);
                  }
                });
              });

            case 4:
              res = _context2.sent;
              return _context2.abrupt("return", res.tempFilePaths[0]);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function image() {
      return _image.apply(this, arguments);
    }

    return image;
  }()
};
var _default = uploadUtil;
exports["default"] = _default;