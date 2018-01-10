webpackHotUpdate(5,{

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _isomorphicUnfetch = __webpack_require__(395);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/travisrollins/Code-Challenges/sprucebot/components/Chat.js';


var Chat = function (_Component) {
  (0, _inherits3.default)(Chat, _Component);

  function Chat() {
    (0, _classCallCheck3.default)(this, Chat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Chat.__proto__ || (0, _getPrototypeOf2.default)(Chat)).call(this));

    _this.state = {
      input: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Chat, [{
    key: 'submit',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
        var input, _props, addMessage, postMessage, _props$response, message, intent;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.keyCode === 13 || e.button === 0)) {
                  _context.next = 9;
                  break;
                }

                input = this.state.input;
                _props = this.props, addMessage = _props.addMessage, postMessage = _props.postMessage;

                addMessage(input);
                _context.next = 6;
                return postMessage(input);

              case 6:
                _props$response = this.props.response, message = _props$response.message, intent = _props$response.intent;

                addMessage(message, intent || '#dont_understand');
                this.setState({ input: '' });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submit(_x) {
        return _ref.apply(this, arguments);
      }

      return submit;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var input = this.state.input;

      return _react2.default.createElement('section', {
        className: 'jsx-2439614921' + ' ' + 'input-section',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement('input', {
        placeholder: 'Chat with SpruceBot here...',
        value: input,
        onChange: function onChange(e) {
          return _this2.setState({ input: e.target.value });
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.submit(e);
        },
        className: 'jsx-2439614921',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this2.submit(e);
        }, className: 'jsx-2439614921',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2439614921',
        css: '.input-section.jsx-2439614921{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15%;width:70%;}input.jsx-2439614921{border:none;border-radius:25px;font-family:\'Lato\',sans-serif;font-size:28px;height:50px;padding-left:25px;width:100%;}input.jsx-2439614921:focus{outline:none;}button.jsx-2439614921{background :url(\'../static/right-arrow.svg\') #4B9DF6 no-repeat center / 50%;border:none;border-radius:50%;cursor:pointer;height:40px;outline:none;position:absolute;right:15.7%;width:40px;}button.jsx-2439614921:active{background-color:#8EBBF4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ29CLEFBR2dDLEFBT1AsQUFVQyxBQUkrRCxBQVluRCxZQXpCTixDQVVyQixZQWdCQSxNQXpCaUMsOEJBQ2hCLGVBQ0gsQUFXQSxZQVZNLEFBV0EsS0F0QkwsYUFZRixBQVdJLFdBVmpCLElBV2MsWUFDQyxhQUNLLGtCQUNOLEdBMUJELFNBMkJBLEVBMUJELFNBMkJaLENBMUJBIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2hhdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiAnJ1xuICAgIH07XG4gIH1cblxuICBhc3luYyBzdWJtaXQoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUuYnV0dG9uID09PSAwKSB7XG4gICAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBhZGRNZXNzYWdlLCBwb3N0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgYWRkTWVzc2FnZShpbnB1dCk7XG4gICAgICBhd2FpdCBwb3N0TWVzc2FnZShpbnB1dCk7XG5cbiAgICAgIGNvbnN0IHsgbWVzc2FnZSwgaW50ZW50IH0gPSB0aGlzLnByb3BzLnJlc3BvbnNlO1xuXG4gICAgICBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCB8fCAnI2RvbnRfdW5kZXJzdGFuZCcpXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbnB1dC1zZWN0aW9uJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDaGF0IHdpdGggU3BydWNlQm90IGhlcmUuLi4nXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtpbnB1dDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLnN1Ym1pdChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB0aGlzLnN1Ym1pdChlKX0+PC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQtc2VjdGlvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiB1cmwoJy4uL3N0YXRpYy9yaWdodC1hcnJvdy5zdmcnKSAjNEI5REY2IG5vLXJlcGVhdCBjZW50ZXIgLyA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1LjclO1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVCQkY0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIGFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIl19 */\n/*@ sourceURL=components/Chat.js */'
      }));
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;


Chat.propTypes = {
  addMessage: _propTypes2.default.func.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZldGNoIiwiUHJvcFR5cGVzIiwiQ2hhdCIsInN0YXRlIiwiaW5wdXQiLCJlIiwia2V5Q29kZSIsImJ1dHRvbiIsInByb3BzIiwiYWRkTWVzc2FnZSIsInBvc3RNZXNzYWdlIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiaW50ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Ym1pdCIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0lBRWMsQTtnQ0FDbkI7O2tCQUFjO3dDQUFBOzs0SEFFWjs7VUFBQSxBQUFLO2FBRk8sQUFFWixBQUFhLEFBQ0o7QUFESSxBQUNYO1dBRUg7Ozs7OzsyRyxBQUVZOzs7Ozs7O3NCQUNQLEVBQUEsQUFBRSxZQUFGLEFBQWMsTUFBTSxFQUFBLEFBQUUsV0FBVyxBOzs7QUFDM0I7O0Esd0JBQVUsSyxBQUFLLE1BQWYsQTt5QkFDNEIsS0FBSyxBLE9BQWpDLEEsb0IsQUFBQSxZQUFZLEEscUIsQUFBQSxBQUVwQjs7MkJBQUEsQUFBVzs7dUJBQ0wsWUFBWSxBLEFBQVo7OztrQ0FFc0IsS0FBQSxBQUFLLE0sQUFBTSxVQUEvQixBLDBCQUFBLEEsU0FBUyxBLHlCLEFBQUEsQUFFakI7OzJCQUFBLEFBQVcsU0FBUyxVQUFwQixBQUE4QixBQUM5QjtxQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFmLEFBQWMsQUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUlqQjttQkFBQTs7VUFBQSxBQUNDLFFBQVUsS0FEWCxBQUNnQixNQURoQixBQUNDLEFBQ1I7OzZCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNJO0FBREo7QUFBQSxPQUFBO3FCQUNJLEFBQ2MsQUFDWjtlQUZGLEFBRVMsQUFDUDtrQkFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sRUFBQSxBQUFFLE9BQTdCLEFBQUssQUFBYyxBQUFpQjtBQUhoRCxBQUlFO21CQUFXLHNCQUFBO2lCQUFLLE9BQUEsQUFBSyxPQUFWLEFBQUssQUFBWTtBQUo5QjttQkFBQTs7b0JBQUE7c0JBREosQUFDSSxBQU1BO0FBTkE7QUFDRSxvREFLTSxTQUFTLG9CQUFBO2lCQUFLLE9BQUEsQUFBSyxPQUFWLEFBQUssQUFBWTtBQUFsQyxzQkFBQTs7b0JBQUE7c0JBUEosQUFPSTtBQUFBOztpQkFQSjthQURGLEFBQ0UsQUFnREg7QUFoREc7Ozs7O0FBMUI0QixBOztrQkFBYixBOzs7QUE2RXJCLEtBQUEsQUFBSztjQUNTLG9CQUFBLEFBQVUsS0FEeEIsQUFBaUIsQUFDWTtBQURaLEFBQ2YiLCJmaWxlIjoiQ2hhdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/components/Chat.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/components/Chat.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNGU3NGI5MmIzNThhYmFiZmViOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzPzg5ZjBjNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiAnJ1xuICAgIH07XG4gIH1cblxuICBhc3luYyBzdWJtaXQoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUuYnV0dG9uID09PSAwKSB7XG4gICAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBhZGRNZXNzYWdlLCBwb3N0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgYWRkTWVzc2FnZShpbnB1dCk7XG4gICAgICBhd2FpdCBwb3N0TWVzc2FnZShpbnB1dCk7XG5cbiAgICAgIGNvbnN0IHsgbWVzc2FnZSwgaW50ZW50IH0gPSB0aGlzLnByb3BzLnJlc3BvbnNlO1xuXG4gICAgICBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCB8fCAnI2RvbnRfdW5kZXJzdGFuZCcpXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbnB1dC1zZWN0aW9uJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDaGF0IHdpdGggU3BydWNlQm90IGhlcmUuLi4nXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtpbnB1dDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLnN1Ym1pdChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB0aGlzLnN1Ym1pdChlKX0+PC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQtc2VjdGlvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQgOiB1cmwoJy4uL3N0YXRpYy9yaWdodC1hcnJvdy5zdmcnKSAjNEI5REY2IG5vLXJlcGVhdCBjZW50ZXIgLyA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1LjclO1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVCQkY0O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIGFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DaGF0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFHQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVBBO0FBZ0RBO0FBaERBOzs7Ozs7Ozs7O0FBbURBO0FBQ0E7QUFBQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9