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

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

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
        var input, _props, addMessage, _postMessage, _props$response, message, intent;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(e.keyCode === 13)) {
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

                addMessage(message, intent);
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
        className: 'jsx-1773448173' + ' ' + 'input-section',
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
        className: 'jsx-1773448173',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1773448173',
        css: '.input-section.jsx-1773448173{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:15%;width:60%;}input.jsx-1773448173{border:none;border-radius:20px;font-family:\'Lato\',sans-serif;font-size:2vw;height:50px;padding-left:25px;width:100%;}input.jsx-1773448173:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29CLEFBR2dDLEFBT1AsQUFVQyxZQVRNLENBVXJCLGtCQVRpQyw4QkFDakIsY0FDRixZQUNNLE1BWEwsWUFZRixXQUNiLG1EQVphLFdBQ0QsVUFDWiIsImZpbGUiOiJjb21wb25lbnRzL0NoYXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBwb3N0TWVzc2FnZSB9IGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dDogJydcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgc3VibWl0KGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHsgYWRkTWVzc2FnZSwgcG9zdE1lc3NhZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGFkZE1lc3NhZ2UoaW5wdXQpO1xuICAgICAgYXdhaXQgcG9zdE1lc3NhZ2UoaW5wdXQpO1xuXG4gICAgICBjb25zdCB7IG1lc3NhZ2UsIGludGVudCB9ID0gdGhpcy5wcm9wcy5yZXNwb25zZTtcblxuICAgICAgYWRkTWVzc2FnZShtZXNzYWdlLCBpbnRlbnQpXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbnB1dDogJyd9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdpbnB1dC1zZWN0aW9uJz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcGxhY2Vob2xkZXI9J0NoYXQgd2l0aCBTcHJ1Y2VCb3QgaGVyZS4uLidcbiAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7aW5wdXQ6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgb25LZXlEb3duPXtlID0+IHRoaXMuc3VibWl0KGUpfVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlucHV0LXNlY3Rpb24ge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5DaGF0LnByb3BUeXBlcyA9IHtcbiAgYWRkTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7d2F0c29uUmVzcG9uc2V9KSA9PiAoeyByZXNwb25zZTogd2F0c29uUmVzcG9uc2UucmVzcG9uc2UgfSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3N0TWVzc2FnZTogYmluZEFjdGlvbkNyZWF0b3JzKHBvc3RNZXNzYWdlLCBkaXNwYXRjaClcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXQpO1xuIl19 */\n/*@ sourceURL=components/Chat.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZldGNoIiwiY29ubmVjdCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsInBvc3RNZXNzYWdlIiwiUHJvcFR5cGVzIiwiQ2hhdCIsInN0YXRlIiwiaW5wdXQiLCJlIiwia2V5Q29kZSIsInByb3BzIiwiYWRkTWVzc2FnZSIsInJlc3BvbnNlIiwibWVzc2FnZSIsImludGVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIndhdHNvblJlc3BvbnNlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFtQjs7QUFDNUIsQUFBTzs7Ozs7Ozs7O0ksQUFFRDtnQ0FDSjs7a0JBQWM7d0NBQUE7OzRIQUVaOztVQUFBLEFBQUs7YUFGTyxBQUVaLEFBQWEsQUFDSjtBQURJLEFBQ1g7V0FFSDs7Ozs7OzJHLEFBRVk7Ozs7Ozs7c0JBQ1AsRUFBQSxBQUFFLFlBQVksQTs7O0FBQ1I7O0Esd0JBQVUsSyxBQUFLLE1BQWYsQTt5QkFDNEIsS0FBSyxBLE8sQUFBakMsb0IsQUFBQSxZQUFZLEEsc0IsQUFBQSxBQUVwQjs7MkJBQUEsQUFBVzs7dUJBQ0wsYUFBQSxBQUFZLEE7OztrQ0FFVSxLQUFBLEFBQUssTUFBTSxBLFVBQS9CLEEsMEJBQUEsQSxTQUFTLEEseUIsQUFBQSxBQUVqQjs7MkJBQUEsQUFBVyxTQUFYLEFBQW9CLEFBQ3BCO3FCQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSWpCO21CQUFBOztVQUFBLEFBQ0MsUUFBVSxLQURYLEFBQ2dCLE1BRGhCLEFBQ0MsQUFDUjs7NkJBQ0UsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7cUJBQ0UsQUFDYyxBQUNaO2VBRkYsQUFFUyxBQUNQO2tCQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxFQUFBLEFBQUUsT0FBN0IsQUFBSyxBQUFjLEFBQWlCO0FBSGhELEFBSUU7bUJBQVcsc0JBQUE7aUJBQUssT0FBQSxBQUFLLE9BQVYsQUFBSyxBQUFZO0FBSjlCO21CQUFBOztvQkFBQTtzQkFERixBQUNFO0FBQUE7QUFDRTtpQkFGSjthQURGLEFBQ0UsQUErQkg7QUEvQkc7Ozs7O0FBMUJhLEE7O0FBNERuQixLQUFBLEFBQUs7Y0FDUyxvQkFBQSxBQUFVLEtBRHhCLEFBQWlCLEFBQ1k7QUFEWixBQUNmOztBQUdGLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFBO01BQUEsQUFBRSx1QkFBRixBQUFFO1NBQXFCLEVBQUUsVUFBVSxlQUFuQyxBQUF1QixBQUEyQjtBQUExRTs7QUFFQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBWSxBQUNyQzs7aUJBQ2UsQUFBbUIsbURBRGxDLEFBQU8sQUFDUSxBQUFnQyxBQUVoRDtBQUhRLEFBQ0w7QUFGSixBQU1BOztrQkFBZSx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUF4QyxBQUFlLEFBQTZDIiwiZmlsZSI6IkNoYXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9