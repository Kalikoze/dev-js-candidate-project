'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
    value: function submit(e) {
      if (e.keyCode === 13) {
        var input = this.state.input;

        this.props.addMessage(input);
        this.setState({ input: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var input = this.state.input;

      return _react2.default.createElement('section', { className: 'input-section', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }));
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJDaGF0Iiwic3RhdGUiLCJpbnB1dCIsImUiLCJrZXlDb2RlIiwicHJvcHMiLCJhZGRNZXNzYWdlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7Ozs7Ozs7SSxBQUVZO2dDQUNuQjs7a0JBQWM7d0NBQUE7OzRIQUVaOztVQUFBLEFBQUs7YUFGTyxBQUVaLEFBQWEsQUFDSjtBQURJLEFBQ1g7V0FFSDs7Ozs7MkJBRU0sQSxHQUFHLEFBQ1I7VUFBSSxFQUFBLEFBQUUsWUFBTixBQUFrQixJQUFJO1lBQUEsQUFDWixRQUFVLEtBREUsQUFDRyxNQURILEFBQ1osQUFFUjs7YUFBQSxBQUFLLE1BQUwsQUFBVyxXQUFYLEFBQXNCLEFBQ3RCO2FBQUEsQUFBSyxTQUFTLEVBQUMsT0FBZixBQUFjLEFBQVEsQUFDdkI7QUFDRjs7Ozs2QkFFUTttQkFBQTs7VUFBQSxBQUNDLFFBQVUsS0FEWCxBQUNnQixNQURoQixBQUNDLEFBQ1I7OzZCQUNFLGNBQUEsYUFBUyxXQUFULEFBQW1CO29CQUFuQjtzQkFBQSxBQUNFO0FBREY7T0FBQTtxQkFDRSxBQUNjLEFBQ1o7ZUFGRixBQUVTLEFBQ1A7a0JBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLEVBQUEsQUFBRSxPQUE3QixBQUFLLEFBQWMsQUFBaUI7QUFIaEQsQUFJRTttQkFBVyxzQkFBQTtpQkFBSyxPQUFBLEFBQUssT0FBVixBQUFLLEFBQVk7QUFKOUI7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQVFMO0FBUks7QUFDRTs7Ozs7QUF0QndCLEE7O2tCQUFiLEEiLCJmaWxlIjoiQ2hhdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdHJhdmlzcm9sbGlucy9Db2RlLUNoYWxsZW5nZXMvc3BydWNlYm90In0=