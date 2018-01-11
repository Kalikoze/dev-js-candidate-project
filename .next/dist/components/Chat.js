'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

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
        className: 'jsx-799177478' + ' ' + 'input-section',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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
        className: 'jsx-799177478',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('button', { onClick: function onClick(e) {
          return _this2.submit(e);
        }, className: 'jsx-799177478',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '799177478',
        css: '.input-section.jsx-799177478{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15%;width:70%;}input.jsx-799177478{border:none;border-radius:25px;font-family:\'Lato\',sans-serif;font-size:28px;height:50px;padding-left:25px;width:100%;}input.jsx-799177478:focus{outline:none;}button.jsx-799177478{background :url(\'../static/right-arrow.svg\') #4B9DF6 no-repeat center / 50%;border:none;border-radius:50%;cursor:pointer;height:40px;outline:none;position:absolute;right:15.7%;width:40px;}button.jsx-799177478:active{background-color:#8EBBF4;}@media (max-width:950px){input.jsx-799177478{font-size:20px;}}@media (max-width:460px){input.jsx-799177478{font-size:12px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29CLEFBR2dDLEFBT1AsQUFVQyxBQUkrRCxBQVluRCxBQUlILEFBSUEsWUFqQ0gsQ0FVckIsRUFtQnlCLEFBSUEsVUFQekIsTUF6QmlDLDhCQUNoQixlQUNILEFBV0EsWUFWTSxBQVdBLEtBdEJMLGFBWUYsQUFXSSxXQVZqQixJQVdjLFlBQ0MsYUFDSyxrQkFDTixHQTFCRCxTQTJCQSxFQTFCRCxTQTJCWixDQTFCQSIsImZpbGUiOiJjb21wb25lbnRzL0NoYXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5wdXQ6ICcnXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHN1Ym1pdChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5idXR0b24gPT09IDApIHtcbiAgICAgIGNvbnN0IHsgaW5wdXQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7IGFkZE1lc3NhZ2UsIHBvc3RNZXNzYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBhZGRNZXNzYWdlKGlucHV0KTtcbiAgICAgIGF3YWl0IHBvc3RNZXNzYWdlKGlucHV0KTtcblxuICAgICAgY29uc3QgeyBtZXNzYWdlLCBpbnRlbnQgfSA9IHRoaXMucHJvcHMucmVzcG9uc2U7XG5cbiAgICAgIGFkZE1lc3NhZ2UobWVzc2FnZSwgaW50ZW50IHx8ICcjZG9udF91bmRlcnN0YW5kJyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbnB1dC1zZWN0aW9uJz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0NoYXQgd2l0aCBTcHJ1Y2VCb3QgaGVyZS4uLidcbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgb25LZXlEb3duPXtlID0+IHRoaXMuc3VibWl0KGUpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2UgPT4gdGhpcy5zdWJtaXQoZSl9PjwvYnV0dG9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlucHV0LXNlY3Rpb24ge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kIDogdXJsKCcuLi9zdGF0aWMvcmlnaHQtYXJyb3cuc3ZnJykgIzRCOURGNiBuby1yZXBlYXQgY2VudGVyIC8gNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxNS43JTtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhFQkJGNDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgICAgICAgICAgIGlucHV0IHsgZm9udC1zaXplOiAyMHB4OyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgICAgICAgICBpbnB1dCB7IGZvbnQtc2l6ZTogMTJweDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cblxuQ2hhdC5wcm9wVHlwZXMgPSB7XG4gIGFkZE1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlc3BvbnNlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcbiJdfQ== */\n/*@ sourceURL=components/Chat.js */'
      }));
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;


Chat.propTypes = {
  addMessage: _propTypes2.default.func.isRequired,
  response: _propTypes2.default.object
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkNoYXQiLCJzdGF0ZSIsImlucHV0IiwiZSIsImtleUNvZGUiLCJidXR0b24iLCJwcm9wcyIsImFkZE1lc3NhZ2UiLCJwb3N0TWVzc2FnZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImludGVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7Ozs7Ozs7O0lBRWMsQTtnQ0FDbkI7O2tCQUFjO3dDQUFBOzs0SEFFWjs7VUFBQSxBQUFLO2FBRk8sQUFFWixBQUFhLEFBQ0o7QUFESSxBQUNYO1dBRUg7Ozs7OzsyRyxBQUVZOzs7Ozs7O3NCQUNQLEVBQUEsQUFBRSxZQUFGLEFBQWMsTUFBTSxFQUFBLEFBQUUsVyxBQUFXOzs7QUFDM0I7O0Esd0JBQVUsS0FBSyxBLE1BQWYsQTt5QkFDNEIsSyxBQUFLLE9BQWpDLEEsb0JBQUEsQSxZLEFBQVkscUIsQUFBQSxBQUVwQjs7MkJBQUEsQUFBVzs7dUJBQ0wsWUFBQSxBLEFBQVk7OztrQ0FFVSxLQUFBLEFBQUssTUFBTSxBLFUsQUFBL0IsMEIsQUFBQSxTQUFTLEEseUJBQUEsQSxBQUVqQjs7MkJBQUEsQUFBVyxTQUFTLFVBQXBCLEFBQThCLEFBQzlCO3FCQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSWpCO21CQUFBOztVQUFBLEFBQ0MsUUFBVSxLQURYLEFBQ2dCLE1BRGhCLEFBQ0MsQUFDUjs7NkJBQ0UsY0FBQTsyQ0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7cUJBQ0UsQUFDYyxBQUNaO2VBRkYsQUFFUyxBQUNQO2tCQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxFQUFBLEFBQUUsT0FBN0IsQUFBSyxBQUFjLEFBQWlCO0FBSGhELEFBSUU7bUJBQVcsc0JBQUE7aUJBQUssT0FBQSxBQUFLLE9BQVYsQUFBSyxBQUFZO0FBSjlCO21CQUFBOztvQkFBQTtzQkFERixBQUNFLEFBTUE7QUFOQTtBQUNFLG9EQUtNLFNBQVMsb0JBQUE7aUJBQUssT0FBQSxBQUFLLE9BQVYsQUFBSyxBQUFZO0FBQWxDLHNCQUFBOztvQkFBQTtzQkFQRixBQU9FO0FBQUE7O2lCQVBGO2FBREYsQUFDRSxBQXdESDtBQXhERzs7Ozs7QSxBQTFCNEI7O2tCLEFBQWI7OztBQXFGckIsS0FBQSxBQUFLO2NBQ1Msb0JBQUEsQUFBVSxLQURQLEFBQ1ksQUFDM0I7WUFBVSxvQkFGWixBQUFpQixBQUVLO0FBRkwsQUFDZiIsImZpbGUiOiJDaGF0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90cmF2aXNyb2xsaW5zL0NvZGUtQ2hhbGxlbmdlcy9zcHJ1Y2Vib3QifQ==