webpackHotUpdate(5,{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(82);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(391);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(392);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _Chat = __webpack_require__(395);

var _Chat2 = _interopRequireDefault(_Chat);

var _Message = __webpack_require__(398);

var _Message2 = _interopRequireDefault(_Message);

var _Layout = __webpack_require__(399);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js?entry',
    _this3 = undefined;

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this));

    _this.state = {
      messages: []
    };
    _this.addMessage = _this.addMessage.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var messages = this.state.messages;
      var message = this.props.message;

      if (this.props.message) {
        this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message, isUser: false }]) });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.convo.scrollTop = this.convo.scrollHeight;
    }
  }, {
    key: 'addMessage',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(message, intent) {
        var messages, res, joke;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messages = this.state.messages;

                if (!(intent === 'randomjoke')) {
                  _context.next = 9;
                  break;
                }

                _context.next = 4;
                return (0, _isomorphicUnfetch2.default)('http://api.icndb.com/jokes/random/?escape=javascript');

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                joke = _context.sent;
                return _context.abrupt('return', this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message + ' ' + joke.value.joke, isUser: !intent ? true : false }]) }));

              case 9:

                this.setState({ messages: [].concat((0, _toConsumableArray3.default)(messages), [{ message: message, isUser: !intent ? true : false }]) });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addMessage(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return addMessage;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var messages = this.state.messages;

      var conversation = messages.map(function (message, i) {
        return _react2.default.createElement(_Message2.default, { key: i, text: message.message, isUser: message.isUser, __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        });
      });

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-578239612',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'SpruceBot'), _react2.default.createElement('section', { ref: function ref(node) {
          return _this2.convo = node;
        }, className: 'jsx-578239612' + ' ' + 'conversation',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, conversation), _react2.default.createElement(_Chat2.default, { addMessage: this.addMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '797805421',
        css: 'h1.jsx-578239612{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#FFF;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:\'Lato\',sans-serif;font-size:5vw;font-weight:700;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;}.conversation.jsx-578239612{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:65%;overflow-y:scroll;width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEb0IsQUFHZ0MsQUFZTiwwRUFDUyxtQkFaWCxXQUNFLGdEQVlGLFdBQ08sZUFaYSxHQWFyQixVQUNaLGlCQWJnQixjQUNFLGdCQUNMLFdBQ1ksbUdBQ1osV0FDYiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IENoYXQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGF0JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvTWVzc2FnZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlczogW10sXG4gICAgfTtcbiAgICB0aGlzLmFkZE1lc3NhZ2UgPSB0aGlzLmFkZE1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmKHRoaXMucHJvcHMubWVzc2FnZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bWVzc2FnZXM6IFsuLi5tZXNzYWdlcywge21lc3NhZ2UsIGlzVXNlcjogZmFsc2V9XX0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuY29udm8uc2Nyb2xsVG9wID0gdGhpcy5jb252by5zY3JvbGxIZWlnaHQ7XG4gIH1cblxuICBhc3luYyBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCkge1xuICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoaW50ZW50ID09PSAncmFuZG9tam9rZScpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbS8/ZXNjYXBlPWphdmFzY3JpcHQnKTtcbiAgICAgICAgY29uc3Qgam9rZSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZTogYCR7bWVzc2FnZX0gJHtqb2tlLnZhbHVlLmpva2V9YCwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZSwgaXNVc2VyOiAhaW50ZW50ID8gdHJ1ZSA6IGZhbHNlIH1dfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBtZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IDxNZXNzYWdlIGtleT17aX0gdGV4dD17bWVzc2FnZS5tZXNzYWdlfSBpc1VzZXI9e21lc3NhZ2UuaXNVc2VyfS8+KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+U3BydWNlQm90PC9oMT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb252ZXJzYXRpb24nIHJlZj17bm9kZSA9PiB0aGlzLmNvbnZvID0gbm9kZX0+XG4gICAgICAgICAge2NvbnZlcnNhdGlvbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Q2hhdCBhZGRNZXNzYWdlPXt0aGlzLmFkZE1lc3NhZ2V9Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1dnc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb252ZXJzYXRpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBoZWlnaHQ6IDY1JTtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICByZXR1cm4gbWVzc2FnZTtcbn07XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement(_style2.default, {
        styleId: '3461491448',
        css: '*{box-sizing:border-box;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFMkIsQUFHbUMsc0JBQ2IsU0FDQyxVQUNaIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYodGhpcy5wcm9wcy5tZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZSwgaXNVc2VyOiBmYWxzZX1dfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jb252by5zY3JvbGxUb3AgPSB0aGlzLmNvbnZvLnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIGFzeW5jIGFkZE1lc3NhZ2UobWVzc2FnZSwgaW50ZW50KSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpbnRlbnQgPT09ICdyYW5kb21qb2tlJykge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tLz9lc2NhcGU9amF2YXNjcmlwdCcpO1xuICAgICAgICBjb25zdCBqb2tlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke2pva2UudmFsdWUuam9rZX1gLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gPE1lc3NhZ2Uga2V5PXtpfSB0ZXh0PXttZXNzYWdlLm1lc3NhZ2V9IGlzVXNlcj17bWVzc2FnZS5pc1VzZXJ9Lz4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0IGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gIHJldHVybiBtZXNzYWdlO1xufTtcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;


Index.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(context) {
    var message;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            message = context.query;

            console.log(message);

            return _context2.abrupt('return', message);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this3);
  }));

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmV0Y2giLCJDaGF0IiwiTWVzc2FnZSIsIkxheW91dCIsIkluZGV4Iiwic3RhdGUiLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2UiLCJiaW5kIiwibWVzc2FnZSIsInByb3BzIiwic2V0U3RhdGUiLCJpc1VzZXIiLCJjb252byIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImludGVudCIsInJlcyIsImpzb24iLCJqb2tlIiwidmFsdWUiLCJjb252ZXJzYXRpb24iLCJtYXAiLCJpIiwibm9kZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRUU7aUNBQ25COzttQkFBYzt3Q0FBQTs7OEhBRVo7O1VBQUEsQUFBSztnQkFBTCxBQUFhLEFBQ0QsQUFFWjtBQUhhLEFBQ1g7VUFFRixBQUFLLGFBQWEsTUFBQSxBQUFLLFdBQUwsQUFBZ0IsS0FMdEIsQUFLWjtXQUNEOzs7Ozt3Q0FFbUI7VUFBQSxBQUNWLFdBQWEsS0FESCxBQUNRLE1BRFIsQUFDVjtVQURVLEFBRVYsVUFBWSxLQUZGLEFBRU8sTUFGUCxBQUVWLEFBQ1I7O1VBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxTQUFTLEFBQ3JCO2FBQUEsQUFBSyxTQUFTLEVBQUMscURBQUEsQUFBYyxZQUFVLEVBQUMsU0FBRCxTQUFVLFFBQWpELEFBQWMsQUFBQyxBQUF3QixBQUFrQixBQUMxRDtBQUNGOzs7O3lDQUVvQixBQUNuQjtXQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksS0FBQSxBQUFLLE1BQTVCLEFBQWtDLEFBQ25DOzs7OzsyR0FFZ0IsQSxTLEFBQVM7Ozs7O21CQUNoQjtBLDJCQUFhLEtBQUssQSxNQUFsQixBOztzQkFFSixXLEFBQVc7Ozs7Ozt1QkFDTyxpQ0FBQSxBQUFNLEE7O21CQUFsQjtBOzt1QkFDYSxJQUFBLEFBQUksQTs7bUJBQWpCO0E7aURBQ0MsS0FBQSxBQUFLLFNBQVMsRUFBQyxxREFBQSxBQUFjLFlBQVUsRUFBQyxTQUFBLEFBQVksZ0JBQVcsS0FBQSxBQUFLLE1BQTdCLEFBQW1DLE1BQVEsUUFBUSxDQUFBLEFBQUMsU0FBRCxBQUFVLE9BQXBHLEFBQWMsQUFBeUIsQSxBQUF4QixBQUE0Rjs7bUJBR3RIOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxxREFBQSxBQUFjLFlBQVUsRUFBQyxTQUFELFNBQVUsUUFBUSxDQUFBLEFBQUMsU0FBRCxBQUFVLE9BQW5FLEFBQWMsQUFBQyxBQUF3QixBQUFtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUduRTttQkFBQTs7VUFBQSxBQUNDLFdBQWEsS0FEZCxBQUNtQixNQURuQixBQUNDLEFBQ1I7O1VBQU0sd0JBQWUsQUFBUyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsR0FBVjsrQkFBZ0IsQUFBQyxtQ0FBUSxLQUFULEFBQWMsR0FBRyxNQUFNLFFBQXZCLEFBQStCLFNBQVMsUUFBUSxRQUFoRCxBQUF3RDtzQkFBeEQ7d0JBQWhCLEFBQWdCO0FBQUE7U0FBQTtBQUFsRCxBQUFxQixBQUVyQixPQUZxQjs7NkJBR25CLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhCQUFBLGNBQUEsYUFBa0MsS0FBSyxtQkFBQTtpQkFBUSxPQUFBLEFBQUssUUFBYixBQUFxQjtBQUE1RCw4Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0c7QUFESDtTQUZGLEFBRUUsQUFHQSwrQkFBQSxBQUFDLGdDQUFLLFlBQVksS0FBbEIsQUFBdUI7b0JBQXZCO3NCQUxGLEFBS0U7QUFBQTs7aUJBTEY7YUFBQTtBQUFBO2lCQUFBO2FBREYsQUFDRSxBQW9DSDtBQXBDRzs7Ozs7QSxBQXRDNkI7O2tCQUFkLEE7OztBQTZFckIsTUFBQSxBQUFNLDhCQUFOO3VGQUF3QixrQkFBQSxBQUFNLFNBQU47UUFBQTtvRUFBQTtnQkFBQTsyQ0FBQTtlQUNoQjtBQURnQixzQkFDTixRQURNLEFBQ0UsQUFDeEI7O29CQUFBLEFBQVEsSUFGYyxBQUV0QixBQUFZOzs4Q0FGVSxBQUlmOztlQUplO2VBQUE7NkJBQUE7O0FBQUE7aUJBQUE7QUFBeEI7O3dCQUFBOzZCQUFBO0FBQUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lZWRkYWJjNTUwMzcwMTVhZTNmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGVkNjAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXQnO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9NZXNzYWdlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMuYWRkTWVzc2FnZSA9IHRoaXMuYWRkTWVzc2FnZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYodGhpcy5wcm9wcy5tZXNzYWdlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogWy4uLm1lc3NhZ2VzLCB7bWVzc2FnZSwgaXNVc2VyOiBmYWxzZX1dfSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5jb252by5zY3JvbGxUb3AgPSB0aGlzLmNvbnZvLnNjcm9sbEhlaWdodDtcbiAgfVxuXG4gIGFzeW5jIGFkZE1lc3NhZ2UobWVzc2FnZSwgaW50ZW50KSB7XG4gICAgY29uc3QgeyBtZXNzYWdlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpbnRlbnQgPT09ICdyYW5kb21qb2tlJykge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5pY25kYi5jb20vam9rZXMvcmFuZG9tLz9lc2NhcGU9amF2YXNjcmlwdCcpO1xuICAgICAgICBjb25zdCBqb2tlID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlOiBgJHttZXNzYWdlfSAke2pva2UudmFsdWUuam9rZX1gLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe21lc3NhZ2VzOiBbLi4ubWVzc2FnZXMsIHttZXNzYWdlLCBpc1VzZXI6ICFpbnRlbnQgPyB0cnVlIDogZmFsc2UgfV19KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lc3NhZ2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IG1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gPE1lc3NhZ2Uga2V5PXtpfSB0ZXh0PXttZXNzYWdlLm1lc3NhZ2V9IGlzVXNlcj17bWVzc2FnZS5pc1VzZXJ9Lz4pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5TcHJ1Y2VCb3Q8L2gxPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnZlcnNhdGlvbicgcmVmPXtub2RlID0+IHRoaXMuY29udm8gPSBub2RlfT5cbiAgICAgICAgICB7Y29udmVyc2F0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxDaGF0IGFkZE1lc3NhZ2U9e3RoaXMuYWRkTWVzc2FnZX0vPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDV2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnZlcnNhdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcbiAgY29uc3QgbWVzc2FnZSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG4gIHJldHVybiBtZXNzYWdlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFGQTtBQUVBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBOzs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUxBO0FBQUE7QUFBQTtBQUFBO0FBb0NBO0FBcENBOzs7Ozs7Ozs7O0FBdUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9