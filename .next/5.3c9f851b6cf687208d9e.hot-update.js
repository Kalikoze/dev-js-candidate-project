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

var _style = __webpack_require__(392);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = __webpack_require__(395);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactRedux = __webpack_require__(401);

var _redux = __webpack_require__(391);

var _store = __webpack_require__(400);

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
        var input, _props, addMessage, _postMessage, _props$response, message, intent;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.keyCode === 13 || e.button === 0)) {
                  _context.next = 9;
                  break;
                }

                input = this.state.input;
                _props = this.props, addMessage = _props.addMessage, _postMessage = _props.postMessage;

                addMessage(input);
                _context.next = 6;
                return _postMessage(input);

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
        className: 'jsx-2612405025' + ' ' + 'input-section',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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
        className: 'jsx-2612405025',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this2.submit(e);
        }, className: 'jsx-2612405025',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2612405025',
        css: '.input-section.jsx-2612405025{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15%;width:60%;}input.jsx-2612405025{border:none;border-radius:25px;font-family:\'Lato\',sans-serif;font-size:2vw;height:50px;padding-left:25px;width:100%;}input.jsx-2612405025:focus{outline:none;}button.jsx-2612405025{background :url(\'../static/right-arrow.svg\') #4B9DF6 no-repeat center / 50%;border:none;border-radius:50%;height:40px;outline:none;position:relative;right:45px;width:40px;}button.jsx-2612405025:active{background-color:#8EBBF4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q29CLEFBR2dDLEFBT1AsQUFVQyxBQUkrRCxBQVduRCxZQXhCTixDQVVyQixZQWVBLE1BeEJpQyw4QkFDakIsY0FDRixDQVdBLFdBVk0sQ0FXQSxLQXRCTCxZQVlGLENBV0MsVUFWZCxFQVdlLGFBQ0ssa0JBQ1AsV0FDQSxPQTFCQSxJQTJCYixPQTFCWSxVQUNaIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2hhdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHBvc3RNZXNzYWdlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiAnJ1xuICAgIH07XG4gIH1cblxuICBhc3luYyBzdWJtaXQoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUuYnV0dG9uID09PSAwKSB7XG4gICAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBhZGRNZXNzYWdlLCBwb3N0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgYWRkTWVzc2FnZShpbnB1dCk7XG4gICAgICBhd2FpdCBwb3N0TWVzc2FnZShpbnB1dCk7XG5cbiAgICAgIGNvbnN0IHsgbWVzc2FnZSwgaW50ZW50IH0gPSB0aGlzLnByb3BzLnJlc3BvbnNlO1xuXG4gICAgICBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCB8fCAnI2RvbnRfdW5kZXJzdGFuZCcpXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbnB1dC1zZWN0aW9uJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDaGF0IHdpdGggU3BydWNlQm90IGhlcmUuLi4nXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtpbnB1dDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLnN1Ym1pdChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB0aGlzLnN1Ym1pdChlKX0+PC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQtc2VjdGlvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZCA6IHVybCgnLi4vc3RhdGljL3JpZ2h0LWFycm93LnN2ZycpICM0QjlERjYgbm8tcmVwZWF0IGNlbnRlciAvIDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICByaWdodDogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhFQkJGNDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkNoYXQucHJvcFR5cGVzID0ge1xuICBhZGRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHt3YXRzb25SZXNwb25zZX0pID0+ICh7IHJlc3BvbnNlOiB3YXRzb25SZXNwb25zZS5yZXNwb25zZSB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIHBvc3RNZXNzYWdlOiBiaW5kQWN0aW9uQ3JlYXRvcnMocG9zdE1lc3NhZ2UsIGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdCk7XG4iXX0= */\n/*@ sourceURL=components/Chat.js */'
      }));
    }
  }]);

  return Chat;
}(_react.Component);

