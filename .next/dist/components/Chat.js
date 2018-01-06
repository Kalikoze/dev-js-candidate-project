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
          lineNumber: 24
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
          lineNumber: 25
        }
      }));
    }
  }]);

  return Chat;
}(_react.Component);

exports.default = Chat;


Chat.propTypes = {
  addMessage: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hhdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkNoYXQiLCJzdGF0ZSIsImlucHV0IiwiZSIsImtleUNvZGUiLCJwcm9wcyIsImFkZE1lc3NhZ2UiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwic3VibWl0IiwicHJvcFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7Ozs7Ozs7O0lBRWMsQTtnQ0FDbkI7O2tCQUFjO3dDQUFBOzs0SEFFWjs7VUFBQSxBQUFLO2FBRk8sQUFFWixBQUFhLEFBQ0o7QUFESSxBQUNYO1dBRUg7Ozs7OzJCLEFBRU0sR0FBRyxBQUNSO1VBQUksRUFBQSxBQUFFLFlBQU4sQUFBa0IsSUFBSTtZQUFBLEFBQ1osUUFBVSxLQURFLEFBQ0csTUFESCxBQUNaLEFBRVI7O2FBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixBQUN0QjthQUFBLEFBQUssU0FBUyxFQUFDLE9BQWYsQUFBYyxBQUFRLEFBQ3ZCO0FBQ0Y7Ozs7NkJBRVE7bUJBQUE7O1VBQUEsQUFDQyxRQUFVLEtBRFgsQUFDZ0IsTUFEaEIsQUFDQyxBQUNSOzs2QkFDRSxjQUFBLGFBQVMsV0FBVCxBQUFtQjtvQkFBbkI7c0JBQUEsQUFDRTtBQURGO09BQUE7cUJBQ0UsQUFDYyxBQUNaO2VBRkYsQUFFUyxBQUNQO2tCQUFVLHFCQUFBO2lCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxFQUFBLEFBQUUsT0FBN0IsQUFBSyxBQUFjLEFBQWlCO0FBSGhELEFBSUU7bUJBQVcsc0JBQUE7aUJBQUssT0FBQSxBQUFLLE9BQVYsQUFBSyxBQUFZO0FBSjlCOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFRTDtBQVJLO0FBQ0U7Ozs7O0FBdEJ3QixBOztrQkFBYixBOzs7QUFnQ3JCLEtBQUEsQUFBSztjQUNTLG9CQURkLEFBQWlCLEFBQ087QUFEUCxBQUNmIiwiZmlsZSI6IkNoYXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyYXZpc3JvbGxpbnMvQ29kZS1DaGFsbGVuZ2VzL3NwcnVjZWJvdCJ9