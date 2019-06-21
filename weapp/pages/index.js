"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _x = require('../vendor.js')(1);

var _store = _interopRequireDefault(require('../store/index.js'));

var _wx = _interopRequireDefault(require('../util/wx.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  store: _store["default"],
  data: {
    imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640', 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640', 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'],
    inputVal: "",
    inputShowed: false
  },
  computed: {},
  methods: {
    // testreq: async ()=>{
    //     await wxUtil.wxRequest('http://22381mf704.iok.la:86/newstools/staticfilegenerator/news?pageurl=https%3a%2f%2fhd.capwhale.com&filename=%2ftest%2f56262kkkkasf9af0a.shtml');
    // },
    showInput: function showInput() {
      this.inputShowed = true;
    },
    hideInput: function hideInput() {
      this.inputVal = '';
      this.inputShowed = false;
    },
    clearInput: function clearInput() {
      this.inputVal = '';
    },
    inputTyping: function inputTyping(e) {
      this.inputVal = e.$wx.detail.value;
    }
  }
}, {info: {"components":{"footer":{"path":"..\\components\\footer"}},"on":{}}, handlers: {'4-65': {"blur": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.hideInput($event)
      })();
    
  }, "input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.inputTyping($event)
      })();
    
  }},'4-67': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.clearInput($event)
      })();
    
  }},'4-68': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showInput($event)
      })();
    
  }},'4-69': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.hideInput($event)
      })();
    
  }}}, models: {} });