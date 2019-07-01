"use strict";

var _regeneratorRuntime2 = _interopRequireDefault(require('../../vendor.js')(0));

var _core = _interopRequireDefault(require('../../vendor.js')(1));

var _x3 = require('../../vendor.js')(2);

var _store = _interopRequireDefault(require('../../store/index.js'));

var _wx = _interopRequireDefault(require('../../util/wx.js'));

var _upload2 = _interopRequireDefault(require('../../util/upload.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {
    uploadFilename: 'yydd/241414141sadaa',
    sexs: ['未知', '男', '女'],
    avatar: '',
    avatarInput: '',
    user: {
      avatarUrl: '',
      nickName: '',
      gender: 0,
      province: ''
    },
    oldAvatarUrl: '',
    avatarUploadRun: false,
    avatarUploadStatus: true,
    avatarUploadTipsStatus: false,
    avatarUploadTips: '',
    avatarTmp: '',
    progress: 0
  },
  computed: _objectSpread({
    sexIndex: function sexIndex() {
      return this.user.gender === undefined ? 0 : this.user.gender;
    }
  }, (0, _x3.mapState)(['me'])),
  methods: {
    clearUpload: function clearUpload() {
      this.avatarUploadRun = false;
      this.avatarUploadStatus = true;
      this.avatarUploadTipsStatus = false;
      this.avatarUploadTips = '';
      this.avatarTmp = '';
      this.progress = 0;
      this.user.avatarUrl = this.oldAvatarUrl;
      this.avatar = this.oldAvatarUrl;
      this.avatarInput = this.oldAvatarUrl;
    },
    reUpload: function () {
      var _reUpload = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee() {
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.upload(this.avatarTmp);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reUpload() {
        return _reUpload.apply(this, arguments);
      }

      return reUpload;
    }(),
    uploadImg: function () {
      var _uploadImg = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2() {
        var tempFilePath;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _upload2["default"].image();

              case 2:
                tempFilePath = _context2.sent;
                _context2.next = 5;
                return this.upload(tempFilePath);

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploadImg() {
        return _uploadImg.apply(this, arguments);
      }

      return uploadImg;
    }(),
    upload: function () {
      var _upload = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(tempFilePath) {
        var _this, res;

        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.avatarUploadRun = true;
                this.avatarUploadStatus = true;
                this.avatarUploadTipsStatus = false;
                this.avatarUploadTips = '';
                this.avatarTmp = tempFilePath;
                _this = this;
                _context3.next = 8;
                return _upload2["default"].upload(tempFilePath, {
                  filename: this.uploadFilename
                }, function (progress) {
                  //处理进度条
                  _this.progress = progress;
                });

              case 8:
                res = _context3.sent;

                if (!(res.statusCode < 200 || res.statusCode >= 300)) {
                  _context3.next = 19;
                  break;
                }

                this.avatarUploadRun = false;
                this.avatarUploadStatus = false;
                this.avatarUploadTipsStatus = true;
                this.avatarUploadTips = res.data.message;
                this.avatarTmp = tempFilePath;
                this.progress = 0;
                return _context3.abrupt("return", false);

              case 19:
                if (!(res.data.status_code < 200 || res.data.status_code >= 300)) {
                  _context3.next = 27;
                  break;
                }

                this.avatarUploadRun = false;
                this.avatarUploadStatus = false;
                this.avatarUploadTipsStatus = true;
                this.avatarUploadTips = res.data.message;
                this.avatarTmp = tempFilePath;
                this.progress = 0;
                return _context3.abrupt("return", false);

              case 27:
                this.avatarUploadRun = false;
                this.avatarUploadStatus = true;
                this.avatarUploadTipsStatus = true;
                this.avatarUploadTips = '上传成功';
                this.avatarTmp = '';
                this.avatar = res.data.url + '?' + Math.random();
                this.avatarInput = res.data.url;
                return _context3.abrupt("return", true);

              case 35:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function upload(_x) {
        return _upload.apply(this, arguments);
      }

      return upload;
    }(),
    wxSwitchTab: function wxSwitchTab(url) {
      _wx["default"].wxSwitchTab(url);
    },
    bindSexChange: function bindSexChange(e) {
      this.user.gender = e.$wx.detail.value;
    },
    formSubmit: function () {
      var _formSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(e) {
        var response;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _wx["default"].wxPutAuthRequest('/user/save', e.$wx.detail.value);

              case 2:
                response = _context4.sent;

                if (!(response === false)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", false);

              case 5:
                _context4.next = 7;
                return this.$store.dispatch('getMe');

              case 7:
                this.user = _context4.sent;
                //actions方法调用方法
                this.avatarUploadRun = false;
                this.avatarUploadStatus = true;
                this.avatarUploadTipsStatus = false;
                this.avatarUploadTips = '';
                this.avatarTmp = '';
                this.progress = 0;
                this.oldAvatarUrl = this.user.avatarUrl;

                _wx["default"].wxShowToast('保存成功');

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function formSubmit(_x2) {
        return _formSubmit.apply(this, arguments);
      }

      return formSubmit;
    }()
  },
  onShow: function () {
    var _onShow = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee5() {
      return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.$store.dispatch('getMe');

            case 2:
              this.user = _context5.sent;
              //actions方法调用方法
              this.oldAvatarUrl = this.user.avatarUrl;
              this.avatar = this.user.avatarUrl;
              this.avatarInput = this.user.avatarUrl;

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function onShow() {
      return _onShow.apply(this, arguments);
    }

    return onShow;
  }()
}, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} }, {info: {"components":{"footer":{"path":"..\\..\\components\\footer"}},"on":{}}, handlers: {'11-0': {"submit": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.formSubmit($event)
      })();
    
  }},'11-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-2': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.uploadImg($event)
      })();
    
  }},'11-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-5': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.reUpload()
      })();
    
  }},'11-6': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.clearUpload()
      })();
    
  }},'11-7': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindSexChange($event)
      })();
    
  }},'11-8': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.wxSwitchTab('/pages/user/center')
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "user.province",
      handler: function set ($v) {
      var _vm=this;
        _vm.$set(_vm.user, "province", $v);
      
    }
    }} });