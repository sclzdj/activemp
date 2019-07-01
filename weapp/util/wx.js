"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_DEMAIN = "http://15233xe404.iask.in/api";
var wxUtil = {
  wxSwitchTab: function wxSwitchTab(url) {
    wx.switchTab({
      url: url
    });
  },
  wxReLaunch: function wxReLaunch(url) {
    wx.reLaunch({
      url: url
    });
  },
  wxNavigateTo: function wxNavigateTo(url) {
    wx.navigateTo({
      url: url
    });
  },
  wxShowModal: function () {
    var _wxShowModal = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee(content) {
      var title,
          showCancel,
          response,
          _args = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              title = _args.length > 1 && _args[1] !== undefined ? _args[1] : '提示';
              showCancel = _args.length > 2 && _args[2] !== undefined ? _args[2] : true;
              _context.next = 4;
              return new Promise(function (resolve, reject) {
                wx.showModal({
                  title: title,
                  content: content,
                  showCancel: showCancel,
                  success: function success(data) {
                    resolve(data);
                  },
                  fail: function fail(data) {
                    reject(data);
                  }
                });
              });

            case 4:
              response = _context.sent;

              if (!response.confirm) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", true);

            case 7:
              return _context.abrupt("return", false);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function wxShowModal(_x) {
      return _wxShowModal.apply(this, arguments);
    }

    return wxShowModal;
  }(),
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
    _regeneratorRuntime2["default"].mark(function _callee2(url) {
      var data,
          method,
          header,
          dataType,
          responseType,
          isShowLoading,
          response,
          responseData,
          errors,
          message,
          key,
          i,
          comfirm,
          loginStatus,
          _args2 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              method = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'GET';
              header = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : {};
              dataType = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : 'json';
              responseType = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : 'text';
              isShowLoading = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : true;
              if (isShowLoading) wxUtil.wxShowLoading('加载中...');

              if (header instanceof Object && Object.keys(header).length > 0) {
                if (header['content-type'] === undefined || !header['content-type']) {
                  header['content-type'] = 'application/json';
                }
              } else {
                header = {
                  'content-type': 'application/json'
                };
              }

              _context2.next = 10;
              return new Promise(function (resolve, reject) {
                wx.request({
                  url: API_DEMAIN + url,
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
              response = _context2.sent;
              if (isShowLoading) wxUtil.wxHideLoading();
              responseData = response.data;

              if (!(responseData.status_code < 200 || responseData.status_code >= 300)) {
                _context2.next = 40;
                break;
              }

              if (!(responseData.status_code == 422)) {
                _context2.next = 22;
                break;
              }

              //验证信息统一处理
              errors = responseData.errors;
              message = [];

              for (key in errors) {
                for (i = 0; i < errors[key].length; i++) {
                  message.push(errors[key][i]);
                }
              }

              wxUtil.wxShowToast(message.join('\r\n'), 'none');
              return _context2.abrupt("return", false);

            case 22:
              if (!(responseData.status_code == 401)) {
                _context2.next = 38;
                break;
              }

              _context2.next = 25;
              return wxUtil.wxShowModal('未登录或登录过期，立即重新登录');

            case 25:
              comfirm = _context2.sent;

              if (comfirm) {
                _context2.next = 30;
                break;
              }

              return _context2.abrupt("return", false);

            case 30:
              _context2.next = 32;
              return wxUtil.login();

            case 32:
              loginStatus = _context2.sent;

              if (loginStatus) {
                _context2.next = 35;
                break;
              }

              return _context2.abrupt("return", false);

            case 35:
              _context2.next = 37;
              return wxUtil.wxAuthRequest(url, data, method, header, dataType, responseType, isShowLoading);

            case 37:
              return _context2.abrupt("return", _context2.sent);

            case 38:
              wxUtil.wxShowToast(responseData.message, 'none');
              return _context2.abrupt("return", false);

            case 40:
              return _context2.abrupt("return", responseData.data);

            case 41:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function wxRequest(_x2) {
      return _wxRequest.apply(this, arguments);
    }

    return wxRequest;
  }(),
  wxGetRequest: function () {
    var _wxGetRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee3(url) {
      var data,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args3 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              data = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              header = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
              dataType = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 'json';
              responseType = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : 'text';
              isShowLoading = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : true;
              _context3.next = 7;
              return wxUtil.wxRequest(url, data, 'GET', header, dataType, responseType, isShowLoading);

            case 7:
              return _context3.abrupt("return", _context3.sent);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function wxGetRequest(_x3) {
      return _wxGetRequest.apply(this, arguments);
    }

    return wxGetRequest;
  }(),
  wxPostRequest: function () {
    var _wxPostRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee4(url) {
      var data,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args4 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              data = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
              header = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
              dataType = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : 'json';
              responseType = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : 'text';
              isShowLoading = _args4.length > 5 && _args4[5] !== undefined ? _args4[5] : true;
              _context4.next = 7;
              return wxUtil.wxRequest(url, data, 'POST', header, dataType, responseType, isShowLoading);

            case 7:
              return _context4.abrupt("return", _context4.sent);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function wxPostRequest(_x4) {
      return _wxPostRequest.apply(this, arguments);
    }

    return wxPostRequest;
  }(),
  wxPutRequest: function () {
    var _wxPutRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee5(url) {
      var data,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args5 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              data = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
              header = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
              dataType = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : 'json';
              responseType = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : 'text';
              isShowLoading = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : true;
              _context5.next = 7;
              return wxUtil.wxRequest(url, data, 'PUT', header, dataType, responseType, isShowLoading);

            case 7:
              return _context5.abrupt("return", _context5.sent);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function wxPutRequest(_x5) {
      return _wxPutRequest.apply(this, arguments);
    }

    return wxPutRequest;
  }(),
  wxPatchRequest: function () {
    var _wxPatchRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee6(url) {
      var data,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args6 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              data = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
              header = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
              dataType = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : 'json';
              responseType = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : 'text';
              isShowLoading = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : true;
              _context6.next = 7;
              return wxUtil.wxRequest(url, data, 'PATCH', header, dataType, responseType, isShowLoading);

            case 7:
              return _context6.abrupt("return", _context6.sent);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function wxPatchRequest(_x6) {
      return _wxPatchRequest.apply(this, arguments);
    }

    return wxPatchRequest;
  }(),
  wxDeleteRequest: function () {
    var _wxDeleteRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee7(url) {
      var data,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args7 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              data = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
              header = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
              dataType = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : 'json';
              responseType = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : 'text';
              isShowLoading = _args7.length > 5 && _args7[5] !== undefined ? _args7[5] : true;
              _context7.next = 7;
              return wxUtil.wxRequest(url, data, 'DELETE', header, dataType, responseType, isShowLoading);

            case 7:
              return _context7.abrupt("return", _context7.sent);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function wxDeleteRequest(_x7) {
      return _wxDeleteRequest.apply(this, arguments);
    }

    return wxDeleteRequest;
  }(),
  wxLogin: function () {
    var _wxLogin = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee8() {
      var response, comfirm;
      return _regeneratorRuntime2["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return new Promise(function (resolve, reject) {
                wx.login({
                  success: function success(data) {
                    resolve(data);
                  },
                  fail: function fail(data) {
                    reject(data);
                  }
                });
              });

            case 2:
              response = _context8.sent;

              if (!response.code) {
                _context8.next = 7;
                break;
              }

              return _context8.abrupt("return", response.code);

            case 7:
              _context8.next = 9;
              return wxUtil.wxShowModal('微信登录失败，立即重试');

            case 9:
              comfirm = _context8.sent;

              if (comfirm) {
                _context8.next = 12;
                break;
              }

              return _context8.abrupt("return", false);

            case 12:
              _context8.next = 14;
              return wxUtil.wxLogin();

            case 14:
              return _context8.abrupt("return", _context8.sent);

            case 15:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function wxLogin() {
      return _wxLogin.apply(this, arguments);
    }

    return wxLogin;
  }(),

  /**
   * 微信授权加保存，注意：需要引导使用
   * @param guard
   * @returns {Promise<boolean>}
   */
  authorization: function () {
    var _authorization = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee9() {
      var guard,
          response,
          comfirm,
          data,
          _args9 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              guard = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : "users";
              _context9.next = 3;
              return new Promise(function (resolve, reject) {
                wx.getUserInfo({
                  lang: 'zh_CN',
                  success: function success(data) {
                    resolve(data);
                  },
                  fail: function fail(data) {
                    reject(data);
                  }
                });
              });

            case 3:
              response = _context9.sent;

              if (!(response.userInfo === undefined || response.userInfo.length == 0)) {
                _context9.next = 10;
                break;
              }

              _context9.next = 7;
              return wxUtil.authorization('微信授权失败，立即重试');

            case 7:
              comfirm = _context9.sent;

              if (comfirm) {
                _context9.next = 10;
                break;
              }

              return _context9.abrupt("return", false);

            case 10:
              data = {
                nickName: response.userInfo.nickName,
                avatarUrl: response.userInfo.avatarUrl,
                gender: response.userInfo.gender,
                //性别 0：未知、1：男、2：女
                province: response.userInfo.province
              };
              _context9.next = 13;
              return wxUtil.wxPutAuthRequest('/user/save', data, guard);

            case 13:
              response = _context9.sent;

              if (!(response === false)) {
                _context9.next = 16;
                break;
              }

              return _context9.abrupt("return", false);

            case 16:
              return _context9.abrupt("return", true);

            case 17:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function authorization() {
      return _authorization.apply(this, arguments);
    }

    return authorization;
  }(),
  login: function () {
    var _login = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee10() {
      var guard,
          code,
          response,
          storage,
          _args10 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              guard = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : "users";
              _context10.next = 3;
              return wxUtil.wxLogin();

            case 3:
              code = _context10.sent;
              _context10.next = 6;
              return wxUtil.wxGetRequest('/login', {
                code: code
              });

            case 6:
              response = _context10.sent;

              if (!(response !== false)) {
                _context10.next = 14;
                break;
              }

              storage = {
                token: response.access_token,
                token_type: response.token_type,
                expire_time: response.expires_in > 0 ? new Date().getTime() + response.expires_in * 1000 : 0
              };
              _context10.next = 11;
              return wx.setStorageSync(guard + '_token', storage);

            case 11:
              return _context10.abrupt("return", true);

            case 14:
              return _context10.abrupt("return", false);

            case 15:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function login() {
      return _login.apply(this, arguments);
    }

    return login;
  }(),
  getToken: function getToken() {
    var guard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'users';
    var storage = wx.getStorageSync(guard + '_token');

    if (storage && (storage.expire_time === 0 || storage.expire_time > new Date().getTime())) {
      return {
        token: storage.token,
        token_type: storage.token_type
      };
    } else {
      return false;
    }
  },
  wxAuthRequest: function () {
    var _wxAuthRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee11(url) {
      var data,
          guard,
          method,
          header,
          dataType,
          responseType,
          isShowLoading,
          token,
          comfirm,
          loginStatus,
          _args11 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              data = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
              guard = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : 'users';
              method = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : 'GET';
              header = _args11.length > 4 && _args11[4] !== undefined ? _args11[4] : {};
              dataType = _args11.length > 5 && _args11[5] !== undefined ? _args11[5] : 'json';
              responseType = _args11.length > 6 && _args11[6] !== undefined ? _args11[6] : 'text';
              isShowLoading = _args11.length > 7 && _args11[7] !== undefined ? _args11[7] : true;
              token = wxUtil.getToken(guard);

              if (!(token === false)) {
                _context11.next = 21;
                break;
              }

              _context11.next = 11;
              return wxUtil.wxShowModal('未登录或登录过期，立即重新登录');

            case 11:
              comfirm = _context11.sent;

              if (comfirm) {
                _context11.next = 16;
                break;
              }

              return _context11.abrupt("return", false);

            case 16:
              _context11.next = 18;
              return wxUtil.login();

            case 18:
              loginStatus = _context11.sent;

              if (loginStatus) {
                _context11.next = 21;
                break;
              }

              return _context11.abrupt("return", false);

            case 21:
              token = wxUtil.getToken();

              if (header instanceof Object && Object.keys(header).length > 0) {
                if (header['authorization'] === undefined || !header['authorization']) {
                  header.authorization = token.token_type + ' ' + token.token;
                }
              } else {
                header = {
                  'authorization': token.token_type + ' ' + token.token
                };
              }

              _context11.next = 25;
              return wxUtil.wxRequest(url, data, method, header, dataType, responseType, isShowLoading);

            case 25:
              return _context11.abrupt("return", _context11.sent);

            case 26:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    function wxAuthRequest(_x8) {
      return _wxAuthRequest.apply(this, arguments);
    }

    return wxAuthRequest;
  }(),
  wxGetAuthRequest: function () {
    var _wxGetAuthRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee12(url) {
      var data,
          guard,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args12 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              data = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
              guard = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : 'users';
              header = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : {};
              dataType = _args12.length > 4 && _args12[4] !== undefined ? _args12[4] : 'json';
              responseType = _args12.length > 5 && _args12[5] !== undefined ? _args12[5] : 'text';
              isShowLoading = _args12.length > 6 && _args12[6] !== undefined ? _args12[6] : true;
              _context12.next = 8;
              return wxUtil.wxAuthRequest(url, data, guard, 'GET', header, dataType, responseType, isShowLoading);

            case 8:
              return _context12.abrupt("return", _context12.sent);

            case 9:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    function wxGetAuthRequest(_x9) {
      return _wxGetAuthRequest.apply(this, arguments);
    }

    return wxGetAuthRequest;
  }(),
  wxPostAuthRequest: function () {
    var _wxPostAuthRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee13(url) {
      var data,
          guard,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args13 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              data = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
              guard = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : 'users';
              header = _args13.length > 3 && _args13[3] !== undefined ? _args13[3] : {};
              dataType = _args13.length > 4 && _args13[4] !== undefined ? _args13[4] : 'json';
              responseType = _args13.length > 5 && _args13[5] !== undefined ? _args13[5] : 'text';
              isShowLoading = _args13.length > 6 && _args13[6] !== undefined ? _args13[6] : true;
              _context13.next = 8;
              return wxUtil.wxAuthRequest(url, data, guard, 'POST', header, dataType, responseType, isShowLoading);

            case 8:
              return _context13.abrupt("return", _context13.sent);

            case 9:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    function wxPostAuthRequest(_x10) {
      return _wxPostAuthRequest.apply(this, arguments);
    }

    return wxPostAuthRequest;
  }(),
  wxPutAuthRequest: function () {
    var _wxPutAuthRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee14(url) {
      var data,
          guard,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args14 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              data = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
              guard = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : 'users';
              header = _args14.length > 3 && _args14[3] !== undefined ? _args14[3] : {};
              dataType = _args14.length > 4 && _args14[4] !== undefined ? _args14[4] : 'json';
              responseType = _args14.length > 5 && _args14[5] !== undefined ? _args14[5] : 'text';
              isShowLoading = _args14.length > 6 && _args14[6] !== undefined ? _args14[6] : true;
              _context14.next = 8;
              return wxUtil.wxAuthRequest(url, data, guard, 'PUT', header, dataType, responseType, isShowLoading);

            case 8:
              return _context14.abrupt("return", _context14.sent);

            case 9:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    function wxPutAuthRequest(_x11) {
      return _wxPutAuthRequest.apply(this, arguments);
    }

    return wxPutAuthRequest;
  }(),
  wxPatchAuthRequest: function () {
    var _wxPatchAuthRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee15(url) {
      var data,
          guard,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args15 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              data = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};
              guard = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : 'users';
              header = _args15.length > 3 && _args15[3] !== undefined ? _args15[3] : {};
              dataType = _args15.length > 4 && _args15[4] !== undefined ? _args15[4] : 'json';
              responseType = _args15.length > 5 && _args15[5] !== undefined ? _args15[5] : 'text';
              isShowLoading = _args15.length > 6 && _args15[6] !== undefined ? _args15[6] : true;
              _context15.next = 8;
              return wxUtil.wxAuthRequest(url, data, guard, 'PATCH', header, dataType, responseType, isShowLoading);

            case 8:
              return _context15.abrupt("return", _context15.sent);

            case 9:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }));

    function wxPatchAuthRequest(_x12) {
      return _wxPatchAuthRequest.apply(this, arguments);
    }

    return wxPatchAuthRequest;
  }(),
  wxDeleteAuthRequest: function () {
    var _wxDeleteAuthRequest = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime2["default"].mark(function _callee16(url) {
      var data,
          guard,
          header,
          dataType,
          responseType,
          isShowLoading,
          _args16 = arguments;
      return _regeneratorRuntime2["default"].wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              data = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : {};
              guard = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : 'users';
              header = _args16.length > 3 && _args16[3] !== undefined ? _args16[3] : {};
              dataType = _args16.length > 4 && _args16[4] !== undefined ? _args16[4] : 'json';
              responseType = _args16.length > 5 && _args16[5] !== undefined ? _args16[5] : 'text';
              isShowLoading = _args16.length > 6 && _args16[6] !== undefined ? _args16[6] : true;
              _context16.next = 8;
              return wxUtil.wxAuthRequest(url, data, guard, 'DELETE', header, dataType, responseType, isShowLoading);

            case 8:
              return _context16.abrupt("return", _context16.sent);

            case 9:
            case "end":
              return _context16.stop();
          }
        }
      }, _callee16);
    }));

    function wxDeleteAuthRequest(_x13) {
      return _wxDeleteAuthRequest.apply(this, arguments);
    }

    return wxDeleteAuthRequest;
  }()
};
var _default = wxUtil;
exports["default"] = _default;