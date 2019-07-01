"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regeneratorRuntime2 = _interopRequireDefault(require('../vendor.js')(0));

var _x12 = _interopRequireDefault(require('../vendor.js')(2));

var _wx = _interopRequireDefault(require('../util/wx.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = new _x12["default"].Store({
  state: {
    slides: [],
    homeEvents: [],
    events: [],
    event: {},
    me: {}
  },
  mutations: {
    setSlides: function setSlides(state, param) {
      state.slides = param.slides;
    },
    getSlides: function getSlides(state, param) {
      state.slides = param.slides;
    },
    setHomeEvents: function setHomeEvents(state, param) {
      state.homeEvents = param.homeEvents;
    },
    getHomeEvents: function getHomeEvents(state, param) {
      state.homeEvents = param.homeEvents;
    },
    setEvents: function setEvents(state, param) {
      state.events = param.events;
    },
    setAppendEvents: function setAppendEvents(state, param) {
      param.events = param.events.filter(function (item) {
        return !state.events.some(function (ele) {
          return ele.id === item.id;
        });
      }); //删除id重复的数据

      state.events = state.events.concat(param.events);
    },
    getEvents: function getEvents(state, param) {
      state.events = param.events;
    },
    setEvent: function setEvent(state, param) {
      state.event = param.event;
    },
    getEvent: function getEvent(state, param) {
      state.event = param.event;
    },
    setMe: function setMe(state, param) {
      state.me = param.me;
    },
    getMe: function getMe(state, param) {
      state.me = param.me;
    }
  },
  actions: {
    getSlides: function () {
      var _getSlides = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee(_ref, _ref2) {
        var commit, limit, response;
        return _regeneratorRuntime2["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                limit = _ref2.limit;
                _context.next = 4;
                return _wx["default"].wxGetRequest('/slide/getData', {
                  limit: limit
                });

              case 4:
                response = _context.sent;

                if (response) {
                  commit('setSlides', {
                    slides: response
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSlides(_x, _x2) {
        return _getSlides.apply(this, arguments);
      }

      return getSlides;
    }(),
    getHomeEvents: function () {
      var _getHomeEvents = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee2(_ref3, _ref4) {
        var commit, limit, response;
        return _regeneratorRuntime2["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit;
                limit = _ref4.limit;
                _context2.next = 4;
                return _wx["default"].wxGetRequest('/event/getHomeData', {
                  limit: limit
                });

              case 4:
                response = _context2.sent;

                if (response) {
                  commit('setHomeEvents', {
                    homeEvents: response
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getHomeEvents(_x3, _x4) {
        return _getHomeEvents.apply(this, arguments);
      }

      return getHomeEvents;
    }(),
    getEvents: function () {
      var _getEvents = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee3(_ref5, _ref6) {
        var commit, type, keywords, page, pageSize, response;
        return _regeneratorRuntime2["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref5.commit;
                type = _ref6.type, keywords = _ref6.keywords, page = _ref6.page, pageSize = _ref6.pageSize;
                _context3.next = 4;
                return _wx["default"].wxGetRequest('/event/getPageData', {
                  type: type,
                  keywords: keywords,
                  page: page,
                  pageSize: pageSize
                });

              case 4:
                response = _context3.sent;

                if (response) {
                  commit('setEvents', {
                    events: response
                  });
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getEvents(_x5, _x6) {
        return _getEvents.apply(this, arguments);
      }

      return getEvents;
    }(),
    getAppendEvents: function () {
      var _getAppendEvents = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee4(_ref7, _ref8) {
        var commit, type, keywords, page, pageSize, response;
        return _regeneratorRuntime2["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref7.commit;
                type = _ref8.type, keywords = _ref8.keywords, page = _ref8.page, pageSize = _ref8.pageSize;
                _context4.next = 4;
                return _wx["default"].wxGetRequest('/event/getPageData', {
                  type: type,
                  keywords: keywords,
                  page: page,
                  pageSize: pageSize
                }, {}, 'json', 'text', false);

              case 4:
                response = _context4.sent;

                if (!response) {
                  _context4.next = 8;
                  break;
                }

                commit('setAppendEvents', {
                  events: response
                });
                return _context4.abrupt("return", response.length);

              case 8:
                return _context4.abrupt("return", 0);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getAppendEvents(_x7, _x8) {
        return _getAppendEvents.apply(this, arguments);
      }

      return getAppendEvents;
    }(),
    getEvent: function () {
      var _getEvent = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee5(_ref9, _ref10) {
        var commit, id, response;
        return _regeneratorRuntime2["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref9.commit;
                id = _ref10.id;
                _context5.next = 4;
                return _wx["default"].wxGetRequest('/event/getOne', {
                  id: id
                });

              case 4:
                response = _context5.sent;

                if (!response) {
                  _context5.next = 8;
                  break;
                }

                commit('setEvent', {
                  event: response
                });
                return _context5.abrupt("return", response);

              case 8:
                return _context5.abrupt("return", {});

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getEvent(_x9, _x10) {
        return _getEvent.apply(this, arguments);
      }

      return getEvent;
    }(),
    getMe: function () {
      var _getMe = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime2["default"].mark(function _callee6(_ref11) {
        var commit, response;
        return _regeneratorRuntime2["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref11.commit;
                _context6.next = 3;
                return _wx["default"].wxGetAuthRequest('/me');

              case 3:
                response = _context6.sent;

                if (!response) {
                  _context6.next = 7;
                  break;
                }

                commit('setMe', {
                  me: response
                });
                return _context6.abrupt("return", response);

              case 7:
                return _context6.abrupt("return", {});

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getMe(_x11) {
        return _getMe.apply(this, arguments);
      }

      return getMe;
    }()
  }
});

exports["default"] = _default;