Chat.propTypes = {
  addMessage: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var watsonResponse = _ref2.watsonResponse;
  return { response: watsonResponse.response };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    postMessage: (0, _redux.bindActionCreators)(_store.postMessage, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Chat);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZldGNoIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInBvc3RNZXNzYWdlIiwiUHJvcFR5cGVzIiwiQ2hhdCIsInN0YXRlIiwiaW5wdXQiLCJlIiwia2V5Q29kZSIsImJ1dHRvbiIsInByb3BzIiwiYWRkTWVzc2FnZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImludGVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIndhdHNvblJlc3BvbnNlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFtQjs7QUFDNUIsQUFBTzs7Ozs7Ozs7O0lBRUQsQTtnQ0FDSjs7a0JBQWM7d0NBQUE7OzRIQUVaOztVQUFBLEFBQUs7YUFGTyxBQUVaLEFBQWEsQUFDSjtBQURJLEFBQ1g7V0FFSDs7Ozs7OzJHQUVZLEE7Ozs7Ozs7c0JBQ1AsRUFBQSxBQUFFLFlBQUYsQUFBYyxNQUFNLEVBQUEsQUFBRSxXQUFXLEE7OztBQUMzQjs7QSx3QkFBVSxLLEFBQUssTSxBQUFmO3lCQUM0QixLQUFLLEEsTyxBQUFqQyxvQixBQUFBLFksQUFBWSxzQixBQUFBLEFBRXBCOzsyQkFBQSxBQUFXOzt1QkFDTCxhQUFZLEEsQUFBWjs7O2tDQUVzQixLQUFBLEFBQUssTUFBTSxBLFUsQUFBL0IsMEJBQUEsQSxTLEFBQVMseUIsQUFBQSxBQUVqQjs7MkJBQUEsQUFBVyxTQUFTLFVBQXBCLEFBQThCLEFBQzlCO3FCQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSWpCO21CQUFBOztVQUFBLEFBQ0MsUUFBVSxLQURYLEFBQ2dCLE1BRGhCLEFBQ0MsQUFDUjs7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0k7QUFESjtBQUFBLE9BQUE7cUJBQ0ksQUFDYyxBQUNaO2VBRkYsQUFFUyxBQUNQO2tCQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxFQUFBLEFBQUUsT0FBN0IsQUFBSyxBQUFjLEFBQWlCO0FBSGhELEFBSUU7bUJBQVcsc0JBQUE7aUJBQUssT0FBQSxBQUFLLE9BQVYsQUFBSyxBQUFZO0FBSjlCO21CQUFBOztvQkFBQTtzQkFESixBQUNJLEFBTUE7QUFOQTtBQUNFLG9EQUtNLFNBQVMsb0JBQUE7aUJBQUssT0FBQSxBQUFLLE9BQVYsQUFBSyxBQUFZO0FBQWxDLHNCQUFBOztvQkFBQTtzQkFQSixBQU9JO0FBQUE7O2lCQVBKO2FBREYsQUFDRSxBQStDSDtBQS9DRzs7Ozs7QSxBQTFCYTs7QUE0RW5CLEtBQUEsQUFBSztjQUNTLG9CQUFBLEFBQVUsS0FEeEIsQUFBaUIsQUFDWTtBQURaLEFBQ2Y7O0FBR0YsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQUE7TUFBQSxBQUFFLHVCQUFGLEFBQUU7U0FBcUIsRUFBRSxVQUFVLGVBQW5DLEFBQXVCLEFBQTJCO0FBQTFFOztBQUVBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ3JDOztpQkFDZSxBQUFtQixtREFEbEMsQUFBTyxBQUNRLEFBQWdDLEFBRWhEO0FBSFEsQUFDTDtBQUZKLEFBTUE7O2tCQUFlLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsb0JBQXhDLEFBQWUsQUFBNkMiLCJmaWxlIjoiQ2hhdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/travisrollins/Code-Challenges/sprucebot/components/Chat.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/travisrollins/Code-Challenges/sprucebot/components/Chat.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zYzlmODUxYjZjZjY4NzIwOGQ5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGF0LmpzPzkwOTAyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHBvc3RNZXNzYWdlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ2hhdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiAnJ1xuICAgIH07XG4gIH1cblxuICBhc3luYyBzdWJtaXQoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzIHx8IGUuYnV0dG9uID09PSAwKSB7XG4gICAgICBjb25zdCB7IGlucHV0IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBhZGRNZXNzYWdlLCBwb3N0TWVzc2FnZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgYWRkTWVzc2FnZShpbnB1dCk7XG4gICAgICBhd2FpdCBwb3N0TWVzc2FnZShpbnB1dCk7XG5cbiAgICAgIGNvbnN0IHsgbWVzc2FnZSwgaW50ZW50IH0gPSB0aGlzLnByb3BzLnJlc3BvbnNlO1xuXG4gICAgICBhZGRNZXNzYWdlKG1lc3NhZ2UsIGludGVudCB8fCAnI2RvbnRfdW5kZXJzdGFuZCcpXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbnB1dC1zZWN0aW9uJz5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDaGF0IHdpdGggU3BydWNlQm90IGhlcmUuLi4nXG4gICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtpbnB1dDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLnN1Ym1pdChlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZSA9PiB0aGlzLnN1Ym1pdChlKX0+PC9idXR0b24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW5wdXQtc2VjdGlvbiB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTUlO1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZCA6IHVybCgnLi4vc3RhdGljL3JpZ2h0LWFycm93LnN2ZycpICM0QjlERjYgbm8tcmVwZWF0IGNlbnRlciAvIDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICByaWdodDogNDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhFQkJGNDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG5cbkNoYXQucHJvcFR5cGVzID0ge1xuICBhZGRNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHt3YXRzb25SZXNwb25zZX0pID0+ICh7IHJlc3BvbnNlOiB3YXRzb25SZXNwb25zZS5yZXNwb25zZSB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIHBvc3RNZXNzYWdlOiBiaW5kQWN0aW9uQ3JlYXRvcnMocG9zdE1lc3NhZ2UsIGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ2hhdCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NoYXQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7OztBQUdBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBOztBQUFBO0FBTUE7QUFOQTtBQUNBO0FBS0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBUEE7QUErQ0E7QUEvQ0E7Ozs7Ozs7QUFrREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9